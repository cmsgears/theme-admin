jQuery( document ).ready( function() {

	initPreloaders();

	initCmgTools();

	initListeners();

	initTemplates();

	activateSettingsBox();
});

// Content Pre-loaders -------------

function initPreloaders() {

	// Hide global pre-loader spinner
	jQuery( '.container-main' ).imagesLoaded( { background: true }, function() {

		jQuery( '#pre-loader-main' ).fadeOut( 'slow' );
	});
}

// CMGTools ------------------------

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

	// File Uploader
	jQuery( '.file-uploader' ).cmtFileUploader();

	// Popups
	jQuery( '.popup' ).cmtPopup();

	// Custom Select
	jQuery( '.cmt-select' ).cmtSelect( { iconHtml: '<span class="cmti cmti-chevron-down"></span>' } );

	// Custom Checkbox
	jQuery( '.cmt-checkbox' ).cmtCheckbox();

	// Form with Info
	jQuery( '.box-form' ).cmtFormInfo();

	// Collapsible Menu
	jQuery( '#sidebar-main' ).cmtCollapsibleMenu();

	// Icon Picker
	jQuery( '.icon-picker' ).cmtIconPicker();
}

// Generic Listeners ---------------

function initListeners() {

	// Datepicker
	if( jQuery().datepicker ) {

		var start 	= jQuery( '.datepicker' ).attr( 'start' );

		jQuery( '.datepicker' ).datepicker({
			dateFormat: 'yy-mm-dd',
			minDate: start
		});
	}

	// Popout Trigger
	jQuery( '.btn-popout' ).click( function() {

		jQuery( '.btn-popout' ).removeClass( 'active' );
		jQuery(this).toggleClass( 'active' );
		var popoutId	= '#' + jQuery( this ).attr( 'popout' );
		var show 		= jQuery( popoutId );

		if( show.is( ':visible' ) ) {

			show.slideUp();
			jQuery( '.btn-popout' ).removeClass( 'active' );
		}
		else {

			jQuery( '.popout' ).hide();

			show.slideDown();
		}
	});

	// custom scroller
	if( jQuery().mCustomScrollbar ) {

		jQuery( '.cscroller' ).mCustomScrollbar( { autoHideScrollbar: true } );
	}

	//Profile tabs
	if( jQuery().tabs ) {

		jQuery( '.tabs-default' ).tabs();
	}
}

// Sidebar/Settings ----------------

function activateSettingsBox() {

	jQuery( '.box-settings .box-wrap-content' ).hide();

	jQuery( '.box-settings .btn-collapse' ).click( function() {

		var parent	= jQuery( this ).closest( '.box-settings' );
		var content = parent.find( '.box-wrap-content' );

		if( content.is( ':visible' ) ) {

			content.slideUp( 'fast' );
		}
		else {

			content.slideDown( 'slow' );

			if( content.html().length < 5 ) {

				parent.find( '.collapse-trigger' ).click();
			}
		}
	});
}

// Templates -----------------------

function initTemplates() {

	// Templates
	var templateCheck = jQuery( '.template-file' );

	if( templateCheck.length > 0 ) {

		var templateCheckParent	= templateCheck.closest( '#frm-template' );

		if( templateCheck.prop( 'checked' ) ) {

			templateCheckParent.find( '.render-file' ).show();
			templateCheckParent.find( '.render-content' ).hide();
		}
		else {

			templateCheckParent.find( '.render-file' ).hide();
			templateCheckParent.find( '.render-content' ).show();
		}

		templateCheck.click( function() {

			if( templateCheck.prop( 'checked' ) ) {

				templateCheckParent.find( '.render-file' ).fadeIn( 'slow' );
				templateCheckParent.find( '.render-content' ).fadeOut( 'fast' );
			}
			else {

				templateCheckParent.find( '.render-content' ).fadeIn( 'slow' );
				templateCheckParent.find( '.render-file' ).fadeOut( 'fast' );
			}
		});
	}
}