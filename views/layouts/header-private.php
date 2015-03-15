<?php
use \Yii;
use yii\helpers\Html;

$admin = Yii::$app->user->identity;
?>
<header class="header header-private clearfix">
	<div class="content-profile colf colf15x2">
		<div class="wrap-avatar">
			<?php  if( isset( $admin->user_image_thumb ) ) { ?> 
				<img class="avatar" src="<?= $admin->user_image_thumb ?>">
			<?php } else { ?>
				<img class="avatar" src="<?=Yii::getAlias('@images')?>/avatar.png">
			<?php } ?>
		</div>
		<div class="profile-details colf colf15x13">
			<ul>
				<?php  if( isset( $admin ) ) { ?> 
					<li><?=$admin->user_username?></li>
					<li><?=$admin->user_last_login?></li>
				<?php } ?>
				<li><span class="nav-mobile-icon"></span></li>
			</ul>
		</div>
	</div>
    <div class="header-content">
        <?=Html::a( "<img class='logo' src='" . Yii::getAlias( '@images' ) . "/logo.png'>", [ '/site/index' ], null );?>
    </div>
</header>