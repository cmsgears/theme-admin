<?php
// Yii Imports
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

$adminStats		= Yii::$app->eventManager->getAdminStats();
$notifications	= $adminStats[ 'notifications' ];
$reminders		= $adminStats[ 'reminders' ];
$activities		= $adminStats[ 'activities' ];
?>
<header id="header-main" class="row header header-absolute header-private max-cols-50">
	<div class="colf colf12x6 clearfix">
		<div id="btn-sidebar-main">
			<span><i class="cmti cmti-menu"></i></span>
		</div>
		<span class="logo">
			<?= Html::a( "<img class='fluid' src='" . Yii::getAlias( '@images' ) . "/logo.png'>", [ '/' ], null ) ?>
		</span>
	</div>
	<div class="colf colf12x6 row wrap-popout-actions">
		 <div class="colf colf15x3">
		 	<span class="btn btn-black btn-popout" popout="popout-notification" title="Notifications">
				<span class="cmti cmti-flag"></span>
				<span class="upd-count upd-count-rounded upd-count-notification-all circled1 upd-count-<?= $adminStats[ 'notificationCount' ] ?>"><?= $adminStats[ 'notificationCount' ] ?></span>
			</span>
		 </div>
		 <div class="colf colf15x3">
		 	<span class="btn btn-black btn-popout" popout="popout-reminder" title="Reminders">
				<span class="cmti cmti-bell"></span>
				<span class="upd-count upd-count-rounded upd-count-reminder-all circled1 upd-count-<?= $adminStats[ 'reminderCount' ] ?>"><?= $adminStats[ 'reminderCount' ] ?></span>
			</span>
		 </div>
		 <div class="colf colf15x3">
		 	<span class="btn btn-black btn-popout" popout="popout-activity" title="Activities">
				<span class="cmti cmti-widget"></span>
				<span class="upd-count upd-count-rounded upd-count-reminder-all circled1 upd-count-<?= $adminStats[ 'activityCount' ] ?>"><?= $adminStats[ 'activityCount' ] ?></span>
			</span>
		 </div>
		 <div class="colf colf15x6">
			<span class="btn btn-black btn-popout wrap-user" popout="popout-user">
				<?= CodeGenUtil::getImageThumbTag( $user->avatar, [ 'class' => 'user-avatar', 'icon' => 'cmti cmti-3x cmti-user circled1 user-avatar icon' ] ) ?>
				<span class="user-name"><?=substr($user->getName(), 0, 7)?></span>
			</span>
		 </div>
		 <div class="row wrap-popouts">
		 	<div id="popout-notification" class="colf colf15x6 popout">
			 	<ul>
			 		<?php
			 			if( count( $notifications ) > 0 ) {

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
			<div id="popout-reminder" class="colf colf15x6 popout">
			 	<ul>
			 		<?php
			 			if( count( $reminders ) > 0 ) {

							foreach ( $reminders as $reminder ) {

								echo $reminder->toHtml();
							}
			 		?>
			 		<?php } else { ?>
			 		<li>No reminders found.</li>
			 		<?php } ?>
			 	</ul>
			</div>
			<div id="popout-activity" class="colf colf15x6 popout">
			 	<ul>
			 		<?php
			 			if( count( $activities ) > 0 ) {

							foreach ( $activities as $activity ) {

								echo $activity->toHtml();
							}
			 		?>
			 		<?php } else { ?>
			 		<li>No activities found.</li>
			 		<?php } ?>
			 	</ul>
			</div>
			<div id="popout-user" class="colf colf15x6 popout">
				<?= BasicNav::widget( [ 'options' => [ 'class' => 'vnav' ], 'items' => $menuItems ] ); ?>
			</div>
		</div>
	</div>
</header>