({
    handleClick: function(component, event, helper) {
        var newMsg = event.getSource().get("v.label");
        console.log("handleClick: msg: " + newMsg);
        console.log(JSON.stringify(newMsg));
        component.set("v.message", newMsg);
    },
})