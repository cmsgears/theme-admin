<?php
// Yii Imports
use \Yii;
use yii\helpers\Html;
use yii\helpers\Url;

$user			= Yii::$app->user->getIdentity();
$settings		= Yii::$app->sidebar->getConfig();

// Sidebar
$parent 	= $this->params['sidebar-parent'];
$child 		= $this->params['sidebar-child'];
?>
<div class="sidebar-back col-filler  colf colf15x2"></div>
<div class="sidebar colf colf15x2">
	<div id="sidebar" class="collapsible">

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
			<div id='sidebar-setting' class='collapsible-tab has-children <?php if( strcmp( $parent, 'sidebar-setting' ) == 0 ) echo 'active';?>'>
				<div class='collapsible-tab-header'>
						<div class='colf colf4'><span class='icon-sidebar icon-settings'></span></div>
						<div class='colf colf4x3'>Settings</div>
					</a>
				</div>
				<div class="collapsible-tab-content clear <?php if( strcmp( $parent, 'sidebar-setting' ) == 0 ) echo 'expanded visible';?>">
					<ul>
						<?php 
							foreach ( $settings as $setting ) {

								$path 	= Html::a( "$setting", [ "/cmgcore/settings/index?type=$setting" ] );
								$cClass	= strcmp( $child, $setting ) == 0 ? 'active' : '';

								echo "<li class='$setting $cClass'>$path</li>";
							}
						?>
					</ul>
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
</div>