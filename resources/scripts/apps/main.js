var mainApp	= null;

jQuery( document ).ready( function() {

	mainApp		= new cmt.api.Application( { basePath: ajaxUrl } );

	var appControllers					= [];

	appControllers[ 'newsletter' ] 		= 'NewsletterController';
	appControllers[ 'gallery' ]			= 'GalleryController';
	appControllers[ 'tag' ]				= 'TagController';
	appControllers[ 'permission' ]		= 'PermissionController';
	appControllers[ 'notification' ]	= 'NotificationController';
	appControllers[ 'category' ]		= 'CategoryController';
	appControllers[ 'address' ]			= 'AddressController';

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

// CategoryController ---------------------------------------

CategoryController	= function() {};

CategoryController.inherits( cmt.api.controllers.BaseController );

CategoryController.prototype.autoSearchActionPre = function( requestElement, response ) {

	var keyword	= this.requestTrigger.val();

	if( keyword.length <= 0 ) {

		var widget		= requestElement.parent();
		var itemList	= widget.find( '.auto-map .item-list' );

		itemList.slideUp();

		return false;
	}

	return true;
};

CategoryController.prototype.autoSearchActionPost = function( success, requestElement, response ) {

	if( success ) {

		var data			= response.data;
		var listHtml		= '';
		var widget			= requestElement.parent();
		var itemList		= widget.find( '.auto-map .item-list' );

		for( i = 0; i < data.length; i++ ) {

			var obj = data[ i ];

			listHtml += "<li class='cmt-click' data-id='" + obj.id + "'>" + obj.name + "</li>";
		}

		if( listHtml.length == 0 ) {

			listHtml	= '<li>No matching items found.</li>';
		}

		itemList.html( listHtml );

		itemList.slideDown();

		mainApp.registerElements( widget.find( '.auto-map' ) );
	}
};

CategoryController.prototype.mapModelCategoryActionPre = function( requestElement, response ) {

	var categoryId	= this.requestTrigger.attr( 'data-id' );
	categoryId		= parseInt( categoryId );

	if( categoryId > 0 ) {

		requestElement.find( 'input[name=categoryId]' ).val( categoryId );

		return true;
	}

	return false;
};

CategoryController.prototype.mapModelCategoryActionPost = function( success, requestElement, response ) {

	if( success ) {

		var data			= response.data;
		var listHtml		= '';
		var widget			= requestElement.parent();
		var itemList		= widget.find( '.auto-mapped .item-list' );

		for( i = 0; i < data.length; i++ ) {

			var obj = data[ i ];

			listHtml += "<li><span class='value'>" + obj.name + "</span><i data-id='" + obj.id + "' class='cmti cmti-close close cmt-click'></i></li>";
		}

		itemList.html( listHtml );

		mainApp.registerElements( widget.find( '.auto-mapped' ) );

		widget.find( '.auto-map .item-list' ).slideUp();
	}
};

CategoryController.prototype.deleteModelCategoryActionPre = function( requestElement, response ) {

	var categoryId	= this.requestTrigger.attr( 'data-id' );
	categoryId		= parseInt( categoryId );

	if( categoryId > 0 ) {

		requestElement.find( 'input[name=categoryId]').val( categoryId );

		return true;
	}

	return false;
};

CategoryController.prototype.deleteModelCategoryActionPost = function( success, requestElement, response ) {

	if( success ) {

		this.requestTrigger.parent().remove();
	}
};

// AddressController ----------------------------------------

AddressController	= function() {};

AddressController.inherits( cmt.api.controllers.DefaultController );

AddressController.prototype.provinceActionPre = function( requestElement ) {

	this.requestData = { countryId: requestElement.find( 'select' ).val() };

	return true;
};

AddressController.prototype.provinceActionPost = function( success, requestElement, response ) {

	if( success ) {

		var selectWrap	= requestElement.parent().find( '.wrap-province .cmt-select-wrap' );

		if( response.data.length <= 0 ) {

			response.data	= '<option value="0">Choose Province</option>';
		}

		jQuery.fn.cmtSelect.resetSelect( selectWrap, response.data );
	}
};
