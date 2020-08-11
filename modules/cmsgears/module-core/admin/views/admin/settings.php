<?php
// Config
$coreProperties = $this->context->getCoreProperties();
$themeTemplates	= Yii::getAlias( '@themes/admin/views/templates' );

// Page
$this->title = 'Settings | User';

$model = $user;
?>
<div class="data-crud-wrap data-crud-wrap-basic">
	<div class="data-crud-wrap-main">
		<?php include "$themeTemplates/components/crud/user/settings/password.php"; ?>
		<?php include "$themeTemplates/components/crud/user/settings/privacy.php"; ?>
		<?php include "$themeTemplates/components/crud/user/settings/notifications.php"; ?>
		<?php include "$themeTemplates/components/crud/user/settings/reminders.php"; ?>
	</div>
</div>
