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

$adminStats		= Yii::$app->eventManager->getAdminStats();
$notifications	= $adminStats[ 'notifications' ];
$reminders		= $adminStats[ 'reminders' ];
$activities		= $adminStats[ 'activities' ];

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
	<div class="colf colf15x11 header-menu wrap-popout-actions align align-right">
		<span class="btn-popout relative" popout="popout-notification" title="Notifications">
			<span class="cmti cmti-flag-o"></span>
			<?php if( $adminStats[ 'notificationCount' ] > 0 ) { ?>
				<span class="count"><?= $adminStats[ 'notificationCount' ] ?></span>
			<?php } ?>
		</span>
		<span class="btn-popout relative" popout="popout-reminder" title="Reminders">
			<span class="cmti cmti-bell-o"></span>
			<?php if( $adminStats[ 'reminderCount' ] > 0 ) { ?>
				<span class="count"><?= $adminStats[ 'reminderCount' ] ?></span>
			<?php } ?>
		</span>
		<span class="btn-popout relative" popout="popout-activity" title="Activities">
			<span class="cmti cmti-sliders"></span>
			<?php if( $adminStats[ 'activityCount' ] > 0 ) { ?>
				<span class="count"><?= $adminStats[ 'activityCount' ] ?></span>
			<?php } ?>
		</span>
		<span class="btn-popout wrap-user" popout="popout-user">
			<?= $avatarThumb ?>
			<span class="fa fa-caret-down"></span>
		</span>
		<div class="wrap-popouts">
			<div id="popout-notification" class="popout">
				<ul>
					<?php
						if( count( $notifications ) > 0 ) {

							foreach( $notifications as $notification ) {
					?>
								<li class="cmt-request" redirect='<?=Url::toRoute( $notification->adminLink )?>' cmt-controller="notification" cmt-action="read" action="notify/notification/toggle-read?id=<?=$notification->id?>" consumed="<?=$notification->consumed?>">
									<a class="cmt-click <?= $notification->consumed ? "text text-gray" : null ?>"><?php echo $notification->content ?></a>
								</li>
					<?php
							}
					?>
							<li class="align align-center">
								<a href="<?= Url::to( 'core/notify/notification' ) ?>">View All</a>
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
			<div id="popout-reminder" class="popout">
				<ul>
					<li>No new reminder message at this time.</li>
				</ul>
			</div>
			<div id="popout-activity" class="popout">
				<ul>
					<li>No new activities at this time.</li>
				</ul>
			</div>
			<div id="popout-user" class="popout">
				<?= BasicNav::widget([
					'options' => [ 'class' => 'vnav' ],
					'items' => $menuItems
				])?>
			</div>
		</div>
	</div>
</header>
