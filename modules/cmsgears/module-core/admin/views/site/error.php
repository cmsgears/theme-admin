<?php
// Yii Imports
use yii\helpers\Html;
use yii\widgets\ActiveForm;

// CMG Imports
use cmsgears\widgets\block\BasicBlock;

$coreProperties = $this->context->getCoreProperties();
$this->title 	= $coreProperties->getSiteTitle() . " | Error";
?>
<?php if ( Yii::$app->user->isGuest ) { ?>

<?=BasicBlock::widget([
	'options' => [ 'id' => 'block-public', 'class' => 'block block-basic' ],
	'texture' => true, 'textureClass' => 'texture-default',
	'contentWrapClass' => 'align align-center','content' => true,
	'contentData' => "<h5 class='align align-middle'>ERROR</h5>" . nl2br( Html::encode( $message ) )
]);?>

<?php } else { ?>
	<h2 class='align align-middle'>ERROR</h2>

	<p> <?= nl2br( Html::encode( $message ) ) ?> </p>
<?php } ?>