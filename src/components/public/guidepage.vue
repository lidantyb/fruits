<template>
  <div>
    <div class="swiper mySwiper containerGuide">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/img/vue.png" alt="">
          <h2>vue.js</h2>
          <p>渐进式 JavaScript 框架</p>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/vant.png" alt="">
          <h2>vant</h2>
          <p>轻量、可靠的移动端 Vue 组件库</p>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/react.png" alt="">
          <h2>react.js</h2>
          <p>React 是一个用于构建用户界面的 JAVASCRIPT 库。</p>
          <router-link to="/home">立即体验</router-link>
        </div>
      </div>
      <div class="swiper-pagination paginationGuide"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    created() {
      this.$store.state.isShowTabbar = false
    },
    mounted() {
      new Swiper('.containerGuide', {
        pagination: {
          el: '.paginationGuide',
        },
      })
    },
    destroyed() {
      this.$store.state.isShowTabbar = true
    },
  }
</script>

<style lang="scss" scoped>
.containerGuide{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  .swiper-slide{
    display: block;
    text-align: center;
    img{
      width: 200px;
      margin: 50px auto;
    }
    h2{
      font-size: 24px;
    }
    p{
      margin: 30px 0;
    }
    a{
      color: red;
      border: 1px solid red;
      padding: 5px;
    }
  } 
}
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>