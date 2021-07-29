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
		},
    globalData: {
      "uid": "",
      "uname": "",
      "nowMusic": 0
    }
	}
</script>

<style>
  @import './main.css';
</style>
