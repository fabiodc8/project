sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("XSAprova.ui.controller.View1", {
		onInit: function () {
 	var oModel = new sap.ui.model.odata.v2.ODataModel("/node_dest/purchaseOrder.xsodata",false );
 	oModel.read("/POHeader", {
   success: function(oRetrievedResult) { /* do something */ },
   error: function(oError) { /* do something */ }
 });

		}
	});
});