jQuery( document ).ready( function() {

	initPreloaders();

	initCmgTools();

	initListeners();

	initTemplates();
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
	if( jQuery().cmtBlock ) {

		jQuery( '.block' ).cmtBlock({
			// Generic
			fullHeight: true,
			// Block Specific - Ignores generic
			blocks: {
				'block-public': { fullHeight: true, heightAutoMobile: true, heightAutoMobileWidth: 1024 }
			}
		});
	}

	// File Uploader
	if( jQuery().cmtFileUploader ) {

		jQuery( '.file-uploader' ).cmtFileUploader();
	}

	// Popups
	if( jQuery().cmtPopup ) {

		jQuery( '.popup' ).cmtPopup();
	}

	// Custom Select
	if( jQuery().cmtSelect ) {

		jQuery( '.cmt-select' ).cmtSelect( { iconHtml: '<span class="cmti cmti-chevron-down"></span>' } );
	}

	// Custom Checkbox
	if( jQuery().cmtCheckbox ) {

		jQuery( '.cmt-checkbox' ).cmtCheckbox();
	}

	// Form with Info
	if( jQuery().cmtFormInfo ) {

		jQuery( '.box-form' ).cmtFormInfo();
	}

	// Collapsible Menu
	if( jQuery().cmtCollapsibleMenu ) {

		jQuery( '#sidebar-main' ).cmtCollapsibleMenu();
	}
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

function activateSettingsBox( parentElement ) {

	var parent 	= parentElement.closest( '.box-collapsible' );
	var btn		= parent.find( '.btn-collapse' );

	btn.unbind( 'click' );

	btn.click( function() {

		var content = parent.find( '.box-wrap-content' );

		if( content.is( ':visible' ) ) {

			content.slideUp( 'fast' );
		}
		else {

			content.slideDown( 'slow' );
		}
	});

	parent.find( '.box-form' ).cmtFormInfo();
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