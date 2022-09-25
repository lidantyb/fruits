export default {
  namespaced: true,
  state: {
    lists:[],     // 商品数组
    totalNum:0,   // 加入购物车的商品总数
    goodDetail:[],  // 详情页点击结算的商品
    index:0,   // 判断从哪里购买商品  0购物车 1详情页
  },
  getters:{},
  mutations: {
    // 添加到购物车
    add(state,obj){
      // 判断商品id是否相同，如果相同则数量加一，否则添加商品
      var index = state.lists.findIndex(value=> value.id == obj.id)
      // 如果商品id不同，则返回-1
      if(index == '-1'){
        // 商品id不同
        // 在数组的头部插入数据
        state.lists.unshift(obj)
      }else{
        // 商品id相同，商品数量加一
        state.lists[index].num += 1
      }
      // 商品总数加一
      state.totalNum ++
      console.log('goodsList==>',state.lists)
    },
    // 详情页点击结算
    detailAdd(state,arr){
      // 将详情页结算商品重新赋值
      state.goodDetail = []
      state.goodDetail.push(arr[0])
      // 从详情页中购买商品
      state.index = arr[1]
    },
    // 购物车点击结算
    cartAdd(state,obj){
      state.index = obj
    }
  },
  actions: {},
  modules: {}
}