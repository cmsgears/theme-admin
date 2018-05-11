jQuery( document ).ready( function() {

	initPreloaders();

	initCmgTools();

	initListeners();

	initPopups();

	initSidebar();

	initSidebarTabs();

	initSettings();

	initAutoHide();
});

// == Pre Loaders =========================

function initPreloaders() {

	jQuery( '.container-main' ).imagesLoaded( { background: true }, function() {

		jQuery( '#pre-loader-main' ).fadeOut( 'slow' );
	});
}

// == CMT JS ==============================

function initCmgTools() {

	// Page Blocks
	jQuery( '.block' ).cmtBlock({
		// Generic
		fullHeight: true,
		// Block Specific - Ignores generic
		blocks: {
			'block-public': { fullHeight: true, heightAutoMobile: true, heightAutoMobileWidth: 1024 }
		}
	});

	// Ratings
	jQuery( '.cmt-rating' ).cmtRate();

	// Google Map
	jQuery( '.lat-long-picker' ).latLongPicker( { latitude: 0, longitude: 0, mapOptions : { zoom: 8 } } );

	// Custom Select
	jQuery( '.cmt-select' ).cmtSelect( { iconHtml: '<span class="cmti cmti-chevron-down"></span>' } );
	jQuery( '.cmt-select-c' ).cmtSelect( { iconHtml: '<span class="fa fa-caret-down"></span>', copyOptionClass: true } );
	jQuery( '.cmt-select-s' ).cmtSelect( { iconHtml: '<span class="fa fa-caret-down"></span>', wrapperClass: 'element-small' } );

	// Checkboxes
	jQuery( '.cmt-checkbox' ).cmtCheckbox();
	
	// Field Groups
	jQuery( '.cmt-field-group' ).cmtFieldGroup();

	// File Uploader
	jQuery( '.file-uploader' ).cmtFileUploader();

	// Popups
	jQuery( '.popup' ).cmtPopup();

	// Popouts
	jQuery( '.popout-group-main' ).cmtPopoutGroup();

	// Auto Fillers
	jQuery( '.auto-fill' ).cmtAutoFill();

	// Form with Info
	jQuery( '.box-form' ).cmtFormInfo();

	// Tabs
	jQuery( '.box-crud-tabs-v' ).cmtTabs();

	// Grid
	jQuery( '.grid-data' ).cmtGrid();

	// Collapsible Menu
	jQuery( '#sidebar-main' ).cmtCollapsibleMenu();

	// Icon Picker
	jQuery( '.icon-picker, .texture-picker' ).cmtIconPicker();
}

// == JS Listeners ========================

function initListeners() {

	// Datepicker
	if( jQuery().datepicker ) {

		var start = jQuery( '.datepicker' ).attr( 'start' );

		if( null != start ) {

			jQuery( '.datepicker' ).datepicker({
				dateFormat: 'yy-mm-dd',
				minDate: start
			});
		}
		else {
			
			jQuery( '.datepicker' ).datepicker({
				dateFormat: 'yy-mm-dd'
			});
		}
	}

	// Custom Scroller
	if( jQuery().mCustomScrollbar ) {

		jQuery( '.cscroller' ).mCustomScrollbar( { autoHideScrollbar: true } );
	}

	// Profile tabs
	if( jQuery().tabs ) {

		jQuery( '.tabs-default' ).tabs();
	}
}

// == Popups ==============================

function initPopups() {

	// Popups
	jQuery( '.popup-trigger' ).click( function() {

		bindPopups( jQuery( this ) );
	});
}

function bindPopups( trigger ) {

	var selector	= trigger.attr( 'popup' );

	showPopup( '#' + selector );

	jQuery( '#' + selector ).find( '.message' ).html( '' );

	switch( selector ) {

		case 'popup-attribute-update':
		case 'popup-attribute-delete': {

			// Collect data from box
			var attribute	= trigger.closest( '.box-attribute' );
			var id			= attribute.attr( 'data-id' );
			var name		= attribute.find( '.model-title' ).html();
			var value		= attribute.find( '.model-content .mCSB_container' ).html();

			// Set form data
			var form 		= jQuery( '#' + selector ).find( 'form' );
			var action		= form.attr( 'action' ) + '&id=' + id;

			form.attr( 'action', action );
			form.find( '.model-name' ).val( name );
			form.find( '.model-desc' ).val( value );

			break;
		}
	}

	bindEditor( selector );
}

function bindEditor( selector ) {

	var lateBinder	= jQuery( '#' + selector + ' .late-editor' );

	if( jQuery.cleditor && !lateBinder.parent().hasClass( 'cleditorMain' ) ) {

		var controls	= 'bold italic underline strikethrough subscript superscript | font size style | color highlight removeformat | bullets numbering | outdent indent | alignleft center alignright justify | undo redo | rule source';
		var fonts		= 'Arial,Arial Black,Courier New,Sans Serif';

		// TODO: Get Fonts dynamically

		jQuery( '#' + selector + ' .late-editor' ).cleditor( { docType: '<!DOCTYPE html>', controls: controls, fonts: fonts, height: 165 } );
	}
	else if( lateBinder.parent().hasClass( 'cleditorMain' ) ) {

		var editor = jQuery( '#' + selector + ' .late-editor' );

		if( lateBinder.hasClass( 'add' ) ) {

			editor.val( '' ).blur();
		}
		else {

			editor.val( editor.val() ).blur();
		}
	}
}

// == Sidebars ============================

function initSidebar() {

	jQuery( '#btn-sidebar-main' ).click( function() {

		if( jQuery( '#sidebar-main' ).hasClass( 'sidebar-micro' ) ) {

			updateUserMeta( 'microSidebar', 0 );
		}
		else {

			updateUserMeta( 'microSidebar', 1 );
		}

		jQuery( '#sidebar-main' ).toggleClass( 'sidebar-micro' );

		initSidebarTabs();
	});
}

function initSidebarTabs() {

	if( jQuery( '#sidebar-main' ).hasClass( 'sidebar-micro' ) ) {

		jQuery( '.sidebar-filler' ).addClass( 'sidebar-filler-micro' );
		jQuery( '.content-main-wrap' ).addClass( 'content-main-wrap-micro' );

		jQuery( '#sidebar-main .collapsible-tab .tab-header' ).addClass( 'tab-content-trigger' );
		jQuery( '#sidebar-main .tab-content' ).removeClass( 'visible' );

		jQuery( '#sidebar-main .tab-content-trigger' ).click( function() {

			var parent = jQuery( this ).closest( '.collapsible-tab' );

			if( parent.hasClass( 'has-children' ) ) {

				var tab = parent.find( '.tab-content' );

				if( tab.is( ':visible' ) ) {

					tab.hide( 'fast' );
				}
				else {

					jQuery( '#sidebar-main .tab-content' ).hide( 'fast' );

					tab.fadeIn( 'slow' );
				}
			}
		});
	}
	else {

		jQuery( '.sidebar-filler' ).removeClass( 'sidebar-filler-micro' );
		jQuery( '.content-main-wrap' ).removeClass( 'content-main-wrap-micro' );

		jQuery( '#sidebar-main .collapsible-tab .tab-header' ).unbind( 'click' );
		jQuery( '#sidebar-main .collapsible-tab .tab-header' ).removeClass( 'tab-content-trigger' );
		jQuery( '#sidebar-main .collapsible-tab.has-children.active .tab-content' ).addClass( 'visible' );
	}
}

// == Settings ============================

function initSettings() {

	jQuery( '.box-settings .box-content-wrap .box-content' ).hide();

	jQuery( '.box-settings .box-collapse-trigger' ).click( function() {

		var parent		= jQuery( this ).closest( '.box-settings' );
		var contentWrap = parent.find( '.box-content-wrap .box-content' );
		var content		= contentWrap.find( '.box-content-data' );

		if( contentWrap.is( ':visible' ) ) {

			contentWrap.slideUp( 'fast' );
		}
		else {

			contentWrap.slideDown( 'slow' );

			if( content.html().length < 5 ) {

				parent.find( '.collapse-trigger' ).click();
			}
		}
	});
}

// == Auto Hide ===========================

function initAutoHide() {

	hideElement( jQuery( '.popout-trigger' ), jQuery( '.popout' ) );
}

function hideElement( targetElement, hideElement ) {

	jQuery( window ).click( function( e ) {

	    if ( !targetElement.is( e.target ) && targetElement.has( e.target ).length === 0 ) {

			jQuery( hideElement ).slideUp();

	        targetElement.removeClass( 'active' );
	    }
	});
}

// == Window Resize, Scroll ===============

function initWindowResize() {

	//resizeElements();

	jQuery( window ).resize( function () {

		//resizeElements();
	});
}

function initWindowScroll() {

	jQuery( window ).scroll(function() {

		var scrolledY = jQuery( window ).scrollTop();

	  	// Do scroll specific tasks
	});
}

function resizeElements() {

	// Resize elements on window resize
}
