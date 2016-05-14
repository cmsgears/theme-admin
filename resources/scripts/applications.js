var mainApp	= null;

jQuery(document).ready( function() {

	mainApp		= new cmt.api.Application( { basePath: ajaxUrl } );

	var appControllers					= [];

	appControllers[ 'form' ] 			= 'FormController';
	appControllers[ 'newsletter' ] 		= 'NewsletterController';
	appControllers[ 'user' ]			= 'UserController';
	appControllers[ 'settings' ]		= 'SettingsController';
	appControllers[ 'gallery' ]			= 'GalleryController';
	appControllers[ 'tag' ]				= 'TagController';
	appControllers[ 'permission' ]		= 'PermissionController';
	appControllers[ 'notification' ]	= 'NotificationController';

	jQuery( ".cmt-form, .cmt-request" ).cmtRequestProcessor({
		app: mainApp,
		controllers: appControllers
	});
});

// DefaultController ----------------------------------------

cmt.api.controllers.DefaultController.prototype.avatarActionPost = function( success, requestElement, response ) {

	requestElement.parent().hide();

	jQuery( '.wrap-popout-actions .wrap-user .cmti-user' ).remove();
	jQuery( '.wrap-popout-actions .wrap-user' ).prepend( '<img class="user-avatar" src="' + response.data.fileUrl + '" />' );
};

// UserController -------------------------------------------

UserController	= function() {};

UserController.inherits( cmt.api.controllers.BaseController );

UserController.prototype.avatarActionPost = function( success, requestElement, response ) {

	requestElement.parent().hide();

	jQuery( ".wrap-popout-actions .wrap-user img" ).attr( 'src', response.data.fileUrl );
};

UserController.prototype.profileActionPost = function( success, requestElement, response ) {

	if( success ) {

		var source 		= document.getElementById( "userProfileTemplate" ).innerHTML;
		var template 	= Handlebars.compile( source );
		var output 		= template( response.data );
		var parent		= requestElement.closest( ".box-form" );

		parent.find( ".wrap-info" ).html( output );

		parent.find( ".btn-edit" ).click();
	}
};

UserController.prototype.accountActionPost = function( success, requestElement, response ) {

	if( success ) {

		var source 		= document.getElementById( "userAccountTemplate" ).innerHTML;
		var template 	= Handlebars.compile( source );
		var output 		= template( response.data );
		var parent		= requestElement.closest( ".box-form" );

		parent.find( ".wrap-info" ).html( output );

		parent.find( ".btn-edit" ).click();
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

UserController.prototype.provinceActionPost = function( success, requestElement, response ) {

	if( success ) {

		jQuery( '.frm-province .cmt-select-wrap select' ).remove();
		jQuery( '.frm-province .cmt-select-wrap' ).empty();
		jQuery( '.frm-province ' ).html( "<label>State/Province</label><select id='wrap-province' class='element-60 cmt-select cmt-change' name='Address[provinceId]'>" + response.data.provinceList + "</select>" );
		jQuery( '.frm-province .cmt-select' ).cmtSelect( { iconHtml: '<span class="cmti cmti-chevron-down"></span>' } );
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

// SettingsController ---------------------------------------

SettingsController	= function() {};

SettingsController.inherits( cmt.api.controllers.BaseController );

SettingsController.prototype.getContentActionPre = function( requestElement ) {

	var content	= requestElement.attr( 'content' );
	content		= jQuery( "#" + content );

	if( !content.is( ':empty' ) ) {

		return false;
	}

	return true;
};

SettingsController.prototype.getContentActionPost = function( success, requestElement, response ) {

	if( success ) {

		var content	= requestElement.attr( 'content' );
		content		= jQuery( "#" + content );
		var parent	= requestElement.closest( ".box-collapsible" );

		content.html( response.data );

		content.slideDown( "slow" );

		activateSettingsBox( requestElement );

		parent.find( ".cmt-checkbox" ).cmtCheckbox();

		parent.find( ".cmt-form, .cmt-request" ).cmtRequestProcessor({
			app: mainApp
		});
	}
};

SettingsController.prototype.updateActionPost = function( success, requestElement, response ) {

	if( success ) {

		var source 		= document.getElementById( "updateSettingsTemplate" ).innerHTML;
		var template 	= Handlebars.compile( source );
		var data		= { settings: response.data };
		var output 		= template( data );
		var parent		= requestElement.closest( ".box-collapsible" );

		parent.find( ".wrap-info" ).html( output );

		parent.find( ".btn-edit" ).click();
	}
};

// GalleryController ----------------------------------------

GalleryController	= function() {};

GalleryController.inherits( cmt.api.controllers.BaseController );

GalleryController.prototype.updateItemActionPost = function( success, requestElement, response ) {

	if( success ) {

		location.reload( true );
	}
};

// TagController --------------------------------------------

TagController	= function() {};

TagController.inherits( cmt.api.controllers.BaseController );

TagController.prototype.createActionPost = function( success, requestElement, response ) {

	if( success ) {

		var tags		= jQuery( '#box-tag-mapper .wrap-tags' );

		var source 		= document.getElementById( 'tagTemplate' ).innerHTML;
		var template 	= Handlebars.compile( source );
		var data		= { tags: response.data };
		var output 		= template( data );

		tags.html( output );

		tags.find( '.cmt-request' ).cmtRequestProcessor({
			app: mainApp
		});
	}
};

TagController.prototype.deleteActionPost = function( success, requestElement, response ) {

	if( success ) {

		jQuery( '#frm-delete-tag-' + response.data ).parent().remove();
	}
};

// PermissionController -------------------------------------

PermissionController	= function() {};

PermissionController.inherits( cmt.api.controllers.BaseController );

PermissionController.prototype.matrixActionPost = function( success, requestElement, response ) {

	if( success ) {

		location.reload( true );
	}
};

// NotificationController -----------------------------------

NotificationController	= function() {};

NotificationController.inherits( cmt.api.controllers.BaseController );

NotificationController.prototype.toggleReadActionPost = function( success, requestElement, response ) {

	if( success ) {

		location.reload( true );

		/*
		var clickBtn	= requestElement.find( '.cmt-click' );
		var count		= response.data.unread;
		var less		= count - 1;
		var more		= count + 1;

		if( response.data.consumed ) {

			clickBtn.attr( 'title', 'Mark Unread' );
			clickBtn.removeClass( 'cmti-envelope' );
			clickBtn.addClass( 'cmti-envelope-o' );

			jQuery( ".upd-count-notification-all" ).removeClass( "upd-count-" + more );
			jQuery( ".upd-count-notification-all" ).addClass( "upd-count-" + count );
		}
		else {

			clickBtn.attr( 'title', 'Mark Read' );
			clickBtn.removeClass( 'cmti-envelope-o' );
			clickBtn.addClass( 'cmti-envelope' );

			jQuery( ".upd-count-notification-all" ).removeClass( "upd-count-" + less );
			jQuery( ".upd-count-notification-all" ).addClass( "upd-count-" + count );
		}

		jQuery( ".upd-count-notification-all" ).html( count );
		*/
	}
};

NotificationController.prototype.trashActionPost = function( success, requestElement, response ) {

	if( success ) {

		location.reload( true );
	}
};

NotificationController.prototype.deleteActionPost = function( success, requestElement, response ) {

	if( success ) {

		location.reload( true );
	}
};