<?php
/**
 * This file is part of CMSGears Framework. Please view License file distributed
 * with the source code for license details.
 *
 * @link https://www.cmsgears.org/
 * @copyright Copyright (c) 2015 VulpineCode Technologies Pvt. Ltd.
 */

namespace themes\admin\assets;

/**
 * PublicAssets registers the public assets required for public pages.
 *
 * @since 1.0.0
 */
class PublicAssets extends AssetBundle {

	// Variables ---------------------------------------------------

	// Globals -------------------------------

	// Constants --------------

	// Public -----------------

	// Protected --------------

	// Variables -----------------------------

	// Public -----------------

	// Load css
	public $css = [
		'styles/public.css'
	];

	// Protected --------------

	// Private ----------------

	// Traits ------------------------------------------------------

    // Constructor and Initialisation ------------------------------

	public function init() {

		parent::init();

		$this->js[] = 'scripts/main.js';
		$this->js[] = 'scripts/search.js';
	}

	// Instance methods --------------------------------------------

	// Yii interfaces ------------------------

	// Yii parent classes --------------------

	// CMG interfaces ------------------------

	// CMG parent classes --------------------

	// PublicAssets --------------------------

}
