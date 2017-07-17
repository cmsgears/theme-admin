<?php
$dataProvider	= $widget->dataProvider;
$models			= $dataProvider->getModels();

$columns		= $widget->columns;
$actions		= $widget->actions;

$actionView		= $widget->actionView;
?>
<div class="grid-rows-wrap grid-rows-zebra <?= $widget->layout == 'data' ? 'active' : null ?>">
	<?php
		if( $widget->grid && count( $models ) > 0 ) {

			$gridColumns	= $widget->gridColumns;
			$root			= $gridColumns[ 'root' ];
			$factor			= $gridColumns[ 'factor' ];
			$index			= 0;
	?>
	<div class="grid-rows-header row">
		<?php
			foreach ( $columns as $key => $column ) {

				$title = $column;

				if( is_array( $column ) ) {

					$title = $column[ 'title' ];
				}

				if( $key === 'bulk' ) {
		?>
					<div class="<?= $root . $factor[ $index ] ?>">
						<span class="data cmt-choice">
							<label>
								<input class="grid-bulk-all" type="checkbox" />
								<span class="label cmti cmti-checkbox"></span>
							</label>
						</span>
					</div>
				<?php } else { ?>
					<div class="<?= $root . $factor[ $index ] ?>"><?= $title ?></div>
				<?php } ?>
		<?php
				$index++;
			}
		?>
	</div>
	<div class="grid-rows">
	<?php

		$root	= $gridColumns[ 'root' ];
		$factor	= $gridColumns[ 'factor' ];

		foreach( $models as $model ) {

			$id		= $model->id;
			$index	= 0;
	?>
		<div class="grid-row">
			<div class="grid-row-data row max-cols-50">
		<?php
				foreach ( $columns as $key => $column ) {

					$title	= null;
					$value 	= null;

					if( is_array( $column ) ) {

						$title	= $column[ 'title' ];
						$value	= $column[ 'generate' ];
						$value	= $value( $model );
					}
					else {

						$title	= $column;
						$value 	= !in_array( $key, [ 'bulk', 'actions' ] ) ? $model->$key : null;
					}

					$cClass	= strtolower( preg_replace( '/([a-z])([A-Z])/', '$1_$2', $title ) );
					$cClass	= preg_replace( '/\*/', '', $cClass );
					$cClass	= preg_replace( '/#/', '', $cClass );
					$cClass	= preg_replace( '/~/', '', $cClass );
					$cClass	= trim( $cClass );
					$cClass	= preg_replace( '/ /', '-', $cClass );

					if( $key === 'bulk' ) {
		?>
						<div class="<?= "$cClass $root" . $factor[ $index ] ?>">
							<span class="data title"><?= $title ?></span>
							<span class="data cmt-choice">
								<label>
									<input class="grid-bulk-single grid-bulk-<?= $id ?>" type="checkbox" data-id=<?= $id ?> />
									<span class="label cmti cmti-checkbox"></span>
								</label>
							</span>
						</div>
					<?php } else if( $key === 'actions' ) { ?>
						<div class="<?= "$cClass $root" . $factor[ $index ] ?> actions">
							<span class="data title"><?= $title ?></span>
							<span class="data">
								<?= $widget->render( $actionView, [ 'widget' => $widget, 'model' => $model ] ) ?>
							</span>
						</div>
					<?php } else { ?>
						<div class="<?= "$cClass $root" . $factor[ $index ] ?>">
							<span class="data title"><?= $title ?></span>
							<span class="data"><?= $value ?></span>
						</div>
					<?php } ?>
		<?php
					$index++;
				}
		?>
			</div>
		</div>
	<?php
		}
	?>
	</div>
	<?php } else { ?>
		<div class="filler-height filler-height-large"></div>
		<p><?= $widget->noDataMessage ?></p>
	<?php } ?>
</div>
