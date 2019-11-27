<template>
  <div class="practic">
    <term-menu :pageNum="pageNum"></term-menu>
    <do-practic v-if="pageNum === 4"></do-practic>
  </div>
</template>
<script>
import DoPractic from '@/views/term/doterm/DoPractic.vue'
import TermMenu from '@/views/term/termmenu/Menu.vue'
export default {
  name: 'Practic',
  components: {
    TermMenu,
    DoPractic
  },
  data () {
    return {
      msg: '',
      pageNum: 0
    }
  },
  created () {
    this.pageNum = Number(this.$route.query.id)
  }
}
</script>
<style lang="less" scoped>

</style>
