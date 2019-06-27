<?php
$title	= $widget->title;
$modal	= $widget->modal;
$data	= $widget->data;
$popId	= isset( $data[ 'popupId' ] ) ? $data[ 'popupId' ] : 'lightbox-slider';
?>
<div id="<?= $popId ?>" class="cmt-popup popup popup-basic popup-lightbox-slider lightbox-slider-wrap <?= $modal ? 'popup-modal' : null ?>">
	<div class="popup-screen"></div>
	<?php if( $widget->bkg ) { ?>
		<div class="popup-bkg <?= $widget->bkgClass ?>" <?= isset( $widget->bkgUrl ) ? " style=\"background-image:url($widget->bkgUrl);\"" : null ?>></div>
	<?php } ?>
	<div class="popup-screen-listener"></div>
	<div class="popup-data lightbox-data <?= isset( $widget->size ) ? "popup-data-$widget->size" : null ?>">
		<span class="popup-close">
			<span class="icon cmti cmti-close"></span>
		</span>
		<div class="popup-data-bkg lightbox-data-bkg bkg-image"></div>
		<?php if( !empty( $title ) ) { ?>
			<div class="popup-header">
				<div class="popup-title"><?= $title ?></div>
			</div>
		<?php } ?>
		<div class="popup-content-wrap">
			<div class="popup-content">
				<div class="wrap-gallery"></div>
			</div>
		</div>
	</div>
</div>
