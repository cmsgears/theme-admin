<!-- Location Template -->
<script id="userSettingsTemplate" type="text/x-handlebars-template">

	{{#each settings}}
	<div class="row info-row">
		<div class="col col12x2">{{label}}</div>
		<div class="col col12x10">{{value}}</div>
	</div>
	{{/each}}

</script>