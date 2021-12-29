sap.ui.define(
  ["sap/ui/base/ManagedObject", "sap/ui/core/Fragment"],
  function (ManagedObject, Fragment) {
    "use strict";

    return ManagedObject.extend("sap.ui.p2p.controller.HelloDialog", {
      constructor: function (oView) {
        this._oView = oView;
      },

      exit: function () {
        delete this._oView;
      },

      open: function () {
        const oView = this._oView;
        // creating dialog lazy
        if (!oView.byId("helloDialog")) {
          // load asyncronous XML fragment
          const oFragmentController = {
            onCloseDialog: function () {
              oView.byId("helloDialog").close();
            },
          };

          //load asyncronous XML Fragment
          Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.p2p.view.HelloDialog",
            controller: oFragmentController,
          }).then(function (oDialog) {
            // connect dialog to the root view of this component (models, lifecycle)
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          oView.byId("helloDialog").open();
        }
      },
    });
  }
);
