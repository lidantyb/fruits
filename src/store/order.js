
export default {
  namespaced: true,
  state: {
    lists:[
      // {
        // orderId:"1756325442384",   // 订单号
        // address:{},        // 收货地址
        // goodsList:[{}],    // 商品
        // type:1,        // 状态   1全部订单  2待付款  3待收货  4已完成
      // }
    ],
    // 订单状态数组
    typeList:['全部订单','待付款','待收货','已完成']
  },
  getters:{},
  mutations: {
    // 添加
    add(state,obj){
      state.lists.unshift(obj)
      console.log('orderList==>',state.lists)
    },
    // 全部订单数据替换
    edit(state,arr){
      // 先清空数据
      state.lists = null
      // 再重新替换
      state.lists = arr
    },
    // 其他三个页面的数据修改
    editId(state,arr){
      // console.log(state.lists,arr)
      // 循环遍历所有订单数组和分类好的订单数组
      for(let i=0;i<state.lists.length;i++){
        for(let j=0;j<arr.length;j++){
          // 判断当前商品是否删除
          if(state.lists[i].orderId == arr[j].orderId && arr[j].type==5){
            state.lists.splice(i,1)
          }
          // 判断数据是否相同
          else if(state.lists[i].orderId == arr[j].orderId){
            // 如果相同则修改
            state.lists[i] = arr[j]
          }
        }
      }
    }
  },
  actions: {},
  modules: {}
}