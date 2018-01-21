// == Application =========================

jQuery( document ).ready( function() {

	var app	= cmt.api.root.registerApplication( 'notification', 'cmt.api.Application', { basePath: ajaxUrl } );

	app.mapController( 'province', 'cmg.controllers.ProvinceController' );
	app.mapController( 'city', 'cmg.controllers.CityController' );

	cmt.api.utils.request.register( app, jQuery( '[cmt-app=location]' ) );

	// Listeners
	jQuery( '.address-province' ).change( function() {

		var cityFill = jQuery( this ).closest( '.frm-address' ).find( '.city-fill' );

		cityFill.find( '.id' ).val( '' );
		cityFill.find( '.auto-fill-text' ).val( '' );
	});
});

// == Controller Namespace ================

// == Province Controller =================

cmg.controllers.ProvinceController	= function() {};

cmg.controllers.ProvinceController.inherits( cmt.api.controllers.BaseController );

cmg.controllers.ProvinceController.prototype.provinceActionPre = function( requestElement ) {

	this.requestData = { countryId: requestElement.find( 'select' ).val() };

	return true;
};

cmg.controllers.ProvinceController.prototype.provinceActionSuccess = function( requestElement, response ) {

	var selectWrap	= requestElement.parent().find( '.wrap-province .cmt-select-wrap' );

	if( response.data.length <= 0 ) {

		response.data	= '<option value="0">Choose Province</option>';
	}

	jQuery.fn.cmtSelect.resetSelect( selectWrap, response.data );

	// OR

	jQuery( '.frm-province .cmt-select-wrap select' ).remove();
	jQuery( '.frm-province .cmt-select-wrap' ).empty();
	jQuery( '.frm-province ' ).html( "<label>State/Province</label><select id='wrap-province' class='element-60 cmt-select cmt-change' name='Address[provinceId]'>" + response.data.provinceList + "</select>" );
	jQuery( '.frm-province .cmt-select' ).cmtSelect( { iconHtml: '<span class="cmti cmti-chevron-down"></span>' } );
};

// == City Controller =====================

cmg.controllers.CityController	= function() {};

cmg.controllers.CityController.inherits( cmt.api.controllers.BaseController );

cmg.controllers.CityController.prototype.autoSearchActionPre = function( requestElement ) {

	var form			= requestElement.closest( '.frm-address' );
	var provinceId 		= form.find( '.address-province' ).val();
	var cityName 		= form.find( '.auto-fill-text' ).val();

	this.requestData	= "province-id=" + provinceId + "&name=" + cityName;

	return true;
};

cmg.controllers.CityController.prototype.autoSearchActionSuccess = function( requestElement, response ) {

	var data			= response.data;
	var listHtml		= '';
	var wrapItemList	= requestElement.find( '.wrap-auto-list' );
	var itemList		= requestElement.find( '.auto-list' );

	for( i = 0; i < data.length; i++ ) {

		var obj = data[ i ];

		listHtml += "<li data-id='" + obj.id + "' data-lat='" + obj.latitude + "' data-lon='" + obj.longitude + "' data-zip='" + obj.postal + "'>" + obj.name + "</li>";
	}

	if( listHtml.length == 0 ) {

		listHtml	= '<li>No matching results found</li>';

		itemList.html( listHtml );
	}
	else {

		itemList.html( listHtml );

		requestElement.find( '.auto-list li' ).click( function() {

			var wrapper		= requestElement.parent().find( '.wrap-field-auto' );
			var id			= jQuery( this ).attr( 'data-id' );
			var name		= jQuery( this ).html();

			var lat			= jQuery( this ).attr( 'data-lat' );
			var lon			= jQuery( this ).attr( 'data-lon' );
			var zip			= jQuery( this ).attr( 'data-zip' );
			zip				= zip.split( ' ' );

			wrapItemList.slideUp();

			// Update City Id and Name
			wrapper.find( '.id' ).val( id );
			requestElement.find( '.auto-fill-text' ).val( name );

			// Update Map
			var parent		= jQuery( this ).closest( '.frm-address' );
			var address		= lat + ',' + lon;

			parent.find( '.search-ll' ).val( address ).trigger( 'change' );

			// Update City Zip
			parent.find( '.address-zip' ).val( zip[ 0 ] );
		});
	}

	wrapItemList.slideDown();
};

// == Direct Calls ========================

// == Additional Methods ==================
