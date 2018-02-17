({
    // 取引先をApexコントローラから取得する
    getAccountList: function(component) {
        let action = component.get('c.getAccounts');

        // コールバック
        let self = this;
        action.setCallback(this, function(actionResult) {
            component.set('v.accounts', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})