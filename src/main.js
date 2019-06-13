
import Vue from 'vue'
import App from './App'
import router from './router'
//300秒延迟问题
import fastClick from 'fastclick'
// 移动端css样式初始化
import 'styles/reset.css'

// 1像素边框
import 'styles/border.css'

//引入字体图标
import 'styles/iconfont.css'
//引入轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
fastClick.attach(document.body)

//引入轮播插件样式
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
