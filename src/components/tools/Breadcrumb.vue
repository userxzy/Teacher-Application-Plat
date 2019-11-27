<template>
  <a-row>
    <a-col :span="24">
      <a-breadcrumb class="breadcrumb">
        <span style="color: #020202">当前：</span>
        <a-breadcrumb-item v-for="(item, index) in breadList" :key="item.name">
          <router-link
            v-if="item.name != name && index != 1"
            :to="{ path: item.path === '' ? '/' : item.path }"
          >
            <span class="bread_title">{{ item.meta.title }}</span>
          </router-link>
          <span v-else class="bread_title">{{ item.meta.title }}</span>
        </a-breadcrumb-item>
      </a-breadcrumb>
      <span class="left_title"><span class="yuan">.</span>东莞电子科技学院<span class="yuan">.</span></span>
      <router-link to="/">
        <a-button v-if="name !== 'Home'" class="buttton_back">返回首页</a-button>
      </router-link>
    </a-col>
  </a-row>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      breadList: []
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      this.breadList = []
      // this.breadList.push({name: 'index', path: '/dashboard/', meta: {title: '首页'}})

      this.name = this.$route.name
      console.log('name')
      console.log(this.$route.name)
      this.$route.matched.forEach(item => {
        // item.name !== 'index' && this.breadList.push(item)
        this.breadList.push(item)
      })
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  }
}
</script>

<style scoped>
  .breadcrumb {
    font-size: 15px;
    color: #33a67d;
    max-width: 800px;
    padding-bottom: 15px;
    padding-left: 200px;
  }
  .bread_title {
    color: #33a67d!important;
  }
  .left_title {
    float: left;
    display: inline-block;
    width: 100%;
    min-width: 1550px;
    text-align: center;
    margin-top: -35px;
    font-size: 18px;
    color: #368dee;
    font-weight: bold;
  }
  .yuan {
    display: inline-block;
    height: 100%;
    width: 20px;
  }
  .buttton_back {
    display: inline-block;
    float: right;
    background-color: #33A67CFF;
    height: 30px;
    line-height: 30px;
    width: 120px;
    margin-top: -40px;
    margin-right: 225px;
    color: #fff;
  }
</style>
