import Vue from 'vue'
import App from './App'
import {toDatabase,Player} from "api/mytool.js"

// const MusicPlayer = uni.createInnerAudioContext()
const MusicPlayer = new Player()

Vue.config.productionTip = false
// 开启调试模式
Vue.config.devtools = true
// 添加全局对象
Vue.prototype.$database = toDatabase
Vue.prototype.$audio = MusicPlayer

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
