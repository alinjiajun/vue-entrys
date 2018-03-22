<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'asdf'
    }
  },
  // created() {
  //   this.$http.get('/po').then(res => {
  //     console.log(res.data);
  //   }).catch(res =>{
  //     console.log(res.data);
  //   })
  //   this.$http.get('/baidu').then(res => {
  //     console.log(res.data);
  //   }).catch(res =>{
  //     console.log(res.data);
  //   })
  //   this.$http.get('/blo').then(res => {
  //     console.log(res.data);
  //   }).catch(res =>{
  //     console.log(res.data);
  //   })
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
