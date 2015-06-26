/* Default Controller */
var ACTION_UPDATE_SETTINGS 		= 'settings';

/* Category Controller */
var CONTROLLER_CATEGORY			= 'category';
var ACTION_CATEGORY_CREATE 		= 'create';
var ACTION_CATEGORY_UPDATE 		= 'update';
var ACTION_CATEGORY_DELETE 		= 'delete';

/* Slider Controller */
var CONTROLLER_SLIDER			= 'slider';
var ACTION_SLIDE_UPDATE			= 'updateSlide';

/* Gallery Controller */
var CONTROLLER_GALLERY			= 'gallery';
var ACTION_ITEM_UPDATE			= 'updateItem';

// global variables
var fullContent = false;

// initialise on page load
jQuery( document ).ready( function() {

	// Forms
	jQuery( ".frm-ajax" ).processAjax();
});

// Forms --------------------------------------------------------------------------

function postCMGProcessorSuccess( formId, formGroup, formKey, data ) {

	switch( formGroup ) {
		
		case CONTROLLER_CATEGORY:
		{
			switch( formKey ) {

				case ACTION_CATEGORY_CREATE:
				{
					jQuery(".add-cat-popup").fadeOut( 'slow' );
					location.reload();

					break;
				}
				
				case ACTION_CATEGORY_UPDATE:
				{
					jQuery(".update-cat-popup").fadeOut( 'slow' );
					location.reload();

					break;
				}
				
				case ACTION_CATEGORY_DELETE:
				{
					jQuery(".delete-cat-popup").fadeOut( 'slow' );
					location.reload();

					break;
				}
			}
			
			break;
		}
		case CONTROLLER_SLIDER:
		{
			switch( formKey ) {
				
				case ACTION_SLIDE_UPDATE:
				{
					// Reload on success
					location.reload( true );

					break;
				}
			}
			
			break;
		}
		case CONTROLLER_GALLERY:
		{
			switch( formKey ) {
				
				case ACTION_ITEM_UPDATE:
				{
					// Reload on success
					location.reload( true );

					break;
				}
			}
			
			break;	
		}
	}
}

postAjaxProcessor.addSuccessListener( postCMGProcessorSuccess );