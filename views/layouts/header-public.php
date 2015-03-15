<?php
use \Yii;
use yii\helpers\Html;
?>
<header class="header header-public">
    <div class="header-content clearfix">
        <?=Html::a( "<img class='logo' src='" . Yii::getAlias( '@images' ) . "/logo.png'>", [ '/site/index' ], null );?>
    </div>
</header>