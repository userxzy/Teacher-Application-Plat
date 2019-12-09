<template>
  <div class="addselect">
    <a-row>
      <a-col :span="24">
        <a-icon type="check-square" class="icon_in"/> <span class="add-do">添加选择题</span>
        <a-button class="back_btn" type="primary" @click="BackBtn()">返回上一页</a-button>
      </a-col>
    </a-row>
    <a-row class="add-innner">
      <a-col :span="24" class="inner_border">
        <span class="attribute">
          <div class="attr_left">
            <span class="attr_title">题目类型:</span>
            <a-select default-value="1" class="attr_select">
              <a-select-option value="1">
                Option 1
              </a-select-option>
            </a-select>
            <div class="warn_line">请选择题目类型!</div>
          </div>
          <div class="attr_right">
            <span class="attr_title">试卷属性:</span>
            <a-select default-value="1" class="attr_select">
              <a-select-option value="1">
                Option 1
              </a-select-option>
            </a-select>
            <div class="warn_line">请选择试卷属性!</div>
          </div>
        </span>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: 'AddSelect',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    BackBtn () {
      this.$emit('backFun', true)
    }
  }
}
</script>
<style lang="less" scoped>
  .addselect {
    margin: 50px 32px 0px 32px;

    .icon_in {
      color: #fff;
      background-color: #4C9BF0FF;
      font-size: 24px;
    }

    .back_btn {
      display: inline-block;
      background-color: #33a67d;
      float: right;
    }

    .add-do {
      display: inline-block;
      color: #33A67CFF;
      font-size: 20px;
      font-weight: bold;
      margin-left: 10px;
    }

    .attr_right {
      float: right;
      margin-right: 88px;
    }

    .attr_left {
      float:left;
    }

    .add-innner {
      margin-top: 22px;
      background-color: #fff;

      .inner_border {
        border-bottom: solid 1px #E5E5E5FF;

        .attribute {
          display: inline-block;
          padding: 32px 0;
          width: 100%;

          .attr_title {
            display: inline-block;
            width: 70px;
            margin-left: 65px;
            font-size: 16px;
            text-align: right;
          }

          .attr_select {
            width: 252px;
            height: 30px;
            line-height: 30px;
            margin-left: 10px;
          }

          .warn_line {
            margin-left: 145px;
            padding-top: 10px;
            color: red;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
