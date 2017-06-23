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

<style>
	body {
		background: #f5f7f9;
	}

	.layout {
		position: relative;
	}

	.layout-logo {
		width: 100px;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		float: left;
		position: relative;
		top: 15px;
		left: 20px;
	}

	.layout-nav {
		width: 420px;
		margin: 0 auto;
	}

	.layout-assistant {
		width: 300px;
		margin: 0 auto;
		height: inherit;
	}

	.layout-breadcrumb {
		padding: 10px 15px 0;
	}

	.layout-content {
		min-height: 200px;
		margin: 15px;
		overflow: hidden;
		background: #fff;
		border-radius: 4px;
	}

	.layout-content-main {
		padding: 10px;
	}

	.layout-copy {
		text-align: center;
		padding: 10px 0 20px;
		color: #9ea7b4;
	}
</style>
