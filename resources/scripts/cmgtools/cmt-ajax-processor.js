/***************************************************************************************************
Dependencies: jQuery 1.11.0
Description: The ajax processor can be used to submit ajax forms using jQuery. It's tested for JQuery 1.11.0, 
			 but it should work fine for other versions which support ajax. It can also be used to submit
			 table rows or any html element having child form elements as ajax request using same technique.
***************************************************************************************************/

/* Form Groups slot reserved for Framework - 1 to 10000. */
var FORM_GROUP_DEFAULT	= 0;

/* Form Keys slot reserved for Framework - 1 to 10000. */
var FORM_KEY_DEFAULT	=  0;
var FORM_KEY_LOGIN		=  5;

// Ajax Processor Plugin
( function( cmg ) {

	cmg.fn.processAjax = function( options ) {

		// == Init == //

		// Configure Modules
		var settings 		= cmg.extend( {}, cmg.fn.processAjax.defaults, options );
		var ajaxCallers		= this;

		// Iterate and initialise all the fox sliders
		ajaxCallers.each( function() {

			var ajaxCaller = cmg( this );

			init( ajaxCaller );
		});

		// return control
		return;

		// == Private Functions == //

		// Initialise Module
		function init( ajaxCaller ) {

			if( settings.form ) {
	
				ajaxCaller.submit( function( event ) {

					event.preventDefault();

					var id		= jQuery( this ).attr( "id" );
					var group	= jQuery( this ).attr( "group" );
					var key		= jQuery( this ).attr( "key" );

					if( settings.numericGroupKey ) {
						
						if( null != group && group.length > 0 ) {
							
							group	= parseInt( group );
						}
						else {
							
							group	= 0;
						}
						
						if( null != key && key.length > 0 ) {
							
							key		= parseInt( key );
						}
						else {

							key		= 0;
						}
					}

					if( settings.json ) {

						submitRestForm( id, group, key );
					}
					else {

						submitAjaxForm( id, group, key );
					}
				});
			}
			else {
				
				jQuery( ajaxCaller ).find( ".submit" ).click( function( e ) {

					e.preventDefault();

					var request	= jQuery( this ).attr( "request" );
					request		= jQuery( "#" + request );
					var id		= request.attr( "id" );
					var group	= request.attr( "group" );
					var key		= request.attr( "key" );

					if( settings.numericGroupKey ) {
						
						if( null != group && group.length > 0 ) {
							
							group	= parseInt( group );
						}
						else {
							
							group	= 0;
						}
						
						if( null != key && key.length > 0 ) {
							
							key		= parseInt( key );
						}
						else {

							key		= 0;
						}
					}

					submitAjaxRequest( id, group, key );
				});
			}
		}

		/* Submit Regular Ajax Form */
		function submitAjaxForm( requestId, formGroup, formKey ) {
		
			var form			= jQuery( "#" + requestId );
			var httpMethod		= form.attr( "method" );
			var actionUrl		= form.attr( "action" );
			var statusMessage	= jQuery( "#" + requestId + " .frm-message" );
		
			// Hide message
			statusMessage.hide();

			// Hide all errors
			jQuery( "#" + requestId + " .error" ).hide();

			// Pre Process Form
			if( !preAjaxProcessor.processPre( requestId, formGroup, formKey ) ) {
		
				return false;
			}
		
			// Generate form data for submission
			var formData	= form.serialize();
			
			if( null != jQuery( 'meta[name=csrf-token]' ) ) {

				var csrfToken 	= jQuery( 'meta[name=csrf-token]' ).attr( 'content' );
	
				formData 	   += "&_csrf=" + csrfToken;
			}
			
			// Show Spinner
			jQuery( "#" + requestId + " .frm-spinner" ).show();

			jQuery.ajax( {
				type: httpMethod,
				url: actionUrl,
				data: formData,
				dataType: "JSON",
				success: function( response, textStatus, XMLHttpRequest ) {

					// Process response
					processAjaxResponse( requestId, formGroup, formKey, statusMessage, response );
				}
			} );

			return false;
		}

		/* Submit Rest Form */
		function submitRestForm( requestId, formGroup, formKey ) {
		
			var form			= jQuery("#" + requestId );
			var httpMethod		= form.attr( "method" );
			var actionUrl		= form.attr( "action" );
			var statusMessage	= form.children( ".frm-message" );

			// Hide Status
			statusMessage.hide();
		
			// Hide all errors
			jQuery( "#" + requestId + " .error" ).hide();
		
			// Hide message
			jQuery( "#" + requestId + " .frm-message" ).hide();
		
			// Pre Process Form
			if( !preAjaxProcessor.processPre( requestId, formGroup, formKey ) ) {
		
				return false;
			}
		
			// Generate form data for submission
			var formData		= form.serializeJSON();

			// Show Spinner
			jQuery( "#" + requestId + " .frm-spinner" ).show();

			jQuery.ajax({
				type: httpMethod,
				url: actionUrl,
				data: JSON.stringify( formData ),
				dataType: "JSON",
				contentType: "application/json;charset=UTF-8",
				success: function( response, textStatus, XMLHttpRequest ) {
					
					// Process response
					processAjaxResponse( requestId, formGroup, formKey, statusMessage,  response );
				}
			});

			return false;
		}

		/* Submit Regular Ajax Request */
		function submitAjaxRequest( requestId, formGroup, formKey ) {

			var parent			= jQuery("#" + requestId );
			var actionUrl		= parent.attr( "action" );
			var statusMessage	= parent.children( ".frm-message" );

			// Hide Status
			statusMessage.hide();
		
			// Hide all errors
			jQuery( "#" + requestId + " .error" ).hide();
		
			// Hide message
			jQuery( "#" + requestId + " .frm-message" ).hide();

			// Pre Process Form
			if( !preAjaxProcessor.processPre( requestId, formGroup, formKey ) ) {

				return false;
			}

			// Generate form data for submission
			var requestData	= serializeRow( parent );

			if( null != jQuery( 'meta[name=csrf-token]' ) ) {

				var csrfToken 	= jQuery( 'meta[name=csrf-token]' ).attr( 'content' );

				requestData += "&_csrf=" + csrfToken;
			}

			// Show Spinner
			jQuery( "#" + requestId + " .frm-spinner" ).show();

			jQuery.ajax({
				type: "POST",
				url: actionUrl,
				data: requestData,
				dataType: "JSON",
				success: function( response, textStatus, XMLHttpRequest ) {

					// Process response
					processAjaxResponse( requestId, formGroup, formKey, statusMessage,  response );
				}
			});

			return false;
		}

		/* Process ajax response */
		function processAjaxResponse( requestId, formGroup, formKey, statusMessage,  response ) {
		
			var result 		= response['result'];
			var message 	= response['message'];
			var data		= response['data'];
			var errors		= response['errors'];

			if( result == 1 ) {

				statusMessage.html( message );
				statusMessage.show();

				// Hide all errors
				jQuery("#" + requestId + " .error").hide();
				
				// Hide Spinner
				jQuery( "#" + requestId + " .frm-spinner" ).hide();

				// Check to keep form data
				var keepData = jQuery("#" + requestId ).attr( "keepData" );

				if( !keepData ) {
		
					// Clear all form fields
					jQuery("#" + requestId + " input[type='text']").val( '' );
					jQuery("#" + requestId + " input[type='password']").val( '' );
					jQuery("#" + requestId + " textarea").val( '' );
				}
		
				// Pass the data for post processing
				postAjaxProcessor.processSuccess( requestId, formGroup, formKey, data );
			}
			else if( result == 0 ) {

				// Hide Spinner
				jQuery( "#" + requestId + " .frm-spinner" ).hide();

				for( var key in errors ) {
					
		        	var fieldName 		= key;
		        	var errorMessage 	= errors[key];
		        	var errorField		= jQuery( "#" + requestId + " span[formError='" + fieldName + "']" );
		        
		        	errorField.html( errorMessage );
		        	errorField.show();
		    	}
		
				statusMessage.html( message );
				statusMessage.show();
			
				postAjaxProcessor.processFailure( requestId, formGroup, formKey, data );
			}
		}
	};

	// Default Settings
	cmg.fn.processAjax.defaults = {
		numericGroupKey: true, 
		form: true,
		json: false
	};

}( jQuery ) );

/* Ajax Pre Processor */

function PreAjaxProcessor() {
	
	this.formListeners	= Array();
}

PreAjaxProcessor.prototype.addListener = function( listener ) {
	
	this.formListeners.push( listener );
};

PreAjaxProcessor.prototype.processPre = function( requestId, group, key ) {

	var formListeners	= this.formListeners;
	var length 			= formListeners.length;

	for( var i = 0; i < length; i++ ) {

		if( !formListeners[i]( requestId, group, key ) ) {

			return false;
		}
	}

	return true;
};

/* Ajax Post Processor */

function PostAjaxProcessor() {
	
	this.successListeners	= Array();
	this.failureListeners	= Array();
}

PostAjaxProcessor.prototype.addSuccessListener = function( listener ) {
	
	this.successListeners.push( listener );
};

PostAjaxProcessor.prototype.addFailureListener = function( listener ) {
	
	this.failureListeners.push( listener );
};

PostAjaxProcessor.prototype.processSuccess = function( requestId, group, key, data ) {

	var successListeners	= this.successListeners;
	var length 				= successListeners.length;

	for( var i = 0; i < length; i++ ) {

		successListeners[i]( requestId, group, key, data );
	}
};

PostAjaxProcessor.prototype.processFailure = function( requestId, group, key, data ) {

	var failureListeners	= this.failureListeners;
	var length 				= failureListeners.length;

	for( var i = 0; i < length; i++ ) {

		failureListeners[i]( requestId, group, key, data );
	}
};

/* Core - Pre Ajax Processor */

function processCoreAjaxPre( requestId, group, key ) {

	return true;
}

/* Core - Post Ajax Processor */

function processCoreAjaxSuccess( requestId, group, key, data ) {

}

function processCoreAjaxFailure( requestId, group, key, data ) {

}

/* Initialise Form Processors */

var preAjaxProcessor	= new PreAjaxProcessor();
var postAjaxProcessor	= new PostAjaxProcessor();

preAjaxProcessor.addListener( processCoreAjaxPre );
postAjaxProcessor.addSuccessListener( processCoreAjaxSuccess );
postAjaxProcessor.addFailureListener( processCoreAjaxFailure );

/* Forms Utilitties -------------------------------------------------------------------- */

/* Form to JSON Jquery Plugin -*/

jQuery.fn.serializeJSON = function() {

	var json 		= {};
	var formData	= jQuery( this ).serializeArray();

	if( null != jQuery( 'meta[name=csrf-token]' ) ) {

		var csrfToken 	= jQuery( 'meta[name=csrf-token]' ).attr( 'content' );

		formData.push( { name: "_csrf", value: csrfToken } );
	}

	jQuery.map( formData, function(n, i) {

		var _ = n.name.indexOf('[');

		if (_ > -1) {

			var o = json;
			_name = n.name.replace(/\]/gi, '').split('[');

			for (var i=0, len=_name.length; i<len; i++) {

				if (i == len-1) {

					if (o[_name[i]]) {

						if (typeof o[_name[i]] == 'string') {

							o[_name[i]] = [o[_name[i]]];
						}

						o[_name[i]].push(n.value);
					}

					else o[_name[i]] = n.value || '';
				}

				else o = o[_name[i]] = o[_name[i]] || {};
			}
		}
		else {

			if (json[n.name] !== undefined) {
				
				if (!json[n.name].push) {

					json[n.name] = [json[n.name]];
				}

				json[n.name].push(n.value || '');
			}
			else {

				json[n.name] = n.value || '';
			}	
		}
	});
	
	return json;
};

/* serialize table row */
function serializeRow( row ) {

	var toReturn	= [];
	var els 		= row.find(':input').get();

	jQuery.each(els, function() {

		if (this.name && !this.disabled && (this.checked || /select|textarea/i.test(this.nodeName) || /text|hidden|password/i.test(this.type))) {

			var val = $(this).val();

			toReturn.push( encodeURIComponent(this.name) + "=" + encodeURIComponent( val ) );
		}
	});

	return toReturn.join( "&" ).replace( /%20/g, "+" );
}