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

    handleAddItem: function(component, event, helper) {
        let item = event.getParam("item");
        
        let action = component.get('c.saveItem');
        action.setParams({'item': item});

        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === 'SUCCESS') {
                console.debug('SUCCESS');
                let items = component.get('v.items')
                items.push(response.getReturnValue());
                component.set('v.items', items);

            } else {
                console.debug('FAIL');
            }
        });

        $A.enqueueAction(action);
    }
})