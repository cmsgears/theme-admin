// == Application =========================

jQuery( document ).ready( function() {

	var app	= cmt.api.root.registerApplication( 'category', 'cmt.api.Application', { basePath: ajaxUrl } );

	app.mapController( 'category', 'cmg.controllers.CategoryController' );
	app.mapController( 'tag', 'cmg.controllers.TagController' );

	cmt.api.utils.request.register( app, jQuery( '[cmt-app=category]' ) );
});

// == Controller Namespace ================

// == Category Controller =================

cmg.controllers.CategoryController	= function() {};

cmg.controllers.CategoryController.inherits( cmt.api.controllers.RequestController );

cmg.controllers.CategoryController.prototype.autoSearchActionPre = function( requestElement ) {

	var autoFill	= requestElement.closest( '.auto-fill' );
	var type 		= autoFill.find( 'input[name=type]' ).val();
	var keyword 	= autoFill.find( '.auto-fill-text' ).val();

	if( keyword.length <= 0 ) {

		autoFill.find( '.auto-fill-items' ).slideUp();
		autoFill.find( '.trigger-map-category input[name=categoryId]' ).val( '' );

		return false;
	}

	this.requestData = 'type=' + type + '&name=' + keyword;

	return true;
};

cmg.controllers.CategoryController.prototype.autoSearchActionSuccess = function( requestElement, response, child ) {

	var data		= response.data;
	var listHtml	= '';
	var autoFill	= requestElement.closest( '.auto-fill' );
	var itemList	= requestElement.find( '.auto-fill-items' );

	for( i = 0; i < data.length; i++ ) {

		var obj = data[ i ];

		listHtml += "<li class='auto-fill-item' data-id='" + obj.id + "'>" + obj.name + "</li>";
	}

	if( listHtml.length == 0 ) {

		listHtml	= "<li class='auto-fill-message'>No matching results found.</li>";

		itemList.html( listHtml );
	}
	else {

		itemList.html( listHtml );

		requestElement.find( '.auto-fill-item' ).click( function() {

			var target	= requestElement.closest( '.auto-fill' ).find( '.auto-fill-target' );
			var id		= jQuery( this ).attr( 'data-id' );
			var name	= jQuery( this ).html();

			itemList.slideUp();

			processCategoryResponse( id, name );
		});
	}

	itemList.slideDown();
};

function processCategoryResponse( id, name ) {

	// Template
	var source 		= document.getElementById( 'categoryMapperTemplate' ).innerHTML;
	var template 	= Handlebars.compile( source );
	// Map
	var mapperItems	= jQuery( '.mapper-auto-categories' ).find( '.mapper-items' );
	var itemsArr	= mapperItems.find( '.mapper-item' );
	var itemsLength	= itemsArr.length;

	// Reset search field
	jQuery( '.mapper-auto-categories .search-name' ).val( '' );

	if( itemsLength >= 5 ) {

		alert( "No more mappings allowed." );

		return;
	}

	var create	= true;

	for( var i = 0; i < itemsLength; i++ ) {

		var test	= jQuery( itemsArr[ i ] ).find( '.id' ).val();

		if( id == test ) {

			create = false;

			break;
		}
	}

	if( create ) {

		// Generate View
		var data		= { id: id, name: name };
		var output 		= template( data );

		mapperItems.append( output );

		itemsArr	= mapperItems.find( '.mapper-item' );
		itemsLength	= itemsArr.length;

		itemsArr.last().find( '.mapper-item-remove' ).click( function() {

			jQuery( this ).closest( '.mapper-item' ).remove();
		});
	}
}

cmg.controllers.CategoryController.prototype.mapModelCategoryActionPre = function( requestElement ) {

	var categoryId	= requestElement.find( 'input[name=categoryId]' ).val();
	categoryId		= parseInt( categoryId );

	if( categoryId > 0 ) {

		return true;
	}

	return false;
};

cmg.controllers.CategoryController.prototype.mapModelCategoryActionSuccess = function( requestElement, response ) {

	// Template
	var source 		= document.getElementById( 'categoryMapperTemplate' ).innerHTML;
	var template 	= Handlebars.compile( source );

	// Map
	var mapperItems	= jQuery( '.mapper-auto-categories' ).find( '.mapper-items' );
	var itemsArr	= mapperItems.find( '.mapper-item' );
	var itemsLength	= itemsArr.length;

	var cid			= response.data.cid;
	var name		= response.data.name;

	// Reset search field
	jQuery( '.mapper-auto-categories .search-name' ).val( '' );

	var create	= true;

	for( var i = 0; i < itemsLength; i++ ) {

		var test	= jQuery( itemsArr[ i ] ).find( '.cid' ).val();

		if( cid == test ) {

			create = false;

			break;
		}
	}

	if( create ) {

		// Generate View
		var data		= { cid: cid, name: name };
		var output 		= template( data );

		mapperItems.append( output );

		itemsArr	= mapperItems.find( '.mapper-item' );
		itemsLength	= itemsArr.length;

		cmt.api.utils.request.register( cmt.api.root.getApplication( 'category' ), itemsArr.last() );
	}
};

cmg.controllers.CategoryController.prototype.deleteModelCategoryActionSuccess = function( requestElement, response ) {

	requestElement.remove();
};

// == Tag Controller ======================

cmg.controllers.TagController	= function() {};

cmg.controllers.TagController.inherits( cmt.api.controllers.RequestController );

cmg.controllers.TagController.prototype.mapModelTagActionSuccess = function( requestElement, response ) {

	var mapperItems	= jQuery( '.mapper-submit-tags' ).find( '.mapper-items' );

	var source 		= document.getElementById( 'tagMapperTemplate' ).innerHTML;
	var template 	= Handlebars.compile( source );
	var data		= { tags: response.data };
	var output 		= template( data );

	mapperItems.html( output );

	cmt.api.utils.request.register( cmt.api.root.getApplication( 'category' ), mapperItems.find( '[cmt-app=category]' ) );
};

cmg.controllers.TagController.prototype.deleteModelTagActionSuccess = function( requestElement, response ) {

	requestElement.remove();
};

// == Direct Calls ========================

// == Additional Methods ==================
