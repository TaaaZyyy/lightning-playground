({
  handleSaveRecord: function(component, event, helper) {
    component.find("editRecord").saveRecord($A.getCallback(function(saveResult) {
      if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
        component.set("v.recordSaveError", "");
        console.log("Save completed successfully.");
      } else if (saveResult.state === "INCOMPLETE") {
        component.set("v.recordSaveError", "");
        console.log("User is offline, device doesn't support drafts.");
      } else if (saveResult.state === "ERROR") {
        let errMsg = "";
        for (let i = 0; i < saveResult.error.length; i++) {
          errMsg += saveResult.error[i].message + "\n";
        }
        component.set("v.recordSaveError", errMsg);
        console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
      } else {
        component.set("v.recordSaveError", "");
        console.log('Unknown promblem, state: ' + saveResult.state +
            ', error: ' + JSON.stringify(saveResult.error));
      }
    }));
  },

  handleRecordUpdated: function(component, event, helper) {
    let eventParams = event.getParams();
    if (eventParams.changeType === "CHANGED") {
    } else if (eventParams.changeType === "LOADED") {
    } else if (eventParams.changeType === "REMOVED") {
    } else if (eventParams.changeType === "ERROR") {
      console.log("Error: " + component.get("v.error"));
      // TODO: ここの v.error って何？
    }
  },
})
