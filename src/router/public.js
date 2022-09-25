export default[
  {
    path:"/guidepage",
    name:"引导页",
    component:()=>import("../components/public/guidepage.vue")
  },
  {
    path:"/advertpage",
    name:"广告页",
    component:()=>import("../components/public/advertpage.vue"),
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // 根据是否有缓存数据来决定页面的执行
      if(localStorage.guideData){
        // 已经有缓存数据，执行广告页
        next()
      }else{
        // 没有缓存数据，执行引导页
        localStorage.guideData = true
        next("/guidepage")
      }
    }
  }
]