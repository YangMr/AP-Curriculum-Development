import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home"
import Bookshelf from "@/views/bookshelf/Bookshelf"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
		{
			path : "/bookshelf",
			name : "bookshelf",
			component : Bookshelf
		}
  ]
})
