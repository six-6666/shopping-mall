<template>
	<view class="particulars">
		<!-- <view class="status_bar"></view> -->
		<!-- 头部 -->
<!-- 		<view class="header">
			<image @click="back" src="/static/my/menu1.png" mode=""></image>
			直供商品详情
		</view> -->
		<view class="scroll-box">
			<scroll-view :scroll-y="true" style="height: 100%;">
				<!-- 轮播图 -->
				<view class="swiper_box"><product-con-swiper :img-urls="Urls" @clickbutton="clickbutton"></product-con-swiper></view>
				<!-- 详情内容 -->
				<view class="content">
					<!-- 商品模块 -->
					<product-details v-if="clkstore === 0"></product-details>
					<!-- 果园详情 -->
					<orchard-details v-if="clkstore === 1"></orchard-details>
					<!-- 评论区 -->
					<discuss v-if="clkstore === 2"></discuss>
				</view>
			</scroll-view>
		</view>
		<!-- 底部购买模块 -->
		<view class="buy-navber">
			<view class="buy-navber-left">
				<view>
					<image src="/static/category/GoodsCon/icon-service.png" mode=""></image>
					<text>客服</text>
				</view>
				<view>
					<image src="/static/category/GoodsCon/icon-collect.png" mode=""></image>
					<text>收藏</text>
				</view>
				<view>
					<image src="/static/category/GoodsCon/icon-shopping-trolley.png" mode=""></image>
					<text>购物车</text>
				</view>
			</view>
			<view class="buy-navber-right">
				<view class="button-add">加入购物车</view>
				<view class="button-buy">立即购买</view>
			</view>
		</view>
	</view>
</template>

<script>
import ProductConSwiper from '@/components/ProductConSwiper';
import ProductDetails from './product-details.vue';
import OrchardDetails from './orchard-details.vue';
import Discuss from './discuss.vue';
export default {
	components: { ProductConSwiper, ProductDetails, OrchardDetails, Discuss },
	data() {
		return {
			clkstore: 0, //商品 果园 评论 点击切换的状态记录
			Urls: ['/static/logo.png', '/static/logo.png', '/static/logo.png', '/static/logo.png']
		};
	},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		// 子组件ProductConSwiper传递的事件
		clickbutton(index) {
			this.clkstore = index;
		}
	}
};
</script>

<style lang="scss">
.particulars {
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
}
// .header {
// 	display: flex;
// 	align-items: center;
// 	font-size: 34rpx;
// 	font-family: PingFangSC-Semibold, PingFang SC;
// 	font-weight: 600;
// 	color: $uni-text-color;
// 	height: 88rpx;
// 	padding: 0 30rpx;
// 	background-color: #fff;
// 	position: relative;
// 	> image {
// 		width: 40rpx;
// 		height: 40rpx;
// 		margin-right: 12rpx;
// 	}
// }
.scroll-box {
	flex: 1;
	overflow: auto;
}
.swiper_box {
	width: 100%;
	height: 480rpx;
}
.buy-navber {
	// position: absolute;
	// bottom: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 750rpx;
	height: 100rpx;
	padding: 16rpx 30rpx;
	background: #ffffff;
	box-shadow: 0px 0px 2rpx 0px rgba(0, 0, 0, 0.15);
	.buy-navber-left {
		display: flex;
		flex: auto;
		justify-content: space-between;
		& > view {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			> image {
				width: 32rpx;
				height: 29rpx;
			}
			> text {
				font-size: 22rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #999999;
				line-height: 32rpx;
			}
		}
	}
	.buy-navber-right {
		display: flex;
		margin-left: 40rpx;
		.button-add {
			width: 200rpx;
			height: 76rpx;
			line-height: 76rpx;
			text-align: center;
			background: #ffc000;
			border-radius: 38rpx 0px 0px 38rpx;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #ffffff;
		}
		.button-buy {
			width: 200rpx;
			height: 76rpx;
			line-height: 76rpx;
			text-align: center;
			background: #ff9900;
			border-radius: 0 38rpx 38rpx 0;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #ffffff;
		}
	}
}
</style>
