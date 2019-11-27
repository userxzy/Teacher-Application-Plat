<template>
  <div id="userLayout" :class="['user-layout-wrapper', device]">
    <div class="top">
      <a-row>
        <a-col :span="8">
          <span><img src="~@/assets/images/logo2.png"/></span>
          <span></span>
        </a-col>
        <a-col :span="8"></a-col>
        <a-col :span="8">
          <span class="helpCenter">帮助中心</span>
          <span class="techPot">技术支持</span>
        </a-col>
      </a-row>
    </div>
    <div class="container">
      <div class="desc_Font">
        <a-row>
          <a-col :span="24" class="desc_title">
            中企智库
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24" class="desc_fu">
            <span class="under_line"></span>
            云智库平台
          </a-col>
        </a-row>
      </div>
      <route-view></route-view>
      <div class="footer">
        <div class="links">
          <a href="_self">声明: 真才企链平台所有内容版权由广东真才企链信息科技有限公司持有, 未经允许, 请勿传播或作其它商业行为</a>
        </div>
        <div class="copyright">
          Copyright &copy; 2018 广东真才企链信息科技有限公司 备号案: 粤 ICP 备 19016746 号
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RouteView from './RouteView'
import { mixinDevice } from '@/utils/mixin'

export default {
  name: 'UserLayout',
  components: { RouteView },
  mixins: [mixinDevice],
  data () {
    return {}
  },
  mounted () {
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style lang="less" scoped>
  #userLayout.user-layout-wrapper {
    height: 100%;

    &.mobile {
      .container {
        .main {
          max-width: 368px;
          width: 98%;
        }
      }
    }
    .top {
      text-align: center;
      height: 60px;
      line-height: 60px;
      background-color: #e3e3e3;

      .helpCenter,.techPot {
        display: inline-block;
        margin-right: 15px;
      }
    }
    .container {
      width: 100%;
      min-height: calc(100% - 60px);
      background: url(~@/assets/images/background.png) no-repeat;
      background-size: cover;
      position: relative;

      .desc_Font {
        position: absolute;
        left: 12%;
        top: 25%;
        width: 500px;
        height: 160px;

        .desc_title {
          text-align: center;
          font-size: 55px;
          font-weight: bolder;
          color: #33a67d;
        }
        .desc_fu {
          text-align: right;
          margin-top: 20px;
          font-size: 25px;
          color: #fff;
          font-weight: bold;

          .under_line {
            display: inline-block;
            width: 100px;
            height: 10px;
            border-top: solid 3px #fff;
            margin-right: 15px;
          }
        }
      }

      a {
        text-decoration: none;
      }

      .main {
        min-width: 260px;
        width: 468px;
        height: 20%;
        float: left;
        margin-top: 10%;
        margin-left: 50%;
        border-radius: 6px 0 6px 6px;
        background-size: cover
      }

      .footer {
        position: absolute;
        width: 100%;
        height: 88px;
        bottom: 0;
        padding: 0 16px;
        text-align: center;
        background-color: #303437;

        .links {
          margin-bottom: 8px;
          margin-top: 16px;
          font-size: 12px;
          a {
            color: #ddd;
            transition: all 0.3s;
            &:not(:last-child) {
              margin-right: 40px;
            }
          }
        }
        .copyright {
          color: #ddd;
          font-size: 12px;
        }
      }
    }
  }
</style>
