<template>
	<article class="detail">
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
					{{item.author.logtimename}}
				</header>

			</article>
		</section>
	</article>
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
			$request.get('topic/' + id, (info) => {
				this.info = info;
			});
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.detail {
		padding: 10px 15px;
		h1 {
			font-size: 18px;
			margin-bottom: 15px;
		}
		.content {
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
		footer {
			padding-top: 15px;
			padding-bottom: 5px;
		}

		.replies {
			article {
				header {
					img:first-child {
						width: 48px;
						height: 48px;
						float: left;
						border-radius: 50%;
					}
				}
			}
		}
	}
</style>