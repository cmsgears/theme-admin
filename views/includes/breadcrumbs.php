<?php
use yii\widgets\Breadcrumbs;

$breadcrumbs	= Yii::$app->controller->getBreadcrumbs();
?>
<?= Breadcrumbs::widget([
	'tag' => 'div', 'homeLink' => false,
    'itemTemplate' => '<span><span class="link"> {link} </span><span class="seperator fas fa-long-arrow-alt-right"></span>',
    'activeItemTemplate' => '<span><span class="active"> {link} </span>',
    'links' => isset( $breadcrumbs ) ? $breadcrumbs : []
]) ?>
