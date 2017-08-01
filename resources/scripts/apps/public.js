// == Application =========================

jQuery( document ).ready( function() {

	var app	= cmt.api.root.registerApplication( 'site', 'cmt.api.Application', { basePath: ajaxUrl } );

	app.mapController( 'site', 'cmg.controllers.SiteController' );
	app.mapController( 'auto', 'cmg.controllers.AutoController' );
	app.mapController( 'settings', 'cmg.controllers.SiteSettingsController' );

	cmt.api.utils.request.register( app, jQuery( '[cmt-app=site]' ) );
});

// == Controller Namespace ================

var cmg = cmg || {};

cmg.controllers = cmg.controllers || {};

// == Site Controller =====================

cmg.controllers.SiteController	= function() {};

cmg.controllers.SiteController.inherits( cmt.api.controllers.RequestController );

cmg.controllers.SiteController.prototype.loginActionSuccess = function( requestElement, response ) {

	window.location = response.data;
};

// == Auto Controller =====================

cmg.controllers.AutoController	= function() {

	this.singleRequest		= true;
	this.previousLocation	= null;
};

cmg.controllers.AutoController.inherits( cmt.api.controllers.RequestController );

cmg.controllers.AutoController.prototype.autoSearchActionPre = function( requestElement ) {

	var name 	= requestElement.find( '.search-name' );
	var type 	= requestElement.find( '.search-type' );

	if( type.length == 1 ) {

		this.requestData	= "name=" + name.val() + "&type=" + type.val();
	}
	else {

		this.requestData	= "name=" + name.val();
	}

	return true;
};

cmg.controllers.AutoController.prototype.autoSearchActionSuccess = function( requestElement, response ) {

	var data			= response.data;
	var listHtml		= '';
	var wrapItemList	= requestElement.find( '.auto-fill-items-wrap' );
	var itemList		= requestElement.find( '.auto-fill-items' );

	for( i = 0; i < data.length; i++ ) {

		var obj = data[ i ];

		listHtml += "<li class='auto-fill-item' data-id='" + obj.id + "'>" + obj.name + "</li>";
	}

	if( listHtml.length == 0 ) {

		listHtml	= "<li class='auto-fill-message'>No matching results found</li>";

		itemList.html( listHtml );
	}
	else {

		itemList.html( listHtml );

		requestElement.find( '.auto-fill-item' ).click( function() {

			var target	= requestElement.closest( '.auto-fill' ).find( '.auto-fill-target' );
			var id		= jQuery( this ).attr( 'data-id' );
			var name	= jQuery( this ).html();

			itemList.slideUp();

			// Update Id and Name
			target.find( '.target' ).val( id );
			requestElement.find( '.auto-fill-text' ).val( name );
		});
	}

	itemList.slideDown();
};

// == Site Settings Controller ============

cmg.controllers.SiteSettingsController	= function() {};

cmg.controllers.SiteSettingsController.inherits( cmt.api.controllers.RequestController );

cmg.controllers.SiteSettingsController.prototype.getContentActionPre = function( requestElement ) {

	var contentWrap	= requestElement.attr( 'content' );
	var content		= jQuery( '#' + contentWrap + ' .box-content' );

	if( !content.is( ':empty' ) ) {

		return false;
	}

	return true;
};

cmg.controllers.SiteSettingsController.prototype.getContentActionSuccess = function( requestElement, response ) {

	var contentWrap	= requestElement.attr( 'content' );
	contentWrap		= jQuery( '#' + contentWrap );
	var content		= contentWrap.find( '.box-content' );

	content.html( response.data );

	content.find( '.cmt-checkbox' ).cmtCheckbox();
	content.find( '.box-form' ).cmtFormInfo();

	cmt.api.utils.request.register( cmt.api.root.getApplication( 'site' ), content.find( '[cmt-app=site]' ) );

	contentWrap.slideDown( 'slow' );
};

cmg.controllers.SiteSettingsController.prototype.updateActionSuccess = function( requestElement, response ) {

	var source 		= document.getElementById( 'updateSettingsTemplate' ).innerHTML;
	var template 	= Handlebars.compile( source );
	var data		= { settings: response.data };
	var output 		= template( data );
	var parent		= requestElement.closest( '.box-collapsible' );

	parent.find( '.box-form-info-wrap' ).html( output );

	parent.find( '.box-form-trigger' ).click();
};

// == Direct Calls ========================

// == Additional Methods ==================
