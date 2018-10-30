<?php
// Yii Imports
use yii\helpers\Html;
use yii\helpers\Url;

// CMG Imports
use cmsgears\notify\common\config\NotifyGlobal;

use cmsgears\widgets\nav\BasicNav;

use cmsgears\core\common\utilities\CodeGenUtil;

$menuItems = [
		[ 'label' => 'Dashboard', 'url' => [ '/dashboard' ] ],
		[ 'label' => 'Profile', 'url' => [ '/core/user/profile' ] ],
		[ 'label' => 'Settings', 'url' => [ '/core/user/settings' ] ],
		[ 'label' => 'Logout', 'url' => [ '/logout' ] ]
	];

$user		= Yii::$app->user->getIdentity();

$notifyFlag	= $user->isPermitted( NotifyGlobal::PERM_NOTIFY_ADMIN );

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
				<span cmt-app="notify" cmt-controller="notification" cmt-action="notificationData" action="notify/stats/stats">
					<span class="popout-trigger cmt-click" popout="popout-notification" title="Notifications"  >
						<span class="cmti cmti-flag-o"></span>
						<span class="count-header count-notification">0</span>
					</span>
				</span>
				<span cmt-app="notify" cmt-controller="notification" cmt-action="reminderData" action="notify/stats/stats">
					<span class="popout-trigger cmt-click" popout="popout-reminder" title="Reminders" >
						<span class="cmti cmti-bell-o "></span>
						<span class="count-header count-reminder">0</span>
					</span>
				</span>
				<span cmt-app="notify" cmt-controller="notification" cmt-action="activityData" action="notify/stats/stats">
					<span class="popout-trigger cmt-click" popout="popout-activity" title="Activities" >
						<span class="cmti cmti-sliders"></span>
						<span class="count-header count-activity">0</span>
					</span>
				</span>
			<?php } ?>
			<span class="popout-trigger wrap-user" popout="popout-user">
				<?= $avatarThumb ?>
				<span class="fa fa-caret-down"></span>
			</span>
		</div>
		<div class="popouts">
			<?php if( $notifyFlag ) { ?>
				<div id="popout-notification" class="popout">
					<div class="popout-content-wrap">
						<div class="popout-content">
							<ul>
								<li class="align align-center"><span class="fa fa-spin cmti cmti-2x cmti-spinner-1" ></span></li>
							</ul>
						</div>
					</div>
				</div>
				<div id="popout-reminder" class="popout">
					<div class="popout-content-wrap">
						<div class="popout-content">
							<ul>
								<li class="align align-center"><span class="fa fa-spin cmti cmti-2x cmti-spinner-1" ></span></li>
							</ul>
						</div>
					</div>
				</div>
				<div id="popout-activity" class="popout">
					<div class="popout-content-wrap">
						<div class="popout-content">
							<ul>
								<li class="align align-center"><span class="fa fa-spin cmti cmti-2x cmti-spinner-1" ></span></li>
							</ul>
						</div>
					</div>
				</div>
			<?php } ?>
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


<?php include "includes/templates.php"; ?>
