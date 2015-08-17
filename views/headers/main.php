<?php
use yii\helpers\Html;
?>
<meta charset="<?= $coreProperties->getCharset() ?>">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="description" content="page description">
<meta name="keywords" content="page keywords">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?= Html::csrfMetaTags() ?>

<title><?= $this->title ?></title>

<!-- IE fix for console -->
<script type="text/javascript"> if (!window.console) console = {log: function() {}}; </script>

<!-- Icons -->
<link href="assets/images/icons/icon.ico" rel="shortcut icon">
<link href="assets/images/icons/icon.jpg" rel="apple-touch-icon-precomposed">

<?php $this->head(); ?>