<?php 
// Yii Imports
use \Yii;
use yii\helpers\Html; 
use yii\helpers\Url;

$user	= Yii::$app->user->getIdentity();
?>
<div class="sidebar-back col-filler  colf colf15x2"></div>
<div class="sidebar colf colf15x2">
	<div id="sidebar" class="collapsible">

		<div class="collapsible-tab" id="sidebar-dasboard">
			<div class="collapsible-tab-header">
				<a href="<?php echo Url::toRoute( ['/dashboard'] ); ?>">
					<div class="colf colf4"><span class="icon-sidebar icon-dashboard"></span></div>
					<div class="colf colf4x3">Dashboard</div>
				</a>
			</div>
		</div>
		
		<?= Yii::$app->sidebar->getSidebarHtml() ?>

		<?php if( Yii::$app->cmgCore->hasModule( 'foxslider' ) && $user->isPermitted( 'slider' ) ) { ?>
			<div class="collapsible-tab has-children" id="sidebar-slider">
				<div class="collapsible-tab-header clearfix">
					<div class="colf colf4"><span class="icon-sidebar icon-slider"></span></div>
					<div class="colf colf4x3">Fox Slider</div>
				</div>
				<div class="collapsible-tab-content clear">
					<ul>
						<li><?= Html::a( "Sliders", ['/foxslider/slider/all'] ) ?></li>
					</ul>
				</div>
			</div>
		<?php } ?>

		<?php if( Yii::$app->cmgCore->hasModule( 'cmgcommunity' ) && $user->isPermitted( 'community' ) ) { ?>
			<div class="collapsible-tab has-children" id="sidebar-group">
				<div class="collapsible-tab-header clearfix">
					<div class="colf colf4"><span class="icon-sidebar icon-newsletter"></span></div>
					<div class="colf colf4x3">Community</div>
				</div>
				<div class="collapsible-tab-content clear">
					<ul>
						<li><?= Html::a( "Groups Matrix", ['/cmgcommunity/group/matrix'] ) ?></li>
						<li><?= Html::a( "Group Categories", ['/cmgcommunity/group/categories'] ) ?></li>
						<li><?= Html::a( "Groups", ['/cmgcommunity/group/all'] ) ?></li>
						<li><?= Html::a( "Chat Sessions", ['/cmgcommunity/message/all'] ) ?></li>
					</ul>
				</div>
			</div>
		<?php } ?>

		<?php if( Yii::$app->cmgCore->hasModule( 'cmgforum' ) && $user->isPermitted( 'forum' ) ) { ?>
			<div class="collapsible-tab has-children" id="sidebar-forum">
				<div class="collapsible-tab-header clearfix">
					<div class="colf colf4"><span class="icon-sidebar icon-blogpost"></span></div>
					<div class="colf colf4x3">Forums</div>
				</div>
				<div class="collapsible-tab-content clear">
					<ul>
						<li><?= Html::a( "Forum Matrix", ['/cmgforum/forum/matrix'] ) ?></li>
						<li><?= Html::a( "Forum Categories", ['/cmgforum/forum/categories'] ) ?></li>
						<li><?= Html::a( "Forums", ['/cmgforum/forum/all'] ) ?></li>
					</ul>
				</div>
			</div>
		<?php } ?>

		<div class="collapsible-tab" id="btn-logout">
			<div class="collapsible-tab-header">
				<a href="<?php echo Url::toRoute( ['/apix/cmgcore/site/logout'] ); ?>" class="clearfix">
					<div class="colf colf4"><span class="icon-sidebar icon-power"></span></div>
					<div class="colf colf4x3">Logout</div> 
				</a>
			</div>
		</div>

	</div>
</div>