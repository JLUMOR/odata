/*global QUnit*/

sap.ui.define([
	"sapips/training/jsonbinding1/controller/JSONBinding.controller"
], function (Controller) {
	"use strict";

	QUnit.module("JSONBinding Controller");

	QUnit.test("I should test the JSONBinding controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
