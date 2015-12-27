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

			$form = ActiveForm::begin( [ 'id' => 'frm-forgot-password' ] ); 
	?>
			<h5 class='align align-middle'>FORGOT PASSWORD</h5>

	    	<?= $form->field( $model, 'email' )->textInput( [ 'placeholder' => 'Email*' ] )->label( false ) ?>

			<input type="submit" value="Submit" />
	<?php
			ActiveForm::end();
		}
	?>

<?php BasicBlock::end(); ?>