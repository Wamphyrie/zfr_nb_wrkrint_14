sap.ui.define([
		"phoenix/zfr_nb_wrkrint_14/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("phoenix.zfr_nb_wrkrint_14.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);