<template>
  <div class="addpractic">
    <a-row>
      <a-col :span="24">
        <a-icon type="check-square" class="icon_in"/> <span class="add-do">添加实操题</span>
        <a-button class="back_btn" type="primary" @click="BackBtn()">返回上一页</a-button>
      </a-col>
    </a-row>
    <a-row class="add-innner">
      <a-col :span="24" class="inner_border">
        <span class="attribute">
          <span class="attr_title">试卷属性:</span>
          <a-select default-value="1" class="attr_select">
            <a-select-option value="1">
              Option 1
            </a-select-option>
          </a-select>
          <div class="warn_line">请选择试卷属性!</div>
        </span>
      </a-col>
      <a-col :span="24" class="inner_border">
        <div style="padding-top: 10px;">
          <span class="class_title">学校分类信息</span>
          <span class="edit_btn" @click="ClickEdit()"><a-icon :type="icontype"/><span class="edit_write">{{ eidtfont }}</span></span>
        </div>
        <div style="width: 100%">
          <span class="attribute2">
            <span class="attr_title"><b style="color: red">*</b>专业:</span>
            <span v-if="isedit" class="trade trade_left">会计装也dd大家快乐的</span>
            <span v-if="!isedit" class="trade">
              <a-select default-value="1" style="width: 120px;">
                <a-select-option value="1">
                  Option 1
                </a-select-option>
              </a-select>
            </span>
            <span class="attr_title2"><b style="color: red">*</b>课程:</span>
            <span v-if="isedit" class="trade trade_left">财务课程d大家快乐的</span>
            <span v-if="!isedit" class="trade">
              <a-select default-value="1" style="width: 120px;">
                <a-select-option value="1">
                  Option 1
                </a-select-option>
              </a-select>
            </span>
            <span class="attr_title2 attr_type">业务类型:</span>
            <span v-if="isedit" class="trade trade_left">财务课程d大家快乐的</span>
            <span v-if="!isedit" class="trade">
              <a-select default-value="1" style="width: 120px;">
                <a-select-option value="1">
                  Option 1
                </a-select-option>
              </a-select>
            </span>
            <span class="attr_title2">级别:</span>
            <span v-if="isedit" class="trade">高级工程师</span>
            <span v-if="!isedit" class="trade">
              <a-select default-value="1" style="width: 120px;">
                <a-select-option value="1">
                  Option 1
                </a-select-option>
              </a-select>
            </span>
            <div class="warn_line" style="margin-left: 90px;">请选择学校分类信息!</div>
          </span>
        </div>
        <div style="width: 100%">
          <span class="attribute2">
            <span class="attr_title">是否共享:</span>
            <span class="isshare">
              <a-radio-group @change="onGroupChange" v-model="shareValue">
                <a-radio :value="1">是</a-radio>
                <a-radio :value="2">否</a-radio>
              </a-radio-group>
            </span>
            <span style="float: right;">
              <span class="attr_title">虚拟公司:</span>
              <span class="isshare"><a-input class="vr_input"></a-input></span>
              <div class="warn_line">请选择虚拟公司!</div>
            </span>
          </span>
        </div>
        <div style="width: 100%;">
          <span class="attribute2">
            <span class="selectsmart">
              <span class="attr_title">知识点:</span>
              <span class="isshare"><a-input class="vr_input2"></a-input></span>
              <div class="warn_line">请选择知识点!</div>
            </span>
            <span style="float: right;">
              <span class="attr_title">适用范围:</span>
              <span class="isshare"><a-input class="vr_input"></a-input></span>
              <div class="warn_line">请填写使用范围!</div>
            </span>
          </span>
        </div>
        <div style="width: 100%;">
          <span class="attribute2">
            <span class="attr_title">试题题目:</span>
            <span class="isshare"><a-input style="width: 78%;"></a-input></span>
            <div class="warn_line">请填写试题题目!</div>
          </span>
        </div>
        <div style="width: 100%;height: 28px;"></div>
      </a-col>
      <a-col :span="24" class="inner_border">
        <div style="width: 100%;">
          <span class="attribute2">
            <span class="attr_title">错题解析:</span>
            <span class="isshare"><a-input style="width: 78%;"></a-input></span>
            <div class="warn_line">请填写错题解析!</div>
          </span>
        </div>
        <div style="width: 100%; padding-bottom: 55px;">
          <span class="attribute2">
            <span class="attr_title">上传图片:</span>
            <span class="isshare">
              <div class="clearfix">
                <a-upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  :fileList="fileList"
                  @preview="handlePreview"
                  @change="handleChange"
                >
                  <div v-if="fileList.length < 3">
                    <a-icon type="plus" />
                    <div class="ant-upload-text">Upload</div>
                  </div>
                </a-upload>
                <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                  <img alt="example" style="width: 100%" :src="previewImage" />
                </a-modal>
              </div>
            </span>
          </span>
        </div>
      </a-col>
    </a-row>
    <a-row class="add-innner2">
      <a-col :span="24" class="attribute2">
        <span class="attr_title">选择步骤:</span>
        <a-select style="width: 30%; margin-left: 10px;" :defaultValue="3" @change="handleSelect">
          <a-select-option v-for="(item5, index5) in selectStep" :key="index5" :value="item5.id">{{ item5.typeName }}</a-select-option>
        </a-select>
        <!-- <div class="warn_line">请选择选择步骤!</div> -->
      </a-col>
    </a-row>
    <a-row class="add-innner2">
      <a-col :span="24" class="attribute2">
        <span style="float: left; width: 62%;">
          <span class="attr_title">账表种类:</span>
          <a-select style="width: 35%; margin-left: 10px;" @change="handleSelect2">
            <a-select-option v-for="(item6, index6) in selectNext" :key="index6" :value="item6.id">{{ item6.typeName }}</a-select-option>
          </a-select>
          <a-button @click="addListForm()" class="next_Btn"><a-icon type="plus"/>添加</a-button>
          <div class="warn_line">请选择账表种类!</div>
        </span>
        <span class="list_right">
          <span class="next_Btb">分值: </span>
          <a-input class="code"/>
          <div class="warn_line2">请填写分值!</div>
        </span>
      </a-col>
    </a-row>
    <!-- 账表选择区域 -->
    <div v-if="listControl.isShow" class="list_account">
      <span v-for="(item, index) in listControl.NumList" :key="index" class="account_style">
        <a-row>
          <a-col :span="24">
            <span class="list_title">步骤名称</span><!-- <a-button type="danger" class="cancle" @click="deleteItem(item)">删除</a-button> -->
          </a-col>
          <a-col :span="24" class="move_room">
            <span style="font-size: 16px;">选择账本:</span>
            <a-select class="putWidth" @change="handleSelect3">
              <a-select-option v-for="(data1, ind) in selectBook[index]" :key="ind" :value="data1.id">{{ data1.sheetName }}</a-select-option>
            </a-select>
            <a-button class="list_form" @click="addForm(item)">添加账表</a-button>
            <div class="warn_line" v-show="errorList[item - 1].state" style="margin-left: 75px;">请选择账表!</div>
          </a-col>
          <a-col :span="24" class="move_room" style="padding: 10px 0;">
            <span style="font-size: 16px;">分数检测模式:</span>
            <a-select defaultValue="open" class="codeCheack" @change="handleSelect">
              <a-select-option value="open">开启</a-select-option>
              <a-select-option value="close">关闭</a-select-option>
            </a-select>
          </a-col>
        </a-row>
        <!-- 表格展示区域 -->
        <span v-for="(item2, index2) in isNum" :key="index2">
          <div v-if="item2.i === item" class="list_bottom" style="display: block;">
            <span class="leftForm" :id="'sheet' + item2.i "></span>
            <span class="rightForm">
              <!-- <span class="formitem">12365</span> -->
              <span class="form_inner">
                <a-table
                  :columns="ResultColumns"
                  :dataSource="arrtTable[item]"
                  :pagination="false"
                  size="small"
                  bordered
                >
                  <span v-if="item2.state"></span>
                  <template slot="CodeWorth" slot-scope="text3, arry3, index3">
                    <input class="input_btn" type="number" v-model="inputList[item].inputVal[index3]" @focus="StoreScore()" @blur="InputScoreBlur(index3, item)"/>
                  </template>
                </a-table>
                <div class="total_code">
                  <span class="total_title" style="font-weight: bold">总计:</span>
                  <span class="total_right" style="color: red;font-weight: bold;">{{ inputList[item].totalValue }}</span>
                </div>
              </span>
            </span>
          </div>
        </span>
      </span>
    </div>
    <div class="reslut_btn">
      <a-button class="tip_btn">提交</a-button>
    </div>
  </div>
</template>
<script>
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css'
import GC from '@grapecity/spread-sheets'
import '@grapecity/spread-sheets-vue'
import '@grapecity/spread-sheets-resources-zh'
import ExcelIO from '@grapecity/spread-excelio'
import '@grapecity/spread-sheets-print'
import { SheetStepApi, SheetStepApiTwo, SheetStepApiNext, SheetStepApiDesc } from '@/api/practice/practiceapi'
import $axios from 'axios'
GC.Spread.Common.CultureManager.culture('zh-cn')

const ResultColumns = [
  {
    title: '序号',
    dataIndex: 'number',
    width: '80px',
    key: 'number',
    align: 'center'
  },
  {
    title: '答案',
    dataIndex: 'result',
    width: '120px',
    key: 'result',
    align: 'center'
  },
  {
    title: '分值',
    dataIndex: 'score',
    key: 'score',
    scopedSlots: { customRender: 'CodeWorth' },
    align: 'center'
  }
]
export default {
  name: 'AddPractic',
  data () {
    return {
      isedit: true,
      eidtfont: '编辑',
      icontype: 'edit',
      shareValue: 1,
      previewVisible: false,
      previewImage: '',
      ResultColumns,
      isNum: [],
      isWarnShow: {
        isOne: false,
        isTwo: false,
        isThree: false,
        isFour: false,
        isFive: false,
        isSix: false,
        isSeven: false,
        isEight: false,
        isNine: false,
        isTen: false
      },
      listControl: {
        isShow: false,
        num: 0,
        NumList: []
      },
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
      ],
      // SpreadJs
      path: 'http://10.1.17.192/api/',
      sheets: null,
      col: null,
      row: null,
      spread: null,
      workbookObj: null,
      sheet: null,
      accountBooks: null,
      accountBook: null,
      storeScore: null,
      inputVal: [],
      inputList: {},
      // 给对象添加数组键值对区分表数据
      arrtTable: {},
      idMove: '',
      ScoreChangeNum: null,
      isSheet: 0,
      // 选择步骤数据
      selectStep: [],
      // 选择账表种类
      selectIndex: 0,
      selectNext: [],
      // 选择账本数据
      selectBook: [],
      bookIndex: null,
      errorList: []
    }
  },
  mounted () {
    $axios.get(this.path + 'sheet/all').then(res => {
      this.sheets = res.data
    }).catch(err => {
      console.log(err)
    })
    SheetStepApi().then(res => {
      console.log('200')
      console.log(res)
    })
    SheetStepApiTwo().then(res => {
      if (res.code === 200) {
        this.selectStep = res.data
      }
    })
    SheetStepApiNext(3).then(res => {
      if (res.code === 200) {
        this.selectNext = res.data
      }
    })
  },
  methods: {
    // 添加实操1
    addListForm () {
      const that = this
      if (that.selectIndex === 0) {
        alert('请选择账表种类')
      } else {
        that.listControl.isShow = true
        that.listControl.num = that.listControl.num + 1
        that.listControl.NumList.push(that.listControl.num)
        // 错误提示
        const y = [{
          state: false
        }]
        that.errorList.push(y)
        // that.$set(that.errorList[that.listControl.num], 'state', false)
        SheetStepApiDesc(that.selectIndex).then(res => {
          if (res.code === 200) {
            that.selectBook.push(res.data)
          }
        })
      }
    },
    // 添加账表2
    addForm (item) {
      if (this.bookIndex === null) {
        this.$set(this.errorList[item - 1], 'state', true)
        return
      } else {
        this.$set(this.errorList[item - 1], 'state', false)
      }
      this.idMove = 'sheet' + item
      const html = document.getElementById(this.idMove)
      if (html != null) {
        html.parentNode.parentNode.removeChild(html.parentNode)
      }
      this.isSheet = item
      this.arrtTable[item] = []
      this.inputList[item] = {
        inputVal: [],
        totalValue: 0
      }
      console.log('ashdahkafh')
      console.log(this.arrtTable)
      const f = {
        i: item,
        state: false
      }
      this.isNum.push(f)
      this.addSeet()
    },
    // 删除实操
    deleteItem (item) {
      const arr = this.listControl.NumList
      arr.splice(arr.findIndex(item2 => item2 === item), 1)
      this.listControl.NumList = arr
    },
    handleSelect (value) {
      // console.log(`selected ${value}`)
      SheetStepApiNext(value).then(res => {
        if (res.code === 200) {
          this.selectNext = res.data
        }
      })
    },
    handleSelect2 (value) {
      this.selectIndex = value
    },
    handleSelect3 (value) {
      console.log(`selected ${value}`)
      const that = this
      that.bookIndex = value
    },
    // SpreadJs表格的实现
    addSeet () {
      let count = 1
      const sheets = []
      sheets[count] = {
        index: this.isSheet,
        sheetDivId: this.idMove,
        scoreTableId: 'scoreTable' + this.isSheet,
        row: 0,
        col: 0,
        scores: {},
        spread: null,
        tableCells: {}
      }
      let number = null
      number = this.bookIndex - 1
      this.loadSheet(number, sheets[count])
      count++
      this.bookIndex = null
    },
    loadSheet (number, sheetObject) {
      const that = this
      const excelIO = new ExcelIO.IO()
      const excelFilePath = this.path + 'loadToUrl'
      const xhr = new XMLHttpRequest()
      xhr.open('POST', excelFilePath, true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.responseType = 'blob'
      xhr.onload = function (e) {
        if (this.status === 200) {
          // 从响应中获取二进制数据
          const blod = this.response
          excelIO.open(blod, function (json) {
            that.workbookObj = json
            sheetObject.spread = new GC.Spread.Sheets.Workbook(document.getElementById(that.idMove))
            sheetObject.spread.fromJSON(json)
            that.bind(sheetObject)
            that.init()
          }, function (e) {
            console.log(e)
          })
        }
      }
      that.sheet = that.sheets[number]
      xhr.send('url=' + that.sheet.url)
    },
    bind (sheetObject) {
      const that = this
      sheetObject.spread.bind(GC.Spread.Sheets.Events.CellClick, function (e, args) {
        sheetObject.row = args.row
        sheetObject.col = args.col
      })
      // 表单值改变时触发
      sheetObject.spread.bind(GC.Spread.Sheets.Events.ValueChanged, function (sender, args) {
        const r = args.row
        const c = args.col
        const key = r + ',' + c
        // const oldValue = args.oldValue
        const newValue = args.newValue
        if (!newValue) {
          that.cancelCellScore(sheetObject, r, c)
        } else {
          sheetObject.tableCells[key] = {
            result: newValue,
            score: 1
          }
        }
        that.showTable(sheetObject)
      })
    },
    cancelCellScore (sheetObject, r, c) {
      const key = r + ',' + c
      const cells = sheetObject.tableCells
      if (cells[key]) {
        delete sheetObject.tableCells[key]
        this.showTable(sheetObject)
      }
    },
    showTable (sheetObject) {
      const that = this
      const cells = sheetObject.tableCells
      let number = 1
      that.isNum[sheetObject.index - 1].state = false
      that.arrtTable[sheetObject.index] = []
      for (const key in cells) {
        const d = {
          number: number,
          result: cells[key].result,
          score: cells[key].score,
          location: key
        }
        that.arrtTable[sheetObject.index].push(d)
        number++
      }
      that.isNum[sheetObject.index - 1].state = true
    },
    StoreScore (index) {
      this.storeScore = this.inputVal[index]
    },
    InputScoreBlur (index, item) {
      const that = this
      that.isNum[item - 1].state = false
      that.inputList[item].totalValue = 0
      this.inputList[item].inputVal.forEach((code, index, arry) => {
        that.inputList[item].totalValue = Number(that.inputList[item].totalValue) + Number(code)
      })
      that.isNum[item - 1].state = true
      console.log('inputList')
      console.log(that.inputList)
    },
    // 是否共享
    onGroupChange (e) {
      console.log('radio checked', e.target.value)
    },
    ClickEdit () {
      this.isedit = !this.isedit
      this.isedit ? this.eidtfont = '编辑' : this.eidtfont = '保存'
      this.isedit ? this.icontype = 'edit' : this.icontype = 'save'
    },
    // 图片处理
    handleCancel () {
      this.previewVisible = false
    },
    handlePreview (file) {
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
    },
    handleChange ({ fileList }) {
      this.fileList = fileList
    },
    // 返回键
    BackBtn () {
      this.$emit('backFun', true)
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .ant-select-selection--single {
  height: 35px!important;
  line-height: 35px!important;
}
.list_account {
  background-color: #fff;
  padding-left: 35px;
}
.back_btn {
  display: inline-block;
  background-color: #33a67d;
  float: right;
}
.reslut_btn {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  padding-top: 80px;
  padding-bottom: 80px;
  float: left;
}
.selectsmart {
  display: inline-block;
  float: left;
  width: 50%;
}
.tip_btn {
  width: 162px;
  height: 45px;
  line-height: 45px;
  background-color: #2178D6FF;
  border-radius: 6px;
  color: #fff;
}
.move_room {
  margin-left: 30px;
}
.input_btn {
  width: 80px;
  border: solid 1px #eee;
  border-radius: 5px;
  padding-left: 10px;
}

.warn_line {
  margin-left: 145px;
  padding-top: 10px;
  color: red;
  font-size: 12px;
}

.warn_line2 {
  margin-left: 45px;
  padding-top: 10px;
  color: red;
  font-size: 12px;
}

.total_code {
  width: 100%;

  .total_title {
    display: inline-block;
    width: 24.5%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border: solid 1px #e8e8e8;
    border-right: none;
    border-top: none;
  }

  .total_right {
    display: inline-block;
    width: 75.5%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border: solid 1px #e8e8e8;
    border-top: none;
    border-left: none;
  }
}
.form_inner {
  display: inline-block;
  height: 324px;
  width: 100%;
  overflow: auto;
}
.list_title {
  display: inline-block;
  padding: 15px 0;
  color: #666;
  font-size: 18px;
  font-weight: bold;
}
.cancle {
  float: right;
  margin-top: 10px;
  margin-right: 88px;
}
.putWidth {
  width: 300px;
  padding-left: 10px;
}
.formitem {
  display: inline-block;
  width: 100%;
  background-color: #E3F5EEFF;
  height: 40px;
}
.list_form {
  margin-left: 10px;
  background-color: #33A67CFF;
  color: #fff;
}
.list_bottom {
  width: 100%;
  height: 364px;
  display: inline-block;
  padding-top: 40px;
}
.rightForm {
  display: inline-block;
  width: 35%;
  height: 324px;
  float: right;
  margin-right: 88px;
}
.leftForm {
  display: inline-block;
  width: 46%;
  height: 324px;
  border: solid 1px #ddd;
  float: left;
  margin-left: 35px;
}

.codeCheack {
  width: 80px;
  height: 30px;
  margin-left: 10px;
  color: #33A67CFF;
}
.clearfix {
  margin-left: 158px;
  margin-top: -20px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}
.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
.code {
  width: 78.5%;
  height: 30px;
}

.next_Btb {
  display: inline-block;
  margin-right: 10px;
}

.next_Btn {
  display: inline-block;
  margin-left: 10px;
  color: #4C9BF0FF;
  border: solid 1px #4C9BF0FF;
}

.attr_title {
  display: inline-block;
  width: 70px;
  margin-left: 65px;
  font-size: 16px;
  text-align: right;
}
.attr_title2 {
  display: inline-block;
  width: 70px;
  font-size: 16px;
  text-align: right;
}
.attr_type {
 margin-left: 15px;
}
.isshare {
  margin-left: 10px;
}
.attr_select {
  width: 252px;
  height: 30px;
  line-height: 30px;
  margin-left: 10px;
}

.trade {
  display: inline-block;
  margin-left: 10px;
}

.vr_input {
  width: 42%;
  margin-right: 88px;
}

.vr_input2 {
  width: 50%;
}

.trade_left {
  width: 80px;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list_right {
  display: inline-block;
  padding-bottom: 30px;
  float: right;
  margin-right: 88px;
}

.addpractic {
  margin: 50px 32px 0px 32px;
  background-color: #fff;

  .icon_in {
    color: #fff;
    background-color: #4C9BF0FF;
    font-size: 24px;
  }

  .add-do {
    display: inline-block;
    color: #33A67CFF;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
  }

  .add-innner2 {
    background-color: #fff;

    .attribute2 {
      display: inline-block;
      padding-top: 25px;
      font-size: 16px;
      width: 100%;
    }
  }

  .add-innner {
    margin-top: 22px;
    background-color: #fff;

    .inner_border {
      border-bottom: solid 1px #E5E5E5FF;

      .attribute {
        display: inline-block;
        padding: 32px 0;
      }

      .attribute2 {
        display: inline-block;
        padding-top: 25px;
        font-size: 16px;
        width: 100%;
      }

      .attribute3 {
        display: inline-block;
        padding-top: 25px;
        font-size: 16px;
        float: right;
      }

      .attribute4 {
        display: inline-block;
        font-size: 16px;
        float: right;
      }

      .class_title {
        margin-left: 40px;
        font-size: 16px;
      }

      .edit_btn {
        float: right;
        margin-right: 88px;
        font-size: 16px;
        color: #33A67CFF;

        .edit_write {
          display: inline-block;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
