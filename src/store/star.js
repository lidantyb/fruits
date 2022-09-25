export default {
    namespaced: true,
    state: {
        // 推荐页面点击商品传入到详情页
        detailGood:{},   
        // 收藏夹的商品数组
        lists:[],
    },
    getters:{},
    mutations: {
        // 推荐页面点击商品传入到详情页
        addDetail(state,obj){
            // 直接替换
            state.detailGood = obj
            console.log('detailGood==>',state.detailGood)
        },
        // 点击收藏商品
        addStar(state,obj){
            // 判断收藏夹中是否有商品
            if(state.lists.length == 0){
                // 如果没有商品
                state.lists.unshift(state.detailGood)
            }else{
                let isData = false
                // 收藏夹中有商品
                for(let i=0;i<state.lists.length;i++){
                    // 1.id相同，则再收藏夹中删除该商品
                    if(state.lists[i].id == obj.id){
                        state.lists.splice(i,1)
                        isData = false
                    }else{
                        isData = true
                    }
                }
                // 2.id不同，则添加该商品到收藏夹中
                if(isData){
                    state.lists.unshift(state.detailGood)
                }
            }
        },
        // 删除数据
        delData(state,arr){
            state.lists = arr
        }
    },
    actions: {},
    modules: {}
  }