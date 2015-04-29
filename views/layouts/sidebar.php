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