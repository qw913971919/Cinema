import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'myactive',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/action/city'
    },
    {
      path:'/cinema',
      name:'cinema',
      component:()=>import('./views/Cinema/cinema.vue')
    },
    {
      path:'/member',
      name:'member',
      component:()=>import('./views/Member/member.vue')
    },
    {
      path:'/action',
      name:'action',
      component:()=>import('./views/Action/action.vue'),
      redirect:'/action/city',//路由重定向
      linkActiveClass:'active',
      children:[{
        path:'city',
        name:'city',
        component:()=>import('@/components/City/city.vue')
      },
      {
        path:'nowplaying',
        name:'nowplaying',
        component:()=>import('@/components/NowPlaying/nowplaying.vue')
      },
      {
        path:'comingsoon',
        name:'comingsoon',
        component:()=>import('@/components/ComingSoon/comingsoon.vue')
      },
      {
        path:'search',
        name:'search',
        component:()=>import('@/components/Search/search.vue')
      }
    ]
    },
  ]
})
