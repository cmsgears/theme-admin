<?php
// Yii Imports
use yii\helpers\Url;

$title			= $widget->title;
$reportColumns	= $widget->reportColumns;

$import	= $widget->import;
$export	= $widget->export;
?>
<div class="grid-head-wrap row max-cols-100">
	<div class="colf colf12x6">
		<b class="grid-title"><?= $title ?></b>
		<?php if( $widget->add ) { ?>
		<a class="btn btn-small" href="<?= Url::toRoute( [ $widget->addUrl ], true ) ?>">Add</a>
		<?php } ?>
		<?php if( $widget->addPopup ) { ?>
			<span class="btn btn-small popup-trigger" popup="popup-grid-add"></span>
		<?php } ?>
	</div>
	<div class="colf colf12x6 grid-head-options">
		<?= $sortHtml ?>
		<?= $filtersHtml ?>
		<?php if( $import ) { ?>
			<i class="trigger-import-toggle btn-icon fa fa-upload" title="Import XML"></i>
		<?php } ?>
		<?php if( $export ) { ?>
			<i class="trigger-export-toggle btn-icon fa fa-download" title="Export XML"></i>
		<?php } ?>
		<?php if( count( $reportColumns ) > 0 ) { ?>
			<i class="trigger-report-toggle btn-icon cmti cmti-chart-column <?= isset( $report ) ? 'active' : null ?>" title="Generate Report"></i>
		<?php } ?>
	</div>
</div>
