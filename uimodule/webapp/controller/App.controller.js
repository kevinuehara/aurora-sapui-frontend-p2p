sap.ui.define(["./BaseController"], function (Controller) {
  "use strict";

  return Controller.extend("sap.ui.demo.p2p.controller.App", {
    onOpenDialog: function () {
      this.getOwnerComponent().openHelloDialog();
    },
  });
});
