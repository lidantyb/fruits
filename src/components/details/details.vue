<template>
  <div class="details">
    <!-- 返回 -->
    <div class="back" @click="$router.go(-1)">
      <van-icon name="arrow-left" />
    </div>
    <!-- 返回 end -->
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#ff6b00">
      <van-swipe-item>
        <img src="../../assets/img/main-1.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/img/main-2.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/img/main-1.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/img/main-2.jpg" alt="">
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图 end -->
    <!-- 商品价格 -->
    <div class="price">
      <h1>￥<span>{{good.price}}</span></h1>
      <p>{{good.name}}</p>
      <div>{{good.info}}</div>
    </div>
    <!-- 商品价格 end -->
    <!-- 商品详情 -->
    <div class="details">
      <div class="descTitle">—— 宝贝详情 ——</div>
      <img :src="good.icon" alt="">
    </div>
    <!-- 商品详情 end -->
    <!-- 底部 -->
    <van-goods-action>
      <van-goods-action-icon @click="$router.push('/home')" icon="wap-home-o" text="首页" />
      <van-goods-action-icon @click="$router.push('/cart')" :badge="totalNum" icon="cart-o" text="购物车" />
      <van-goods-action-icon @click="isStar()" :icon="star.icon" :text="star.text" :color="star.color" />
      <van-goods-action-button @click="add(good)" type="warning" text="加入购物车" />
      <van-goods-action-button @click="toPay()" type="danger" text="立即购买" />
    </van-goods-action>
    <!-- 底部 end -->
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  const { mapState  } = createNamespacedHelpers('cart')
  export default {
    data() {
      return {
        // 商品信息
        good:{},
        // 收藏信息
        star:{
          id:1,
          icon:"star-o",
          text:"收藏",
          color:"#000"
        },
        // totalNum:'',
      }
    },
    methods: {
      // 加入购物车
      // ...mapMutations(["add"]),
      add(good){
        this.$store.commit("cart/add",good)
        sessionStorage.setItem('store',JSON.stringify(this.$store.state))
      },
      // 立即购买
      toPay(){
        // 页面跳转
        this.$router.push("/settlement")
        // 将当前数据添加到购物车详情数据
        this.$store.commit("cart/detailAdd",[this.good,1])
      },
      // 点击是否收藏
      isStar(){
        if(this.star.icon == "star-o"){
          this.star = {
            id:this.good.id,
            icon:"star",
            text:"已收藏",
            color:"#ff6b00"
          }
        }else{
          this.star = {
            id:this.good.id,
            icon:"star-o",
            text:"收藏",
            color:"#000"
          }
        }
        // 将当前的商品数据放到star.js里面
        this.$store.commit("star/addStar",this.star)
      }
    },
    computed:{
      // 获取商品总数
      ...mapState({
        totalNum:state=>state.totalNum
      })
    },
    created(){
      // 获取推荐页面点击的商品
      if(sessionStorage.getItem('store')){
        let good = JSON.parse(sessionStorage.getItem('store'))
        // console.log('good ==> ',good)
        this.good = good.star.detailGood
      }
      
      // console.log('goods ==> ',this.good)
      // 重新赋值收藏样式id
      this.star.id = this.good.id
      // 判断当前商品是否收藏
      this.$store.state.star.lists.forEach(element => {
        if(element.id == this.star.id){
          this.star = {
            id:this.good.id,
            icon:"star",
            text:"已收藏",
            color:"#ff6b00"
          }
        }
      });

      // 创建时隐藏底部导航
      this.$store.state.isShowTabbar = false
      
    },
    // 销毁时显示底部导航
    destroyed() {
      this.$store.state.isShowTabbar = true
    },
  }
</script>

<style lang="scss" scoped>
.details{
  background: #F0F0F0;
}
.back{
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: rgba($color: #000000, $alpha: 0.3);
  text-align: center;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 999;
  .van-icon{
    line-height: 40px;
    color: #fff;
  }
}
::v-deep .van-info{
  background-color: #ff6b00;
}
.price{
  width: 90%;
  background: #fff;
  margin: 10px auto;
  border-radius: 10px;
  padding: 10px;
  h1{
    color: #FE4E02;
    span{
      font-size: 24px;
    }
  }
  p{
    color: #000;
    font-size: 24px;
    font-weight: 800;
  }
  div{
    color: #656565;
  }
}
.details{
  margin-bottom: 50px;
  .descTitle{
    text-align: center;
    color: #656565;
    margin-bottom: 10px;
  }
}
</style>