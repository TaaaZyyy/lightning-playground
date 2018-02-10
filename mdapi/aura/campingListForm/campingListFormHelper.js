({
    createItem : function(component, newItem) {
        let createEvent = component.getEvent("addItem");
        createEvent.setParams({'item': newItem});
        createEvent.fire();

        // 入力フォームを初期化
        let defaultItem = {
            'sobjectType': 'Camping_Item__c',
            'Price__c': 0,
            'Quantity__c': 0
        };
        component.set('v.newItem', defaultItem);
    },
})
