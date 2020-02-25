<template>
	<div class="row">
		<div class="col-sm-12">
			<h3>Quotes Added</h3>
			<div class="progress">

				<div class="progress">
					<div class="progress-bar" role="progressbar" :aria-valuenow="quotes.length*10" aria-valuemin="0" aria-valuemax="100"
					:style="{width:quotes.length*10+'%'}">
						{{quotes.length}} / {{maxQuotes}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			quotes:Array,
			maxQuotes:Number
		}
	}
</script>