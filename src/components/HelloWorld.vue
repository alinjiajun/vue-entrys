<template>
  <div class="hello">
    <button @click="show = !show">显示/隐藏</button>
    <transition name="fade">
      <h1 v-show="show">{{ msg }}</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped lang="scss">
 .hello{
   .fade-enter-active, .fade-leave-active{transition: opacity 1s}
   .fade-enter,.fade-leave-to{opacity: 0;}
 }
   
 </style>

