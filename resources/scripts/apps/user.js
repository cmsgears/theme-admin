// == Application =========================

jQuery( document ).ready( function() {

	var app	= cmt.api.root.registerApplication( 'user', 'cmt.api.Application', { basePath: ajaxUrl } );

	app.mapController( 'user', 'cmg.controllers.UserController' );

	cmt.api.utils.request.register( app, jQuery( '[cmt-app=user]' ) );
});

// == Controller Namespace ================

// == User Controller =====================

cmg.controllers.UserController	= function() {};

cmg.controllers.UserController.inherits( cmt.api.controllers.RequestController );

cmg.controllers.UserController.prototype.avatarActionSuccess = function( requestElement, response ) {

	jQuery( '.wrap-popout-actions .wrap-user .cmti-user' ).remove();
	jQuery( '.wrap-popout-actions .wrap-user .user-avatar' ).remove();

	jQuery( '.wrap-popout-actions .wrap-user' ).prepend( '<img class="user-avatar" src="' + response.data.fileUrl + '" />' );
};

cmg.controllers.UserController.prototype.profileActionSuccess = function( requestElement, response ) {

	var source 		= document.getElementById( 'userProfileTemplate' ).innerHTML;
	var template 	= Handlebars.compile( source );
	var output 		= template( response.data );
	var parent		= requestElement.closest( '.box-form' );

	parent.find( '.wrap-info' ).html( output );

	parent.find( '.btn-edit' ).click();
};

cmg.controllers.UserController.prototype.accountActionSuccess = function( requestElement, response ) {

	var source 		= document.getElementById( 'userAccountTemplate' ).innerHTML;
	var template 	= Handlebars.compile( source );
	var output 		= template( response.data );
	var parent		= requestElement.closest( '.box-form' );

	parent.find( '.wrap-info' ).html( output );

	parent.find( '.btn-edit' ).click();
};

cmg.controllers.UserController.prototype.settingsActionSuccess = function( requestElement, response ) {

	var source 		= document.getElementById( 'userSettingsTemplate' ).innerHTML;
	var template 	= Handlebars.compile( source );
	var data		= { settings: response.data };
	var output 		= template( data );
	var parent		= requestElement.closest( '.box-form' );

	parent.find( '.wrap-info' ).html( output );

	parent.find( '.btn-edit' ).click();
};

cmg.controllers.UserController.prototype.addressActionSuccess = function( requestElement, response ) {

	var source 		= document.getElementById( 'userAddressTemplate' ).innerHTML;
	var template 	= Handlebars.compile( source );
	var data		= { address: response.data };
	var output 		= template( data );
	var parent		= requestElement.closest( '.box-form' );

	parent.find( '.wrap-info' ).html( output );

	parent.find( '.btn-edit' ).click();
};

// == Direct Calls ========================

function updateUserMeta( key, value ) {

	// Trigger - Set Sidebar
	cmt.utils.ajax.triggerPost( ajaxUrl + "user/set-meta", "Meta[key]=" + key + "&Meta[value]=" + value );
}

function removeUserMeta( key ) {

	// Trigger - Set Sidebar
	cmt.utils.ajax.triggerPost( ajaxUrl + "user/remove-meta", "Meta[key]=" + key );
}

// == Additional Methods ==================
