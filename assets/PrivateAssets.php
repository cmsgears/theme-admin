<?php
namespace themes\admin\assets;

// Yii Imports
use \Yii;
use yii\web\AssetBundle;
use yii\web\View;

class PrivateAssets extends AssetBundle {

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
        'scripts/main.js',
        'scripts/applications.js'
    ];

	// Position to load Javascript
    public $jsOptions = [
        'position' => View::POS_END
    ];

	// Define dependent Asset Loaders
    public $depends = [
		'yii\web\JqueryAsset',
		'cmsgears\core\common\assets\JqueryUi',
		'cmsgears\core\common\assets\JqueryMouseWheel',
		'cmsgears\core\common\assets\MCustomScrollbar',
		'cmsgears\core\common\assets\ImagesLoaded',
		'cmsgears\core\common\assets\Handlebars',
		'cmsgears\core\common\assets\CmgTools',
		'cmsgears\icons\assets\IconAssets'
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