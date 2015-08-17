<?php
namespace themes\admin\assets;

use \Yii;
use yii\web\AssetBundle;
use yii\web\View;

class CommonAssetBundle extends AssetBundle {

	// Constructor and Initialisation ------------------------------

	public function __construct()  {

		parent::__construct();

		// Path Configuration

	    $this->sourcePath = dirname( __DIR__ ) . '/resources';

		// Load CSS
 
	    $this->css     = [
            "styles/reset.css",
			"styles/vendor/jpaginate.css",
            "styles/cmg/cmg-typography.css",
            "styles/cmg/cmg-containers.css",
            "styles/cmg/cmg-nav-menus.css",
            "styles/cmg/cmg-elements-site.css",
            "styles/cmg/cmg-elements-form.css",
			"styles/cmg/cmg-file-uploader.css",
            "styles/main.css"
	    ];

		// Load Javascript

	    $this->js      = [
            "scripts/vendor/conditionizr.min.js",
            "conditionizr/detects/ie6-ie7-ie8-ie9.js",
            "scripts/vendor/jquery-ui-1.11.3.min.js",
            "scripts/vendor/bpopup-rateit-jpaginate-spin.js",
            "scripts/cmgtools/cmt-core.js",
            "scripts/cmgtools/cmt-api-processor.js",
            "scripts/cmgtools/cmt-file-uploader.js",
            "scripts/cmgtools/cmt-popup.js",
            "scripts/main.js",
            "scripts/ajax-processor.js"
	    ];

		// Define the Position to load Assets
	    $this->jsOptions = [
	        "position" => View::POS_END
	    ];

		// Define dependent Asset Bundles
	    $this->depends = [
			// dependent asset bundles - classpath without leading backslash
			'yii\web\JqueryAsset'
	    ];
	}

	public function registerAssetFiles( $view ) {

		parent::registerAssetFiles( $view );

		$inlineScript	= "conditionizr.config({
			assets: 'conditionizr/resources/',
		        tests: {
		        ie6: [ 'script', 'style', 'class' ],
		        ie7: [ 'script', 'style', 'class' ],
		        ie8: [ 'script', 'style', 'class' ]
		        }
		    });

    		conditionizr.polyfill( 'scripts/vendor/html5shiv.min.js', [ 'ie6', 'ie7', 'ie8' ] );
    		conditionizr.polyfill( 'scripts/vendor/respond.min.js', [ 'ie6', 'ie7', 'ie8' ] );";

    	$siteUrl = "var siteUrl = '" . Yii::$app->homeUrl . "';
					var fileUploadUrl = '" . Yii::$app->homeUrl . "apix/file/file-handler';";

		$view->registerJs( $inlineScript, View::POS_READY );

		$view->registerJs( $siteUrl, View::POS_END );
	}
}

?>