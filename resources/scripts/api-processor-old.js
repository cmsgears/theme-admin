var mainApp		= new cmt.api.Application();

jQuery(document).ready( function() {

	var appControllers				= [];

	appControllers[ 'gallery' ]		= 'GalleryController';
	appControllers[ 'permission' ]	= 'PermissionController';

	jQuery( ".cmt-form, .cmt-request" ).cmtRequestProcessor({
		app: mainApp,
		controllers: appControllers
	});
});

// DefaultController ----------------------------------------

cmt.api.controllers.DefaultController.prototype.avatarActionPost = function( success, parentElement, message, response ) {

	parentElement.parent().hide();
};

// GalleryController ----------------------------------------

GalleryController	= function() {};

GalleryController.inherits( cmt.api.controllers.BaseController );

GalleryController.prototype.updateItemActionPost = function( success, parentElement, message, response ) {

	if( success ) {

		location.reload( true );
	}
};

// PermissionController -------------------------------------

PermissionController	= function() {};

PermissionController.inherits( cmt.api.controllers.BaseController );

PermissionController.prototype.matrixActionPost = function( success, parentElement, message, response ) {

	if( success ) {

		location.reload( true );
	}
};