<template>
  <div>
    <van-sticky>
      <!-- 顶部 -->
      <van-row class="topNav">
        <van-col span="3">
          <van-icon name="fire" class="img" />
        </van-col>
        <van-col span="18">
          <van-search @focus="getSearch" class="middle" placeholder="搜索商品名称" />
        </van-col>
        <van-col span="3">
          <van-icon name="contact" class="img" />
        </van-col>
      </van-row>
      <!-- 顶部 end -->
    </van-sticky>
    <!-- 主要内容 -->
    <div class="main">
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000">
        <van-swipe-item><img src="../assets/img/main-1.jpg" /></van-swipe-item>
        <van-swipe-item><img src="../assets/img/main-2.jpg" /></van-swipe-item>
        <van-swipe-item><img src="../assets/img/main-3.jpg" /></van-swipe-item>
        <van-swipe-item><img src="../assets/img/main-4.jpg" /></van-swipe-item>
      </van-swipe>
      <!-- 列表 -->
      <!-- <img src="../assets/img/caomei.png" alt=""> -->
      <van-grid square :column-num="5">
        <van-grid-item
          v-for="(item, key) in list"
          :key="key"
          :icon="item.icon"
          :text="item.name"
        >
          <!-- <div class="img"><img :src="item.img" alt=""></div>
          <div>{{item.text}}</div> -->
        </van-grid-item>
      </van-grid>
      <!-- 商品 -->
      <div class="good">
        <div v-for="(value,index) in goods" :key="index">
          <van-card
            :price="value.price+'.00'"
            :desc="value.info"
            :title="value.name"
            :thumb="value.icon"
            @click="toDetail(index)"
          /> 
        </div>
      </div>
    </div>
    <!-- 主要内容 end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "../assets/img/main-1.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8748ec14c5b279082202e6195b8650b3.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1025f05458c8b8923a0adf11337b603.jpg",
      ],
      list:[],
      goods:[]
    }
  },
  methods:{
    // 跳转到详情页
    toDetail(index){
      // 跳转页面
      this.$router.push("/details")
      // 将当前点击的商品数据传入到详情页中
      let good = this.goods[index]
      // console.log(good)
      this.$store.commit("star/addDetail",good)
      sessionStorage.setItem('store',JSON.stringify(this.$store.state))
    },

    // 跳转到搜索页
    getSearch(){
      this.$router.push("/search")
    }
  },
  // 在一个实例被创建之后执行代码
  created() {
    this.$store.state.active = 0;
  },
  mounted(){
    this.axios.get('https://autumnfish.cn/fruitApi/fruits').then(res => {
      // console.log('res ==> ',res.data.data)
      // this.goods = res.data.data
      let goods = res.data.data
      goods.forEach((v,i) => {
        let rem = Math.ceil(Math.random()*10)
        goods[i].price = rem
        goods[i].num = 1
      })
      // console.log('goods ==> ',goods)
      this.goods = goods
      this.list = goods.slice(0,10)
    })
    
  }
};
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
    padding: 5px;
    background: #F2F2F2;
  }
}
::v-deep .van-tab{
  padding: 0 40px;
  font-size: 18px;
}
.main {
  margin-bottom: 54px;
}

.van-card{
  width: 95%;
  background-color: #fff;
  margin: 10px auto;
  padding: 8px;
  border-radius: 10px;
}
</style>