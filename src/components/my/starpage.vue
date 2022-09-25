<template>
    <div>
        <!-- 顶部 -->
        <van-row class="topNav">
            <van-col span="3">
                <van-icon @click="$router.go(-1)" name="arrow-left" class="img" />
            </van-col>
            <van-col span="18">
                <van-nav-bar :title="$route.name" class="middle" />
            </van-col>
        </van-row>
        <!-- 顶部 end -->
        <div v-for="(item,index) in lists" :key="index">
            <van-card
                :price="item.price+'.00'"
                :desc="item.desc"
                :title="item.title"
                :thumb="item.img"
                >
                <template #footer>
                    <van-button @click="delData(index)" size="mini">删除</van-button>
                </template>
            </van-card>    
        </div>  
    </div>
</template>

<script>
    export default {
        data() {
            return {
                lists:[]
            }
        },
        methods: {
            delData(index){
                this.lists.splice(index,1)
            }
        },
        // 创建时隐藏底部导航
        created(){
            // 获取收藏夹中的商品数据
            this.lists = this.$store.state.star.lists

            this.$store.state.isShowTabbar = false
        },
        // 销毁时显示底部导航
        destroyed() {
            this.$store.commit("star/delData",this.lists)
            this.$store.state.isShowTabbar = true
        },
    }
</script>

<style lang="scss" scoped>
.topNav{
  width: 100%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 28px;
  background: #F2F2F2;
  overflow: hidden;
  .img{
    line-height: 44px;
  }
  .middle{
    background: #F2F2F2;
  }
}
</style>