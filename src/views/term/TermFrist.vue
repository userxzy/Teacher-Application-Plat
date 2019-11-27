<template>
  <div class="term_frist">
    <div class="term_innner">
      <span class="list_pic">
        <span v-for="(item, index) in imgList" :key="index" class="list_inner" @click="tipTerm(index)">
          <img class="img_style" :src="item.url"/>
          <span class="img_title">{{ item.title }}</span>
        </span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TermFrist',
  data () {
    return {
      imgList: [
        {
          url: require('../../assets/images/term/ti1.png'),
          title: '选择题管理'
        },
        {
          url: require('../../assets/images/term/ti4.png'),
          title: '判断题管理'
        },
        {
          url: require('../../assets/images/term/ti5.png'),
          title: '简答题管理'
        },
        {
          url: require('../../assets/images/term/ti2.png'),
          title: '填空题管理'
        },
        {
          url: require('../../assets/images/term/ti3.png'),
          title: '实操题管理'
        }
      ]
    }
  },
  methods: {
    tipTerm (inx) {
      if (inx === 4) {
        this.$router.push({ path: '/term/practic?id=4' })
      }
    }
  }
}
</script>
<style lang="less">
.term_frist {
  width: 60%;
  min-width: 900px;
  height: 100%;
  margin-left: calc(16% + 209px);
  margin-right: calc(16% + 209px);
  background-color: transparent;
  float: left;
}
.list_pic {
  display: inline-block;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  margin-top: 8%;

  .list_inner {
    display: inline-block;
    width: 212px;
    height: 262px;
    background-color: transparent;
    margin: 0 60px;
    margin-top: 2%;
    cursor: pointer;

    .img_style {
      width: 100%;
    }

    .img_title {
      height: 30px;
      line-height: 30px;
      color: #666;
      font-size: 25px;
      font-weight: bold;
    }
  }
  .list_inner:hover {
    -webkit-transition: all 200ms;
    -moz-transition: all 200ms;
    -o-transition: all 200ms;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
</style>
