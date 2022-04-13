<template>
	<view class="">
		<view class="content-top">
			<view :class="{ dert: dertstore === 1 }" @click="clickall(1)">全部</view>
			<view :class="{ dert: dertstore === 2 }" @click="clickall(2)">
				好评
				<text class="content-top-txt">128</text>
			</view>
			<view :class="{ dert: dertstore === 3 }" @click="clickall(3)">
				差评
				<text class="content-top-txt">123</text>
			</view>
			<text>商品好评率99%</text>
		</view>
		<view class="centents">
			<view class="centents-titles">
				商品评价
				<view class="but">
					<text :class="{ buts: butsstore === 1 }" @click="clickbut(1)">默认</text>
					<text :class="{ buts: butsstore === 2 }" @click="clickbut(2)">最新</text>
				</view>
			</view>
			<!-- 评论模块 -->
			<view><observer :datas="datas"></observer></view>
		</view>
	</view>
</template>

<script>
import observer from './discussmod/observer.vue'; //评论模块组件
export default {
	components: { observer },
	data() {
		return {
			dertstore: 1, //评论筛选点击模块的状态保存
			butsstore: 1, //评论时间筛选的状态保存
			datas: [
				{
					id: 1,
					headportrait: '/static/logo.png',
					urseid: '我有一个大美女',
					releasetime: '2022-02-25',
					star: 1,
					commodity: '带箱五斤精品大中果',
					critictext: '属性值之一缺失并不要紧，只要按照此顺序设置其他值即可。请注意，在上面的例子中，我们没有使用 background-attachment 属性，因为它没有值。',
					imgurl: ['/static/logo.png', '/static/logo.png', '/static/logo.png', '/static/logo.png'],
					like: 255,
					reply: 544
				},
				{
					id: 2,
					headportrait: '/static/logo.png',
					urseid: '世界很大我想去看看',
					releasetime: '2022-03-15',
					star: 3,
					commodity: '带箱五斤精品大中果',
					critictext: '属性值之一缺失并不要紧，只要按照此顺序设置其他值即可。请注意，在上面的例子中，我们没有使用 background-attachment 属性，因为它没有值。属性值之一缺失并不要紧，只要按照此顺序设置其他值即可。请注意，在上面的例子中，我们没有使用 background-attachment 属性，因为它没有值。',
					imgurl: ['/static/logo.png', '/static/logo.png', '/static/logo.png', '/static/logo.png', '/static/logo.png'],
					like: 58,
					reply: 125
				},
				{
					id: 3,
					headportrait: '/static/logo.png',
					urseid: '我是你爹',
					releasetime: '2021-01-15',
					star: 5,
					commodity: '带箱五斤精品大中果',
					critictext: '属性值之一缺失并不要紧属性值之一缺失并不要紧，只要按照此顺序设置其他值即可。请注意，在上面的例子中，我们没有使用 background-attachment 属性，因为它没有值。，只要按照此顺序设置其他值即可。请注意，在上面的例子中，我们没有使用 background-attachment 属性，因为它没有值。属性值之一缺失并不要紧，只要按照此顺序设置其他值即可。请注意，在上面的例子中，我们没有使用 background-attachment 属性，因为它没有值。',
					imgurl: [],
					like: 8,
					reply: 35
				}
			]
		};
	},
	methods: {
		clickall(id) {
			this.dertstore = id;
		},
		clickbut(id) {
			this.butsstore = id;
		}
	}
};
</script>

<style lang="scss">
.content-top {
	width: 100%;
	padding: 24rpx 30rpx;
	height: 104rpx;
	background: #ffffff;
	display: flex;
	justify-content: space-between;
	&-txt {
		font-weight: 600;
		padding-left: 8rpx;
	}
	> view {
		background: #fff4d4;
		border-radius: 28rpx;
		padding: 8rpx 24rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
	}
	> text {
		font-size: 22rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
	}
}
.dert {
	border: 2rpx solid #ff9900;
	color: #ff9900 !important;
}
.centents {
	width: 100%;
	padding: 24rpx 30rpx;
	margin-top: 24rpx;
	background: #fff;
	&-titles {
		font-size: 28rpx;
		height: 68rpx;
		display: flex;
		margin-bottom: 24rpx;
		justify-content: space-between;
		border-bottom: 1rpx solid #aaaaaa60;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #333333;
		.but {
			width: 184rpx;
			height: 48rpx;
			line-height: 48rpx;
			display: flex;
			justify-content: space-between;
			background: #f3f3f3;
			border-radius: 24rpx;
			font-size: 22rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #999999;
			> text {
				padding: 0 24rpx;
				width: 100%;
			}
		}
	}
}
.buts {
	width: 92rpx;
	height: 46rpx;
	color: #333;
	background: #ffffff;
	border-radius: 24rpx;
	border: 2rpx solid #f3f3f3;
}
</style>
