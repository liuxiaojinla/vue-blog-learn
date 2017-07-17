<template>
	<section class="article-list" v-if="isLoaded">
		<h1 class="article-title">文章列表</h1>
		<article class="article-item" v-for="item in data">
			<header>
				<img :src="item.author.avatar_url"/>
				<span class="top" v-if="item.top"></span>
				<router-link :to="'detail?id='+item.id">
					<h1>{{item.title}}</h1>
				</router-link>
				<h3>{{item.author.loginname}}</h3>
			</header>
			<section></section>
			<footer>
				<Row>
					<Col span="6">
					<Icon type="chatbox-working" v-text="' '+item.reply_count"></Icon>
					</Col>

					<Col span="18" class="time">
					<time :datetime="item.last_reply_at">{{item.last_reply_at}}</time>
					</Col>
				</Row>
			</footer>
		</article>
		<div class="article-pager">
			<template v-if="hasMore">
				<Spin size="large" fix v-if="isLoading"></Spin>
				<Button type="info" long v-else @click="loadData(page+1)">下一页</Button>
			</template>
			<p class="text-center" v-else>没有更多了</p>
		</div>
	</section>
	<Spin size="large" fix v-else></Spin>
</template>

<script>
	export default {
		name: "index",
		data(){
			return {
				isLoading: false,
				data: [],
				page: 1,
				isLoaded: false,
				hasMore: true,
			}
		},
		created(){
			this.loadData();
		},
		methods: {
			loadData(page){
				this.isLoading = true;
				$request.get('topics?page=' + page, (data) => {
					if (!this.isLoaded) this.isLoaded = true;
					this.isLoading = false;
					this.page = page;
					this.data = page === 1 ? data : this.data.concat(data);
					this.hasMore = data.length >= 40;
				});
			},
//			onDetail(id){
//				this.$router.push({path: 'detail', query: {id: id}});
//			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.article-list {
		position: relative;
		.article-title {
			padding: 15px 10px;
		}
		.article-item {
			position: relative;
			padding: 15px 10px;
			cursor: pointer;
			-webkit-user-select: none;
			user-select: none;
			> header {
				img:first-child {
					width: 48px;
					height: 48px;
					float: left;
					margin-right: 15px;
					border-radius: 50%;
					border: 1px solid #ddd;
				}
				h1 {
					font-size: 20px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.top {
					display: inline-block;
					float: right;
					&:after {
						content: '置顶';
						padding: 3px 10px;
						border-radius: 15px;
						background-color: #ed3f14;
						color: white;
						font-size: 10px;
					}
				}
			}
			> footer {
				.ivu-col {
					padding-left: 8px;
				}
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

			&:after {
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

		.article-pager {
			position: relative;
			padding: 10px;
			height: 52px;
			p {
				line-height: 1.5;
				padding: 3px 5px;
			}
		}
	}
</style>