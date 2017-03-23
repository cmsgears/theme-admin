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
		<div id="pre-loader-main" class="pre-loader max-area-cover-color fixed">
			<div class="valign-center cmti cmti-4x cmti-spinner-1 spin"></div>
		</div>
		<?php include "$themePath/views/headers/private.php"; ?>
        <div class='row container container-main container-private max-cols-100 wrap-col-filler'>
			<div class='colf colf15x2 sidebar-filler col-filler'></div>
	        <div id='sidebar-main' class='colf colf15x2 sidebar-private'>
	        	<?php include "$themePath/views/sidebars/private.php"; ?>
	        </div>
        	<div class='colf colf15x13 wrap-content wrap-content-main'>
		        <div class='content'>
		        	<?php include "$themePath/views/includes/breadcrumbs.php"; ?>
		        	<?= $content ?>
		        	<?php include "$themePath/views/includes/dashboard.php"; ?>
		        </div>
			</div>
        </div>
        <?php include "$themePath/views/footers/private.php"; ?>
        <?php $this->endBody(); ?>
    </body>
</html>
<?php $this->endPage(); ?>