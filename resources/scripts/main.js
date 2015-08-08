// global variables
var fullContent = false;

// initialise on page load
jQuery( document ).ready( function() {

	initListeners();

	initFullContent();
});

// initialise the basic features usable for whole site
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
}

// Sidebar ------------------------------------------------------------------------

// initialise sidebar accordion nature
function initSidebar( activeTabParent, activeTabChild ) {

	// Activate Tab
	var activeTab = jQuery( "#" + activeTabParent );

	activeTab.addClass( "collapsible-tab-active" );
	activeTab.children( ".collapsible-tab-content" ).show();

	// Activate Tab Child
	if( activeTab.hasClass( "has-children" ) ) {
		
		activeTab.children( ".collapsible-tab-content" ).children( "ul").children( "li." + activeTabChild ).addClass( "collapsible-tab-content-active" );
		activeTab.children( ".collapsible-tab-content" ).children( "ul").addClass( "expanded" );
	}

	// Initialise Sidebar Accordion
	jQuery( "#sidebar .collapsible-tab.has-children" ).click( function() {

		var child = jQuery( this ).children( ".collapsible-tab-content" );

		if( !child.hasClass( "expanded" ) ) {

			// Hide All
			jQuery( "#sidebar .collapsible-tab-content" ).hide();
			jQuery( "#sidebar .collapsible-tab-content" ).removeClass( "expanded" );

			// Slide Down Slowly
			child.addClass( "expanded" );
			child.slideDown( "slow" );
		}
		else {

			// Slide Up Slowly
			child.removeClass( "expanded" );
			child.slideUp( "slow" );
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