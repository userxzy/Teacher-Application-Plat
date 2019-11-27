<template>
  <transition name="showHeader">
    <div v-if="visible" class="header-animat">
      <a-layout-header
        v-if="visible"
        :class="[fixedHeader && 'ant-header-fixedHeader', sidebarOpened ? 'ant-header-side-opened' : 'ant-header-side-closed', ]"
        :style="{ padding: '0' }">
        <div class="header">
          <!-- <a-icon v-if="device==='mobile'" class="trigger" :type="collapsed ? 'menu-fold' : 'menu-unfold'" @click="toggle"/>
          <a-icon v-else class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggle"/> -->
          <span class="header_logo">
            <img src="~@/assets/images/logo.png"/>
            <span class="header_title">云智库教师平台</span>
            <span class="teacher_welcome">【 梁金清老师, 欢迎登录云智库教师平台！】</span>
          </span>
          <span class="header_center">
            <div class="header_center_content">
              星期{{ dataTime.week }}
            </div>
            <div class="header_center_content">
              {{ dataTime.ampm }} {{ dataTime.time }}
            </div>
          </span>
          <user-menu>user</user-menu>
        </div>
        <!-- <div v-else :class="['top-nav-header-index', theme]">
          <div class="header-index-wide">
            <div class="header-index-left">
              <logo class="top-nav-header" :show-title="device !== 'mobile'"/>
              <s-menu v-if="device !== 'mobile'" mode="horizontal" :menu="menus" :theme="theme" />
              <a-icon v-else class="trigger" :type="collapsed ? 'menu-fold' : 'menu-unfold'" @click="toggle" />
            </div>
            <user-menu class="header-index-right"></user-menu>
          </div>
        </div> -->
      </a-layout-header>
    </div>
  </transition>
</template>

<script>
import UserMenu from '../tools/UserMenu'
import SMenu from '../Menu/'
import Logo from '../tools/Logo'
import { mixin } from '@/utils/mixin'

export default {
  name: 'GlobalHeader',
  components: {
    UserMenu,
    SMenu,
    Logo
  },
  mixins: [mixin],
  props: {
    mode: {
      type: String,
      // sidemenu, topmenu
      default: 'sidemenu'
    },
    menus: {
      type: Array,
      required: true
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    device: {
      type: String,
      required: false,
      default: 'desktop'
    }
  },
  data () {
    return {
      visible: true,
      oldScrollTop: 0,
      dataTime: {
        week: '',
        ampm: '',
        time: ''
      }
    }
  },
  mounted () {
    document.addEventListener('scroll', this.handleScroll, { passive: true })
    window.chatTimer = setInterval(() => {
      this.getWeek()
    }, 1000)
  },
  methods: {
    getWeek () {
      const a = ['日', '一', '二', '三', '四', '五', '六']
      const week = new Date().getDay()
      this.dataTime.week = a[week]
      let hours = new Date().getHours()
      if (hours < 10) {
        hours = '0' + hours
      }
      let minutes = new Date().getMinutes()
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      let seconds = new Date().getSeconds()
      if (seconds < 10) {
        seconds = '0' + seconds
      }
      if (hours <= 12) {
        this.dataTime.ampm = 'AM'
      } else {
        this.dataTime.ampm = 'PM'
      }
      this.dataTime.time = hours + ' : ' + minutes + ' : ' + seconds
    },
    handleScroll () {
      if (!this.autoHideHeader) {
        return
      }

      const scrollTop = document.body.scrollTop + document.documentElement.scrollTop
      if (!this.ticking) {
        this.ticking = true
        requestAnimationFrame(() => {
          if (this.oldScrollTop > scrollTop) {
            this.visible = true
          } else if (scrollTop > 300 && this.visible) {
            this.visible = false
          } else if (scrollTop < 300 && !this.visible) {
            this.visible = true
          }
          this.oldScrollTop = scrollTop
          this.ticking = false
        })
      }
    },
    toggle () {
      this.$emit('toggle')
    }
  },
  beforeDestroy () {
    document.body.removeEventListener('scroll', this.handleScroll, true)
  },
  destroyed () {
    clearInterval(window.liaotianTimer)
  }
}
</script>

<style lang="less">
@import '../index.less';
.header {
  background-color: #33a67d!important;
  min-width: 1600px;
}
.header_logo {
  float: left;
  margin-left: 235px;
}
.header_title {
  margin-left: 15px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
.header_center {
  position: absolute;
  left: 50%;
  width: 200px;
  margin-left: -100px;
  text-align: center;
}
.header_center_content {
  height: 30px;
  line-height: 30px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
}
.header-animat{
  position: relative;
  z-index: @ant-global-header-zindex;
}
.showHeader-enter-active {
  transition: all 0.25s ease;
}
.showHeader-leave-active {
  transition: all 0.5s ease;
}
.showHeader-enter, .showHeader-leave-to {
  opacity: 0;
}
.teacher_welcome {
  margin-left: 15px;
  color: #fff;
  font-size: 14px;
}
</style>
