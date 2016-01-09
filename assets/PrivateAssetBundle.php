<?php
namespace themes\admin\assets;

// Yii Imports
use \Yii;
use yii\web\AssetBundle;
use yii\web\View;

class PrivateAssetBundle extends AssetBundle {

	// Variables ---------------------------------------------------

	// Public ----

	// Path Configuration
	public $sourcePath	= '@themes/admin/resources';

	// Load css
    public $css     = [
		'styles/private.css'
    ];

	// Position to load css
    public $cssOptions = [
        "position" => View::POS_HEAD
    ];

	// Load Javascript
    public $js      = [
        'scripts/vendor/imagesloaded.pkgd-3.2.0.min.js',
        'scripts/vendor/jquery.mCustomScrollbar-3.0.6.js',
        'scripts/main.js',
        'scripts/api-processor.js'
    ];

	// Position to load Javascript
    public $jsOptions = [
        'position' => View::POS_END
    ];

	// Define dependent Asset Loaders
    public $depends = [
		'yii\web\JqueryAsset',
		'cmsgears\core\common\assets\JqueryUi',
		'cmsgears\core\common\assets\CmgTools',
		'cmsgears\core\common\assets\Handlebars'
    ];

	// Constructor and Initialisation ------------------------------

	public function __construct()  {

		parent::__construct();
	}

	// Additional Assets Registration ------------------------------

	public function registerAssetFiles( $view ) {

		parent::registerAssetFiles( $view );

    	$siteUrl = "var siteUrl 		= '" . Yii::$app->homeUrl . "';
					var ajaxUrl 		= '" . Yii::$app->homeUrl . "apix';
					var fileUploadUrl	= '" . Yii::$app->homeUrl . "apix/file/file-handler';";

		$view->registerJs( $siteUrl, View::POS_END );
	}
}
?>