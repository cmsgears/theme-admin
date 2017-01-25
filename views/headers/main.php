<?php
// Yii Imports
use yii\helpers\Html;

// CMG Imports
use cmsgears\core\common\utilities\CodeGenUtil;
?>
<meta charset="<?= $coreProperties->getCharset() ?>">
<!-- Use minimum-scale=1.0, maximum-scale=1.0, user-scalable=no for mobile applications -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<?= CodeGenUtil::generateMetaTags( $this->params ) ?>
<?= Html::csrfMetaTags() ?>

<title><?= $this->title ?></title>

<!-- IE fix for console -->
<script type="text/javascript"> if ( !window.console ) console = { log: function() {} }; </script>

<!-- Browser tab icons -->
<link href="images/icons/favicon.ico" rel="shortcut icon">
<link href="images/icons/apple-touch-icon.png" rel="apple-touch-icon-precomposed">

<?php $this->head(); ?>