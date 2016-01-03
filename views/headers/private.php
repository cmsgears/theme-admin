<?php
// Yii Imports
use \Yii;
use yii\helpers\Url;
use yii\helpers\Html;

// CMG Imports
use cmsgears\widgets\nav\BasicNav;

use cmsgears\core\common\utilities\CodeGenUtil;

$menuItems = [
	    [ 'label' => 'Dashboard', 'url' => [ '/dashboard' ] ],
	    [ 'label' => 'Profile', 'url' => [ '/cmgcore/user/profile' ] ],
	    [ 'label' => 'Settings', 'url' => [ '/cmgcore/settings' ] ],
	    [ 'label' => 'Logout', 'url' => [ '/logout' ] ]
	];
?>

<header id="header-main" class="header header-absolute header-private max-cols-50 clearfix">
	<div class="colf12x6" clearfix>
		<div id="btn-sidebar-main">
			<span><i class="cmti cmti-menu"></i></span>			
		</div>
		<span class="logo">
			<?=Html::a( "<img class='fluid' src='" . Yii::getAlias( '@images' ) . "/logo.png'>", [ '/' ], null )?>
		</span>
	</div>
	<div class="wrap-popout-actions colf12x6 clearfix">
		 <div class="colf15x3">
		 	<span class="btn btn-black btn-popout" popout="popout-notification" title="Notifications">
				<span class="cmti cmti-flag"></span>
				<span class="count circled1">15</span>
			</span>
		 </div>
		 <div class="colf15x3">
		 	<span class="btn btn-black btn-popout" popout="popout-reminder" title="Reminders">
				<span class="cmti cmti-bell"></span>
				<span class="count circled1">15</span>
			</span>
		 </div>
		 <div class="colf15x3">
		 	<span class="btn btn-black btn-popout" popout="popout-activity" title="Activities">
				<span class="cmti cmti-widget"></span>
				<span class="count circled1">15</span>
			</span>
		 </div>
		 <div class="colf15x6">
			<span class="btn btn-black btn-popout wrap-user" popout="popout-user">
				<?= CodeGenUtil::getImageThumbTag( $user->avatar, [ 'class' => 'user-avatar', 'icon' => 'cmti cmti-3x cmti-user circled1 user-avatar icon' ] ) ?>
				<span class="user-name"><?=substr($user->getName(), 0, 7)?></span>
			</span>
		 </div>
		 <div class="wrap-popouts clearfix">
		 	<div id="popout-notification" class="popout colf12x6">
			 	<ul>
			 		<li><a href="#">there are no new notification</a></li>
			 		<li><a href="#">message at this time</a></li>
			 	</ul>
			</div>
			<div id="popout-reminder" class="popout colf12x6">
			 	<ul>
			 		<li><a href="#">there are no new reminder</a></li>
			 		<li><a href="#">message at this time</a></li>
			 	</ul> 
			</div>
			<div id="popout-activity" class="popout colf12x6">
			 	<ul>
			 		<li><a href="#">there are no new reminder</a></li>
			 		<li><a href="#">message at this time</a></li>
			 	</ul> 
			</div>			
			<div id="popout-user" class="popout colf15x6">
				<?= BasicNav::widget( [ 'options' => [ 'class' => 'vnav' ], 'items' => $menuItems ] ); ?>
			</div>
		</div>
	</div>
</header>