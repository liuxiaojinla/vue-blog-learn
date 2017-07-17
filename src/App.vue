<template>
	<div class="layout" id="app">
		<div class="layout-header">
			<Menu mode="horizontal" theme="dark" active-name="1">
				<div class="layout-logo"></div>
				<div class="layout-nav"></div>
			</Menu>
		</div>

		<div class="layout-content">
			<router-view keep-alive transition transition-mode="out-in"></router-view>
		</div>
		<div class="layout-copy">
			2017 &copy; TalkingData
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>