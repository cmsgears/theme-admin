<?php
// Yii Imports
use yii\helpers\Url;

$export	= $widget->export;
?>
<?php if( $export ) { ?>
<div class="grid-export-wrap form hidden-easy">
	<div class="filler-height"></div>
	<div class="grid-export">
		<div class="grid-export-actions">
			<a href="<?= Url::toRoute( 'export' ) ?>" target="_blank">
				<span class="frm-icon-element frm-element-medium">
					<i class="icon cmti cmti-file-xlsx"></i>
					<span class="btn">Export to Excel</span>
				</span>
			</a>
		</div>
	</div>
	<div class="filler-height"></div>
</div>
<?php } ?>
