<template>
	<div class="detail">
		<h1>{{info.title}}</h1>
		<div v-html="info.content"></div>
	</div>
</template>

<script>
	export default {
		name: "detail",
		data(){
			return {
				info: {}
			};
		},
		created(){
			const id = this.$route.query.id;
			$api.get('topic/' + id, (info) => {
				this.info = info;
			});
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.detail {
	}
</style>