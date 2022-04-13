<template>
	<view class="content">
		<view class="content-item" v-for="(item,index) in recommend" :key="index">
			<image :src="item.image" mode=""></image>
			<text>{{item.title}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			recommend:{
				type:Array,
				default:[]
			}
		}
		
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 264rpx;
		display: flex;
		padding: 0 20rpx;
		margin-bottom: 24rpx;
		justify-content: space-between;
		align-items: center;
		background: #FFFFFF;
		&-item{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 24rpx;
			color: #666666;
			>image{
				width: 130rpx;
				height: 130rpx;
				margin-bottom: 20rpx;
			}
		}
	}
</style>
