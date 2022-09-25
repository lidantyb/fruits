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
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="checkPassword"
        type="password"
        name="验证密码"
        label="验证密码"
        placeholder="验证密码"
        :rules="[{ required: true, message: '请再次输入密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        checkPassword:'', // 验证密码
      };
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
      },
    },
    // 创建时隐藏底部导航
    created(){
      this.$store.state.isShowTabbar = false
    },
    // 销毁时显示底部导航
    destroyed() {
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