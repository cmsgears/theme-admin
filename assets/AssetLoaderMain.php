<?php
namespace themes\admin\assets;

use \Yii;
use yii\web\AssetBundle;
use yii\web\View;

class AssetLoaderMain extends AssetBundle {

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
            "scripts/cmgtools/cmt-browser-features.js",
            "scripts/cmgtools/cmt-ajax-processor.js",
            "scripts/cmgtools/cmt-file-uploader.js",
            "scripts/cmgtools/cmg-utilities.js",
            "scripts/main.js"
	    ];

		// Define the Position to load Assets
	    $this->jsOptions = [
	        "position" => View::POS_HEAD
	    ];

		// Define dependent Asset Loaders
	    $this->depends = [
			'yii\web\JqueryAsset'
	    ];
	}
}

?>