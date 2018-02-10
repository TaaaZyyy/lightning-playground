({
    createItem: function(component, newItem) {
        let action = component.get('c.saveItem');
        action.setParams({'item': newItem});

        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === 'SUCCESS') {
                let CampingItems = component.get('v.items').push(response.getReturnValue);
                component.set('v.items', CampingItems);
            }

            // 入力フォームを初期化
            let defaultItem = {
                'sobjectType': 'Camping_Item__c',
                'Price__c': 0,
                'Quantity__c': 0
            };
            component.set('v.newItem', defaultItem);
        });

        $A.enqueueAction(action);
    },
})
