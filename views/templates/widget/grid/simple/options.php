<?php
$title	= $widget->title;
?>
<div class="grid-options-wrap row">
	<div class="colf colf12x6">
		<?= $bulkHtml ?>
	</div>
	<div class="colf colf12x6 align align-right">
		<?= $searchHtml ?>

		<?php if( ( $widget->table || $widget->grid ) && $widget->card ) { ?>
			<i class="trigger-layout-switch btn-icon cmti <?= $widget->layout == 'data' ? 'cmti-grid grid-view-data' : 'cmti-list grid-view-card' ?>" title="Switch Layout"></i>
		<?php } ?>
	</div>
</div>
