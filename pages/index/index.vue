<template>
	<view class="home">
	<scroll-view :scroll-y="true" style="width: 100%;height: 100%;">
		<!-- 轮播图模块 -->
		<index-swiper :banner = 'banner'></index-swiper>
		<!-- 特别购物模块 -->
		<index-recommend :recommend='recommend'></index-recommend>
		<!-- 本周流行模块 -->
		<index-fashion></index-fashion>
		<!-- 内容区导航 -->
		<tab-control @itemclick="itemclick"></tab-control>
	</scroll-view>
	</view>
</template>

<script>
	import indexSwiper from './indexChild/indexSwiper.vue'
	import indexRecommend from './indexChild/indexRecommend.vue'
	import indexFashion from './indexChild/indexFashion.vue'
	import tabControl from '../../components/content/tabcontrol/tabControl.vue'
	
	import {gethomes,getHomeGoods} from '../../api/home.js'
	export default {
		components:{
			indexSwiper,
			indexRecommend,
			indexFashion,
			tabControl
				},
		data() {
			return {
			banner:[],
			recommend:[]
			}
		},
		onLoad() {
		this.gethomes()
		this.getHomeGoods()
		},
		methods: {
			// 请求轮播图与特殊模块的数据
		gethomes(){
			gethomes().then(res =>{
				this.banner = res.banner.list
				this.recommend = res.recommend.list
			})
		},
		getHomeGoods(){
			getHomeGoods().then(res =>{
				console.log(res)
			})
		},
		itemclick(index){
			console.log(index)
		}
		}
	}
</script>

<style lang="scss">
	.home{
		height: 100%;
		overflow: auto;
		flex: 1;
	}
</style>
