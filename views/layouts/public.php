<?php
// CMG Imports
use themes\admin\assets\PublicAssets;

PublicAssets::register( $this );

// Register Child theme Assets
$this->theme->registerChildAssets( $this );

// Variables available for headers, sidebars and footers included within this layout
$coreProperties = $this->context->getCoreProperties();
$themePath		= Yii::getAlias( '@themes/admin' );
?>
<?php $this->beginPage(); ?>
<!DOCTYPE html>
<html lang="<?= $coreProperties->getLanguage() ?>">
    <head>
		<?php include "$themePath/views/headers/main.php"; ?>
    </head>
    <body>
        <?php $this->beginBody(); ?>
		<div id="pre-loader-main" class="pre-loader max-area-cover-color fixed">
			<div class="valign-center cmti cmti-4x cmti-spinner-1 spin"></div>
		</div>
		<?php include "$themePath/views/headers/public.php"; ?>
        <div class='container container-main container-public'>
	        <div class='wrap-content wrap-content-main'>
	        	<div class='content'>
	        		<?= $content ?>
	        	</div>
	        </div>
        </div>
        <?php include "$themePath/views/footers/public.php"; ?>
        <?php $this->endBody(); ?>
    </body>
</html>
<?php $this->endPage(); ?>