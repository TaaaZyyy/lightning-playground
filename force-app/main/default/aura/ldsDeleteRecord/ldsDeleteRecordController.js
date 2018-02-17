({
  handleDeleteRecord: function(component, event, helper) {
    component.find("recordHandler").delteRecord($A.getCallback(function(deleteResult) {
      // DRAFTは回線の接続待ち。（組織でオフラインドラフトを有効しているまたは非同期保存の権限を有効にしている場合）
      if (deleteResult.state === "SUCCESS" || deleteResult.state === "DRAFT") {
        console.log("Record is deleted.");
        let resultsToast = $A.get("e.force:showToast");
        resultsToast.setParams({
          "title": "Deleted",
          "message": "The record was deleted."
        });
        resultsToast.fire();
      } else if (deleteResult.state === "INCOMPLETE") {
        console.log("User is offline, device dosen't support drafts.");
      } else if (deleteResult.state === "ERROR") {
        console.log('Problem deleting record, error: ' +
            JSON.stringify(deleteResult.error));
      } else {
        console.log('Unknown problem, state: ' + deleteResult.state +
            ', error: ' + JSON.stringify(deleteResult.error));
      }
    }));
  },
})