/* Default Controller */
var ACTION_UPDATE_SETTINGS 		= 'settings';

/* Category Controller */
var CONTROLLER_CATEGORY			= 'category';
var ACTION_CATEGORY_CREATE 		= 'create';
var ACTION_CATEGORY_UPDATE 		= 'update';
var ACTION_CATEGORY_DELETE 		= 'delete';

/* Gallery Controller */
var CONTROLLER_GALLERY			= 'gallery';
var ACTION_ITEM_UPDATE			= 'updateItem';

// global variables
var fullContent = false;

// initialise on page load
jQuery( document ).ready( function() {

	// Forms
	jQuery( ".frm-ajax" ).processAjax();
	
	jQuery( ".request-ajax" ).processAjax( { form: false } );
});

// Forms --------------------------------------------------------------------------

function postCMGProcessorSuccess( formId, controllerId, actionId, data ) {

	switch( controllerId ) {

		case CONTROLLER_DEFAULT: {

			switch( actionId ) {

				case ACTION_AVATAR: {

					jQuery( "#" + formId ).parent().hide();

					break;
				}
			}

			break;
		}
		case CONTROLLER_CATEGORY:
		{
			switch( actionId ) {

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
		case CONTROLLER_GALLERY:
		{
			switch( actionId ) {
				
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

postCmtApiProcessor.addSuccessListener( postCMGProcessorSuccess );