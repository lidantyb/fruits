<template>
  <div>
    <!-- 顶部 -->
    <!-- <van-nav-bar :title="$route.name" /> -->
    <van-row class="topNav">
      <van-col span="3">
        <van-icon @click="$router.go(-1)" name="arrow-left" class="img" />
      </van-col>
      <van-col span="18">
        <van-nav-bar :title="$route.name" class="middle" />
      </van-col>
    </van-row>
    <!-- 顶部 end -->
    <van-address-list
      v-model="defaultId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
  // import { Toast } from 'vant';
  export default {
    data() {
      return {
        defaultId:null,
        list: [
          // {
          //   id: '1',
          //   name: '张三',
          //   tel: '13000000000',
          //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          //   isDefault: true,
          // },
          // {
          //   id: '2',
          //   name: '李四',
          //   tel: '1310000000',
          //   address: '浙江省杭州市拱墅区莫干山路 50 号',
          // },
        ],
      };
    },
    methods: {
      // 新增地址
      onAdd() {
        // Toast('新增地址')
        this.$router.push("/addressAdd")
      },
      // 编辑地址
      onEdit(item, index) {
        // Toast('编辑地址:' + index);
        this.$router.push({
          path:"/addressEdit",
          query:{index}
        })
      },
      // 切换选中的地址时触发
      onSelect(item,index){
        // 修改默认选中地址id
        this.$store.state.address.defaultId = item.id
        // 将当前地址设置成默认地址
        this.$store.commit("address/change",index)
        // 返回上一级目录
        this.$router.go(-1)
      }
    },
    // 创建时隐藏底部导航
    created(){
      // 获取地址数据
      if(sessionStorage.getItem('store')){
        let list = JSON.parse(sessionStorage.getItem('store'))
        this.list = list.address.lists
      }
      // this.list = this.$store.state.address.lists
      // console.log(this.list)
      // 获取默认选中地址id
      this.defaultId = this.$store.state.address.defaultId
      // 隐藏底部导航
      this.$store.state.isShowTabbar = false
    },
    // 销毁时显示底部导航
    // destroyed() {
    //   this.$store.state.isShowTabbar = true
    // },
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

::v-deep .van-radio__icon--checked{
  i.van-icon{
    background-color: #ff6b00;
    border-color: #ff6b00;
  }
}
.van-tag--danger{
  background-color: #ff6b00;
}
.van-button--danger{
  background-color: #ff6b00;
  border: 1px solid #ff6b00;
}
</style>