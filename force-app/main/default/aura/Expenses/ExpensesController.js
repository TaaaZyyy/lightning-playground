({
    clickCreate : function(component, event, helper) {
        var validExpense = component.find('expenseform').reduce(function (validSoFar, inputCmp) {
            // findは指定のIDのformの情報にアクセスする
            // validSoFarはformの情報に一つでも無効な値があるとfalseを返し、そうでない場合trueを返す
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            // inputCmp.showHelpMessageIfInvalid() は、無効な項目のエラーメッセージを表示します
            return validSoFar && inputCmp.get('v.validity').valid;
            // inputCmp.get('v.validity').valid は、配列内の現在の入力項目の有効性を返します
            // <lightning:input> では、デフォルトのエラーメッセージが提供されます
            // これは、経費フォームの例のように messageWhenRangeUnderflow などの属性を使用してカスタマイズできます。
        }, true);
        // If we pass error checking, do some real work
        if (validExpense) {
            //Create the new expense
            var newExpense = component.get("v.newExpense");
            console.log("Create expense: " + JSON.stringify(newExpense));
            helper.createExpense(component, newExpense);
        }
    }
})
