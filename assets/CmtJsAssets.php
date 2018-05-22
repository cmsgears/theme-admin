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
 * CmtJsAssets registers the JS assets provided by CMGTools.
 *
 * @since 1.0.0
 */
class CmtJsAssets extends AssetBundle {

	// Variables ---------------------------------------------------

	// Globals -------------------------------

	// Constants --------------

	// Public -----------------

	// Protected --------------

	// Variables -----------------------------

	// Public -----------------

	// Path Configuration
	public $sourcePath = '@bower/cmt-js/src/cmg';

	// Load JS
	public $js = [
		'apps/core/grid.js',
		'apps/core/mapper.js',
		'apps/core/comment.js',
		'apps/core/location.js',
		'apps/core/notify/base.js',
		'apps/core/notify/notification.js',
	];

	// JS Position
	public $jsOptions = [
		'position' => View::POS_END
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

	// CmtJsAssets ---------------------------

}
