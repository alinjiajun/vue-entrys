<template>
    <div class="swipe">
        <ul class="swipeList">
            <li v-for="(page, index) in pages" :key="index" :style="page.style" :title="page.title" class="">
                {{ page.titile }}
            </li>
            <p class="lightIndex" >
                <span v-for="(page, index) in pages" :key="index" :class="[index == sliderinit.currentPage?'isActive':'']"></span>
            </p>
        </ul>
        <button>上一页</button>
        <button>下一页</button>
    </div>
</template>
<script>
export default {
  data() {
      return {
        pages:[
            {
                title: '',
                style:{
                background:'red'
                }
            },
            {
            title: '',
            style:{
                background:'blue'
                }
            },
            {
                title: 'slide3',
                style:{
                background:'#4bbfc3',
                },
            }
        ],
        //滑动配置[obj]
        sliderinit: {
          currentPage: 0,//当前页码
          thresholdDistance: 500,//滑动判定距离
          thresholdTime: 100,//滑动判定时间
          autoplay:1000,//自动滚动[ms]
          loop:true,//循环滚动
          direction:'vertical',//方向设置，垂直滚动
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1,//每次滑动项数
        }
      }
  },
  computed: {
      
  },
}
</script>
<style lang="scss" scoped>
    .swipe{
        margin: 0 auto;
        width: 200px; height: 100px;overflow: 0hidden;
        border: 1px solid #777;
        .swipeList{
            width: 600px;height: 100px;
            &>li{width: 200px;height: 100%;list-style: none;float: left;}
        }
    }
</style>

