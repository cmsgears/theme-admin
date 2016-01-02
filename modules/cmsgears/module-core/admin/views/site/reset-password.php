<?php
// Yii Imports
use yii\helpers\Html;
use yii\widgets\ActiveForm;

// CMG Imports
use cmsgears\widgets\block\BasicBlock;
?>

<?php BasicBlock::begin([
	'options' => [ 'id' => 'block-public', 'class' => 'block block-basic' ],
	'texture' => true, 'textureClass' => 'texture-default',
	'contentWrapClass' => 'align align-center', 'content' => true
]);?>

	<?php if( Yii::$app->session->hasFlash( 'message' ) ) { ?>
		<div class='frm-message'>
			<?= Yii::$app->session->getFlash( 'message' ) ?>
		</div>
	<?php
		}
		else {

			$form = ActiveForm::begin( [ 'id' => 'frm-reset-password' ] ); 
	?>
			<h2 class='align align-middle'>RESET PASSWORD</h2>

			<?= $form->field( $model, 'email' )->textInput( [ 'placeholder' => 'Email*' ] )->label( false ) ?>
	    	<?= $form->field( $model, 'password' )->passwordInput( [ 'placeholder' => 'Password*' ] )->label( false ) ?>
	    	<?= $form->field( $model, 'password_repeat' )->passwordInput( [ 'placeholder' => 'Repeat Password*' ] )->label( false ) ?>

			<input type="submit" value="Reset" />
	<?php
			ActiveForm::end();
		}
	?>

<?php BasicBlock::end(); ?>