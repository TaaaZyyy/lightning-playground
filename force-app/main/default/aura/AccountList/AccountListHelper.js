({
    // 取引先をApexコントローラから取得する
    getAccountList: function(component) {
        var action = component.get('c.getAccounts');

        // コールバック
        action.setCallback(this, function(actionResult) {
            component.set('v.accounts', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})