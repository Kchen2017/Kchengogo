<template>

    <div class="tmpl" :style="{height: tmplHeight + 'px'}" ref="tmpl">
        <nav-bar newsTitle="新闻列表"></nav-bar>
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  :bottom-all-loaded="bottomAllLoaded" :auto-fill="isAutoFill" @bottom-status-change="handleBottomChange" ref="loadmore">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for="list in lists" :key="list.id">
                    <a>
                        <img class="mui-media-object mui-pull-left" :src="list.img_url">
                        <div class="mui-media-body">
                            <span v-text="list.title"></span>
                            <div class="news-desc">

                                <p>点击数:{{list.click}}</p>
                                <p>发表时间:{{list.add_time | timeTransform}}</p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
           
        </mt-loadmore>
    </div>
</template>
<script>
export default {
    data(){
        return {
            lists: [{
                id: 1,
                title: "日媒称中国人在日本爆买仍存在:花3.3万元买石头",
                add_time: "2018-02-27T04:05:34.000Z",
                zhaiyao: "中国游客在日本扫货、购买高价商品的“爆买”被认为正走向退潮。",
                click: 9,
                img_url: "http://n.sinaimg.cn/translate/w500h378/20180227/2tSk-fyrwsqi5947572.jpg"
            },{
                id: 2,
                title: "日媒称中国人在日本爆买仍存在:花3.3万元买石头",
                add_time: "2018-02-27T04:05:34.000Z",
                zhaiyao: "中国游客在日本扫货、购买高价商品的“爆买”被认为正走向退潮。",
                click: 9,
                img_url: "http://n.sinaimg.cn/translate/w500h378/20180227/2tSk-fyrwsqi5947572.jpg"
            },{
                id: 3,
                title: "日媒称中国人在日本爆买仍存在:花3.3万元买石头",
                add_time: "2018-02-27T04:05:34.000Z",
                zhaiyao: "中国游客在日本扫货、购买高价商品的“爆买”被认为正走向退潮。",
                click: 9,
                img_url: "http://n.sinaimg.cn/translate/w500h378/20180227/2tSk-fyrwsqi5947572.jpg"
            },{
                id: 4,
                title: "日媒称中国人在日本爆买仍存在:花3.3万元买石头",
                add_time: "2018-02-27T04:05:34.000Z",
                zhaiyao: "中国游客在日本扫货、购买高价商品的“爆买”被认为正走向退潮。",
                click: 9,
                img_url: "http://n.sinaimg.cn/translate/w500h378/20180227/2tSk-fyrwsqi5947572.jpg"
            },{
                id: 5,
                title: "日媒称中国人在日本爆买仍存在:花3.3万元买石头",
                add_time: "2018-02-27T04:05:34.000Z",
                zhaiyao: "中国游客在日本扫货、购买高价商品的“爆买”被认为正走向退潮。",
                click: 9,
                img_url: "http://n.sinaimg.cn/translate/w500h378/20180227/2tSk-fyrwsqi5947572.jpg"
            },{
                id: 6,
                title: "日媒称中国人在日本爆买仍存在:花3.3万元买石头",
                add_time: "2018-02-27T04:05:34.000Z",
                zhaiyao: "中国游客在日本扫货、购买高价商品的“爆买”被认为正走向退潮。",
                click: 9,
                img_url: "http://n.sinaimg.cn/translate/w500h378/20180227/2tSk-fyrwsqi5947572.jpg"
            },{
                id: 7,
                title: "日媒称中国人在日本爆买仍存在:花3.3万元买石头",
                add_time: "2018-02-27T04:05:34.000Z",
                zhaiyao: "中国游客在日本扫货、购买高价商品的“爆买”被认为正走向退潮。",
                click: 9,
                img_url: "http://n.sinaimg.cn/translate/w500h378/20180227/2tSk-fyrwsqi5947572.jpg"
            }],
            tmplHeight: 0,
            bottomAllLoaded: false,
            isAutoFill: false

        }
    },
    created(){
        console.log(this.$refs.tmpl);
        this.$ajax.get(this.$httpConfig.newsList)
        .then(res => {
            this.lists = res.data.message
        })
        .catch(err => {
            console.log("获取数据失败！！",err);
        })
    },
    methods: {
        loadTop(){
            console.log(1);
            let indexPages = 0;
            this.$ajax.get(this.$httpConfig.newsList)
            .then(res => {
                this.$refs.loadmore.onTopLoaded();
            })
            .catch(err => {
                this.$refs.loadmore.onTopLoaded();
                console.log("获取数据失败！！",err);
            })
        },
        loadBottom(){
            console.log(2);
            let indexPages = 0;
            this.$ajax.get(this.$httpConfig.newsList)
            .then(res => {
                this.$refs.loadmore.onBottomLoaded();
            })
            .catch(err => {
                this.$refs.loadmore.onBottomLoaded();
                console.log("获取数据失败！！",err);
            })
        },
        handleBottomChange(s){
            
            console.log(s);
            
        }
    },
    mounted(){
        console.log(this.$refs.tmpl.getBoundingClientRect().top);
        console.log(document.documentElement.clientHeight);
        this.tmplHeight = document.documentElement.clientHeight - 50 - this.$refs.tmpl.getBoundingClientRect().top;
        console.log(this.tmplHeight);
    }
}
</script>
<style scoped>

.tmpl {
    overflow: scroll;
}

.mui-media-body p {
    color: #0bb0f5;
}

.news-desc p:nth-child(1) {
    float: left;
}

.news-desc p:nth-child(2) {
    float: right;
}
::-webkit-scrollbar{
  display:none;
}
</style>
