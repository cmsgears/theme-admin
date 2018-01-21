// Get ready on page load ----------

jQuery( document ).ready( function() {

	initSearch();
});

// Sort/Search/Filter --------------

function initSearch() {

	var pageUrl	= window.location.href;

	jQuery( "#btn-search" ).click( function() {

		searchBro( "#search-terms", pageUrl );
	});

	// Init Default Filters
	initTextFilter( ".filter-text" );
}

function searchBro( selector, pageUrl ) {

	var keywords	= jQuery( selector ).val();

	// Search Keywords
	if( null != keywords && keywords.length > 0 ) {

		pageUrl = cmt.utils.data.updateUrlParam( pageUrl, 'keywords', keywords );
	}
	else {

		pageUrl = cmt.utils.data.removeParam( pageUrl, 'keywords' );
	}

	window.location	= pageUrl;
}

function initCheckboxFilter( selector, param ) {

	jQuery( selector ).change( function() {

		var checked	= [];

		jQuery( selector ).each( function( id, cb ) {

			if( jQuery( cb ).is( ':checked' ) ) {

				checked.push( jQuery( cb ).val() );
			}
		});

		var pageUrl	= window.location.href;

		if( checked.length > 0 ) {

			checked			= checked.join();

			window.location = cmt.utils.data.updateUrlParam( pageUrl, param, checked );
		}
		else {

			window.location = cmt.utils.data.removeParam( pageUrl, param );
		}
	});
}

function initTextFilter( selector ) {

	jQuery( selector ).click( function() {

		var pageUrl	= window.location.href;
		var param	= jQuery( this ).attr( 'column' );
		var value	= jQuery( this ).attr( 'filter' );

		window.location = cmt.utils.data.updateUrlParam( pageUrl, param, value );
	});
}