<?php
use themes\admin\assets\CommonAssetBundle;

CommonAssetBundle::register( $this );

$coreProperties = $this->context->getCoreProperties();
?>
<?php $this->beginPage(); ?>
<!DOCTYPE html>
<html lang="<?= $coreProperties->getLanguage() ?>">
    <head>
        <?php include dirname(__FILE__) . "/header-main.php"; ?>
    </head>
    <body>
        <?php $this->beginBody(); ?>
        <div class="container-main">
	        <?php include dirname(__FILE__) . "/header-public.php"; ?>
	        <div class="container-content">
	        	<?= $content ?>
	        </div>
	        <?php include dirname(__FILE__) . "/footer.php"; ?>
		</div>
        <?php $this->endBody(); ?>
    </body>
</html>
<?php $this->endPage(); ?>