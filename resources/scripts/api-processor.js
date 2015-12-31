var mainApp		= new cmt.api.Application();

jQuery(document).ready( function() {

	var appControllers				= [];

	appControllers[ 'form' ] 		= 'FormController';
	appControllers[ 'newsletter' ] 	= 'NewsletterController';
	appControllers[ 'user' ]		= 'UserController';
	appControllers[ 'settings' ]	= 'SettingsController';

	jQuery( ".cmt-form, .cmt-request" ).cmtRequestProcessor({
		app: mainApp,
		controllers: appControllers
	});
});

// DefaultController ----------------------------------------

cmt.api.controllers.DefaultController.prototype.avatarActionPost = function( success, parentElement, message, response ) {

	jQuery( "#" + parentElement ).parent().hide();
};

// UserController -------------------------------------------

UserController	= function() {};

UserController.inherits( cmt.api.controllers.BaseController );

UserController.prototype.profileActionPost = function( success, parentElement, message, response ) {

	if( success ) {

		var source 		= document.getElementById( "userProfileTemplate" ).innerHTML;
		var template 	= Handlebars.compile( source );
		var output 		= template( response.data );
		var parent		= jQuery( "#" + parentElement ).parent().parent();

		parent.find( ".wrap-info" ).html( output );

		parent.find( ".btn-edit" ).click();
	}
};

UserController.prototype.accountActionPost = function( success, parentElement, message, response ) {

	if( success ) {

		var source 		= document.getElementById( "userAccountTemplate" ).innerHTML;
		var template 	= Handlebars.compile( source );
		var output 		= template( response.data );
		var parent		= jQuery( "#" + parentElement ).parent().parent();

		parent.find( ".wrap-info" ).html( output );

		parent.find( ".btn-edit" ).click();
	}
};

// SettingsController ---------------------------------------

SettingsController	= function() {};

SettingsController.inherits( cmt.api.controllers.BaseController );

SettingsController.prototype.getContentActionPre = function( parentElement ) {

	var content	= parentElement.attr( 'content' );
	content		= jQuery( "#" + content );

	if( !content.is( ':empty' ) ) {

		return false;
	}

	return true;
};

SettingsController.prototype.getContentActionPost = function( success, parentElement, message, response ) {

	if( success ) {

		var content	= parentElement.attr( 'content' );
		content		= jQuery( "#" + content );
		
		content.html( response.data );
		
		content.slideDown( "slow" );
		
		activateSettingsBox( parentElement );

		parentElement.closest( ".box-collapsible" ).find( ".cmt-form, .cmt-request" ).cmtRequestProcessor({
			app: mainApp
		});
	}
};

SettingsController.prototype.updateActionPost = function( success, parentElement, message, response ) {

	if( success ) {

		var source 		= document.getElementById( "updateSettingsTemplate" ).innerHTML;
		var template 	= Handlebars.compile( source );
		var data		= { settings: response.data };
		var output 		= template( data );
		var parent		= parentElement.closest( ".box-collapsible" );

		parent.find( ".wrap-info" ).html( output );

		parent.find( ".btn-edit" ).click();
	}
};