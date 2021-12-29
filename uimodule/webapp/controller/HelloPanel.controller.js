sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.p2p.controller.HelloPanel", {
      onShowHello: function () {
        // read msg from i18n model
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        const sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        //prop in i18n file
        const sMsg = oBundle.getText("helloMsg", [sRecipient]);

        const oButton = this.byId("btn-hello");
        oButton.setText("clicado");

        MessageToast.show(sMsg);
      },

      onOpenDialog: function () {
        // Calling in Component.js
        this.getOwnerComponent().openHelloDialog();
      }
    });
  }
);
