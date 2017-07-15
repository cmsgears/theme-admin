var mainApp	= null;

jQuery( document ).ready( function() {

	// App
	mainApp		= new cmt.api.Application( { basePath: ajaxUrl } );

	// Controllers
	var controllers					= [];

	controllers[ 'gallery' ]		= 'GalleryController';
	controllers[ 'category' ]		= 'CategoryController';
	controllers[ 'tag' ]			= 'TagController';

	controllers[ 'permission' ]		= 'PermissionController';
	controllers[ 'notification' ]	= 'NotificationController';
	controllers[ 'address' ]		= 'AddressController';

	// Init App
	jQuery( '[cmt-app=main]' ).cmtRequestProcessor({
		app: mainApp,
		controllers: controllers
	});
});

// == Gallery Controller ==================

GalleryController	= function() {};

GalleryController.inherits( cmt.api.controllers.BaseController );

GalleryController.prototype.updateItemActionPost = function( success, requestElement, response ) {

	if( success ) {

		location.reload( true );
	}
};

// == Category Controller =================

CategoryController	= function() {};

CategoryController.inherits( cmt.api.controllers.BaseController );

CategoryController.prototype.deleteActionPost = function( success, requestElement, response ) {

	if( success ) {

		cmt.utils.data.refreshGrid();
	}
};

CategoryController.prototype.autoSearchActionPre = function( requestElement ) {

	var autoFill	= requestElement.closest( '.auto-fill' );
	var type 		= autoFill.find( 'input[name=type]' ).val();
	var keyword 	= autoFill.find( '.auto-fill-text' ).val();

	if( keyword.length <= 0 ) {

		var widget		= requestElement.parent();
		var itemList	= widget.find( '.auto-map .item-list' );

		itemList.slideUp();

		return false;
	}

	this.requestData	= 'type=' + type + '&name=' + keyword;

	return true;
};

CategoryController.prototype.autoSearchActionPost = function( success, requestElement, response, child ) {

	if( success ) {

		var data			= response.data;
		var listHtml		= '';
		var wrapItemList	= requestElement.find( '.wrap-auto-list' );
		var itemList		= requestElement.find( '.auto-list' );

		for( i = 0; i < data.length; i++ ) {

			var obj = data[ i ];

			listHtml += '<li data-id="' + obj.id + '">' + obj.name + '</li>';
		}

		if( listHtml.length == 0 ) {

			listHtml	= '<li>No matching results found</li>';

			itemList.html( listHtml );
		}
		else {

			itemList.html( listHtml );

			requestElement.find( '.auto-list li' ).click( function() {

				var autoFill	= requestElement.closest( '.auto-fill' );
				var wrapper		= requestElement.parent().find( '.wrap-field-auto' );
				var id			= jQuery( this ).attr( 'data-id' );
				var name		= jQuery( this ).html();

				autoFill.find( '.trigger-map-category input[name=categoryId]' ).val( id );

				autoFill.find( '.trigger-map-category .cmt-click' )[0].click();

				wrapItemList.slideUp();
			});
		}

		wrapItemList.slideDown();
	}
};

CategoryController.prototype.mapModelCategoryActionPre = function( requestElement ) {

	var categoryId	= requestElement.find( 'input[name=categoryId]' ).val();
	categoryId		= parseInt( categoryId );

	if( categoryId > 0 ) {

		return true;
	}

	return false;
};

CategoryController.prototype.mapModelCategoryActionPost = function( success, requestElement, response ) {

	if( success ) {

		var data			= response.data;
		var listHtml		= '';
		var wrapper			= requestElement.closest( '.wrap-categories' );
		var itemList		= wrapper.find( '.auto-mapped .item-list' );

		for( i = 0; i < data.length; i++ ) {

			var obj = data[ i ];

			listHtml += "<li><span class='value'>" + obj.name + "</span><i data-id='" + obj.id + "' class='cmti cmti-close close cmt-click'></i></li>";
		}

		itemList.html( listHtml );

		mainApp.registerElements( wrapper.find( '.auto-mapped' ) );
	}
};

CategoryController.prototype.deleteModelCategoryActionPre = function( requestElement ) {

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

// == Tag Controller ======================

TagController	= function() {};

TagController.inherits( cmt.api.controllers.BaseController );

TagController.prototype.createActionPost = function( success, requestElement, response ) {

	if( success ) {

		var tags		= requestElement.closest( '.mapper-tag' ).find( '.wrap-tags' );

		var source 		= document.getElementById( 'tagTemplate' ).innerHTML;
		var template 	= Handlebars.compile( source );
		var data		= { tags: response.data };
		var output 		= template( data );

		tags.html( output );

		mainApp.registerElements( tags.find( '[cmt-app=main]' ) );
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