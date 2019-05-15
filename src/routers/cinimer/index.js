export default {
    path : "/cinimer",
    component: () => import('@/views/Cinimer'),
    children:[
        {path:'clist',component: () => import('@/components/Clist')},
        {
            path:"/cinimer",
            redirect:'/cinimer/clist'
          }
    ]
}