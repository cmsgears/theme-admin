// == Application =========================

jQuery( document ).ready( function() {
	
	// Access App
	var app	= cmt.api.root.getApplication( 'core' );

	// Map Controllers
	app.mapController( 'user', 'cmg.core.controllers.AdminController' );

});

// == User Controller =====================

cmg.core.controllers.AdminController = function() {};

cmg.core.controllers.AdminController.inherits( cmt.api.controllers.RequestController );

// == Direct Calls ========================

function setAdminData( key, value ) {

	cmt.utils.ajax.triggerPost( ajaxUrl + "admin/set-data", "Meta[key]=" + key + "&Meta[value]=" + value );
}

function removeAdminData( key ) {

	cmt.utils.ajax.triggerPost( ajaxUrl + "admin/remove-data", "Meta[key]=" + key );
}

function setAdminAttribute( key, value ) {

	cmt.utils.ajax.triggerPost( ajaxUrl + "admin/set-attribute", "Meta[key]=" + key + "&Meta[value]=" + value );
}

function removeAdminAttribute( key ) {

	cmt.utils.ajax.triggerPost( ajaxUrl + "admin/remove-attribute", "Meta[key]=" + key );
}

function setAdminConfig( key, value ) {

	cmt.utils.ajax.triggerPost( ajaxUrl + "admin/set-config", "Meta[key]=" + key + "&Meta[value]=" + value );
}

function removeAdminConfig( key ) {

	cmt.utils.ajax.triggerPost( ajaxUrl + "admin/remove-config", "Meta[key]=" + key );
}

function setAdminSetting( key, value ) {

	cmt.utils.ajax.triggerPost( ajaxUrl + "admin/set-setting", "Meta[key]=" + key + "&Meta[value]=" + value );
}

function removeAdminSetting( key ) {

	cmt.utils.ajax.triggerPost( ajaxUrl + "admin/remove-setting", "Meta[key]=" + key );
}

// == Additional Methods ==================
