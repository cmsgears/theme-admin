var siteApp	= null;

jQuery( document ).ready( function() {

	// App
	siteApp	= new cmt.api.Application( { basePath: ajaxUrl } );

	// Controllers
	var controllers				= [];
	controllers[ 'site' ]		= 'SiteController';
	controllers[ 'auto' ]		= 'AutoController';
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

// == Auto Controller =====================

AutoController	= function() {

	this.singleRequest		= true;
	this.previousLocation	= null;
};

AutoController.inherits( cmt.api.controllers.BaseController );

AutoController.prototype.autoSearchActionPre = function( requestElement ) {

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

AutoController.prototype.autoSearchActionPost = function( success, requestElement, response ) {

	if( success ) {

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
