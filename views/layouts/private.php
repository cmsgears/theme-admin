<?php
// CMG Imports
use themes\admin\assets\PrivateAssets;

PrivateAssets::register( $this );

// Register Child theme Assets
$this->theme->registerChildAssets( $this );

// Variables available for headers, sidebars and footers included within this layout
$coreProperties = $this->context->getCoreProperties();
$themePath		= Yii::getAlias( '@themes/admin' );
$user			= Yii::$app->user->getIdentity();
?>
<?php $this->beginPage(); ?>
<!DOCTYPE html>
<html lang="<?= $coreProperties->getLanguage() ?>" class="html-private">
    <head>
		<?php include "$themePath/views/headers/main.php"; ?>
    </head>
    <body>
        <?php $this->beginBody(); ?>
		<div id='pre-loader-main' class='max-area-cover'>
			<div class='valign-center cmti cmti-5x cmti-spinner-1 spin'></div>
		</div>
		<?php include "$themePath/views/headers/private.php"; ?>
        <div class='container container-main container-private max-cols-100 wrap-col-filler clearfix'>
			<div class='sidebar-filler col-filler colf12x2'></div>
	        <div id='sidebar-main' class='sidebar-private colf12x2'>
	        	<?php include "$themePath/views/sidebars/private.php"; ?>
	        </div>
        	<div class='wrap-content wrap-content-main colf12x10'>
		        <div class='content'>
		        	<?php include "$themePath/views/includes/breadcrumbs.php"; ?>
		        	<?= $content ?>
		        </div>
			</div>
        </div>
        <?php include "$themePath/views/footers/private.php"; ?>
        <?php $this->endBody(); ?>
    </body>
</html>
<?php $this->endPage(); ?>