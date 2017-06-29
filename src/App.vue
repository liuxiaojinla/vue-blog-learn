<template>
	<div class="layout" id="app">
		<Menu mode="horizontal" theme="dark" active-name="1">
			<div class="layout-logo"></div>
			<div class="layout-nav">
				<Menu-item name="1">
					<Icon type="ios-navigate"></Icon>
					导航一
				</Menu-item>
				<Menu-item name="2">
					<Icon type="ios-keypad"></Icon>
					导航二
				</Menu-item>
				<Menu-item name="3">
					<Icon type="ios-analytics"></Icon>
					导航三
				</Menu-item>
				<Menu-item name="4">
					<Icon type="ios-paper"></Icon>
					导航四
				</Menu-item>
			</div>
		</Menu>
		<div class="layout-content">
			<router-view keep-alive transition transition-mode="out-in"></router-view>
		</div>
		<div class="layout-copy">
			2011-2016 &copy; TalkingData
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>