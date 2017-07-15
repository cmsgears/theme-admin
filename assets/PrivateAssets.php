<?php
namespace themes\admin\assets;

// Yii Imports
use yii\web\AssetBundle;
use yii\web\View;

class PrivateAssets extends AssetBundle {

	// Variables ---------------------------------------------------

	// Globals -------------------------------

	// Constants --------------

	// Public -----------------

	// Protected --------------

	// Variables -----------------------------

	// Public -----------------

	// Path Configuration
	public $sourcePath	= '@themes/admin/resources';

	// Load css
	public $css     = [
		'styles/private.css'
	];

	// Position to load css
	public $cssOptions = [
		'position' => View::POS_HEAD
	];

	// Load Javascript
	public $js      = [
		'scripts/main.js',
		'scripts/search.js',
		'scripts/apps/main.js',
		'scripts/apps/site.js',
		'scripts/apps/user.js'
	];

	// Position to load Javascript
	public $jsOptions = [
		'position' => View::POS_END
	];

	// Define dependent Asset Loaders
	public $depends = [
		'cmsgears\core\common\assets\Jquery',
		'cmsgears\core\common\assets\JqueryUi',
		'cmsgears\core\common\assets\JqueryMouseWheel',
		'cmsgears\core\common\assets\MCustomScrollbar',
		'cmsgears\core\common\assets\ImagesLoaded',
		'cmsgears\core\common\assets\Handlebars',
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

	// PrivateAssets -------------------------

}
