({
  doInit: function(component, event, helper) {
    // Prepare a new record from template
    // getNewRecord() に渡されるコールバックは、コールバックが呼び出されるときの
    // アクセスコンテキストが適切なものになるように、$A.getCallback() でラップする
    // 必要があります。コールバックが $A.getCallback() でラップされないまま渡されると、
    // コンポーネントの非公開属性にアクセスしようとしたときにアクセスチェックに失敗します。
    component.find("contactRecordCreator").getNewRecord(
      "Contact", // sObject type (entityAPIName)
      null, // recordTypeId
      false, // skip cache?
      $A.getCallback(function() {
        let rec = component.get("v.newContact");
        let error = component.get("v.newContactError");
        if (error || (rec === null)) {
          console.log("Error initializing record template: " + error);
        } else {
          console.log("Record template initialized: " + rec.sobjectType);
        }
      })
    );
  },

  handleSaveContact: function(component, event, helper) {
    if (helper.validateContactForm(component)) {
      component.set("v.simpleNewContact.AccountId", component.get("v.recordId"));
      component.find("contactRecordCreator").saveRecord(function(saveResult) {
        if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
          // record is saved successfully
          let resultsToast = $A.get("e.force:showToast");
          resultsToast.setParams({
            "title": "Saved",
            "message": "The record was saved."
          });
          // トーストメッセージ（画面上部にぴろんと出るメッセージ）を表示する
          resultsToast.fire();
        } else if (saveResult.state === "INCOMPLETE") {
          // handle the incompolete state
          console.log("User is offline, device doesn't support drafts.");
        } else if (saveResult.state === "ERROR") {
          // handle the error state
          console.log('Problem saving contact, error: ' + JSON.stringify(saveResult.error));
        } else {
          console.log('Unknown problem, state: ' + saveResult.state +
              ', error: ' + JSON.stringify(saveResult.error));
        }
      });
    }
  },
})
