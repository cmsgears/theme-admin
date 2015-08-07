<?php
// Yii Imports
use \Yii;
use yii\helpers\Html;
use yii\helpers\Url;

$user	= Yii::$app->user->getIdentity();
?>
<?= Yii::$app->dashboard->getDashboardHtml() ?>