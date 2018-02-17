({
    handleClick: function(component, event, helper) {
        let btnClicked = event.getSource();
        let btnMessage = btnClicked.get("v.label");
        component.set("v.message", btnMessage);
    }
})
