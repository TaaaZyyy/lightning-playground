({
    clickCreateItem: function(component, event, helper) {
        let validFormItem = component.find('campingitemform').reduce(function(validSoFar,inputElement) {
            inputElement.showHelpMessageIfInvalid();
            return validSoFar && inputElement.get('v.validity').valid;
        }, true);
        if(validFormItem) {
            let newItem = component.get('v.newItem');
            console.log("Create expense: " + JSON.stringify(newItem));
            helper.createItem(component, newItem);
        }
    },
})
