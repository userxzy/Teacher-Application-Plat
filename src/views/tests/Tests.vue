<template>
  <div class="content_inner" id="ContentInner">
    <a-button v-show="visible" @click="isShow()">添加实操题</a-button>
    <hands-on v-show="!visible" @backFunction="backFunction($event)"></hands-on>
  </div>
</template>
<script>
import HandsOn from '@/views/tests/hands/HandsOn.vue'
export default {
  name: 'Tests',
  data () {
    return {
      visible: true
    }
  },
  components: {
    HandsOn
  },
  mounted () {
    console.log('asdjkhk')
    console.log(document.body.clientHeight)
    document.getElementById('ContentInner').style.height = (document.body.clientHeight - 64 - 60) + 'px'
  },
  methods: {
    isShow () {
      this.visible ? this.visible = false : this.visible = true
    },
    backFunction (data) {
      this.visible = data
    }
  }
}
</script>
<style lang="less" scoped>
.content_inner {
  width: 100%;
  background-color: #fff;
  overflow: auto;
}
</style>
