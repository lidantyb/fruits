export default [
  {
    path:"/my",
    name:"我的",
    component:()=>import("../views/my.vue")
  },
  {
    path:"/login",
    name:"登录",
    component:()=>import("../components/my/login.vue")
  },
  {
    path:"/register",
    name:"注册",
    component:()=>import("../components/my/register.vue")
  },
  {
    path:"/address",
    name:"我的地址",
    component:()=>import("../components/my/address.vue")
  },
  {
    path:"/addressAdd",
    name:"新增地址",
    component:()=>import("../components/my/addressAdd.vue")
  },
  {
    path:"/addressEdit",
    name:"编辑地址",
    component:()=>import("../components/my/addressEdit.vue")
  },
  {
    path:"/starpage",
    name:"收藏夹",
    component:()=>import("../components/my/starpage.vue")
  },
  {
    path:"/coupon",
    name:"优惠券",
    component:()=>import("../components/my/coupon.vue")
  }
]