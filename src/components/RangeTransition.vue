<template>
    <div class="rangeMove">
        <p>fadeIn <input type="range" min="0" max="2000" v-model="fadeInTimeVal"></p>
        <p>fadeOut <input type="range" min="0" max="2000" v-model="fadeOutTimeVal"></p>
        <el-button @click="show=!show">显示/隐藏</el-button>
        <transition 
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        name="rangeFade">
            <p v-show="show">range fadeIn: {{fadeInTimeVal}}  range fadeOut: {{fadeOutTimeVal}}</p>
        </transition>
    </div>
</template>
<script>
export default {
  data() {
      return {
          show: true,
          fadeInTimeVal: 1500,
          fadeOutTimeVal: 1500,
      }
  },
  methods: {
      beforeEnter(el) {
          el.style.opacity = 0;
          el.style.fontSize = '16px';
      },
      enter(el, done) {
          Velocity(el,{opacity:1, fontSize: '40px'},{duration: this.fadeInTimeVal,computed: done})
      },
      leave(el,done) {
          Velocity(el,{opacity:0, fontSize: '16px'},{duration: this.fadeOutTimeVal,computed: done})
      }
  },
}
</script>


