sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog",
  ],
  function (UIComponent, JSONModel, HelloDialog) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.p2p.Component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data models
        var oData = {
          recipient: {
            name: "SAPUI5",
          },
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);

        // set dialog
        this._helloDialog = new HelloDialog(this.getRootControl());
      },

      exit: function () {
        this._helloDialog.destroy();
        delete this._helloDialog;
      },

      openHelloDialog: function() {
        this._helloDialog.open();
      }
    });
  }
);
