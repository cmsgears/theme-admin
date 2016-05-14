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
	    [ 'label' => 'Profile', 'url' => [ '/core/user/profile' ] ],
	    [ 'label' => 'Settings', 'url' => [ '/core/user/settings' ] ],
	    [ 'label' => 'Logout', 'url' => [ '/logout' ] ]
	];

$counts	= Yii::$app->updateManager->getCounts();
?>
<header id="header-main" class="header header-absolute header-private max-cols-50 clearfix">
	<div class="colf12x6" clearfix>
		<div id="btn-sidebar-main">
			<span><i class="cmti cmti-menu"></i></span>
		</div>
		<span class="logo">
			<?= Html::a( "<img class='fluid' src='" . Yii::getAlias( '@images' ) . "/logo.png'>", [ '/' ], null ) ?>
		</span>
	</div>
	<div class="wrap-popout-actions colf12x6 clearfix">
		 <div class="colf15x3">
		 	<span class="btn btn-black btn-popout" popout="popout-notification" title="Notifications">
				<span class="cmti cmti-flag"></span>
				<span class="upd-count upd-count-rounded upd-count-notification-all circled1 upd-count-<?= $counts[ 'notificationCount' ] ?>"><?= $counts[ 'notificationCount' ] ?></span>
			</span>
		 </div>
		 <div class="colf15x3">
		 	<span class="btn btn-black btn-popout" popout="popout-reminder" title="Reminders">
				<span class="cmti cmti-bell"></span>
				<span class="upd-count upd-count-rounded upd-count-reminder-all circled1 upd-count-<?= $counts[ 'reminderCount' ] ?>"><?= $counts[ 'reminderCount' ] ?></span>
			</span>
		 </div>
		 <div class="colf15x3">
		 	<span class="btn btn-black btn-popout" popout="popout-activity" title="Activities">
				<span class="cmti cmti-widget"></span>
				<span class="upd-count upd-count-rounded upd-count-reminder-all circled1 upd-count-<?= $counts[ 'activityCount' ] ?>"><?= $counts[ 'activityCount' ] ?></span>
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
			 		<?php
			 			if( isset( Yii::$app->updateManager->notifications ) && count( Yii::$app->updateManager->notifications ) > 0 ) {

							$notifications	= Yii::$app->updateManager->notifications;

							foreach ( $notifications as $notification ) {

								echo $notification->toHtml();
							}
			 		?>
			 		<?php } else { ?>
			 		<li>No notifications found.</li>
			 		<?php } ?>
			 	</ul>
			 	<div class="align align-center"><?= Html::a( 'View All', [ '/notify/notification/all' ], [ 'class' => 'btn btn-small' ] ) ?></div>
			</div>
			<div id="popout-reminder" class="popout colf12x6">
			 	<ul>
					<li>No reminders found.</li>
			 	</ul>
			</div>
			<div id="popout-activity" class="popout colf12x6">
			 	<ul>
					<li>No activities found.</li>
			 	</ul>
			</div>
			<div id="popout-user" class="popout colf15x6">
				<?= BasicNav::widget( [ 'options' => [ 'class' => 'vnav' ], 'items' => $menuItems ] ); ?>
			</div>
		</div>
	</div>
</header>