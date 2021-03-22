<?php
$layout	= $widget->layout;

$import	= $widget->import;
$export	= $widget->export;
?>

<?= $headHtml ?>

<?php if( $import ) { ?>
	<?= $importHtml ?>
<?php } ?>

<?php if( $export ) { ?>
	<?= $exportHtml ?>
<?php } ?>

<?= $reportHtml ?>

<?= $optionsHtml ?>

<?= $headerHtml ?>

<div class="grid-content-wrap">
	<div class="grid-content">
		<?php if( $widget->grid && $layout == 'data' ) { ?>
			<?= $dataHtml ?>
		<?php } ?>
		<?php if( $widget->table && $layout == 'table' ) { ?>
			<?= $dataHtml ?>
		<?php } ?>
		<?php if( $widget->list && $layout == 'list' ) { ?>
			<?= $listHtml ?>
		<?php } ?>
		<?php if( $widget->card && $layout == 'card' ) { ?>
			<?= $cardHtml ?>
		<?php } ?>
	</div>
</div>

<?= $footerHtml ?>
