<template>
  <div>
    <div class="highCenter">
      <div class="inner_content">
        <a-row>
          <a-col :span="24" class="con_title">高级搜索</a-col>
          <a-col :span="24" class="next_title">查询条件: (多选)</a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <div class="line-mar">
              <span class="line_title">行业:</span>
              <a-select class="selectFrame" default-value="1">
                <a-select-option value="1">
                  Option 1
                </a-select-option>
                <a-select-option value="2">
                  Option 2
                </a-select-option>
                <a-select-option value="3">
                  Option 3
                </a-select-option>
              </a-select>
            </div>
          </a-col>
          <a-col :span="12">
            <div class="line-mar">
              <span class="line_title">部门:</span>
              <a-select class="selectFrame" default-value="1">
                <a-select-option value="1">
                  Option 1
                </a-select-option>
                <a-select-option value="2">
                  Option 2
                </a-select-option>
                <a-select-option value="3">
                  Option 3
                </a-select-option>
              </a-select>
            </div>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <div class="line-mar">
              <span class="line_title">岗位:</span>
              <a-select class="selectFrame" default-value="1">
                <a-select-option value="1">
                  Option 1
                </a-select-option>
                <a-select-option value="2">
                  Option 2
                </a-select-option>
                <a-select-option value="3">
                  Option 3
                </a-select-option>
              </a-select>
            </div>
          </a-col>
          <a-col :span="12">
            <div class="line-mar">
              <span class="line_title">职务:</span>
              <a-select class="selectFrame" default-value="1">
                <a-select-option value="1">
                  Option 1
                </a-select-option>
                <a-select-option value="2">
                  Option 2
                </a-select-option>
                <a-select-option value="3">
                  Option 3
                </a-select-option>
              </a-select>
            </div>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <span class="else_f">
              <a-row style="margin-left: 10px;">
                <a-col :span="12" style="padding-bottom: 10px;">
                  <span class="line_title">级别:</span>
                  <a-select class="selectFrame" default-value="1">
                    <a-select-option value="1">
                      Option 1
                    </a-select-option>
                    <a-select-option value="2">
                      Option 2
                    </a-select-option>
                    <a-select-option value="3">
                      Option 3
                    </a-select-option>
                  </a-select>
                </a-col>
              </a-row>
              <a-row style="margin-left: 10px;">
                <a-col :span="12">
                  <div class="line-mar2">
                    <span class="line_title">其他:</span>
                    <a-select class="selectFrame" default-value="1">
                      <a-select-option value="1">
                        Option 1
                      </a-select-option>
                      <a-select-option value="2">
                        Option 2
                      </a-select-option>
                      <a-select-option value="3">
                        Option 3
                      </a-select-option>
                    </a-select>
                  </div>
                </a-col>
                <a-col :span="12">
                  <div class="line-mar3">
                    <span class="line_title">其他2:</span>
                    <a-select class="selectFrame" default-value="1">
                      <a-select-option value="1">
                        Option 1
                      </a-select-option>
                      <a-select-option value="2">
                        Option 2
                      </a-select-option>
                      <a-select-option value="3">
                        Option 3
                      </a-select-option>
                    </a-select>
                  </div>
                </a-col>
              </a-row>
            </span>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <div class="line-mar">
              <span class="line_title">试题分类:</span>
              <a-select class="selectFrame" default-value="1">
                <a-select-option value="1">
                  Option 1
                </a-select-option>
                <a-select-option value="2">
                  Option 2
                </a-select-option>
                <a-select-option value="3">
                  Option 3
                </a-select-option>
              </a-select>
            </div>
          </a-col>
          <a-col :span="12">
            <div class="line-mar">
              <span class="line_title">状态:</span>
              <a-select class="selectFrame" default-value="1">
                <a-select-option value="1">
                  Option 1
                </a-select-option>
                <a-select-option value="2">
                  Option 2
                </a-select-option>
                <a-select-option value="3">
                  Option 3
                </a-select-option>
              </a-select>
            </div>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <div class="line-mar">
              <span class="line_title">是否练习题:</span>
              <a-select class="selectFrame" default-value="1">
                <a-select-option value="1">
                  Option 1
                </a-select-option>
                <a-select-option value="2">
                  Option 2
                </a-select-option>
                <a-select-option value="3">
                  Option 3
                </a-select-option>
              </a-select>
            </div>
          </a-col>
          <a-col :span="12">
            <div class="line-mar">
              <span class="line_title">分值:</span>
              <a-select class="selectFrame" default-value="1">
                <a-select-option value="1">
                  Option 1
                </a-select-option>
                <a-select-option value="2">
                  Option 2
                </a-select-option>
                <a-select-option value="3">
                  Option 3
                </a-select-option>
              </a-select>
            </div>
          </a-col>
          <a-col :span="24">
            <div class="line-mar4">
              <span class="line_title">知识点:</span>
              <a-input style="width: 458px"></a-input>
            </div>
          </a-col>
          <a-col :span="24">
            <div class="line-mar4">
              <span class="line_title">试题内容:</span>
              <a-input style="width: 458px"></a-input>
            </div>
          </a-col>
          <a-col :span="24">
            <div class="line-mar4">
              <span class="line_title">创建时间:</span>
              <a-date-picker style="width: 186px;" />
              <span class="long_line">———</span>
              <a-date-picker style="width: 186px;" />
            </div>
          </a-col>
          <a-col :span="24">
            <div class="line-mar5">
              <span class="line_title">创建人:</span>
              <a-input style="width: 186px;"/>
            </div>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <span class="last_btn">
              <a-button class="check_btn">查询</a-button>
              <a-button class="reset_btn">重置</a-button>
              <a-button class="close_btn" @click="closeOpen()">关闭</a-button>
            </span>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="maskPage"></div>
  </div>
</template>
<script>
export default {
  name: 'HighCheck',
  methods: {
    closeOpen () {
      this.$emit('closeMask', false)
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .ant-select-selection__rendered {
  line-height: 27px;
}
.maskPage {
  width: 100%;
  height: calc(100% - 120px);
  background-color: #E6E6E6FF;
  position: absolute;
  left: 0;
  background-color: #333;
  opacity: 0.5;
  z-index: 5
}
.check_btn,.close_btn,.reset_btn {
  width: 128px;
  height: 38px;
  border-radius: 5px;
  border: none;
}
.reset_btn {
  background-color: #E68263FF;
  color: #fff;
}
.check_btn {
  float: left;
  background-color: #33A684FF;
  color: #fff;
}
.close_btn {
  float: right;
  color: #33A684FF;
  border: solid 1px #33A684FF;
}
.long_line {
  display: inline-block;
  padding: 0 22px;
}
.line-mar {
  margin-right: 45px;
  padding: 10px 0;
  float: right;
}
.line-mar5 {
  float: left;
  padding: 10px 0;
  margin-left: 30px;
}
.line-mar4 {
  padding: 10px 0;
  margin-right: 45px;
  float: right;
}
.line-mar2 {
  padding: 10px 0;
  float: left;
}
.line-mar3 {
  margin-right: 17px;
  padding-top: 10px;
  float: right;
}
.last_btn {
  display: inline-block;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 40px 55px;
}
.line_title {
  display: inline-block;
  color: #333;
  font-size: 15px;
  margin-right: 6px;
}
.selectFrame {
  width: 163px;
}
.else_f {
  display: inline-block;
  margin-left: 35px;
  width: 525px;
  background-color: #ddd;
  padding-top: 10px;
}
.highCenter {
  width: 100%;
  height: calc(100% - 120px);
  overflow: auto;
  position: absolute;
  left: 0;
  z-index: 6;

  .inner_content {
    width: 588px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 5%;
    border-radius: 10px;
    margin-bottom: 80px;

    .con_title {
      text-align: center;
      padding: 18px 0;
      color: #333;
      font-size: 20px;
      font-weight: bold;
    }

    .next_title {
      padding-left: 35px;
      padding-bottom: 20px;
      color: #333;
      font-size: 17px;
    }
  }
}
</style>
