// == Application =========================

jQuery( document ).ready( function() {

	var app	= cmt.api.root.registerApplication( 'main', 'cmt.api.Application', { basePath: ajaxUrl } );

	app.mapController( 'crud', 'cmg.controllers.CrudController' );
	app.mapController( 'gallery', 'cmg.controllers.GalleryController' );

	cmt.api.utils.request.register( app, jQuery( '[cmt-app=main]' ) );
});

// == Controller Namespace ================

// == CRUD Controller =====================

cmg.controllers.CrudController	= function() {};

cmg.controllers.CrudController.inherits( cmt.api.controllers.RequestController );

cmg.controllers.CrudController.prototype.bulkActionSuccess = function( requestElement, response ) {

	cmt.utils.data.refreshGrid();
};

cmg.controllers.CrudController.prototype.bulkActionFailure = function( requestElement, response ) {

	alert( 'Failed to process your request.' );
};

cmg.controllers.CrudController.prototype.genericActionSuccess = function( requestElement, response ) {

	cmt.utils.data.refreshGrid();
};

cmg.controllers.CrudController.prototype.genericActionFailure = function( requestElement, response ) {

	alert( 'Failed to process your request.' );
};

cmg.controllers.CrudController.prototype.deleteActionSuccess = function( requestElement, response ) {

	cmt.utils.data.refreshGrid();
};

cmg.controllers.CrudController.prototype.deleteActionFailure = function( requestElement, response ) {

	alert( 'Failed to process your request.' );
};

// == Gallery Controller ==================

cmg.controllers.GalleryController	= function() {};

cmg.controllers.GalleryController.inherits( cmt.api.controllers.RequestController );

cmg.controllers.GalleryController.prototype.updateItemActionSuccess = function( requestElement, response ) {

	location.reload( true );
};

// == Direct Calls ========================

// == Additional Methods ==================
