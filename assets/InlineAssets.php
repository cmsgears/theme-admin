<?php
namespace themes\admin\assets;

// Yii Imports
use yii\helpers\Url;
use yii\web\View;

class InlineAssets extends \yii\web\AssetBundle {

	// Variables ---------------------------------------------------

	// Globals -------------------------------

	// Constants --------------

	// Public -----------------

	// Protected --------------

	// Variables -----------------------------

	// Public -----------------

	// Path Configuration
	public $sourcePath	= '@themes/admin/resources';

	// Protected --------------

	// Private ----------------

	// Traits ------------------------------------------------------

	// Constructor and Initialisation ------------------------------

	// Instance methods --------------------------------------------

	// Yii interfaces ------------------------

	// Yii parent classes --------------------

	public function registerAssetFiles( $view ) {

		parent::registerAssetFiles( $view );

		$rootUrl = Url::toRoute( '/', true );

		$siteUrl = "var siteUrl	= '$rootUrl';
					var ajaxUrl	= '" . $rootUrl ."apix/';
					var fileUploadUrl	= '" . $rootUrl . "apix/file/file-handler';";

		$view->registerJs( $siteUrl, View::POS_END );
	}

	// CMG interfaces ------------------------

	// CMG parent classes --------------------

	// InlineAssets --------------------------

}
