({
  handleSaveRecord: function(component, event, helper) {
    // TODO: ここで $A.getCallback を使用する意味は？
    component.find("recordEditor").saveRecord($A.getCallback(function(saveResult) {
      if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
        console.log("Save completed successfully.");
      } else if (saveResult.state === "INCOMPLETE") {
        console.log("User is offline, device doesn't support drafts.");
      } else if (saveResult.state === "ERROR") {
        console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
      } else {
        console.log('Unknown promblem, state: ' + saveResult.state +
            ', error: ' + JSON.stringify(saveResult.error));
      }
    }));
  },
})
