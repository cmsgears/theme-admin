<?php
namespace themes\admin\assets;

use \Yii;
use yii\web\AssetBundle;
use yii\web\View;

class CommonAssetBundle extends AssetBundle {

	// Resources Path
    public $sourcePath = '@themes/admin/resources';

	// Load CSS
    public $css     = [
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
    public $js      = [
        "scripts/main.js",
        "scripts/api-processor.js"
    ];

	// Define the Position to load Assets
    public $jsOptions = [
        "position" => View::POS_END
    ];

	// Define dependent Asset Bundles
    public $depends = [
		'yii\web\JqueryAsset',
		'cmsgears\core\common\assets\JqueryUiAssetBundle',
		'cmsgears\core\common\assets\CMTAssetBundle'
    ];

	// Constructor and Initialisation ------------------------------

	public function __construct()  {

		parent::__construct();
	}

	public function registerAssetFiles( $view ) {

		parent::registerAssetFiles( $view );

    	$siteUrl = "var siteUrl = '" . Yii::$app->homeUrl . "';
					var fileUploadUrl = '" . Yii::$app->homeUrl . "apix/file/file-handler';";

		$view->registerJs( $siteUrl, View::POS_END );
	}
}

?>