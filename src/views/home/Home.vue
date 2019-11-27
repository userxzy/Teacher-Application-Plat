<template>
  <div class="content_inner">
    <home-nest></home-nest>
  </div>
</template>
<script>
import HomeNest from '@/views/home/HomeNest'
// import { test } from '@/api/test'
export default {
  name: 'Home',
  data () {
    return {
      msg: []
    }
  },
  components: {
    HomeNest
  }
  // mounted () {
  //   test().then(response => {
  //     console.log(response)
  //   })
  // }
}
</script>
<style lang="less" scoped>
  .content_inner {
    position: absolute;
    top: 120px;
    width: 100%;
    height: calc(100% - 120px);
    background-color: #fff;
    background: url('../../assets/images/first/fbackground.png') no-repeat fixed center;
    background-size: cover;
  }
</style>
