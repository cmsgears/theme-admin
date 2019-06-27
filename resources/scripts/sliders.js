jQuery( document ).ready( function() {

	if( jQuery().cmtSlider ) {

		initVelocitySliders();
	}

	if( jQuery().cmtGallery ) {

		initVelocityGalleries();
	}

	if( jQuery().foxslider ) {

		initFoxSliders();
	}
});

// Velocity Sliders =======================

function initVelocitySliders() {

	// Default Sliders
	jQuery( '.cmt-slider' ).cmtSlider({
		lControlContent: '<i class=\"fa fa-angle-left valign-center\"></i>',
		rControlContent: '<i class=\"fa fa-angle-right valign-center\"></i>',
		lightbox: true
	});

	// Collage Sliders
	jQuery( '.cmt-slider-collage' ).cmtSlider({
		lControlContent: '<i class=\"fa fa-angle-left valign-center\"></i>',
		rControlContent: '<i class=\"fa fa-angle-right valign-center\"></i>',
		lightbox: true,
		collage: true,
		collageLimit: 5
	});
}

// Velocity Galleries =====================

function initVelocityGalleries() {

	// Default Gallery
	jQuery( '.cmt-gallery' ).cmtGallery({
		lightbox: true
	});
}

// FoxSlider ==============================

function initFoxSliders() {

	jQuery( '.fx-slider' ).foxslider({
		controls: true,
		lControlContent: '<i class="cmti cmti-1-5x cmti-angle-left"></i>',
		rControlContent: '<i class="cmti cmti-1-5x cmti-angle-right"></i>',
		autoScrollDuration: 7000
	});
}
