import Vue from 'vue'
import Router from 'vue-router'
import defaultRouterMap from './defaultRouterMap'

Vue.use(Router)

const router = new Router({
    routes:defaultRouterMap,
    mode:'hash'
})

export default router