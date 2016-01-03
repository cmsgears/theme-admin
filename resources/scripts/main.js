jQuery( document ).ready( function() {

	initPreloaders();

	initCmgTools();

	initListeners();
	
	initSidebar();
});

function initPreloaders() {

	// Hide global pre-loader spinner
	jQuery( '.container-main' ).imagesLoaded( { background: true }, function() {

		jQuery( '#pre-loader-main' ).fadeOut( 'slow' );
	});
}

function initCmgTools() {

	// Page Blocks
	if( jQuery().cmtBlock ) {

		jQuery( ".block" ).cmtBlock({
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

		jQuery( ".popup" ).cmtPopup();
	}

	// Custom Select
	if( jQuery().cmtSelect ) {

		jQuery( ".cmt-select" ).cmtSelect( { iconHtml: "<span class='cmti cmti-chevron-down'></span>" } );
	}

	// Custom Checkbox
	if( jQuery().cmtCheckbox ) {

		jQuery( ".cmt-checkbox" ).cmtCheckbox();
	}

	// Form with Info
	if( jQuery().cmtFormInfo ) {

		jQuery( ".box-form" ).cmtFormInfo();
	}
}

function initListeners() {

	// Popout Trigger
	jQuery( ".btn-popout" ).click( function() {
		
		jQuery( ".btn-popout" ).removeClass( "active" );
		jQuery(this).toggleClass( "active" );
		var popoutId	= "#" + jQuery( this ).attr( "popout" );
		var show 		= jQuery( popoutId );

		if( show.is( ":visible" ) ) {

			show.slideUp();
			jQuery( ".btn-popout" ).removeClass( "active" );
		}
		else {

			jQuery( ".popout" ).hide();

			show.slideDown();
		}
	});
}

function initSidebar() {

	// Initialise Sidebar Accordion
	jQuery( "#sidebar-main .collapsible-tab.has-children" ).click( function() {

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

function activateSettingsBox( parentElement ) {

	var parent 	= parentElement.closest( ".box-collapsible" );
	var btn		= parent.find( ".btn-collapse" );
	
	btn.unbind( "click" );

	btn.click( function() {

		var content = parent.find( ".box-wrap-content" );

		if( content.is( ':visible' ) ) {

			content.slideUp( "fast" );
		}
		else {

			content.slideDown( "slow" );
		}
	});
	
	parent.find( ".box-form" ).cmtFormInfo();
}