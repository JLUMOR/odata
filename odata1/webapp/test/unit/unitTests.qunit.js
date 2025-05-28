/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapips/training/odata1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
