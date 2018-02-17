({
  validateContactForm: function(component) {
    let validContact = true;

    // Show error message if required fields are blank
    let allValid = component.find('contactField').reduce(function(validFields, inputCmp) {
      inputCmp.showHelpMessageIfInvalid();
      return validFields && inputCmp.get('v.validity').valid;
    }, true);

    if (allValid) {
      // Verify we have an account to attach it to
      let account = component.get("v.newContact");
      if ($A.util.isEmpty(account)) {
        validContact = false;
        console.log("Quick action context doesn't have a valid account.");
      }
      return(validContact);
    }
  },
})
