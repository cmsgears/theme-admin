<?php
// Yii Imports
use \Yii;

// CMG Imports
use themes\admin\assets\CommonAssetBundle;

// Register Assets
CommonAssetBundle::register( $this );

// Register Child theme Assets
$this->theme->registerChildAssets( $this );

$coreProperties = $this->context->getCoreProperties();
?>
<?php $this->beginPage(); ?>
<!DOCTYPE html>
<html lang="<?= $coreProperties->getLanguage() ?>">
    <head>
        <?php include dirname(__DIR__) . "/headers/main.php"; ?>
    </head>
    <body>
        <?php $this->beginBody(); ?>
        <div class="container-main">
	        <?php include dirname(__DIR__) . "/headers/public.php"; ?>
	        <div class="container-content">
	        	<?= $content ?>
	        </div>
	        <?php include dirname(__DIR__) . "/footers/public.php"; ?>
		</div>
        <?php $this->endBody(); ?>
    </body>
</html>
<?php $this->endPage(); ?>