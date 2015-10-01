// global variables
var fullContent = false;

// initialise on page load
jQuery( document ).ready( function() {

	initListeners();

	initSidebar();

	initFullContent();
});

// Default Listeners ---------------

function initListeners() {

	// Image Uploader
	jQuery( ".file-uploader" ).cmtFileUploader();

	// JQuery Date	
	jQuery( ".jqdate" ).datepicker( { dateFormat: 'yy-mm-dd' } );

	// Mobile Nav Icon
	jQuery(".nav-mobile-icon").click( function() { 

		jQuery(".nav-mobile").slideToggle('slow');
	});

	// Sorting
	jQuery( ".icon-sort" ).click( function() {
		
		sortTable( jQuery( this ).attr( 'sort-order' ) );
	});
	
	jQuery(".btn-edit-profile").click( function() {
		
		jQuery(this).hide();
		jQuery(".frm-view-profile").hide();
		jQuery(".frm-edit").fadeIn();
		jQuery(".frm-edit").removeClass("hidden");
		
	} );
}

// Sidebar -------------------------

// initialise sidebar accordion nature
function initSidebar() {

	// Initialise Sidebar Accordion
	jQuery( "#sidebar .collapsible-tab.has-children" ).click( function() {

		var child = jQuery( this ).children( ".collapsible-tab-content" );

		if( !jQuery( this ).hasClass( "active" ) ) {

			if( !child.hasClass( "expanded" ) ) {
	
				// Slide Down Slowly
				jQuery( this ).addClass( "pactive" );
				child.addClass( "expanded" );
				child.slideDown( "slow" );
			}
			else {

				// Slide Up Slowly
				jQuery( this ).removeClass( "pactive" );
				child.removeClass( "expanded" );
				child.slideUp( "slow" );
			}
		}
	});
}

// It slides up/down the sidebar to have more visible area for admin.
function initFullContent() {

	jQuery( ".nav-mobile-icon" ).click( function() { 
		
		if( fullContent ) {
			
			fullContent = false;
			
			jQuery(".sidebar, .sidebar-back").slideDown();
			jQuery(".wrap-content").removeClass( "wrap-content-full" );
		}
		else {

			fullContent = true;

			jQuery(".sidebar, .sidebar-back").slideUp();
			jQuery(".wrap-content").addClass( "wrap-content-full" );
		}
	});
}

// Sort/Search ---------------------

function searchTable() {

	var searchTerms	= jQuery("#search-terms").val();
	var location 	= "" + window.location;

	if( null != searchTerms && searchTerms.length > 0 ) {

		window.location = location.urlParams( 'search', searchTerms );
	}
}

function sortTable( order ) {

	var location 	= "" + window.location;

	window.location = location.urlParams( 'sort', order );
}