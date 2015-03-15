/* URL Params ============================================================== */

String.prototype.urlParams=function(e,t){var n;var r="";var i=$("<a />").attr("href",this)[0];var s,o=/\+/g,u=/([^&=]+)=?([^&]*)/g,a=function(e){return decodeURIComponent(e.replace(o," "))},f=i.search.substring(1);n={};while(s=u.exec(f))n[a(s[1])]=a(s[2]);if(!e&&!t){return n}else if(e&&!t){return n[e]}else{n[e]=t;var l=[];for(var c in n){l.push(encodeURIComponent(c)+"="+encodeURIComponent(n[c]))}if(l.length>0){r="?"+l.join("&")}return i.origin+i.pathname+r}}

/* Pagination ============================================================== */

function initPagination( elementSelector, pageCount, currentPage ) {

	var pages = jQuery( elementSelector );

	pages.html( "" );

	if( null == currentPage ) {

		currentPage = 1;
	}
	else {

		currentPage++;
	}

	if( pageCount > 0 ) {

		pageCount += 1;

		pages.paginate({
			count 					: pageCount,
			start 					: currentPage,
			display     			: 5,
	        border                  : true,
	        border_color            : '#74ae36',
	        text_color              : '#fff',
	        background_color        : '#74ae36',  
	        border_hover_color      : '#ccc',
	        text_hover_color        : '#000',
	        background_hover_color  : '#fff', 
	        images                  : false,
	        mouse                   : 'press',
			onChange     			: function( page ){ loadPage( elementSelector, page ); }
		});

		var left 		= pages.children(".jPag-control-front").css("left").split("px");
		left			= parseInt( left[0] );
		var width 		= pages.children(".jPag-control-front").css("width").split("px");
		width			= left + parseInt( width[0] );

		jQuery(".pagination").css( "width", width + 20 + "px" );
	}
}

function loadPage( elementSelector, page ) {

	window.location = jQuery( elementSelector ).attr( 'pageLink' ) + ( page - 1 );
}

/* Pop-Up ================================================================= */

/* Show popup */
function showPopup( popupSelector ) {

	jQuery( popupSelector ).bPopup({
	    modalClose: false,
	    opacity: 0.6,
	    positionStyle: 'fixed' //'fixed' or 'absolute'
	});	
}

/* Close popup */
function closePopup( popupSelector ) {

	jQuery( popupSelector ).bPopup().close();
}

/* Show default error popup */
function showErrorPopup( errors ) {

	jQuery( "#error-popup .popup-elements" ).html( errors );

	showPopup( "#error-popup" );
}

function hideErrorPopup() {

	closePopup( "#error-popup" );	
}

/* Show default message popup */
function showMessagePopup( message ) {

	jQuery( "#message-popup .popup-elements" ).html( message );
	
	showPopup( "#message-popup" );
}

function hideMessagePopup() {

	closePopup( "#message-popup" ); 	
}

/* Spinner ================================================================= */

/* Initialise Spinner */
var spinner_opts = {
	  lines: 15, // The number of lines to draw
	  length: 10, // The length of each line
	  width: 6, // The line thickness
	  radius: 15, // The radius of the inner circle
	  corners: 1, // Corner roundness (0..1)
	  rotate: 0, // The rotation offset
	  color: '#0355a2', // #rgb or #rrggbb
	  speed: 1, // Rounds per second
	  trail: 60, // Afterglow percentage
	  shadow: true, // Whether to render a shadow
	  hwaccel: false, // Whether to use hardware acceleration
	  className: 'spinner', // The CSS class to assign to the spinner
	  zIndex: 2e9, // The z-index (defaults to 2000000000)
	  top: 'auto', // Top position relative to parent in px
	  left: 'auto' // Left position relative to parent in px
};

/* Show Spinner */
function showSpinner( spinnerSelector ) {

	var target = jQuery( spinnerSelector )[0];

	target.style.display 	= 'block';
	target.style.visibility = 'visible';
		
	new Spinner( spinner_opts ).spin( target );
}


/* Hide Spinner */
function hideSpinner( spinnerSelector ) {

	var target = jQuery( spinnerSelector )[0];
	
	if( null != target ) {

		target.style.display 	= 'none';
		target.style.visibility = 'hidden';
		target.innerHTML		= '';
	}
}