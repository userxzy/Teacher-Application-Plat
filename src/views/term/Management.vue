<template>
  <div class="term" id="Term">
    <term-menu v-if="visible" :pageNum="pageNum"></term-menu>
    <second-page v-if="!visible" @testChange="testChange"></second-page>
    <term-frist v-if="visible"></term-frist>
  </div>
</template>
<script>
import TermFrist from '@/views/term/TermFrist.vue'
import SecondPage from '@/views/common/SecondPage.vue'
import TermMenu from '@/views/term/termmenu/Menu.vue'
export default {
  name: 'TermManagement',
  data () {
    return {
      msg: '',
      visible: false,
      pageNum: ''
    }
  },
  components: {
    SecondPage,
    TermFrist,
    TermMenu
  },
  mounted () {
    document.getElementById('Term').style.height = (document.body.clientHeight - 64 - 60) + 'px'
    this.pageNum = Number(this.$route.query.id)
  },
  methods: {
    testChange () {
      this.visible = true
    }
  }
}
</script>
<style lang="less" scoped>
.term {
  width: 100%;
  background-color: #fff;
  overflow: auto;
  background: url('~@/assets/images/termback.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
