export default {
  namespaced: true,
  state: {
    // 地址数组
    lists:[
      {
        id:1,
        name:"张三",
        tel:"19987654321",
        province:"广东省",
        city:"中山市",
        county:"五桂山街道办事处",
        addressDetail:"广东理工",
        address:"广东省中山市五桂山街道办事处广东理",
        isDefault:true,
      }
    ],
    // 默认选中地址的id
    defaultId:1,
  },
  getters:{},
  mutations: {
    // 添加地址
    add(state,obj){
      obj.id = state.lists.length + 1
      // 判断是否设置成默认地址
      if(obj.isDefault){
        // 已经设置成了默认地址
        // 将其他的默认地址取消
        state.lists.forEach(element => {
          element.isDefault = false
        })
        // 将当前地址设置成默认地址
        obj.isDefault = true
        // 修改默认选中地址的id
        state.defaultId = obj.id
      }
      state.lists.unshift(obj)
      console.log('addressList==>',state.lists)
    },

    // 修改地址
    edit(state,obj){
      // 先删除
      for(let i=0;i<state.lists.length;i++){
        // 判断当前数据和数组中的数据id是否相同
        if(state.lists[i].id == obj.id){
          // 在数组中删除当前数据
          state.lists.splice(i,1)
        }
      }
      // 再添加
      // 判断是否设置成默认地址
      if(obj.isDefault){
        // 已经设置成了默认地址
        // 将其他的默认地址取消
        state.lists.forEach(element => {
          element.isDefault = false
        })
        // 将当前地址设置成默认地址
        obj.isDefault = true
        // 修改默认选中地址的id
        state.defaultId = obj.id
      }
      state.lists.unshift(obj)
    },

    // 删除地址
    del(state,obj){
      for(let i=0;i<state.lists.length;i++){
        // 判断当前数据和数组中的数据id是否相同
        if(state.lists[i].id == obj.id){
          // 在数组中删除当前数据
          state.lists.splice(i,1)
        }
      }
    },

    // 切换选中地址
    change(state,index){
      // 将其他的默认地址取消
      state.lists.forEach(element => {
        element.isDefault = false
      })
      // 将当前的地址设置成默认地址
      state.lists[index].isDefault = true
    }
  },
  actions: {},
  modules: {}
}