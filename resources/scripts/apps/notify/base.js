// == Application =========================

jQuery( document ).ready( function() {

	if( jQuery( '[cmt-app=notify]' ).length > 0 ) {

		cmt.api.utils.request.triggerDirect( cmt.api.root.getApplication( 'notify' ), 'notification', 'stats', 'notify/stats/stats', 'get' );
	}
});

// == App Namespace =======================

// == Controller Namespace ================

// == Service Namespace ===================

// == Additional Methods ==================
