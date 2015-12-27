<?php
// Yii Imports
use yii\helpers\Html;
use yii\widgets\ActiveForm;

// CMG Imports
use cmsgears\widgets\block\BasicBlock;

$coreProperties = $this->context->getCoreProperties();
$this->title 	= $coreProperties->getSiteTitle() . " | Login";
?>

<?php BasicBlock::begin([
	'options' => [ 'id' => 'block-public', 'class' => 'block block-basic' ],
	'texture' => true, 'textureClass' => 'texture-default',
	'contentWrapClass' => 'align align-center', 'content' => true
]);?>

	<?php $form = ActiveForm::begin( [ 'id' => 'frm-login' ] );?>

	<h5 class='align align-middle'>LOGIN</h5>

	<?= $form->field( $model, 'email' )->textInput( [ 'placeholder' => 'Email*' ] )->label( false ) ?>
	<?= $form->field( $model, 'password' )->passwordInput( array( 'placeholder' => 'Password*' ) )->label( false ) ?>
	<?= $form->field( $model, 'rememberMe' )->checkbox() ?>

	<?= Html::a( "Forgot your Password ?", [ '/forgot-password' ] ) ?>

	<div class='align-middle'><input type="submit" value="Login" /></div>

	<?php ActiveForm::end(); ?>

<?php BasicBlock::end(); ?>