<?= $headHtml ?>

<?= $reportHtml ?>

<?= $optionsHtml ?>

<?= $headerHtml ?>

<div class="grid-content-wrap">
	<div class="grid-content">
	<?php if( $widget->grid ) { ?>
		<?= $dataHtml ?>
	<?php } ?>

	<?php if( $widget->card ) { ?>
		<?= $cardHtml ?>
	<?php } ?>
	</div>
</div>

<?= $footerHtml ?>
