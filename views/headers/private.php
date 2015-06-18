<?php
use \Yii;
use yii\helpers\Html;

$admin = Yii::$app->user->identity;
?>
<header class="header header-private clearfix">
	<div class="content-profile colf colf15x2">
		<div class="wrap-avatar">
			<?php  if( isset( $admin->avatar ) ) { ?> 
				<img class="avatar" src="<?= $admin->avatar->getThumbUrl() ?>">
			<?php } else { ?>
				<img class="avatar" src="<?=Yii::getAlias('@images')?>/avatar.png">
			<?php } ?>
		</div>
		<div class="profile-details colf colf15x13">
			<ul>
				<?php  if( isset( $admin ) ) { ?> 
					<li><?=$admin->username?></li>
					<li><?=$admin->lastLoginAt?></li>
				<?php } ?>
				<li><span class="nav-mobile-icon"></span></li>
			</ul>
		</div>
	</div>
    <div class="header-content">
        <?=Html::a( "<img class='logo' src='" . Yii::getAlias( '@images' ) . "/logo.png'>", [ '/dashboard' ], null );?>
    </div>
</header>