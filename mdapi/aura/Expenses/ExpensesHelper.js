({
    createExpense: function(component, expense) {
        // 同じJSファイル内のメソッドを使用するときはthisをつける
        this.saveExpense(component, expense, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                let expenses = component.get("v.expenses");
                // 作成ボタンを押したら表示している経費一覧に付け加える必要がある
                // Apexメソッドの戻り値を配列に加える（今回は型が一致するので変換の必要なし）
                expenses.push(response.getReturnValue());
                component.set("v.expenses", expenses);
            }
        });
    },
    
    updateExpense: function(component, expense) {
        this.saveExpense(component, expense);
    },

    // callbackは省略可能な引数
    saveExpense: function(component, expense, callback) {
        // サーバー側の処理
        // Apexのメソッドからアクションオブジェクトを作成
        let action = component.get("c.saveExpense");
        // パラメータ名はApexメソッドの仮引数名と一致していること
        action.setParams({'expense': expense});
        if (callback) {
            // サーバーからレスポンスが帰ってきたときの処理
            action.setCallback(this, callback);
        }
        // リモートアクションとコールバック処理をキューに加える
        $A.enqueueAction(action);
    }
})
