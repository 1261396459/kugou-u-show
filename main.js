import Vue from 'vue'
import App from './App'
import {toDatabase} from "api/mytool.js";

Vue.config.productionTip = false
// 开启调试模式
Vue.config.devtools = true
// 添加全局方法
Vue.prototype.$database = toDatabase

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
