export default [
  {
    path:"/cart",
    name:"购物车",
    component:()=>import("../views/cart.vue")
  },
  {
    path:"/settlement",
    name:"结算页面",
    component:()=>import("../components/cart/settlement.vue")
  }
]