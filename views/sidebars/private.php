<?php
// Yii Imports
use \Yii;
use yii\helpers\Html;
use yii\helpers\Url;

$user			= Yii::$app->user->getIdentity();

// Sidebar
$sidebar	= $this->context->sidebar;
$parent 	= isset( $sidebar[ 'parent' ] ) ? $sidebar[ 'parent' ] : '';
$child 		= isset( $sidebar[ 'child' ] ) ? $sidebar[ 'child' ] : '';
?>
<div class="collapsible-menu">

	<div id="sidebar-dasboard" class="collapsible-tab <?php if( strcmp( $parent, 'sidebar-dashboard' ) == 0 ) echo 'active';?>">
		<div class="collapsible-tab-header">
			<a href="<?php echo Url::toRoute( [ '/dashboard' ] ); ?>">
				<div class="colf colf5 wrap-icon"><span class="cmti cmti-dashboard"></span></div>
				<div class="colf colf5x4">Dashboard</div>
			</a>
		</div>
	</div>

	<?= Yii::$app->sidebar->getSidebarHtml( $parent, $child ) ?>

	<?php if( Yii::$app->core->hasModule( 'core' ) && $user->isPermitted( 'core' ) ) { ?>
		<div id="sidebar-settings" class="collapsible-tab <?php if( strcmp( $parent, 'sidebar-settings' ) == 0 ) echo 'active';?>">
			<div class="collapsible-tab-header">
				<a href="<?php echo Url::toRoute( [ '/core/settings' ] ); ?>">
					<div class="colf colf5 wrap-icon"><span class="cmti cmti-setting"></span></div>
					<div class="colf colf5x4">Settings</div>
				</a>
			</div>
		</div>
	<?php } ?>

	<div class="collapsible-tab" id="btn-logout">
		<div class="collapsible-tab-header">
			<a href="<?php echo Url::toRoute( [ '/core/site/logout' ] ); ?>" class="clearfix">
				<div class="colf colf5 wrap-icon"><span class="cmti cmti-power"></span></div>
				<div class="colf colf5x4">Logout</div>
			</a>
		</div>
	</div>

</div>