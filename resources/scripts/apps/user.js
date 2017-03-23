var userApp	= null;

jQuery( document ).ready( function() {

	// App
	userApp	= new cmt.api.Application( { basePath: ajaxUrl } );

	// Controllers
	var controllers			= [];
	controllers[ 'user' ]	= 'UserController';

	// Init App
	jQuery( '[cmt-app=user]' ).cmtRequestProcessor({
		app: userApp,
		controllers: controllers
	});
});

// == Form App Controllers ===================================

// == User Controller =====================

UserController	= function() {};

UserController.inherits( cmt.api.controllers.BaseController );

UserController.prototype.avatarActionPost = function( success, requestElement, response ) {

	if( success ) {

		requestElement.closest( '.post-action' ).hide();

		jQuery( ".wrap-popout-actions .wrap-user img" ).attr( 'src', response.data.fileUrl );
	}
};

UserController.prototype.profileActionPost = function( success, requestElement, response ) {

	if( success ) {

		var source 		= document.getElementById( 'userProfileTemplate' ).innerHTML;
		var template 	= Handlebars.compile( source );
		var output 		= template( response.data );
		var parent		= requestElement.closest( '.box-form' );

		parent.find( '.wrap-info' ).html( output );

		parent.find( '.btn-edit' ).click();
	}
};

UserController.prototype.accountActionPost = function( success, requestElement, response ) {

	if( success ) {

		var source 		= document.getElementById( 'userAccountTemplate' ).innerHTML;
		var template 	= Handlebars.compile( source );
		var output 		= template( response.data );
		var parent		= requestElement.closest( '.box-form' );

		parent.find( '.wrap-info' ).html( output );

		parent.find( '.btn-edit' ).click();
	}
};

UserController.prototype.settingsActionPost = function( success, requestElement, response ) {

	if( success ) {

		var source 		= document.getElementById( 'userSettingsTemplate' ).innerHTML;
		var template 	= Handlebars.compile( source );
		var data		= { settings: response.data };
		var output 		= template( data );
		var parent		= requestElement.closest( '.box-form' );

		parent.find( '.wrap-info' ).html( output );

		parent.find( '.btn-edit' ).click();
	}
};

UserController.prototype.addressActionPost = function( success, requestElement, response ) {

	if( success ) {

		var source 		= document.getElementById( 'userAddressTemplate' ).innerHTML;
		var template 	= Handlebars.compile( source );
		var data		= { address: response.data };
		var output 		= template( data );
		var parent		= requestElement.closest( '.box-form' );

		parent.find( '.wrap-info' ).html( output );

		parent.find( '.btn-edit' ).click();
	}
};
