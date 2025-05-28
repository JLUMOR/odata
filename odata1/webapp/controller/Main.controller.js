sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
], function (Controller, Filter, FilterOperator, Sorter) {
    "use strict";

    return Controller.extend("sapips.training.odata1.controller.Main", {
        onInit: function () {
            var oTable = this.byId("table0");

            // Bind items with filter (Discontinued = false) and sort by ProductName
            oTable.bindItems({
                path: "/Products",
                filters: [
                    new Filter("Discontinued", FilterOperator.EQ, false)
                ],
                sorters: [
                    new Sorter("ProductName", false) // ascending
                ],
                template: this.byId("item0").clone()
            });
        }
    });
});
