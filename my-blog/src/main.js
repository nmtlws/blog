// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'


Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

// 自定义指令


Vue.directive('theme',{
	bind(el,binding,vnode){
		if (binding.value == 'wide') {
			el.style.maxWidth = "1260px";
		} else if (binding.value == 'narrow') {
			el.style.maxWidth = "560px";
		}

		if (binding.arg == 'column') {
			el.style.background = "#6677cc";
			el.style.padding = '20px';
		}
	}
})

// 自定义过滤器

Vue.filter("snippet",function(value){
	return value.slice(0,100) + "...";
})

// 创建路由
const router = new VueRouter({
	routes: Routes,
	mode:"history"
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router:router
})
