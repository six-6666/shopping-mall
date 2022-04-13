<template>
	<view class="swipers">
		<swiper 
			class="swiper" 
			:indicatorDots='true'
			indicatorColor='rgba(180,180,180,.6)'
			indicator-active-color="rgba(255,0,0,1)"
			:autoplay="true"
			:interval="3000"
			:circular="true">
			<swiper-item v-for="(item,index) in banner" :key="index">
				<image class="img" :src="item.image" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			banner:{
				type:Array,
				default:[]
			}
		},
		data(){
			return{				
			}
		},
		created() {
		},
		methods:{
		}
	}
</script>

<style lang="scss">
	.swipers{
		width: 100%;
		height: 390rpx;
		.swiper{
			width: 100%;
			height: 100%;
			.img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
