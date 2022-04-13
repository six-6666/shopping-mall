<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	page{
		background: #f2f2f2;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}
	view{
		box-sizing: border-box;
	}
</style>
