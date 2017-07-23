var notificationApp	= null;

jQuery( document ).ready( function() {

	// App
	notificationApp		= new cmt.api.Application( { basePath: ajaxUrl } );

	// Controllers
	var controllers					= [];

	controllers[ 'notification' ]	= 'NotificationController';

	// Init App
	jQuery( '[cmt-app=notification]' ).cmtRequestProcessor({
		app: notificationApp,
		controllers: controllers
	});
});

// == Notification Controller =============

NotificationController	= function() {};

NotificationController.inherits( cmt.api.controllers.BaseController );

NotificationController.prototype.toggleReadActionPost = function( success, requestElement, response ) {

	if( success ) {

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
	}
};

NotificationController.prototype.readActionPost = function( success, requestElement, response ) {

	if( success ) {

		if( requestElement.is( '[redirect]' ) ) {

			window.location = requestElement.attr( 'redirect' );
		}
		else {

			location.reload( true );
		}
	}
};

NotificationController.prototype.trashActionPost = function( success, requestElement, response ) {

	if( success ) {

		location.reload( true );
	}
};

NotificationController.prototype.deleteActionPost = function( success, requestElement, response ) {

	if( success ) {

		location.reload( true );
	}
};
