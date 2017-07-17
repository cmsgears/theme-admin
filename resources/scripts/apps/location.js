var locationApp	= null;

jQuery( document ).ready( function() {

	// App
	locationApp	= new cmt.api.Application( { basePath: ajaxUrl } );

	// Controllers
	var locationControllers				= [];
	locationControllers[ 'province' ] 	= 'ProvinceController';
	locationControllers[ 'city' ] 		= 'CityController';

	// Init App
	jQuery( '[cmt-app=location]' ).cmtRequestProcessor({
		app: userApp,
		controllers: locationControllers
	});

	// Listeners
	jQuery( '.address-province' ).change( function() {

		var cityFill = jQuery( this ).closest( '.frm-address' ).find( '.city-fill' );

		cityFill.find( '.id' ).val( '' );
		cityFill.find( '.auto-fill-text' ).val( '' );
	});
});

// ProvinceController ---------------------------------------

ProvinceController	= function() {};

ProvinceController.inherits( cmt.api.controllers.BaseController );

ProvinceController.prototype.provinceActionPost = function( success, requestElement, response ) {

	if( success ) {

		jQuery( '.frm-province .cmt-select-wrap select' ).remove();
		jQuery( '.frm-province .cmt-select-wrap' ).empty();
		jQuery( '.frm-province ' ).html( "<label>State/Province</label><select id='wrap-province' class='element-60 cmt-select cmt-change' name='Address[provinceId]'>" + response.data.provinceList + "</select>" );
		jQuery( '.frm-province .cmt-select' ).cmtSelect( { iconHtml: '<span class="cmti cmti-chevron-down"></span>' } );
	}
};

// CityController -------------------------------------------

CityController	= function() {};

CityController.inherits( cmt.api.controllers.BaseController );

CityController.prototype.autoSearchActionPre = function( requestElement ) {

	var form			= requestElement.closest( '.frm-address' );
	var provinceId 		= form.find( '.address-province' ).val();
	var cityName 		= form.find( '.auto-fill-text' ).val();

	this.requestData	= "province-id=" + provinceId + "&name=" + cityName;

	return true;
};

CityController.prototype.autoSearchActionPost = function( success, requestElement, response ) {

	if( success ) {

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
