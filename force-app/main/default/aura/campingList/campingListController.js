({
    clickCreateItem : function(component, event, helper) {
        let validFormItem = component.find('campingitemform').reduce(function(validSoFar,inputElement) {
            inputElement.showHelpMessageIfInvalid();
            return validSoFar && inputElement.get('v.validity').valid;
        }, true);
        if(validFormItem) {
            let newItem = component.get('v.newItem');

            let theCampingItems = component.get('v.items');
            let newCampingItems = JSON.parse(JSON.stringify(newItem));
            theCampingItems.push(newCampingItems);
            component.set('v.items', theCampingItems);

            let defaultItem = {
                'sobjectType': 'Camping_Item__c',
                'Price__c': 0,
                'Quantity__c': 0
            };
            component.set('v.newItem', defaultItem);
        }
    },
})
