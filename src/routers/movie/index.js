export default {
    path : "/movie",
    component: () => import('@/views/Movie'),
    children:[
       { path: "city",component: () => import('@/components/City')},
       { path: "now",component: () => import('@/components/Nowplaying')},
       { path: "come",component: () => import('@/components/ComingSoon')},
       { path: "search",component: () => import('@/components/Search')},
       {
        path:"/movie",
        redirect:'/movie/now'
      }
    ]
}