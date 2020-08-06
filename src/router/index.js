import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      login: false,
      title: '首頁'
    }
  },
  {
    path: '/information',
    name: 'Information',
    component: () => import(/* webpackChunkName: "information" */ '../views/Information.vue'),
    meta: {
      login: false,
      title: '關於'
    }
  },
  {
    path: '/workout',
    name: 'Workout',
    component: () => import(/* webpackChunkName: "workout" */ '../views/Workout.vue'),
    meta: {
      login: false,
      title: '鍛鍊'
    }
  },
  {
    path: '/timer',
    name: 'Timer',
    component: () => import(/* webpackChunkName: "timer" */ '../views/Timer.vue'),
    meta: {
      login: false,
      title: '計時器'
    }
  },
  {
    path: '/learning',
    name: 'Learning',
    component: () => import(/* webpackChunkName: "learning" */ '../views/learning.vue'),
    meta: {
      login: false,
      title: '學習'
    }
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue'),
    meta: {
      login: false,
      title: '清單'
    }
  }
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (Home) {
  return originalPush.call(this, Home).catch(err => err)
}

router.beforeEach((to, from, next) => {
  if (to.meta.login && !StorageEvent.state.user) {
    next('/Home')
  } else {
    next()
  }
})

export default router
