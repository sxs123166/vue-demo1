// 导入vue 这个包， 的到vue的构造函数
import Vue from 'vue'
// 导入App.vue的根组件，将来要把App.vue中的摸板结构，渲染到HTML页面中
import App from './App.vue'

import Test from '@/components/Test.vue'
import Count from '@/components/Count.vue'

// Vue.component('MyCount', Count)
Vue.component('MyCount', Count)
Vue.component('Test', Test)

Vue.config.productionTip = false
// 创建Vue的实例对象
new Vue({
  // 把render函数指定的组件，渲染到HTML页面中
  // render函数中，渲染的是哪个.vue组件，那么这个组件就是根组件
  render: h => h(App),
}).$mount('#app')

// Vue实例的 $amount()方法, 作用和el属性完全一样

