<template>
	<section class="article-list">
		<h1>文章列表</h1>
		<article class="article-item" v-for="item in data">
			<header>
				<img :src="item.author.avatar_url"/>
				<router-link :to="'detail?id='+item.id">
					<h2>{{item.title}}</h2>
				</router-link>
				<h6>{{item.author.loginname}}</h6>
			</header>

			<section></section>
			<footer>
				<Row>
					<Col span="16" class="time">

					</Col>
					<Col span="8" push="16" class="time">
					最后回复时间：
					<time :datetime="item.last_reply_at">{{item.last_reply_at}}</time>
					</Col>
				</Row>
			</footer>
		</article>
	</section>
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
			this.loadData();
		},
		methods: {
			loadData(){
				$request.get('topics', (data) => {
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
	.article-list {
		position: relative;

		.article-item {
			position: relative;
			padding: 15px 10px;
			cursor: pointer;
			-webkit-user-select: none;
			user-select: none;
			> header {
				img:first-child {
					width: 32px;
					height: 32px;
					float: left;
					margin-right: 15px;
					border-radius: 50%;
				}
			}
			> footer {
				.time {
					text-align: right;
				}
			}

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
				background-color: #e9eaec;
				height: 1px;
				-webkit-transform: scaleY(0.3);
				transform: scaleY(0.3);
			}
		}
	}
</style>