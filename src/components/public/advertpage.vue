<template>
  <div>
    <h2>广告倒计时<span>{{num}}</span></h2>
    <button @click="$router.push('/home')">跳过</button>
    <img src="../../assets/img/advert.gif" alt="">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num:5,  // 倒计时时间
        timer:null,  // 定时器
      }
    },
    created() {
      // 倒计时
      this.timer = setInterval(() => {
        // 判断倒计时是否结束
        if(this.num == 0){
          // 跳转页面
          this.$router.push("/home")
        }else{
          this.num --
        }
      },1000);

      // 隐藏底部导航
      this.$store.state.isShowTabbar = false
    },
    destroyed() {
      // 清除定时器
      clearInterval(this.timer)
      // 显示底部导航
      this.$store.state.isShowTabbar = true
    },
  }
</script>

<style lang="scss" scoped>

</style>