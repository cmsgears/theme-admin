<?php
/**
 * This file is part of CMSGears Framework. Please view License file distributed
 * with the source code for license details.
 *
 * @link https://www.cmsgears.org/
 * @copyright Copyright (c) 2015 VulpineCode Technologies Pvt. Ltd.
 */

namespace themes\admin\assets;

// Yii Imports
use yii\web\AssetBundle;
use yii\web\View;

/**
 * PrivateAssets registers the private assets required for private pages.
 *
 * @since 1.0.0
 */
class PrivateAssets extends AssetBundle {

	// Variables ---------------------------------------------------

	// Globals -------------------------------

	// Constants --------------

	// Public -----------------

	// Protected --------------

	// Variables -----------------------------

	// Public -----------------

	// Path Configuration
	public $sourcePath = '@themes/admin/resources';

	// Load css
	public $css = [
		'styles/private.css'
	];

	// CSS Position
	public $cssOptions = [
		'position' => View::POS_HEAD
	];

	// Load JS
	public $js = [
		// vendor
		// templates
		'scripts/templates/public.js',
		'scripts/templates/private.js',
		// scripts
		'scripts/main.js',
		'scripts/search.js',
		// apix
		'scripts/apix/public.js',
		'scripts/apix/private.js',
		// apps
		'scripts/apps/public.js',
		'scripts/apps/private.js',
		'scripts/apps/user.js'
	];

	// JS Position
	public $jsOptions = [
		'position' => View::POS_END
	];

	// Dependent Assets
	public $depends = [
		'cmsgears\assets\jquery\Jquery',
		'cmsgears\assets\jquery\JqueryUi',
		'cmsgears\assets\jquery\JqueryMouseWheel',
		'cmsgears\assets\components\MCustomScrollbar',
		'cmsgears\assets\utilities\ImagesLoaded',
		'cmsgears\assets\templates\Handlebars',
		'cmsgears\assets\cmgtools\Velocity',
		'cmsgears\icons\assets\IconAssets'
	];

	// Protected --------------

	// Private ----------------

	// Traits ------------------------------------------------------

	// Constructor and Initialisation ------------------------------

	// Instance methods --------------------------------------------

	// Yii interfaces ------------------------

	// Yii parent classes --------------------

	// CMG interfaces ------------------------

	// CMG parent classes --------------------

	// PrivateAssets -------------------------

}
