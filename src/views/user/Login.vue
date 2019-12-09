<template>
  <div :style="{backgroundImage: 'url(' + albumpic_big + ')'}" class="main">
    <a-form
      id="formLogin"
      class="user-layout-login"
      ref="formLogin"
      :form="form"
      @submit="handleSubmit"
    >
      <div class="triangle" @click="handleTabClick"></div>
      <a-row v-if="customActiveKey === 'tab1'">
        <a-col :span="24">
          <a-row>
            <a-col :span="10" class="apllication_btn">
              <span class="application_hot">教师应用端</span>
            </a-col>
            <a-col :span="10" class="manage_btn">
              <span class="manage_hot">教师管理端</span>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="24">
          <a-form-item>
            <span class="login_title">验证码登录</span>
          </a-form-item>
          <a-form-item>
            <a-input size="large" type="text" placeholder="手机号" v-decorator="['mobile', {rules: [{ required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }], validateTrigger: 'change'}]">
              <a-icon slot="prefix" type="mobile" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>

          <a-row :gutter="16">
            <a-col class="gutter-row" :span="16">
              <a-form-item>
                <a-input size="large" type="text" placeholder="验证码" v-decorator="['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]">
                  <a-icon slot="prefix" type="mail" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                </a-input>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="8">
              <a-button
                class="getCaptcha"
                tabindex="-1"
                :disabled="state.smsSendBtn"
                @click.stop.prevent="getCaptcha"
                v-text="!state.smsSendBtn && '获取验证码' || (state.time+' s')"
              ></a-button>
            </a-col>
          </a-row>
        </a-col>
      </a-row>

      <a-row v-if="customActiveKey === 'tab2'">
        <a-col :span="24">
          <a-row>
            <a-col :span="10" class="apllication_btn">教师应用端</a-col>
            <a-col :span="10" class="manage_btn">教师管理端</a-col>
          </a-row>
        </a-col>
        <a-col :span="24">
          <a-form-item>
            <span class="login_title">账号密码登录</span>
          </a-form-item>
          <a-alert v-if="isLoginError" type="error" showIcon style="margin-bottom: 24px;" message="账号密码失败（admin/ant.design )" />
          <a-form-item>
            <a-input
              size="large"
              type="text"
              placeholder="账户: admin"
              @blur="getUserName"
              v-decorator="[
                'username',
                {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}
              ]"
            >
              <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-input
              size="large"
              type="password"
              autocomplete="true"
              placeholder="密码: admin or ant.design"
              v-decorator="[
                'password',
                {rules: [{ required: true, message: '请输入密码' }, { validator: handlePassword }], validateTrigger: 'blur'}
              ]"
            >
              <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>
        </a-col>
      </a-row>
      <a-form-item v-if="customActiveKey === 'tab2'">
        <a-checkbox v-decorator="['rememberMe']" @change="onChange">自动登录</a-checkbox>
        <router-link
          :to="{ name: 'recover', params: { user: 'aaa'} }"
          class="forge-password"
          style="float: right;"
        >忘记密码</router-link>
      </a-form-item>

      <a-form-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          :loading="state.loginBtn"
          :disabled="state.loginBtn"
        >确定</a-button>
      </a-form-item>

    </a-form>

    <two-step-captcha
      v-if="requiredTwoStepCaptcha"
      :visible="stepCaptchaVisible"
      @success="stepCaptchaSuccess"
      @cancel="stepCaptchaCancel"
    ></two-step-captcha>
  </div>
</template>

<script>
import md5 from 'md5'
import TwoStepCaptcha from '@/components/tools/TwoStepCaptcha'
import { mapActions } from 'vuex'
import { timeFix } from '@/utils/util'
import { getSmsCaptcha, get2step } from '@/api/login'

export default {
  components: {
    TwoStepCaptcha
  },
  data () {
    return {
      customActiveKey: 'tab1',
      loginBtn: false,
      albumpic_big: require('../../assets/images/login1.png'),
      // login type: 0 email, 1 username, 2 telephone
      loginType: 0,
      isLoginError: false,
      // 判断是否是手机验证
      requiredTwoStepCaptcha: false,
      stepCaptchaVisible: false,
      // 表单的创建
      form: this.$form.createForm(this),
      // 自动登录
      checked: false,
      loginData: {
        userName: '',
        password: ''
      },
      state: {
        time: 60,
        loginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0,
        smsSendBtn: false
      }
    }
  },
  created () {
    get2step({ })
      .then(res => {
        this.requiredTwoStepCaptcha = res.result.stepCode
      })
      .catch(() => {
        this.requiredTwoStepCaptcha = false
      })
    // this.requiredTwoStepCaptcha = true
  },
  methods: {
    ...mapActions(['Login', 'Logout']),
    handlePassword (rule, value, callback) {
      this.loginData.password = md5(value)
      callback()
    },
    // loginType验证是邮箱还是验证名
    handleUsernameOrEmail (rule, value, callback) {
      const { state } = this
      const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
      console.log('value')
      console.log(value)
      if (regex.test(value)) {
        state.loginType = 0
      } else {
        state.loginType = 1
      }
      callback()
    },
    handleTabClick () {
      this.customActiveKey === 'tab1' ? this.customActiveKey = 'tab2' : this.customActiveKey = 'tab1'
      this.customActiveKey === 'tab1' ? this.albumpic_big = require('../../assets/images/login1.png') : this.albumpic_big = require('../../assets/images/login3.png')
    },
    handleSubmit (e) {
      e.preventDefault()
      const {
        form: { validateFields },
        state,
        customActiveKey,
        Login
      } = this
      state.loginBtn = true
      const validateFieldsKey = customActiveKey === 'tab2' ? ['username', 'password'] : ['mobile', 'captcha']
      validateFields(validateFieldsKey, { force: true }, (err, values) => {
        if (!err) {
          console.log('login form', values)
          const loginParams = { ...values }
          delete loginParams.username
          loginParams[!state.loginType ? 'email' : 'username'] = values.username
          loginParams.password = md5(values.password)
          Login(loginParams)
            .then((res) => this.loginSuccess(res))
            .catch(err => this.requestFailed(err))
            .finally(() => {
              state.loginBtn = false
            })
        } else {
          setTimeout(() => {
            state.loginBtn = false
          }, 600)
        }
      })
    },
    getCaptcha (e) {
      e.preventDefault()
      const { form: { validateFields }, state } = this

      validateFields(['mobile'], { force: true }, (err, values) => {
        if (!err) {
          state.smsSendBtn = true

          const interval = window.setInterval(() => {
            if (state.time-- <= 0) {
              state.time = 60
              state.smsSendBtn = false
              window.clearInterval(interval)
            }
          }, 1000)

          const hide = this.$message.loading('验证码发送中..', 0)
          getSmsCaptcha({ mobile: values.mobile }).then(res => {
            setTimeout(hide, 2500)
            this.$notification['success']({
              message: '提示',
              description: '验证码获取成功，您的验证码为：' + res.result.captcha,
              duration: 8
            })
          }).catch(err => {
            setTimeout(hide, 1)
            clearInterval(interval)
            state.time = 60
            state.smsSendBtn = false
            this.requestFailed(err)
          })
        }
      })
    },
    stepCaptchaSuccess () {
      this.loginSuccess()
    },
    stepCaptchaCancel () {
      this.Logout().then(() => {
        this.loginBtn = false
        this.stepCaptchaVisible = false
      })
    },
    loginSuccess (res) {
      console.log('mockUser')
      console.log(res)
      // check res.homePage define, set $router.push name res.homePage
      // Why not enter onComplete

      this.$router.push({ name: 'analysis' }, () => {
        console.log('onComplete')
        this.$notification.success({
          message: '欢迎',
          description: `${timeFix()}，欢迎回来`
        })
      })
      this.localSet()
      this.$router.push({ path: '/' })
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notification.success({
          message: '欢迎',
          description: `${timeFix()}，欢迎回来`
        })
      }, 1000)
      this.isLoginError = false
    },
    requestFailed (err) {
      this.isLoginError = true
      this.$notification['error']({
        message: '错误',
        description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
        duration: 4
      })
    },
    getUserName (e) {
      this.loginData.userName = e.target.value
    },
    onChange (e) {
      console.log(`suerName: ${this.loginData.userName}`)
      this.checked = e.target.checked
      if (!this.checked) {
        localStorage.removeItem('userName')
        localStorage.removeItem('password')
        localStorage.removeItem('checked')
      }
    },
    localSet () {
      if (this.checked && (this.loginData.userName !== '' || this.loginData.userName !== null)) {
        if (this.loginData.password !== '' || this.loginData.password !== null) {
          localStorage.setItem('userName', this.loginData.userName)
          localStorage.setItem('password', this.loginData.password)
          localStorage.setItem('checked', this.checked)
        }
      }
      if (!this.checked) {
        localStorage.removeItem('userName')
        localStorage.removeItem('password')
        localStorage.removeItem('checked')
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .ant-tabs-nav-wrap {
  width: 80%;
}
/deep/ .ant-tabs-bar {
  width: 80%;
}
/deep/ .ant-btn-primary {
  background-color: #33a67d;
}
.main {
  position: relative;
  padding: 10px;
}
.triangle {
  width: 0px;
  height: 0px;
  border-style: solid;
  background-color: transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color:transparent;
  border-top-width: 20px;
  border-bottom-width: 20px;
  border-left-width: 40px;
  border-right-width: 40px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  position: absolute;
  top: 38px;
  left: 410px;
  cursor: pointer;
  z-index: 999999;
}
.application_hot {
  display: inline-block;
  height: 28px;
  width: 150px;
  line-height: 18px;
  cursor: pointer;
}
.manage_btn {
  font-size: 15px;
  color: #fff;
}
.apllication_btn {
  font-size: 15px;
  color: #33a67d;
  cursor: pointer
}
.login_title {
  display: inline-block;
  margin-top: 20px;
  font-size: 22px;
  font-weight: bold;
}
.user-layout-login {
  margin-left: 15px;
  margin-right: 15px;

  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
    background-color: #ddd;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  // .user-login-other {
  //   text-align: left;
  //   margin-top: 24px;
  //   line-height: 22px;

  //   .item-icon {
  //     font-size: 24px;
  //     color: rgba(0, 0, 0, 0.2);
  //     margin-left: 16px;
  //     vertical-align: middle;
  //     cursor: pointer;
  //     transition: color 0.3s;

  //     &:hover {
  //       color: #1890ff;
  //     }
  //   }

  //   .register {
  //     float: right;
  //   }
  // }
}
</style>
