<?php
namespace themes\admin\assets;

// Yii Imports
use \Yii;
use yii\web\AssetBundle;
use yii\web\View;
use yii\helpers\Url;

class PublicAssets extends AssetBundle {

	// Variables ---------------------------------------------------

	// Public ----

	// Path Configuration
	public $sourcePath	= '@themes/admin/resources';

	// Load css
    public $css     = [
		'styles/public.css'
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
		'cmsgears\core\common\assets\ImagesLoaded',
		'cmsgears\core\common\assets\CmgToolsJs'
    ];

	// Constructor and Initialisation ------------------------------

	public function __construct()  {

		parent::__construct();
	}

	// Additional Assets Registration ------------------------------

	public function registerAssetFiles( $view ) {

		parent::registerAssetFiles( $view );

		$rootUrl = Url::toRoute( '/', true );

    	$siteUrl = "var siteUrl 	= '$rootUrl';
					var ajaxUrl 	= '" . $rootUrl ."apix/';";

		$view->registerJs( $siteUrl, View::POS_END );
	}
}

?>