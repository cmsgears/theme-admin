var siteApp	= null;

jQuery( document ).ready( function() {

	// App
	siteApp	= new cmt.api.Application( { basePath: ajaxUrl } );

	// Controllers
	var controllers				= [];
	controllers[ 'site' ]		= 'SiteController';
	controllers[ 'settings' ]	= 'SiteSettingsController';

	// Init App
	jQuery( '[cmt-app=site]' ).cmtRequestProcessor({
		app: siteApp,
		controllers: controllers
	});
});

// == Site Controller =====================

SiteController	= function() {};

SiteController.inherits( cmt.api.controllers.BaseController );

SiteController.prototype.loginActionPost = function( success, requestElement, response ) {

	if( success ) {

		window.location = response.data;
	}
};

// == Site Settings Controller ============

SiteSettingsController	= function() {};

SiteSettingsController.inherits( cmt.api.controllers.BaseController );

SiteSettingsController.prototype.getContentActionPre = function( requestElement ) {

	var contentWrap	= requestElement.attr( 'content' );
	var content		= jQuery( '#' + contentWrap + ' .box-content' );

	if( !content.is( ':empty' ) ) {

		return false;
	}

	return true;
};

SiteSettingsController.prototype.getContentActionPost = function( success, requestElement, response ) {

	if( success ) {

		var contentWrap	= requestElement.attr( 'content' );
		contentWrap		= jQuery( '#' + contentWrap );
		var content		= contentWrap.find( '.box-content' );

		content.html( response.data );

		content.find( '.cmt-checkbox' ).cmtCheckbox();
		content.find( '.box-form' ).cmtFormInfo();

		siteApp.registerElements( content.find( '[cmt-app=site]' ) );

		contentWrap.slideDown( 'slow' );
	}
};

SiteSettingsController.prototype.updateActionPost = function( success, requestElement, response ) {

	if( success ) {

		var source 		= document.getElementById( 'updateSettingsTemplate' ).innerHTML;
		var template 	= Handlebars.compile( source );
		var data		= { settings: response.data };
		var output 		= template( data );
		var parent		= requestElement.closest( '.box-collapsible' );

		parent.find( '.box-form-info-wrap' ).html( output );

		parent.find( '.box-form-trigger' ).click();
	}
};
