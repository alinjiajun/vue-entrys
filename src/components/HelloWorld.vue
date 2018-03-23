<template>
  <div class="hello">
    <!-- <el-button type="primary" @click="show = !show">显示/隐藏</el-button>
    <transition name="fade">
      <h1 v-show="show">transition动画</h1>
    </transition>

    <el-button type="primary" @click="show1 = !show1">显示/隐藏</el-button>
    <transition name="bounce">
      <h2 v-show="show1">animation动画</h2>
    </transition>

    <el-button type="primary" @click="show2 = !show2">显示/隐藏</el-button>
    <transition appear name="custom-animate" enter-active-class="animated bounce" leave-active-class="animated bounceOutRight">
      <h2 v-show="show2">结合animate.css</h2>
    </transition>

    <el-button type="primary" @click="show3 = !show3">显示/隐藏</el-button>
    <div class="testbtn">
      <transition name="fadebtn" mode="in-out">
        <el-button v-if="show3" :key="1">显示</el-button>
        <el-button v-else :key="2">隐藏</el-button>
      </transition>
    </div>
    <el-button @click="add">add</el-button>
    <el-button @click="remove">remove</el-button>
    <el-button @click="shuffle">shuffle</el-button>
    <transition-group name="numberMove" tag="p">
      <span v-for="num in listNums" :key="num" class="numberMove-item">
        {{ num }}
      </span>
    </transition-group>

    <el-button @click="networkShuffle">networkShuffle</el-button>
    <transition-group name="network" tag="p" class="netWrap">
      <span v-for="item in netLists" :key="item" class="netitem">
        {{ item }}
      </span>
    </transition-group> -->

    <input type="text" v-model="query">
    <transition-group 
    name="slecte" 
    tag="ul"
    :css="false"
    @enter="enter"
    @leave="leave"
    @before-enter="beforEnter">
      <li v-for="(list, index) in filterList" :key="list.msg" :data-index="index">
        {{ list.msg }}
      </li>
    </transition-group>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true,
      show1: true,
      show2: true,
      show3: true,
      listNums: [1,2,3,4,5,6,7,8,9],
      nextIndex: 10,
      netLists: [1,2,3,4,5,6,7,8,9],
      nameList: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' }
      ],
      query: ''
    }
  },
  methods: {
    randomIndex() {
      return  Math.floor(Math.random()*this.listNums.length)
    },
    add() {
      this.listNums.splice(this.randomIndex(),0,this.nextIndex++);
    },
    remove() {
      this.listNums.splice(this.randomIndex(),1);
    },
    shuffle() {
      this.listNums = _.shuffle(this.listNums);
    },
    networkShuffle() {
      this.netLists = _.shuffle(this.netLists);
    },
    beforEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter(el, done) {
      Velocity(el,{opacity:1,height:'1.5em'},{duration: 500,delay: el.dataset.index})
    },
    leave(el, done) {
      Velocity(el,{opacity:0,height:'0'},{duration: 500,delay: el.dataset.index,computed: done})
    }
  },
  computed: {
    filterList() {
      return this.nameList.filter(item => {
        return item.msg.toLowerCase().indexOf(this.query.toLowerCase()) != -1;
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped lang="scss">
 .hello{
   .fade-enter-active, .fade-leave-active{transition: opacity 1s}
   .fade-enter,.fade-leave-to{opacity: 0;}
   .bounce-enter-active{
     animation: bounceIn 1s;
   }
   .bounce-leave-active{
     animation: bounceIn 1s reverse;
   }

   @keyframes bounceIn {
     0%{transform: scale(0.5)}
     50%{transform: scale(1.5)}
     100%{transform: scale(1)}
   }
   .testbtn{position: relative;width: 300px;text-align: center;height: 50px;margin: 0 auto;}
   .testbtn button{position: absolute;left: 0;top: 0}
   .fadebtn-enter-active,.fadebtn-leave-active{transition: all .4s linear;}
   .fadebtn-enter{transform: translateX(50px);opacity: 0;}
   .fadebtn-leave-to{transform: translateX(-50px);opacity: 0;}

   .numberMove-item{margin-left: 10px;display: inline-block;transition: all 0.5s linear;}
   .numberMove-enter,.numberMove-leave-to{transform: translateY(40px); opacity: 0;}
   .numberMove-leave-active{position: absolute;}

   .netitem{display: inline-block;width: 30px;height: 30px;box-sizing: border-box;border: 1px solid #ccc;line-height: 30px;text-align: center;transition: all 0.5s linear;}
   .netWrap{width: 90px;margin: 10px auto;}
   .network-enter,.network-leave-to{opacity: 0;}

 }
 </style>

