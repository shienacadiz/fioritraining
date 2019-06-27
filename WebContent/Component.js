sap.ui.define([
	'sap/ui/core/UIComponent'
	], function(UIComponent) {
	"use strict";

	return UIComponent.extend("Component", {
		metadata : {
		    manifest: "json",
		    config: {
		    	"fullWidth": "true"
		    }
		},
		init: function() {
			UIComponent.prototype.init.apply(this, arguments)
		}
	});
});