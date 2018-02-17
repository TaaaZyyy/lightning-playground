({
  recordUpdated: function(component, event, helper) {
    let eventParams = event.getParams();
    if(eventParams.changeType === "CHANGED") {
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
      console.log("Record is loaded successfully.");
    } else if (eventParams.changedtype === "REMOVED") {
      // サーバー上でレコードのアクセスが不能
      // 例: アクセス権の変更、レコードの削除
      // targetErrorにエラーは設定されない
      let resultsToast = $A.get("e.force:showToast");
      resultsToast.setParams({
        "title": "Deleted",
        "message": "The record was deleted."
      });
      resultsToast.fire();
    } else if (eventParams.changedType === "ERROR") {
      console.log("Error: " + component.get("v.error"));
    }
  },
})
