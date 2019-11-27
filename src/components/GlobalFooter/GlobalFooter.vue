<template>
  <div class="footer">
    <div class="copyright">
      Copyright
      <a-icon type="copyright" /> 2015-2017 <span>云智库v1.0 All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 20px 16px;
  text-align: center;
  background-color: #303437;
  color: #999;
  z-index: 99999999;

  .links {
    margin-bottom: 8px;

    a {
      color: #999;

      &:hover {
        color: #ddd;
      }

      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
  .copyright {
    color: #999;
    font-size: 14px;
  }
}
</style>
