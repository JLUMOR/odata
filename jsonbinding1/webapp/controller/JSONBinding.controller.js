sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/type/Currency",
    "sap/m/library", 
    "sapips/training/jsonbinding1/model/formatter"
], function (Controller, JSONModel, formatter) {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding1.controller.JSONBinding", {
        formatter: formatter,

        onInit: function () {
            var oProductsModel = new JSONModel(jQuery.sap.getModulePath("sapips.training.jsonbinding1.model", "/Products.json"));
            this.getView().setModel(oProductsModel, "ProductsModel");
          
            var oData = {
                Eid: "john.angelo.lumor",
                Enabled: true,
                Address: {
                    Street: "Solitaire Street",
                    City: "Cavite",
                    Zip: "4107",
                    Country: "PH"
                },
                SalesAmount: 2000,
                CurrencyCode: "Php"
            };
          
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            this.getView().byId("panel2").bindElement({
                path: "/Products/0",
                model: "ProductsModel"
              });
        },

        onSelectProduct: function (oEvent) {
            var oSelectedProduct = oEvent.getSource().getBindingContext("ProductsModel").getObject();
            this.getView().getModel().setData(oSelectedProduct);
        }
    });
});
