({
    createExpense: function(component, expense) {
        // サーバー側の処理
        // Apexのメソッドからアクションオブジェクトを作成
        let action = component.get("c.saveExpense");
        action.setParams({
            // パラメータ名はApexメソッドの仮引数名と一致していること
            "expense": expense
        });
        // サーバーからレスポンスが帰ってきたときの処理
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                let expenses = component.get("v.expenses");
                // 作成ボタンを押したら表示している経費一覧に付け加える必要がある
                // Apexメソッドの戻り値を配列に加える（今回は型が一致するので変換の必要なし）
                expenses.push(response.getReturnValue());
                component.set("v.expenses", expenses);
            }
        });
        // リモートアクションとコールバック処理をキューに加える
        $A.enqueueAction(action);



        //        let theExpenses = component.get("v.expenses");
        // Copy the expense to a new object
        // THIS IS A DISGUSTING, THEMPORARY HACK
        // 上記処理を書き加える前の一時的なコード
//        let newExpenses = JSON.parse(JSON.stringify(expense));
//        console.log("Expenses before 'create': " + JSON.stringify(theExpenses));
//        theExpenses.push(newExpenses);
        // ここではv.expensesの値を空更新することで、v.expensesを使用したすべての場所に更新をカスケードする。
//        component.set("v.expenses", theExpenses);
//        console.log("Expenses after 'create': " + JSON.stringify(theExpenses));
    },
})
