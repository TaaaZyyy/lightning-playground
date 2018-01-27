({
    doInit: function(component, event, helper) {
        helper.getAccountList(component);
    },
    deleteAccount: function(component, event, helper) {
        // フォームが送信されることを防ぐ
        event.preventDefault();

        // フォームから値を取得する
        var accountName = event.target.getElementsByClassName('account-name')[0].value;
        confirm('取引先 ' + accountName + ' を削除してもよろしいですか？');
    },
})