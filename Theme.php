<?php
namespace themes\admin;

// Yii Imports
use \Yii;

class Theme extends \cmsgears\core\common\base\Theme {

    public $pathMap = [
        '@admin/views' => '@themes/admin/views',
        '@admin/modules' => '@themes/admin/modules'
    ];

    public function init() {

        parent::init();
		
		// Initialise theme
    }
}