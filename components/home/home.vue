<template>
	<div class="homePage">
		<my-swipe :swipes= "message"></my-swipe>
		<div class="mui-content">
	        <ul class="mui-table-view mui-grid-view mui-grid-9">
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name: 'newsList'}">
	                    <span class="mui-icon mui-icon-home"></span>
	                    <div class="mui-media-body">新闻资讯</div></router-link></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name: 'picShare'}">
	                    <span class="mui-icon mui-icon-email"><span class="mui-badge" v-show="false">5</span></span>
	                    <div class="mui-media-body">图文分享</div></router-link></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name: 'goodList'}">
	                    <span class="mui-icon mui-icon-chatbubble"></span>
	                    <div class="mui-media-body">商品展示</div></router-link></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-location"></span>
	                    <div class="mui-media-body">留言反馈</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-search"></span>
	                    <div class="mui-media-body">搜索资讯</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-phone"></span>
	                    <div class="mui-media-body">联系我们</div></a></li>
	        </ul> 
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			message: []
		}
	},
	created(){
		this.$ajax.get(this.$httpConfig.douban)
		.then(res => {
			// console.log(1,res.data.subjects[0].images.small);
			this.message = res.data.subjects.slice(0,4);
		})
		.catch(err => {
			console.log(err);
		})
	}
}
</script>

<style>
	.homePage{
		margin-top: 40px;
	}
	.mui-table-view.mui-grid-view.mui-grid-9 {
		margin-top: 0px;
	}
	.mui-grid-view.mui-grid-9 {
		background-color: white;
	}

	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border-right: none;
		border-bottom: none;
	}
	.mui-icon {
		width: 50px;
		height: 50px;
	}
	.mui-icon-home:before,
	.mui-icon-email:before,
	.mui-icon-chatbubble:before,
	.mui-icon-location:before,
	.mui-icon-search:before,
	.mui-icon-phone:before{
		content: "";
	}
	.mui-icon-home {
		background-image: url("../../static/img/news.png");
		background-repeat: round;
	}
	.mui-icon-email {
		background-image: url("../../static/img/picShare.png");
		background-repeat: round;
	}
	.mui-icon-chatbubble {
		background-image: url("../../static/img/goodShow.png");
		background-repeat: round;
	}
	.mui-icon-location {
		background-image: url("../../static/img/feedback.png");
		background-repeat: round;
	}
	.mui-icon-search {
		background-image: url("../../static/img/search.png");
		background-repeat: round;
	}
	.mui-icon-phone {
		background-image: url("../../static/img/callme.png");
		background-repeat: round;
	}
	
</style>