({
    doInit: function(component, event, helper) {
        let action = component.get('c.getItems');
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            } else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },

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