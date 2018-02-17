({
  doEcho: function(component, event, helper) {
    console.log("simpleRecord: ");
    console.log(component.get("v.accountRecord"));
    console.log("record: ");
    console.log(component.get("v.record"));
  },
})