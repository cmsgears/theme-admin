<?php
// Yii Imports
use \Yii;
use yii\helpers\Html;
use yii\helpers\Url;

$user			= Yii::$app->user->getIdentity();

// Sidebar
$sidebar	= $this->context->sidebar;
$parent 	= $sidebar[ 'parent' ];
$child 		= $sidebar[ 'child' ];
?>
<div class="collapsible-menu">

	<div id="sidebar-dasboard" class="collapsible-tab <?php if( strcmp( $parent, 'sidebar-dashboard' ) == 0 ) echo 'active';?>">
		<div class="collapsible-tab-header">
			<a href="<?php echo Url::toRoute( ['/dashboard'] ); ?>">
				<div class="colf colf4"><span class="icon-sidebar icon-dashboard"></span></div>
				<div class="colf colf4x3">Dashboard</div>
			</a>
		</div>
	</div>

	<?= Yii::$app->sidebar->getSidebarHtml( $parent, $child ) ?>
	
	<?php if( Yii::$app->cmgCore->hasModule( 'cmgcore' ) && $user->isPermitted( 'core' ) ) { ?>
		<div id="sidebar-setting" class="collapsible-tab <?php if( strcmp( $parent, 'sidebar-setting' ) == 0 ) echo 'active';?>">
			<div class="collapsible-tab-header">
				<a href="<?php echo Url::toRoute( ['/cmgcore/settings'] ); ?>">
					<div class="colf colf4"><span class="cmti cmti-setting"></span></div>
					<div class="colf colf4x3">Settings</div>
				</a>
			</div>
		</div>
	<?php } ?>

	<div class="collapsible-tab" id="btn-logout">
		<div class="collapsible-tab-header">
			<a href="<?php echo Url::toRoute( ['/cmgcore/site/logout'] ); ?>" class="clearfix">
				<div class="colf colf4"><span class="icon-sidebar icon-power"></span></div>
				<div class="colf colf4x3">Logout</div> 
			</a>
		</div>
	</div>

</div>