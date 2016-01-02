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

			$form = ActiveForm::begin( ['id' => 'frm-activate-account'] ); 
	?>
			<h2 class='align align-middle'>ACTIVATE ACCOUNT</h2>

	    	<?= $form->field( $model, 'password' )->passwordInput( [ 'placeholder' => 'Password*' ] )->label( false ) ?>
	    	<?= $form->field( $model, 'password_repeat' )->passwordInput([ 'placeholder' => 'Confirm Password*' ] )->label( false ) ?>

			<input type="submit" value="Activate" />
	<?php
			ActiveForm::end();
		}
	?>

<?php BasicBlock::end(); ?>