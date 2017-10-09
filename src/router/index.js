import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: r => require.ensure([], ()=>r(require('../page/home/home.vue')),'home')
    },{
      path:'/item/:id',
      name:'item',
      component: r => require.ensure([], ()=>r(require('../page/item/item.vue')),'item')
    },{
      path:'/score',
      name:'score',
      component: r => require.ensure([], ()=>r(require('../page/score/score.vue')),'score')
    }
    
  ]
})
