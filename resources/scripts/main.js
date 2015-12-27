jQuery( document ).ready( function() {

	initPreloaders();

	initCmgTools();

	initListeners();
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
}

function initListeners() {
	
}