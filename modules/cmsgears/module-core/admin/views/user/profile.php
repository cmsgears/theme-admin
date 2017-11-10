<?php
// Yii Imports
use yii\widgets\ActiveForm;
use yii\helpers\Html;

// CMG Imports
use cmsgears\core\common\config\CoreGlobal;

use cmsgears\core\common\models\resources\Address;

use cmsgears\files\widgets\AvatarUploader;

$coreProperties = $this->context->getCoreProperties();
$this->title 	= 'Profile | ' . $coreProperties->getSiteTitle();

$user			= Yii::$app->user->getIdentity();

$countryList	= Yii::$app->factory->get( 'countryService' )->getIdNameMap();
$provinceList	= Yii::$app->factory->get( 'provinceService' )->getMapByCountryId( key( $countryList ) );
$addressList	= Yii::$app->factory->get( 'modelAddressService' )->getByParent( $user->id, CoreGlobal::TYPE_USER );
$address 		= new Address();
?>
<div class="tabs-default">
	<ul>
		<li><a href="#tabs-1" class="btn btn-medium">Profile</a></li>
		<li><a href="#tabs-2" class="btn btn-medium">Account</a></li>
		<li><a href="#tabs-3" class="btn btn-medium">Address</a></li>
	</ul>

	<div id="tabs-1" class="box-form box-form-regular content-80 max-content-100">
		<span class="cmti cmti-edit btn-edit"></span>
		<h4>Basic Profile</h4>
		<div class="wrap-info">
			<div class="row info-row">
				<div class="col col12x2">Email</div><div class="col col12x10"><?= $user->email ?></div>
			</div>
			<div class="row info-row">
				<div class="col col12x2">Username</div><div class="col col12x10"><?= $user->username ?></div>
			</div>
			<div class="row info-row">
				<div class="col col12x2">Firstname</div><div class="col col12x10"><?= $user->firstName ?></div>
			</div>
			<div class="row info-row">
				<div class="col col12x2">Lastname</div><div class="col col12x10"><?= $user->lastName ?></div>
			</div>
			<div class="row info-row">
				<div class="col col12x2">Gender</div><div class="col col12x10"><?= $user->getGenderStr() ?></div>
			</div>
			<div class="row info-row">
				<div class="col col12x2">Phone</div><div class="col col12x10"><?= $user->phone ?></div>
			</div>
		</div>
		<div class="wrap-form">
			<form class="cmt-form frm-rounded-all frm-split-40-60" cmt-app="user" cmt-controller="user" cmt-action="profile" action="user/profile" cmt-keep>
				<div class="spinner max-area-cover">
					<div class="valign-center cmti cmti-3x cmti-spinner-1 spin"></div>
				</div>
				<div class="frm-field">
					<label>Email</label>
					<?php if( !$coreProperties->isChangeEmail() ) { ?>
						<input type="text" name="User[email]" placeholder="Email*" value="<?= $user->email ?>" readonly />
					<?php } else { ?>
						<input type="text" name="User[email]" placeholder="Email*" value="<?= $user->email ?>" />
					<?php } ?>
					<span  class="error" cmt-error="email"></span>
				</div>
				<div class="frm-field">
					<label>Username</label>
					<?php if( !$coreProperties->isChangeEmail() ) { ?>
						<input type="text" name="User[username]" placeholder="Username" value="<?= $user->username ?>" readonly />
					<?php } else { ?>
						<input type="text" name="User[username]" placeholder="Username" value="<?= $user->username ?>" />
					<?php } ?>
					<span  class="error" cmt-error="username"></span>
				</div>
				<div class="frm-field">
					<label>Firstname</label>
					<input type="text" name="User[firstName]" placeholder="Firstname" value="<?= $user->firstName ?>" />
					<span  class="error" cmt-error="firstName"></span>
				</div>
				<div class="frm-field">
					<label>Lastname</label>
					<input type="text" name="User[lastName]" placeholder="Lastname" value="<?= $user->lastName ?>" />
					<span  class="error" cmt-error="lastName"></span>
				</div>
				<div class="clear">
					<div class="frm-field">
						<label>Gender</label>
						<?= Html::dropDownList( 'User[genderId]', $user->genderId, $genderMap, [ 'class' => 'element-60 cmt-select' ] ); ?>
						<span  class="error" cmt-error="genderId"></span>
					</div>
				</div>
				<div class="filler-height filler-height-small clear"></div>
				<div class="frm-field">
					<label>Phone</label>
					<input type="text" name="User[phone]" placeholder="Phone" value="<?= $user->phone ?>" />
					<span  class="error" cmt-error="phone"></span>
				</div>
				<div class="frm-actions align align-center">
					<input class="submit btn btn-medium rounded-medium" type="submit" name="submit" value="Update">
				</div>
				<div class="message"></div>
			</form>
		</div>
		<h4>Avatar</h4>
		<?= AvatarUploader::widget([
				'options' => [ 'id' => 'avatar-user', 'class' => 'file-uploader' ],
				'model' => $user->avatar, 'postAction' => true,
				'postActionUrl' => "user/avatar?id=$user->id"
		]); ?>
	</div>

	<div id="tabs-2" class="box-form box-form-regular content-80 max-content-100">
		<span class="cmti cmti-edit btn-edit"></span>
		<h4>Account</h4>
		<div class="wrap-info">
			<div class="row info-row">
				<div class="col col12x2">Email</div><div class="col col12x10"><?= $user->email ?></div>
			</div>
			<div class="note">
				Note: Click on edit icon to change password.
			</div>
		</div>
		<div class="wrap-form">
			<form class="cmt-form frm-rounded-all frm-split-40-60" cmt-app="user" cmt-controller="user" cmt-action="account" action="user/account" cmt-keep>
				<div class="spinner max-area-cover">
					<div class="valign-center cmti cmti-3x cmti-spinner-1 spin"></div>
				</div>
				<div class="frm-field">
					<label>Email</label>
					<input type="text" name="ResetPassword[email]" placeholder="Email*" value="<?= $user->email ?>" readonly />
					<span  class="error" cmt-error="email"></span>
				</div>
				<div class="frm-field">
					<label>Password</label>
					<input type="password" name="ResetPassword[password]" placeholder="Password*" />
					<span  class="error" cmt-error="password"></span>
				</div>
				<div class="frm-field">
					<label>Confirm Password</label>
					<input type="password" name="ResetPassword[password_repeat]" placeholder="Confirm Password*" />
					<span  class="error" cmt-error="password_repeat"></span>
				</div>
				<div class="frm-actions align align-center">
					<input class="submit btn btn-medium rounded-medium" type="submit" name="submit" value="Update">
				</div>
				<div class="message"></div>
			</form>
		</div>
	</div>
	<div id="tabs-3" class="box-form box-form-regular content-80 max-content-100">
		<span class="cmti cmti-edit btn-edit"></span>
		<h4>Address</h4>
		<div class="wrap-info">
			<div class="info-row">
			<?php if( count( $addressList ) <= 0 ) { ?>
				<div class="row info-row">
					<div class="col col12x2">Line 1</div><div class="col col12x10"></div>
				</div>
				<div class="row info-row">
					<div class="col col12x2">Line 2</div><div class="col col12x10"></div>
				</div>
				<div class="row info-row">
					<div class="col col12x2">City</div><div class="col col12x10"></div>
				</div>
				<div class="row info-row">
					<div class="col col12x2">Country</div><div class="col col12x10"></div>
				</div>
				<div class="row info-row">
					<div class="col col12x2">State/Province</div><div class="col col12x10"></div>
				</div>
				<div class="row info-row">
					<div class="col col12x2">Phone</div><div class="col col12x10"></div>
				</div>
				<div class="row info-row">
					<div class="col col12x2">Zip/Postal</div><div class="col col12x10"></div>
				</div>
			<?php } else { $address = $addressList[ 0 ]->address; ?>
				<div class="row info-row">
					<div class="col col12x2">Line 1</div><div class="col col12x10"><?= $address->line1 ?></div>
				</div>
				<div class="row info-row">
					<div class="col col12x2">Line 2</div><div class="col col12x10"><?= $address->line2 ?></div>
				</div>
				<div class="row info-row">
					<div class="col col12x2">City</div><div class="col col12x10"><?= $address->cityName ?></div>
				</div>
				<div class="row info-row">
					<div class="col col12x2">Country</div><div class="col col12x10"><?= $address->countryName ?></div>
				</div>
				<div class="row info-row">
					<div class="col col12x2">State/Province</div><div class="col col12x10"><?= $address->provinceName ?></div>
				</div>
				<div class="row info-row">
					<div class="col col12x2">Phone</div><div class="col col12x10"><?= $address->phone ?></div>
				</div>
				<div class="row info-row">
					<div class="col col12x2">Zip/Postal</div><div class="col col12x10"><?= $address->zip ?></div>
				</div>
			<?php } ?>
			</div>
		</div>
		<div class="wrap-form">
			<form class="cmt-form frm-rounded-all frm-split-40-60" cmt-app="user" cmt-controller="user" cmt-action="address" action="user/address?type=<?= Address::TYPE_PRIMARY ?>" cmt-keep>
				<div class="spinner max-area-cover">
					<div class="valign-center cmti cmti-3x cmti-spinner-1 spin"></div>
				</div>

				<div class="frm-field">
					<label>Line 1</label>
					<input type="text" name="Address[line1]" placeholder="Line1*" value="<?= $address->line1 ?>" />
					<span  class="error" cmt-error="line1"></span>
				</div>
				<div class="frm-field">
					<label>Line 2</label>
					<input type="text" name="Address[line2]" placeholder="Line2" value="<?= $address->line2 ?>" />
					<span  class="error" cmt-error="line2"></span>
				</div>
				<div class="frm-field">
					<label>City</label>
					<input type="text" name="Address[cityName]" placeholder="City" value="<?= $address->cityName ?>" />
					<span  class="error" cmt-error="cityName"></span>
				</div>
				<div class="clearfix cmt-request" cmt-controller="address" cmt-action="province" action="ngocore/address/province-options" cmt-keep>
					<label>Country</label>
					<?= Html::dropDownList( 'Address[countryId]', $address->countryId, $countryList, [ 'class' => 'element-60 cmt-select cmt-change' ] ); ?>
					<span  class="error" cmt-error="countryId"></span>
				</div>
				<div class="frm-field frm-province  wrap-province">
					<label>State/Province</label>
					<?= Html::dropDownList( 'Address[provinceId]', $address->provinceId, $provinceList, [ 'class' => 'element-60 cmt-select', 'id' => 'wrap-province' ] ); ?>
					<span  class="error" cmt-error="provinceId"></span>
				</div>
				<div class="frm-field">
					<label>Phone</label>
					<input type="text" name="Address[phone]" placeholder="Phone" value="<?= $address->phone ?>" />
					<span  class="error" cmt-error="phone"></span>
				</div>
				<div class="frm-field">
					<label>Zip/Postal</label>
					<input type="text" name="Address[zip]" placeholder="Zip*" value="<?= $address->zip ?>" />
					<span  class="error" cmt-error="zip"></span>
				</div>

				<div class="filler-height filler-height-small clear"></div>

				<div class="frm-actions align align-center">
					<input class="submit btn btn-medium rounded-medium" type="submit" name="submit" value="Update">
				</div>
				<div class="message"></div>
			</form>
		</div>
	</div>
</div>

<!-- Templates -->
<?php include_once( dirname( __FILE__ ) . "/templates/user-profile.php" ); ?>
<?php include_once( dirname( __FILE__ ) . "/templates/user-account.php" ); ?>
<?php include_once( dirname( __FILE__ ) . "/templates/user-address.php" ); ?>