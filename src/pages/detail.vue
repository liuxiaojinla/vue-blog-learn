<template>
	<article class="detail" v-if="!isLoading">
		<header><h1>{{info.title}}</h1></header>
		<section class="content" v-html="info.content"></section>
		<footer>
			<Row>
				<Col span="6">
				<Icon type="chatbox-working" v-text="' '+info.reply_count"></Icon>
				</Col>
				<Col span="18" class="text-right">
				<time :datetime="info.last_reply_at">{{info.last_reply_at}}</time>
				</Col>
			</Row>
		</footer>
		<section class="replies">
			<article v-for="item in info.replies">
				<header>
					<img :src="item.author.avatar_url"/>
					<div class="header-inner">
						<h4>{{item.author.loginname}}</h4>
						<p>{{item.create_at}}</p>
					</div>
				</header>
				<section class="content" v-html="item.content"></section>
				<section class="replies" v-if="item.reply_list">
					<article v-for="item in item.reply_list">
						<header>
							<img :src="item.author.avatar_url"/>
							<div class="header-inner">
								<h4>{{item.author.loginname}}</h4>
								<p>{{item.create_at}}</p>
							</div>
						</header>
						<section class="content" v-html="item.content"></section>
					</article>
				</section>
			</article>
		</section>
	</article>
	<Spin size="large" fix v-else></Spin>
</template>

<script>
	export default {
		name: "detail",
		data(){
			return {
				info: {},
				isLoading: true
			};
		},
		created(){
			const id = this.$route.query.id;
			$request.get('topic/' + id, (info) => {
				const replies = info.replies;
				replies.forEach(function (item, index) {
					if (item.reply_id !== null) {
						replies.forEach(function (tempItem) {
							if (item.reply_id === tempItem.id) {
								if (!tempItem.reply_list) tempItem.reply_list = [];
								tempItem.reply_list.push(item);
								return false;
							}
						});
						replies.splice(index, 1);
					}
				});
				this.isLoading = false;
				this.info = info;
			});
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.detail {
		padding: 10px 15px;
		> h1 {
			font-size: 18px;
			margin-bottom: 15px;
		}
		> .content {
			position: relative;
			padding-top: 15px;
			padding-bottom: 15px;
			&:before, &:after {
				content: '';
				position: absolute;
				background-color: #1c2438;
				left: 0;
				right: 0;
				height: 1px;
				-webkit-transform: scaleY(0.3);
				transform: scaleY(0.3);
			}
			&:before {
				top: 0;
			}
			&:after {
				bottom: 0;
			}

			img {
				max-width: 100% !important;
			}
		}
		> footer {
			padding-top: 15px;
			padding-bottom: 5px;
		}

		.replies {
			article {
				position: relative;

				header {
					padding-top: 8px;
					padding-bottom: 8px;

					img:first-child {
						width: 36px;
						height: 36px;
						float: left;
						border-radius: 50%;
						margin-right: 10px;
					}
					.header-inner {
						position: relative;
						p {
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
					&:after {
						content: '';
						display: block;
						clear: both;
					}
				}
				.content {
					padding-bottom: 8px;
					img {
						max-width: 100% !important;
					}
				}

				&:after {
					content: '';
					position: absolute;
					background-color: #1c2438;
					left: 0;
					right: 0;
					bottom: 0;
					height: 1px;
					-webkit-transform: scaleY(0.3);
					transform: scaleY(0.3);
				}

				> .replies article:last-child:after {
					height: 0;
				}

			}
		}
	}
</style>