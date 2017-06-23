<template>
	<div class="index">
		<ul class="list">
			<li v-for="item in data" v-text="item.title" @click="onDetail(item.id)"></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "index",
		data(){
			return {
				data: null
			}
		},
		created(){
//			this.loadData();
		},
		methods: {
			loadData(){
				$api.get('topics', (data) => {
					this.data = data;
				});
			},
			onDetail(id){
				this.$router.push({path: 'detail', query: {id: id}});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.index {
		.list {
			list-style: none;
			padding: 0;
			> li {
				position: relative;
				padding: 15px 10px;
				cursor: pointer;
				-webkit-user-select: none;
				user-select: none;
				&:hover {
					background-color: #f0f0f0;
				}
				&:active {
					background-color: #e0e0e0;
				}
				&::after {
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					background-color: #ddd;
					height: 1px;
					-webkit-transform: scaleY(0.4);
					transform: scaleY(0.4);
				}
			}
		}
	}
</style>