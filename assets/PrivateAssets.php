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
 * PrivateAssets registers the private assets required for private pages.
 *
 * @since 1.0.0
 */
class PrivateAssets extends AssetBundle {

	// Variables ---------------------------------------------------

	// Globals -------------------------------

	// Constants --------------

	// Public -----------------

	// Protected --------------

	// Variables -----------------------------

	// Public -----------------

	// Load css
	public $css = [
		'styles/private.css'
	];

	// Protected --------------

	// Private ----------------

	// Traits ------------------------------------------------------

    // Constructor and Initialisation ------------------------------

	public function init() {

		parent::init();

		$this->js[] = 'scripts/templates/private.js';

		$this->js[] = 'scripts/apix/private.js';

		$this->js[] = 'scripts/apps/private.js';

		$this->js[] = 'scripts/apps/core/services/user.js';
		$this->js[] = 'scripts/apps/core/controllers/main.js';
		$this->js[] = 'scripts/apps/core/controllers/user.js';
		$this->js[] = 'scripts/apps/core/controllers/admin.js';
		$this->js[] = 'scripts/apps/notify/base.js';

		$this->js[] = 'scripts/main.js';
		$this->js[] = 'scripts/search.js';
		$this->js[] = 'scripts/sliders.js';
		$this->js[] = 'scripts/popups.js';

		$this->depends[] = 'cmsgears\assets\components\DateTimeAssets';
		$this->depends[] = 'cmsgears\assets\vapps\CoreAssets';
		$this->depends[] = 'cmsgears\assets\vapps\NotifyAssets';
	}

	// Instance methods --------------------------------------------

	// Yii interfaces ------------------------

	// Yii parent classes --------------------

	// CMG interfaces ------------------------

	// CMG parent classes --------------------

	// PrivateAssets -------------------------

}
