// == Application =========================

jQuery( document ).ready( function() {

	var app	= cmt.api.root.registerApplication( 'site', 'cmt.api.Application', { basePath: ajaxUrl } );

	app.mapController( 'site', 'cmg.controllers.SiteController' );

	cmt.api.utils.request.register( app, jQuery( '[cmt-app=site]' ) );
});

// == Controller Namespace ================

var cmg = cmg || {};

cmg.controllers = cmg.controllers || {};

// == Site Controller =====================

cmg.controllers.SiteController = function() {};

cmg.controllers.SiteController.inherits( cmt.api.controllers.RequestController );

cmg.controllers.SiteController.prototype.loginActionSuccess = function( requestElement, response ) {

	window.location = response.data;
};

// == Direct Calls ========================

// == Additional Methods ==================
