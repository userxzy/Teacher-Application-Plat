<template>
  <div class="practic">
    <term-menu :pageNum="pageNum"></term-menu>
    <do-practic v-if="pageNum === 4" @closeMask="closeMask"></do-practic>
    <select-practice v-if="pageNum === 0" @closeMask="closeMask"></select-practice>
    <high-check v-if="isShow" @closeMask="closeMask"></high-check>
  </div>
</template>
<script>
import HighCheck from '@/views/term/doterm/HighCheck'
import DoPractic from '@/views/term/doterm/DoPractic.vue'
import SelectPractice from '@/views/term/doterm/select/SelectPractice.vue'
import TermMenu from '@/views/term/termmenu/Menu.vue'
export default {
  name: 'Practic',
  components: {
    TermMenu,
    DoPractic,
    HighCheck,
    SelectPractice
  },
  data () {
    return {
      msg: '',
      pageNum: 0,
      isShow: false
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.pageNum = Number(this.$route.query.id)
      }
    }
  },
  created () {
    this.pageNum = Number(this.$route.query.id)
  },
  methods: {
    closeMask (val) {
      this.isShow = val
    }
  }
}
</script>
<style lang="less" scoped>

</style>
