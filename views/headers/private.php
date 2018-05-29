<?php
// Yii Imports
use yii\helpers\Html;
use yii\helpers\Url;

// CMG Imports
use cmsgears\widgets\nav\BasicNav;

use cmsgears\core\common\utilities\CodeGenUtil;

$menuItems = [
		[ 'label' => 'Dashboard', 'url' => [ '/dashboard' ] ],
		[ 'label' => 'Profile', 'url' => [ '/core/user/profile' ] ],
		[ 'label' => 'Settings', 'url' => [ '/core/user/settings' ] ],
		[ 'label' => 'Logout', 'url' => [ '/logout' ] ]
	];

$user		= Yii::$app->user->getIdentity();

$notifyFlag = $user->isPermitted(NotifyGlobal::PERM_NOTIFY_ADMIN);

$stats			= Yii::$app->eventManager->getAdminStats();
$notifications	= $stats[ 'notifications' ];
$reminders		= $stats[ 'reminders' ];
$activities		= $stats[ 'activities' ];

$userAvatar		= isset( $user->avatar ) ? $user->avatar : null;
$avatarThumb	= CodeGenUtil::getImageThumbTag( $userAvatar, [ 'icon' => 'fa fa-user icon', 'class' => 'avatar' ] );
?>
<header id="header-main" class="header header-absolute header-private row">
	<div class="colf colf15x4 header-logo">
		<span id="btn-sidebar-main">
			<i class="cmti cmti-menu valign-center"></i>
		</span>
		<?= Html::a( "<img class=\"logo\" src=\"" . Yii::getAlias( '@images' ) . "/logo.png\">", [ '/' ], null ) ?>
	</div>
	<div class="colf colf15x11 header-menu popout-group popout-group-main">
		<div class="popout-actions align align-right">
			<?php if( $notifyFlag ) { ?>
			<span class="popout-trigger" popout="popout-notification" title="Notifications">
				<span class="cmti cmti-flag-o"></span>
				<?php if( $stats[ 'notificationCount' ] > 0 ) { ?>
					<span class="count-header count-notification"><?= $stats[ 'notificationCount' ] ?></span>
				<?php } ?>
			</span>
			<span class="popout-trigger" popout="popout-reminder" title="Reminders">
				<span class="cmti cmti-bell-o"></span>
				<?php if( $stats[ 'reminderCount' ] > 0 ) { ?>
					<span class="count-header count-reminder"><?= $stats[ 'reminderCount' ] ?></span>
				<?php } ?>
			</span>
			<span class="popout-trigger" popout="popout-activity" title="Activities">
				<span class="cmti cmti-sliders"></span>
				<?php if( $stats[ 'activityCount' ] > 0 ) { ?>
					<span class="count-header count-activity"><?= $stats[ 'activityCount' ] ?></span>
				<?php } ?>
			</span>
			<?php } ?>
			<span class="popout-trigger wrap-user" popout="popout-user">
				<?= $avatarThumb ?>
				<span class="fa fa-caret-down"></span>
			</span>
		</div>
		<div class="popouts">
			<div id="popout-notification" class="popout">
				<div class="popout-content-wrap">
					<div class="popout-content">
						<ul>
							<?php
								if( count( $notifications ) > 0 ) {

									foreach( $notifications as $notification ) {

										if( isset( $notification->adminLink ) ) {
							?>
										<li cmt-app="notification" cmt-controller="notification" cmt-action="hread" action="notify/notification/read?id=<?= $notification->id ?>" consumed="<?= $notification->consumed ?>" redirect="<?= Url::toRoute( $notification->adminLink ) ?>">
											<span class="cmt-click <?= $notification->consumed ? 'text text-gray' : 'link' ?>" type="notification"><b><?= $notification->title ?></b> - <?= $notification->content ?></span>
										</li>
							<?php
										}
										else {
							?>
										<li cmt-app="notification" cmt-controller="notification" cmt-action="hread" action="notify/notification/read?id=<?= $notification->id ?>" consumed="<?= $notification->consumed ?>">
											<span class="cmt-click <?= $notification->consumed ? 'text text-gray' : 'link' ?>" type="notification"><b><?= $notification->title ?></b> - <?= $notification->content ?></span>
										</li>
							<?php
										}
									}
							?>
									<li class="align align-center">
										<a href="<?= Url::toRoute( [ '/notify/notification/all' ], true ) ?>">View All</a>
									</li>
							<?php
								}
								else {
							?>
									<li>No new notifications.</li>
							<?php
								}
							?>
						</ul>
					</div>
				</div>
			</div>
			<div id="popout-reminder" class="popout">
				<div class="popout-content-wrap">
					<div class="popout-content">
						<ul>
							<?php
								if( count( $reminders ) > 0 ) {

									foreach( $reminders as $reminder ) {

										if( isset( $reminder->adminLink ) ) {
							?>
										<li cmt-app="notification" cmt-controller="notification" cmt-action="hread" action="notify/reminder/read?id=<?= $reminder->id ?>" consumed="<?= $reminder->consumed ?>" redirect="<?= Url::toRoute( $reminder->adminLink ) ?>">
											<span class="cmt-click <?= $reminder->consumed ? 'text text-gray' : 'link' ?>" type="reminder"><b><?= $reminder->title ?></b> - <?= $reminder->content ?></span>
										</li>
							<?php
										}
										else {
							?>
										<li cmt-app="notification" cmt-controller="notification" cmt-action="hread" action="notify/reminder/read?id=<?= $reminder->id ?>" consumed="<?= $reminder->consumed ?>">
											<span class="cmt-click <?= $reminder->consumed ? 'text text-gray' : 'link' ?>" type="reminder"><b><?= $reminder->title ?></b> - <?= $reminder->content ?></span>
										</li>
							<?php
										}
									}
							?>
									<li class="align align-center">
										<a href="<?= Url::toRoute( [ '/notify/reminder/all' ], true ) ?>">View All</a>
									</li>
							<?php
								}
								else {
							?>
									<li>No new reminder message at this time.</li>
							<?php
								}
							?>
						</ul>
					</div>
				</div>
			</div>
			<div id="popout-activity" class="popout">
				<div class="popout-content-wrap">
					<div class="popout-content">
						<ul>
							<?php
								if( count( $activities ) > 0 ) {

									foreach( $activities as $activity ) {

										if( isset( $activity->adminLink ) ) {
							?>
										<li cmt-app="notification" cmt-controller="notification" cmt-action="hread" action="notify/activity/read?id=<?= $activity->id ?>" consumed="<?= $activity->consumed ?>" redirect="<?= Url::toRoute( $activity->adminLink ) ?>">
											<span class="cmt-click <?= $activity->consumed ? 'text text-gray' : 'link' ?>" type="activity"><b><?= $activity->title ?></b> - <?= $activity->content ?></span>
										</li>
							<?php
										}
										else {
							?>
										<li cmt-app="notification" cmt-controller="notification" cmt-action="hread" action="notify/activity/read?id=<?= $activity->id ?>" consumed="<?= $activity->consumed ?>">
											<span class="cmt-click <?= $activity->consumed ? 'text text-gray' : 'link' ?>" type="activity"><?= $activity->title ?></b> - <?= $activity->content ?></span>
										</li>
							<?php
										}
									}
							?>
									<li class="align align-center">
										<a href="<?= Url::toRoute( [ '/notify/activity/all' ], true ) ?>">View All</a>
									</li>
							<?php
								}
								else {
							?>
									<li>No new activities at this time.</li>
							<?php
								}
							?>
						</ul>
					</div>
				</div>
			</div>
			<div id="popout-user" class="popout">
				<div class="popout-content-wrap">
					<div class="popout-content">
						<?= BasicNav::widget([
							'options' => [ 'class' => 'vnav' ],
							'items' => $menuItems
						])?>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
