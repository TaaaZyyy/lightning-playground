({
  saveContact: function(component, event, helper) {
    let recordLoader = component.find("recordLoader");
    recordLoader.saveRecord($A.getCallback(function(saveResult) {
      if (saveResult.state === "ERROR") {
        let errMsg = "";
        // saveResult.error is an array of errors,
        // so collect all errors into one message
        for (let i = 0; i < saveResult.error.length; i++) {
          errMsg += saveResult.error[i].message + "\n";
        }
        component.set("v.recordSaveError", errMsg);
      } else {
        component.set("v.recordSaveError", "");
      }
    }));
  },

  // Control the component behavior here when record is changed (via any component)
  handleRecordUpdated: function(component, event, helper) {
    let eventParams = event.getParams();
    if (eventParams.changeType === "CHANGED") {
      // get the fields that are changed for this record
      let changedFields = eventParams.changedFields;
      console.log("Fields that are changed: " + JSON.stringify(changedFields));
      // record is changed so refresh the component (or other component logic)
      let resultsToast = $A.get("e.force:showToast");
      resultsToast.setParams({
        "title": "Saved",
        "message": "The record was updated."
      });
      resultsToast.fire();
    } else if (eventParams.changeType === "LOADED") {
      // record is loaded in the cache
    } else if (eventParams.changeType === "REMOVED") {
      // record is deleted and removed from the cache
    } else if (eventParams.changeType === "ERROR") {
      console.log("Error: " + component.get("v.error"));
      // TODO: ここの v.error って何？
    }
  },
})