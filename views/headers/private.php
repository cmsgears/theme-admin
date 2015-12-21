<?php
use \Yii;
use yii\helpers\Html;
use yii\helpers\Url;

$admin = Yii::$app->user->identity;
?>
<header class="header header-private clearfix">
	<div class="content-profile colf colf15x2">
		<div class="wrap-avatar">
			<?php  if( isset( $admin->avatar ) ) { ?> 
				<a href="<?= Url::toRoute( [ '/cmgcore/user/profile '] ) ?>"><img class="avatar" src="<?= $admin->avatar->getThumbUrl() ?>"></a>
			<?php } else { ?>
				<a href="<?= Url::toRoute( [ '/cmgcore/user/profile '] ) ?>"><img class="avatar clearfix" src="<?=Yii::getAlias('@images')?>/avatar.png"></a>
			<?php } ?>
		</div>
		<div class="profile-details colf colf15x13">
			<ul>
				<?php  if( isset( $admin ) ) { ?> 
					<li><a href="<?= Url::toRoute( [ '/cmgcore/user/profile '] ) ?>"><?=$admin->username?></a></li>
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