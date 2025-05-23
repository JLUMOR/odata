sap.ui.define([
    "sap/ui/model/type/Currency",
    "sap/m/library"
], function (Currency, mobileLibrary) {
    "use strict";

    return {
        formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {
            if (fUnitPrice == null || iStockLevel == null || !sCurrCode) {
                return "";
            }
            var oCurrency = new Currency();
            return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
        },

        formatMail: function (sEid) {
            if (!sEid) {
                return "";
            }
            // i18n model must be accessible through "this.getView()" context in controller or view
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            return mobileLibrary.URLHelper.normalizeEmail(
                sEid + oBundle.getText("domain"),
                oBundle.getText("mailSubject", [sEid]),
                oBundle.getText("mailBody")
            );
        }
    };
});
