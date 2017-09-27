sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("AddValue.controller.View1", {
  onInit : function(){
  var data = { 
  	"n":"99.99",
  	 "c":"CAD"
  };
  var oModel = new sap.ui.model.json.JSONModel(data);
  this.getView().setModel(oModel);
       
  },
	});
});