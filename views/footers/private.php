<?php
use yii\web\View;
?>

<div id="error-popup" class="popup popup-small">
	<a class="close-popup b-close" style="cursor: pointer;"></a>
    <div class="popup-title"><span class="popup-title-text">Errors</span></div>
    <div class="popup-elements"></div>
</div>

<div id="message-popup" class="popup popup-small">
	<a class="close-popup b-close" style="cursor: pointer;"></a>
    <div class="popup-title"><span class="popup-title-text">Message</span></div>
    <div class="popup-elements"></div>
</div>

<?php
$parent			= $this->params['sidebar-parent'];
$child			= $this->params['sidebar-child'];
$sidebarScript 	= "initSidebar( '$parent', '$child' )";

$this->registerJs( $sidebarScript, View::POS_READY );
?>