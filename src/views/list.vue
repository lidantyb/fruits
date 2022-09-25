<template>
  <div>
    <!-- 顶部 -->
    <van-row class="topNav">
      <van-col span="24">
        <van-nav-bar :title="$route.name" class="middle" />
      </van-col>
    </van-row>
    <!-- 顶部 end -->
    <!-- 内容 -->
    <div class="content">
      <div class="left fl" ref="left">
        <ul>
          <li
            v-for="(item, index) in left"
            :key="index"
            :class="{ current: index == currentIndex }"
            @click="selectItem(index)"
          >
            <div>{{ item }}</div>
          </li>
        </ul>
      </div>
      <div class="right fl" ref="right">
        <ul>
          <li v-for="(value, key) in right" :key="key" class="rightItem">
            <h2>{{ value.name }}</h2>
            <ul class="clearfix">
              <li
                v-for="(item, index) in value.content"
                :key="index"
                class="fl"
              >
                <img :src="item.icon" alt="" />
                <div>{{ item.name }}</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- 内容 end -->
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      left: [
        "草莓",
        "哈密瓜",
        "火龙果",
        "橘子",
        "梨",
        "荔枝",
        "榴莲",
        "芒果",
        "牛油果",
        "苹果",
        "葡萄",
        "石榴",
        "桃子",
        "西瓜",
        "香蕉",
        "樱桃",
      ],
      right: [
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
        {
          name: "",
          content: [
            {
              icon: "",
              name: "",
            },
          ],
        },
      ],
      scrollY: 0, // 滚动高度
      heightList: [], // 右边每个li距离顶部的高度数组
    };
  },
  methods: {
    // 初始化联动方法
    initScroll() {
      // 左边
      this.lefts = new BScroll(this.$refs.left, {
        click: true, // 允许触发点击事件
        probeType: 3, // 探针的效果，实时获取滚动高度
      });
      // 右边
      this.rights = new BScroll(this.$refs.right, {
        click: true, // 允许触发点击事件
        probeType: 3, // 探针的效果，实时获取滚动高度
      });

      // rights监听滚动的高度
      this.rights.on("scroll", (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
        // console.log(this.scrollY);
      });
    },

    // 获取右边每一个li距离顶部的高度
    getHeight() {
      // 获取右边每一个li的元素
      let rightItem = this.$refs.right.getElementsByClassName("rightItem");
      // console.log(rightItem)
      // 初始高度
      let height = 0;
      // 将初始高度添加到高度数组中
      this.heightList.push(height);
      // 遍历元素数组
      for (let i = 0; i < rightItem.length; i++) {
        // 将每个li的高度获取出来
        let item = rightItem[i].clientHeight;
        // console.log(item)
        // 计算每个li到顶部的高度
        height += item;
        // 每个li到顶部的高度添加到高度数组中
        this.heightList.push(height);
      }
      // console.log(this.heightList)
    },

    // 左边li的点击事件
    selectItem(index) {
      // console.log(index)
      // 获取右边每个li的元素
      let rightItem = this.$refs.right.getElementsByClassName("rightItem");
      // 当前点击对应右边的li元素
      let el = rightItem[index];
      // scrollToElement(el, time, offsetX, offsetY, easing)
      // 滚动到某个元素，el（必填）表示 dom 元素，time 表示动画时间，offsetX 和 offsetY 表示坐标偏移量，easing 表示缓动函数
      this.rights.scrollToElement(el, 300);
    },
  },
  // 计算属性
  computed: {
    // 获取左边对应下标的方法
    currentIndex() {
      // 循环遍历高度数组
      for (let i = 0; i < this.heightList.length; i++) {
        let height1 = this.heightList[i];
        let height2 = this.heightList[i + 1];
        // 滚动高度在height1和height2之间  或者  height2不存在
        if ((this.scrollY >= height1 && this.scrollY < height2) || !height2) {
          // 左边联动
          let leftItem = this.$refs.left.getElementsByTagName("li");
          let elLi = leftItem[i];
          this.lefts.scrollToElement(elLi, 300, 0, -200);
          return i;
        }
      }
      // 默认返回的下标值
      return 0;
    },
  },
  mounted() {
    // 调用初始化联动方法
    this.initScroll();
    // 调用获取右边每一个li高度的方法
    this.getHeight();
  },
  // 在一个实例被创建之后执行代码
  created() {
    this.$store.state.active = 1;
    this.axios.get("https://autumnfish.cn/fruitApi/fruits").then((res) => {
      let goods = res.data.data;
      let left = [];
      let right = [];
      goods.forEach((v) => {
        let arr = {
          name: v.name,
          content: [v, v, v],
        };
        left.push(v.name);
        right.push(arr);
      });
      // console.log('goods ==> ',goods)
      // console.log('left ==> ',left)
      // console.log('right ==> ',right)
      this.left = left;
      this.right = right;
    });
  },
};
</script>

<style lang="scss" scoped>
.topNav {
  width: 100%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 28px;
  background: #f2f2f2;
  overflow: hidden;
  .img {
    line-height: 44px;
  }
  .middle {
    background: #f2f2f2;
    // background: #ccc
  }
}
// 联动
.content {
  display: flex;
  position: absolute;
  top: 44px;
  bottom: 50px;
  overflow: hidden;
  width: 100%;
  font-size: 16px;
  .left {
    flex: 0 0 100px;
    width: 100px;
    border-right: 1px solid #eee;
    // background:skyblue;
    li {
      text-align: center;
      width: 100%;
      height: 50px;
      line-height: 50px;
    }
    .current {
      // background: rgb(44, 179, 233);
      color: #ff6b00;
      font-weight: 800;
    }
  }
  .right {
    flex: 1;
    padding-left: 10px;
    .rightItem {
      margin-bottom: 20px;
      h2 {
        padding: 20px 0;
      }
      li {
        width: 33.33%;
        height: 100px;
        padding-bottom: 20px;
        font-size: 13px;
        img {
          width: 75%;
          padding: 5% 12.5%;
        }
      }
    }
  }
}
</style>