// == Application =========================

jQuery( document ).ready( function() {

	// Site App =========

	var siteApp = cmt.api.root.getApplication( 'site' );

	siteApp.mapController( 'settings', 'cmg.controllers.SiteSettingsController' );
	siteApp.mapController( 'member', 'cmg.controllers.SiteMemberController' );

	cmt.api.utils.request.register( siteApp, jQuery( '[cmt-app=site][cmt-controller=settings]' ) );
	cmt.api.utils.request.register( siteApp, jQuery( '[cmt-app=site][cmt-controller=member]' ) );

	// Main App =========

	var app	= cmt.api.root.registerApplication( 'main', 'cmt.api.Application', { basePath: ajaxUrl } );

	app.mapController( 'gallery', 'cmg.controllers.GalleryController' );

	cmt.api.utils.request.register( app, jQuery( '[cmt-app=main]' ) );
});

// == Controller Namespace ================

// == Site Settings Controller ============

cmg.controllers.SiteSettingsController	= function() {};

cmg.controllers.SiteSettingsController.inherits( cmt.api.controllers.RequestController );

cmg.controllers.SiteSettingsController.prototype.getContentActionPre = function( requestElement ) {

	var contentWrap	= requestElement.attr( 'content' );

	var content = jQuery( '#' + contentWrap + ' .box-content' );

	if( !content.is( ':empty' ) ) {

		return false;
	}

	return true;
};

cmg.controllers.SiteSettingsController.prototype.getContentActionSuccess = function( requestElement, response ) {

	var contentWrap	= requestElement.attr( 'content' );
	contentWrap		= jQuery( '#' + contentWrap );
	
	var content = contentWrap.find( '.box-content' );

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

	var parent = requestElement.closest( '.box-collapsible' );

	parent.find( '.box-form-info-wrap' ).html( output );

	parent.find( '.box-form-trigger' ).click();
};

// == Site Member Controller ==============

cmg.controllers.SiteMemberController = function() {};

cmg.controllers.SiteMemberController.inherits( cmt.api.controllers.RequestController );

cmg.controllers.SiteMemberController.prototype.autoSearchActionPre = function( requestElement ) {

	var autoFill	= requestElement.closest( '.auto-fill' );
	var type 		= autoFill.find( 'input[name=type]' ).val();
	var keyword 	= autoFill.find( '.auto-fill-text' ).val();

	if( keyword.length <= 0 ) {

		autoFill.find( '.auto-fill-items' ).slideUp();

		return false;
	}

	this.requestData = 'name=' + keyword;

	return true;
};

cmg.controllers.SiteMemberController.prototype.autoSearchActionSuccess = function( requestElement, response ) {

	var data		= response.data;
	var listHtml	= '';
	var autoFill	= requestElement.closest( '.auto-fill' );
	var itemList	= requestElement.find( '.auto-fill-items' );
	
	for( i = 0; i < data.length; i++ ) {

		var obj = data[ i ];

		listHtml += "<li class='auto-fill-item' data-id='" + obj.id + "'>" + obj.name + "</li>";
	}

	if( listHtml.length == 0 ) {

		listHtml = "<li class='auto-fill-message'>No matching results found</li>";

		itemList.html( listHtml );
	}
	else {

		itemList.html( listHtml );

		requestElement.find( '.auto-fill-item' ).click( function() {

			var id		= jQuery( this ).attr( 'data-id' );
			var name	= jQuery( this ).html();

			itemList.slideUp();

			autoFill.find( '.site-member' ).fadeIn( 'slow' );

			autoFill.find( '#sitemember-userid' ).val( id );
			autoFill.find( '#sitemember-name' ).val( name );
		});
	}

	itemList.slideDown();
};

// == Gallery Controller ==================

cmg.controllers.GalleryController = function() {};

cmg.controllers.GalleryController.inherits( cmt.api.controllers.RequestController );

cmg.controllers.GalleryController.prototype.updateItemActionSuccess = function( requestElement, response ) {

	location.reload( true );
};

cmg.controllers.GalleryController.prototype.deleteItemActionSuccess = function( requestElement, response ) {

	location.reload( true );
};

// == Direct Calls ========================

// == Additional Methods ==================
