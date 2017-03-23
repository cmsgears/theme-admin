var siteApp	= null;

jQuery( document ).ready( function() {

	// App
	siteApp	= new cmt.api.Application( { basePath: ajaxUrl } );

	// Controllers
	var siteControllers				= [];
	siteControllers[ 'site' ]		= 'SiteController';
	siteControllers[ 'settings' ]	= 'SettingsController';

	// Init App
	jQuery( '[cmt-app=site]' ).cmtRequestProcessor({
		app: siteApp,
		controllers: siteControllers
	});
});

// == Form App Controllers ===================================

// == Site Controller =====================

SiteController	= function() {};

SiteController.inherits( cmt.api.controllers.BaseController );

SiteController.prototype.loginActionPost = function( success, requestElement, response ) {

	if( success ) {

		window.location = response.data;
	}
};

// SettingsController ---------------------------------------

SettingsController	= function() {};

SettingsController.inherits( cmt.api.controllers.BaseController );

SettingsController.prototype.getContentActionPre = function( requestElement ) {

	var content	= requestElement.attr( 'content' );
	content		= jQuery( '#' + content );

	if( !content.is( ':empty' ) ) {

		return false;
	}

	return true;
};

SettingsController.prototype.getContentActionPost = function( success, requestElement, response ) {

	if( success ) {

		var content	= requestElement.attr( 'content' );
		content		= jQuery( '#' + content );
		var parent	= requestElement.closest( '.box-collapsible' );

		content.html( response.data );

		content.slideDown( 'slow' );

		parent.find( '.cmt-checkbox' ).cmtCheckbox();
		parent.find( '.box-form' ).cmtFormInfo();

		parent.find( '[cmt-app=site]' ).cmtRequestProcessor({
			app: siteApp
		});
	}
};

SettingsController.prototype.updateActionPost = function( success, requestElement, response ) {

	if( success ) {

		var source 		= document.getElementById( 'updateSettingsTemplate' ).innerHTML;
		var template 	= Handlebars.compile( source );
		var data		= { settings: response.data };
		var output 		= template( data );
		var parent		= requestElement.closest( '.box-collapsible' );

		parent.find( '.wrap-info' ).html( output );

		parent.find( '.btn-edit' ).click();
	}
};