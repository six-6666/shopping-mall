<template>
	<view class="mine">
	<view class="content">
		<view class="item">
			<view class="item-img"></view>
			<view class="item-text">
				您好，在线客服很高兴为您服务！请问有什么可以帮到您！
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	.mine{
		.content{
			width: 100%;
			height: 100%;
			padding: 24rpx 30rpx;
			border: 2rpx solid #007AFF;
			.item{
				&-img{
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					background: pink;
				}
				
			}
		}
	}
</style>
