// == Application =========================

jQuery( document ).ready( function() {

	var app	= cmt.api.root.registerApplication( 'notification', 'cmt.api.Application', { basePath: ajaxUrl } );

	app.mapController( 'notification', 'cmg.controllers.NotificationController' );

	cmt.api.utils.request.register( app, jQuery( '[cmt-app=notification]' ) );
});

// == Controller Namespace ================

// == Notification Controller =============

cmg.controllers.NotificationController	= function() {};

cmg.controllers.NotificationController.inherits( cmt.api.controllers.BaseController );

cmg.controllers.NotificationController.prototype.toggleReadActionSuccess = function( requestElement, response ) {

	location.reload( true );

	/*
	var clickBtn	= requestElement.find( '.cmt-click' );
	var count		= response.data.unread;
	var less		= count - 1;
	var more		= count + 1;

	if( response.data.consumed ) {

		clickBtn.attr( 'title', 'Mark Unread' );
		clickBtn.removeClass( 'cmti-envelope' );
		clickBtn.addClass( 'cmti-envelope-o' );

		jQuery( ".upd-count-notification-all" ).removeClass( "upd-count-" + more );
		jQuery( ".upd-count-notification-all" ).addClass( "upd-count-" + count );
	}
	else {

		clickBtn.attr( 'title', 'Mark Read' );
		clickBtn.removeClass( 'cmti-envelope-o' );
		clickBtn.addClass( 'cmti-envelope' );

		jQuery( ".upd-count-notification-all" ).removeClass( "upd-count-" + less );
		jQuery( ".upd-count-notification-all" ).addClass( "upd-count-" + count );
	}

	jQuery( ".upd-count-notification-all" ).html( count );
	*/
};

cmg.controllers.NotificationController.prototype.readActionSuccess = function( requestElement, response ) {

	if( requestElement.is( '[redirect]' ) ) {

		window.location = requestElement.attr( 'redirect' );
	}
	else {

		location.reload( true );
	}
};

cmg.controllers.NotificationController.prototype.trashActionSuccess = function( requestElement, response ) {

	location.reload( true );
};

cmg.controllers.NotificationController.prototype.deleteActionSuccess = function( requestElement, response ) {

	location.reload( true );
};

// == Direct Calls ========================

// == Additional Methods ==================
