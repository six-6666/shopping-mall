<template>
	<view class="content">
		<view class="item" 
					v-for="(item,index) in title" 
					:key="index"
					@click="itemclick(index)"
					>
			<text :class="{ative:itemindex === index}">{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			title:{
				type:Array,
				default:()=>['流行', '新款', '精选']
			}
		},
		data(){
			return{
				itemindex:0,
			}
		},
		methods:{
			itemclick(index){
				this.itemindex = index;
				this.$emit('itemclick',this.itemindex)
			}
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 76rpx;
		display: flex;
		font-size: 28rpx;
		color: #666666;
		background: #FFFFFF;
		.item{
			flex: 1;
			line-height: 76rpx;
			text-align: center;
			>text{
				padding: 10rpx;
			}
		}
	}
	.ative{
		color: #ff5777;
		border-bottom: 4rpx solid #ff8198;
	}
</style>
