<?php
// Yii Imports
use yii\widgets\ActiveForm;

// CMG Imports
use cmsgears\core\common\config\CoreGlobal;

$coreProperties = $this->context->getCoreProperties();
$this->title 	= 'Settings | ' . $coreProperties->getSiteTitle();
?>
<div class="tabs-default">
	<ul>
	    <li><a href="#tabs-1" class="btn btn-medium">Privacy</a></li>
	    <li><a href="#tabs-2" class="btn btn-medium">Notifications</a></li>
	    <li><a href="#tabs-3" class="btn btn-medium">Reminders</a></li>
	</ul>

	<div id="tabs-1" class="box-form box-form-regular content-80 max-content-100">
		<span class="cmti cmti-edit btn-edit"></span>
		<h4>Privacy Settings</h4>
		<div class="wrap-info">
			<div class="info-row row clearfix">
				<div class="col12x5">Show Address</div>
				<div class="col12x7"><?php if( isset( $privacy[ 'show_address' ] ) ) echo $privacy[ 'show_address' ]->getFieldValue(); else echo 'No'; ?></div>
			</div>
		</div>
		<div class="wrap-form">
			<form class="cmt-form frm-split-40-60" cmt-controller="user" cmt-action="settings" action="user/settings" cmt-keep>
				<div class="spinner max-area-cover"><div class="valign-center cmti cmti-3x cmti-spinner-1 spin"></div></div>
				<div class="frm-field">
					<label>Show Address</label>
					<input type="hidden" name="ModelMeta[0][name]" value="show_address" />
					<input type="hidden" name="ModelMeta[0][type]" value="<?= CoreGlobal::SETTINGS_PRIVACY ?>" />
					<input type="hidden" name="ModelMeta[0][valueType]" value="flag" />
					<span class='cmt-switch cmt-checkbox'>
						<input id="privacy_show_address" class="cmt-toggle cmt-toggle-round" type="checkbox" name="value" />
						<label for='privacy_show_address'></label>
						<input type="hidden" name="ModelMeta[0][value]" value="<?php if( isset( $privacy[ 'show_address' ] ) ) echo $privacy[ 'show_address' ]->value; ?>" />
					</span>
				</div>
				<div class="frm-actions align align-center">
					<input class="submit btn btn-medium rounded-medium" type="submit" name="submit" value="Save">
				</div>
				<div class="message"></div>
			</form>
		</div>
	</div>

	<div id="tabs-2" class="box-form box-form-regular content-80 max-content-100">
		<span class="cmti cmti-edit btn-edit"></span>
		<h4>Notification Settings</h4>
		<div class="wrap-info">
			<div class="info-row row clearfix">
				<div class="col12x5">Receive Mail</div>
				<div class="col12x7"><?php if( isset( $notification[ 'receive_mail' ] ) ) echo $notification[ 'receive_mail' ]->getFieldValue(); else echo 'No'; ?></div>
			</div>
		</div>
		<div class="wrap-form">
			<form class="cmt-form frm-split-40-60" cmt-controller="user" cmt-action="settings" action="user/settings" cmt-keep>
				<div class="spinner max-area-cover"><div class="valign-center cmti cmti-3x cmti-spinner-1 spin"></div></div>
				<div class="frm-field">
					<label>Receive Mail</label>
					<input type="hidden" name="ModelMeta[0][name]" value="receive_mail" />
					<input type="hidden" name="ModelMeta[0][type]" value="<?= CoreGlobal::SETTINGS_NOTIFICATION ?>" />
					<input type="hidden" name="ModelMeta[0][valueType]" value="flag" />
					<span class='cmt-switch cmt-checkbox'>
						<input id="notify_receive_mail" class="cmt-toggle cmt-toggle-round" type="checkbox" name="value" />
						<label for='notify_receive_mail'></label>
						<input type="hidden" name="ModelMeta[0][value]" value="<?php if( isset( $notification[ 'receive_mail' ] ) ) echo $notification[ 'receive_mail' ]->value; ?>" />
					</span>
				</div>
				<div class="frm-actions align align-center">
					<input class="submit btn btn-medium rounded-medium" type="submit" name="submit" value="Save">
				</div>
				<div class="message"></div>
			</form>
		</div>
	</div>

	<div id="tabs-3" class="box-form box-form-regular content-80 max-content-100">
		<span class="cmti cmti-edit btn-edit"></span>
		<h4>Reminder Settings</h4>
		<div class="wrap-info">
			<div class="info-row row clearfix">
				<div class="col12x5">Receive Mail</div>
				<div class="col12x7"><?php if( isset( $reminder[ 'receive_mail' ] ) ) echo $reminder[ 'receive_mail' ]->getFieldValue(); else echo 'No'; ?></div>
			</div>
		</div>
		<div class="wrap-form">
			<form class="cmt-form frm-split-40-60" cmt-controller="user" cmt-action="settings" action="user/settings" cmt-keep>
				<div class="spinner max-area-cover"><div class="valign-center cmti cmti-3x cmti-spinner-1 spin"></div></div>
				<div class="frm-field">
					<label>Receive Mail</label>
					<input type="hidden" name="ModelMeta[0][name]" value="receive_mail" />
					<input type="hidden" name="ModelMeta[0][type]" value="<?= CoreGlobal::SETTINGS_REMINDER ?>" />
					<input type="hidden" name="ModelMeta[0][valueType]" value="flag" />
					<span class='cmt-switch cmt-checkbox'>
						<input id="remind_receive_mail" class="cmt-toggle cmt-toggle-round" type="checkbox" name="value" />
						<label for='remind_receive_mail'></label>
						<input type="hidden" name="ModelMeta[0][value]" value="<?php if( isset( $reminder[ 'receive_mail' ] ) ) echo $reminder[ 'receive_mail' ]->value; ?>" />
					</span>
				</div>
				<div class="frm-actions align align-center">
					<input class="submit btn btn-medium rounded-medium" type="submit" name="submit" value="Save">
				</div>
				<div class="message"></div>
			</form>
		</div>
	</div>
</div>

<!-- Templates -->
<?php include_once( dirname( __FILE__ ) . "/templates/user-settings.php" ); ?>