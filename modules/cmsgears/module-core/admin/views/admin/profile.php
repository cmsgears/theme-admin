<?php
// Config
$coreProperties = $this->context->getCoreProperties();
$themeTemplates	= Yii::getAlias( '@themes/admin/views/templates' );
$apixBase		= $this->context->apixBase;

// Page
$this->title = 'Profile | User';
?>
<div class="data-crud-wrap data-crud-wrap-basic">
	<div class="data-crud-wrap-main">
		<?php include "$themeTemplates/components/crud/user/profile/basic.php"; ?>
		<?php include "$themeTemplates/components/crud/user/profile/address.php"; ?>
	</div>
</div>
