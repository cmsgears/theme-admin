<?php
use yii\widgets\Breadcrumbs;
?>
<?= Breadcrumbs::widget([
	'tag' => 'div', 'homeLink' => false,
    'itemTemplate' => '<span><span class="link">{link}</span><span class="seperator fa fa-long-arrow-right"></span>',
    'activeItemTemplate' => '<span><span class="active">{link}</span>',
    'links' => isset( $this->params[ 'breadcrumbs' ] ) ? $this->params[ 'breadcrumbs' ] : []
]) ?>
