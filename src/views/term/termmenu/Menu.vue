<template>
  <div class="termmenu">
    <a-menu
      :defaultSelectedKeys="[DefalutNum]"
      :defaultOpenKeys="['sub1']"
      style="width: 100%"
      mode="inline"
      theme="light"
    >
      <a-menu-item key="1" style="font-size: 16px;">
        首页
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><span style="font-size: 16px;">试题管理</span></span>
        <a-menu-item key="2" style="font-size: 16px;">选择题管理</a-menu-item>
        <a-menu-item key="3" style="font-size: 16px;">填空题管理</a-menu-item>
        <a-menu-item key="4" style="font-size: 16px;">判断题管理</a-menu-item>
        <a-menu-item key="5" style="font-size: 16px;">问答题管理</a-menu-item>
        <a-menu-item key="6" style="font-size: 16px;">实操题管理</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="7" style="font-size: 16px;">
        试卷管理
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  props: {
    pageNum: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      DefalutNum: (this.pageNum + 2).toString()
    }
  },
  mounted () {
    alert(this.pageNum)
  }
}
</script>
<style lang="less">
.termmenu {
  width: 209px;
  height: calc(100% - 120px);
  background-color: #5c5a5a85;
  position: absolute;
  left: 16%;
}
.termmenu>ul {
  margin-top: 50px;
  color: #333;
  font-size: 20px!important;
}
li>ul{
  color: #333;
  font-size: 20px!important;
}
</style>
