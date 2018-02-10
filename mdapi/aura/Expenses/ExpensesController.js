({
    clickCreate: function(component, event, helper) {
        // 配列.reduce(コールバック関数, 初期値)
        // 初期値と最初の配列の要素をコールバック関数にかける。その戻り値と次の配列の要素をコールバック関数にかける。繰り返す。
        // validSoFarは初期値または前回の戻り値。inputElementは配列の要素。
        // よって、validExpenseはすべてのlightning:inputに有効な値が入っていたらtrueを、一つでも無効な値が入っていたらfalseになる。
        // また、ここでcomponent.get("v.newExpense")を使わないわけは、messageWhenRangeUnderflow要素でカスタムのエラーメッセージを表示させるため。
        let validExpense = component.find('expenseform').reduce(function(validSoFar, inputElement) {
            // 無効な値のエラーメッセージを入力項目の下に表示する
            // 入力メッセージはデフォルトもしくは属性でカスタマイズできる。↓のmessageWhen~の属性。
            // https://developer.salesforce.com/docs/atlas.ja-jp.lightning.meta/lightning/aura_compref_lightning_input.htm
            inputElement.showHelpMessageIfInvalid();
            // inputElement.get('v.validity').valid で値が有効ならtrue無効ならfalseを表す
            return validSoFar && inputElement.get('v.validity').valid;
        }, true);
        if (validExpense) {
            // 無効な入力値がなかった場合
            let newExpense = component.get("v.newExpense");
            console.log("Create expense: " + JSON.stringify(newExpense));
            helper.createExpense(component, newExpense);
        }
    },
})
