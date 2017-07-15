jQuery( document ).ready( function() {

	initPreloaders();

	initCmgTools();

	initListeners();

	initPopouts();

	initSidebar();

	initSidebarTabs();

	initTemplates();

	activateSettingsBox();
});

// == Pre Loaders =========================

function initPreloaders() {

	// Hide global pre-loader spinner
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

// == JS Listeners ========================

function initListeners() {

	// Datepicker
	if( jQuery().datepicker ) {

		var start 	= jQuery( '.datepicker' ).attr( 'start' );

		jQuery( '.datepicker' ).datepicker({
			dateFormat: 'yy-mm-dd',
			minDate: start
		});
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

// == Popouts =============================

function initPopouts() {

	jQuery( '.btn-popout' ).click( function() {

		jQuery( '.btn-popout' ).removeClass( 'active' );

		jQuery( this ).addClass( 'active' );

		var popoutId		= "#" + jQuery( this ).attr( 'popout' );
		var targetPopout 	= jQuery( popoutId );

		if( targetPopout.is( ':visible' ) ) {

			jQuery( this ).removeClass( 'active' );

			targetPopout.slideUp();
		}
		else {

			jQuery( '.popout' ).hide();

			targetPopout.slideDown();
		}
	});
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

function activateSettingsBox() {

	jQuery( '.box-settings .box-content-wrap' ).hide();

	jQuery( '.box-settings .box-btn-collapse' ).click( function() {

		var parent		= jQuery( this ).closest( '.box-settings' );
		var contentWrap = parent.find( '.box-content-wrap' );
		var content		= contentWrap.find( '.box-content' );

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

// == Templates ===========================

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
