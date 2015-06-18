// Browser Features ------------------------------------------

function isCanvasSupported() {

	// Canvas support
	var elem 			= document.createElement( 'canvas' );
	var canvasSupported = !!( elem.getContext && elem.getContext( '2d' ) );

	return canvasSupported;
}

function isXhrSupported() {

	var xhr	= new XMLHttpRequest();

	return xhr.upload;
}

function isFileApiSupported() {

	return window.File && window.FileList && window.FileReader;	
}

function isFormDataSupported() {

	return !! window.FormData;
}

function isCanvasDataUrlSupported() {

	// Used image/png for testing purpose

	var cvsTest 			= document.createElement( "canvas" );
	var data				= cvsTest.toDataURL( "image/png" );
	var toDataUrlSupported	= data.indexOf( "data:image/png" ) == 0;

	return toDataUrlSupported;
}

// Image Aspect Ratio ----------------------------------------

function arDimensions( image, targetWidth, targetHeight ) {

        var ratio 	= 0;
        var width 	= image.width;
        var height 	= image.height;

        // Check if the current width is larger than the max
        if( width > targetWidth ) {
        	
            ratio 	= targetWidth / width;
            height 	= height * ratio;
            width 	= width * ratio;
        }

        // Check if current height is larger than max
        if( height > targetHeight ) {

            ratio 	= targetHeight / height;
            width 	= width * ratio;
        }

        return new Array( width, height );
}

// Draw Image on Canvas --------------------------------------

function drawImage( canvas, imageFile ) {

	if( null != canvas ) {

		var width		= canvas.width;
		var height		= canvas.height;

		var context 	= canvas.getContext( '2d' );
	    var image 		= new Image();
	    var image_url 	= window.URL || window.webkitURL;
	    var image_src 	= image_url.createObjectURL( imageFile );
	    image.src 		= image_src;

	    image.onload = function() {

	        var dims = arDimensions( image, width, height );

	        context.drawImage( image, 0, 0, dims[0], dims[1] );

	        image_url.revokeObjectURL( image_src );
	    };
	}
}

// URL Params Manager ----------------------------------------

String.prototype.urlParams = function( e, t ) {

	var n;
	var r 	= "";
	var i 	= $("<a />").attr( "href", this )[ 0 ];
	var s,o	= /\+/g;
	var u	= /([^&=]+)=?([^&]*)/g;
	var a	= function( e ) { return decodeURIComponent( e.replace( o, " " ) ); };
	var f 	= i.search.substring(1);
	n		= {};

	while( s = u.exec( f ) ) {

		n[ a( s[1] ) ] = a( s[2] );
	}

	if( !e && !t ) {

		return n;
	}
	else if( e && !t ) { 

		return n[e];
	}
	else {

		n[e]	= t; 
		var l	= [];

		for( var c in n ) {

			l.push( encodeURIComponent( c ) + "=" + encodeURIComponent( n[c] ) );
		}
		
		if( l.length > 0 ) {

			r = "?" + l.join( "&" );
		}
		
		return i.origin + i.pathname + r;
	}
};
