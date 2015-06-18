var FORM_KEY_CATEGORY_CREATE 	= 20;
var FORM_KEY_CATEGORY_UPDATE 	= 25;
var FORM_KEY_CATEGORY_DELETE 	= 30;

var FORM_KEY_UPDATE_SETTINGS 	= 35;

/* Slider */
var FORM_GROUP_SLIDER			= 1001;

var FORM_KEY_SLIDE_ADD			= 1001;

/* Slider */
var FORM_GROUP_GALLERY			= 1005;

var FORM_KEY_ITEM_ADD			= 1001;

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

	jQuery(".nav-mobile-icon").click( function() { 

		jQuery(".nav-mobile").slideToggle('slow');
	});
	
	// Sorting
	jQuery( ".icon-sort" ).click( function() {
		
		sortTable( jQuery( this ).attr( 'sort-order' ) );
	});
	
	// Forms
	jQuery( ".frm-ajax" ).processAjax();
}

// Sidebar ------------------------------------------------------------------------

// initialise sidebar accordion nature
function initSidebar( activeTabId, activeIndex ) {

	// Activate Tab
	var activeTab = jQuery( "#" + activeTabId );

	activeTab.addClass( "collapsible-tab-active" );
	activeTab.children( ".collapsible-tab-content" ).show();

	// Activate Tab Child
	if( activeTab.hasClass( "has-children" ) ) {
		
		activeTab.children( ".collapsible-tab-content" ).children( "ul").children( "li").eq( activeIndex ).addClass( "collapsible-tab-content-active" );
	}

	// Initialise Sidebar Accordion
	jQuery( "#sidebar .collapsible-tab.has-children" ).click( function() {

		var child = jQuery( this ).children( ".collapsible-tab-content" );

		if( !child.hasClass("expanded") ) {

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

// Mappings Matrix ------------------------------------------------------------------

// It helps admin to map two tables using matrix.
function initMappingsMatrix() {

	jQuery(".matrix-row").click( function(e) {
		
		e.preventDefault();
		
		var form 		= jQuery( this ).parents().eq(2).find( "form" );
		var formData 	= form.serializeJSON();
		var formAction	= form.attr("action");

		showMessagePopup( "Please wait. The requested changes are being made." );
		
		jQuery.ajax({  
		     type: 'POST',  
		     url: formAction,
		     data: JSON.stringify( formData ),
		     dataType: "JSON",
		     contentType: "application/json;charset=UTF-8",
		     success: function( response, textStatus, XMLHttpRequest ) {
		    	 	
	    	 	hideMessagePopup();

				if( response['result'] == 1 ) {
					
					showMessagePopup( "Your request has been processed successfully." );
				}
				else if( response['result'] == 0 ) {

					showErrorPopup( "Your request was not processed." );					
				}
			}
		});
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

// Forms --------------------------------------------------------------------------

function preCMGProcessor( formId, formGroup, formKey ) {

	return true;
}

preAjaxProcessor.addListener( preCMGProcessor );

function postCMGProcessorSuccess( formId, formGroup, formKey, data ) {

	switch( formGroup ) {
		
		case FORM_GROUP_SLIDER:
		{
			switch( formKey ) {
				
				case FORM_KEY_SLIDE_ADD:
				{
					// Reload on success
					location.reload( true );

					break;
				}
				case FORM_KEY_CATEGORY_CREATE:
				{
					jQuery(".add-cat-popup").fadeOut( 'slow' );
					location.reload();

					break;
				}
				
				case FORM_KEY_CATEGORY_UPDATE:
				{
					jQuery(".update-cat-popup").fadeOut( 'slow' );
					location.reload();

					break;
				}
				
				case FORM_KEY_CATEGORY_DELETE:
				{
					jQuery(".delete-cat-popup").fadeOut( 'slow' );
					location.reload();

					break;
				}
			}
			
			break;
		}
		case FORM_GROUP_GALLERY:
		{
			switch( formKey ) {
				
				case FORM_KEY_ITEM_ADD:
				{
					// Reload on success
					location.reload( true );

					break;
				}
			}
			
			break;	
		}
	}
}

function postCMGProcessorFailure( formId, formGroup, formKey, data ) {

}

postAjaxProcessor.addSuccessListener( postCMGProcessorSuccess );
postAjaxProcessor.addFailureListener( postCMGProcessorFailure );