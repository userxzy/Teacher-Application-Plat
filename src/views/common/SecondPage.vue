<template>
  <div class="second">
    <div class="second-innner">
      <div class="inner_item">
        <span class="list_item" @click="termFun()">
          <span class="list_pic">
            <img src="./../../assets/images/term1.png"/>
          </span>
          <span class="next_title" style="color: #33A67CFF">试题管理</span>
        </span>
        <span class="list_item">
          <span class="list_pic">
            <img src="./../../assets/images/term2.png"/>
          </span>
          <span class="next_title" style="color: #4C9BF0FF">试卷管理</span>
        </span>
        <!-- <span class="list_item">13</span> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SecondPage',
  data () {
    return {
      SeondList: []
    }
  },
  methods: {
    termFun () {
      const num = 1
      this.$emit('testChange', num)
    }
  }
}
</script>
<style lang="less" scoped>
.second-innner {
  width: 100%;
  .inner_item {
    margin: 0 auto;
    width: 1325px;
    height: 100%;
    text-align: center;

    .list_item {
      display: inline-block;
      width: 290px;
      height: 320px;
      background-color: #fff;
      margin-top: 15%;
      margin-left: 74px;
      margin-right: 74px;
    }

    img {
      width: 100%;
    }

    .next_title {
      font-size: 36px;
      font-weight: bold;
    }
  }
}
</style>
