sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.acn.training.project1.controller.View1", {
        onInit() {
        },

        clearInputs: function () {
            var oView = this.getView();
            var oSimpleForm = oView.byId("Form1");
        
            if (oSimpleForm) {
                var aContent = oSimpleForm.getContent();
                if (aContent && aContent.length > 0) {
                    aContent.forEach(function (oControl) {
                        if (oControl instanceof sap.m.Input || 
                            oControl instanceof sap.m.ComboBox) {
                            oControl.setValue("");
                        }
                    });
                }
            }
        },

        onClearPress: function () {
            console.log("Clear pressed")
            this.clearInputs();
        }
    });
});