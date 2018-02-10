({
    // Load expenses from Salesforce
    doInit: function(component, event, helper) {
        // Create the action
        let action = component.get("c.getExpenses");
        
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state == "SUCCESS") {
                component.set("v.expenses", response.getReturnValue());
            } else {
                console.log("Failed with state: " + state);
            }
        });

        //send action off to be excuted
        $A.enqueueAction(action);
    },

    handleUpdateExpense: function(component, event, helper) {
        let updateExpense = event.getParam("expense");
        helper.updateExpense(component, updateExpense);
    },

    handleCreateExpense: function(component, event, helper) {
        let createExpense = event.getParam("expense");
        helper.createExpense(component, createExpense);
    }
})
