<?php
namespace themes\admin;

use \Yii;

class Theme extends \yii\base\Theme {

    public $pathMap = [
        '@admin/views' => '@themes/admin/views',
        '@admin/modules' => '@themes/admin/modules'
    ];

    public function init() {

        parent::init();

		// The path for images directly accessed using the img tag 
		Yii::setAlias( "@images", "@web/images" );

		// The path for templates
		Yii::setAlias( "@templates", "@themes/admin/views/templates" );
    }
}