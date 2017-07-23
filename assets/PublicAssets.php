<?php
namespace themes\admin\assets;

// Yii Imports
use yii\web\AssetBundle;
use yii\web\View;

class PublicAssets extends AssetBundle {

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
		'styles/public.css'
	];

	// Position to load css
	public $cssOptions = [
		'position' => View::POS_HEAD
	];

	// Load Javascript
	public $js = [
		// vendor
		// templates
		'scripts/templates/public.js',
		// scripts
		'scripts/main.js',
		'scripts/search.js',
		// apix
		'scripts/apix/public.js',
		// apps
		'scripts/apps/public.js'
	];

	// Position to load Javascript
	public $jsOptions = [
		'position' => View::POS_END
	];

	// Define dependent Asset Loaders
	public $depends = [
		'cmsgears\core\common\assets\Jquery',
		'cmsgears\core\common\assets\ImagesLoaded',
		'cmsgears\core\common\assets\CmgToolsJs',
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

	// PublicAssets --------------------------

}
