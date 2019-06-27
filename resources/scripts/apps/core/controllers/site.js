// == Application =========================

jQuery( document ).ready( function() {

	var app	= cmt.api.root.getApplication( 'core' );
});

// == Site Controller =====================

cmg.core.controllers.SiteController.prototype.checkUserActionPre = function( requestElement ) {

	var event = requestElement.attr( 'data-event' );

	switch( event ) {
		
		case 'review': {

		}
	}

	return true;
};

cmg.core.controllers.SiteController.prototype.checkUserActionSuccess = function( requestElement, response ) {

	var event = requestElement.attr( 'data-event' );

	switch( event ) {

		case 'review': {

			break;
		}
	}
};

cmg.core.controllers.SiteController.prototype.checkUserActionFailure = function( requestElement, response ) {

	var event = requestElement.attr( 'data-event' );

	switch( event ) {

		case 'review': {

			//window.location = siteUrl + 'login';

			break;
		}
	}
};

// == Direct Calls ========================

// == Additional Methods ==================
