<template>
  <div class="termmenu">
    <a-menu
      style="width: 100%"
      mode="inline"
    >
      <a-sub-menu key="sub1">
        <span slot="title"><span>首页</span></span>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  name: 'Menu'
}
</script>
<style lang="less">
.termmenu {
  width: 209px;
  height: 100%;
  background-color: #5C5A5A85;
  margin-left: 16%;
}
</style>
