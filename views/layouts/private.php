<?php
use themes\admin\assets\CommonAssetBundle;

CommonAssetBundle::register( $this );

$coreProperties = $this->context->getCoreProperties();
?>
<?php $this->beginPage(); ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
    <head>
        <?php include dirname(__DIR__) . "/headers/main.php"; ?>
    </head>
    <body>
        <?php $this->beginBody(); ?>
        <div class="container-main">
	        <?php include dirname(__DIR__) . "/headers/private.php"; ?>
	        <div class="container-content">
		        <?php include dirname(__DIR__) . "/sidebars/sidebar.php"; ?>
		        <div class="wrap-content colf">
		        	<div class="breadcrumbs"></div>
		        	<?= $content ?>
		        </div>
			</div>
        </div>
        <?php include dirname(__DIR__) . "/footers/private.php"; ?>
        <?php $this->endBody(); ?>
    </body>
</html>
<?php $this->endPage(); ?>