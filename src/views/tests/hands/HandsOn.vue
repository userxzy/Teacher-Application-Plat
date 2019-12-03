<template>
  <div class="hands">
    <a-row>
      <a-col :span="24">
        <a-button type="primary" class="back_btn" @click="backFunc()">返回</a-button>
        <span class="addTitle"><a-icon type="edit" /> 添加实操题 </span>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="15">
        <span>试题题目:</span> <a-input class="testInput" placeholder="请填写试题题目"/>
      </a-col>
    </a-row>
    <!-- <a-row>
      <a-col :span="24" class="error_title">请填写试题题目</a-col>
    </a-row> -->
    <a-row>
      <a-col :span="15">
        错题解析: <a-input class="testInput" placeholder="请编辑错题解析"/>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="15">
        <span class="upPic">上传图片:</span>
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
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="15">
        选择步骤:
        <a-select class="select_btn" defaultValue="lucy" style="width: 200px" @change="handleSelect">
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="disabled" disabled>Disabled</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="15">
        账表种类:
        <a-select class="select_btn" defaultValue="lucy" style="width: 200px" @change="handleSelect">
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="disabled" disabled>Disabled</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
        <a-button type="primary" @click="addListForm()"><a-icon type="plus"/>添加</a-button>
        <span class="next_Btb">分值:</span>
        <a-input class="code"/>
      </a-col>
    </a-row>
    <div v-if="listControl.isShow" class="list_account">
      <span v-for="(item, index) in listControl.NumList" :key="index" class="account_style">
        <a-row>
          <a-col :span="24" style="background-color: #ddd; margin-top: 10px;">
            <span class="list_title">复式记账凭证 {{ item }}</span><a-button type="danger" class="cancle" @click="deleteItem(item)">删除</a-button>
          </a-col>
          <a-col :span="15" style="padding: 10px 0;">
            <span style="color: red">*</span>选择账本:
            <a-select defaultValue="lucy" class="putWidth" @change="handleSelect">
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="disabled" disabled>Disabled</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
            <a-button class="list_form" type="primary" @click="addForm(item)"><a-icon type="plus"/>添加账表</a-button>
          </a-col>
          <a-col :span="15" style="padding: 10px 0;">
            <span style="color: red;">*</span>单元格设置分数:
            <a-input class="putWidth"/>
            <a-button class="list_form set" type="primary">设置</a-button>
          </a-col>
          <!-- <a-col :span="15" style="padding: 15px 0;">
            <span style="color: red;">*</span>数据同步:
            <a-button type="primary" style="margin-left: 10px;">同步</a-button>
          </a-col> -->
        </a-row>
        <span v-for="(item2, index2) in isNum" :key="index2" class="list_bottom">
          <a-row v-if="item2 === item">
            <a-col :span="15">
              <span class="leftForm">123</span>
            </a-col>
            <a-col :span="1"></a-col>
            <a-col :span="8">
              <span class="rightForm">
                <a-table
                  :columns="ResultColumns"
                  :dataSource="ReslutData"
                  :pagination="false"
                  bordered
                >
                </a-table>
              </span>
            </a-col>
          </a-row>
        </span>
      </span>
    </div>
    <a-row class="foot_bottom">
      <a-col :span="24" style="text-align: left; margin-top: 20px;">
        <a-button type="primary">提交</a-button>
        <a-button class="back2_btn" @click="backFunc()">返回</a-button>
      </a-col>
    </a-row>
  </div>
</template>
<script>
const ReslutData = []
const ResultColumns = [
  {
    title: '单元格号',
    dataIndex: 'id',
    key: 'id',
    align: 'center'
  },
  {
    title: '答案',
    dataIndex: 'reslut',
    key: 'reslut',
    align: 'center'
  },
  {
    title: '分值',
    dataIndex: 'code',
    key: 'code',
    align: 'center'
  }
]
export default {
  name: 'HandsOn',
  data () {
    return {
      previewVisible: false,
      ResultColumns,
      ReslutData,
      previewImage: '',
      isNum: [],
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
      ]
    }
  },
  methods: {
    handleSelect (value) {
      console.log(`selected ${value}`)
    },
    backFunc () {
      this.$emit('backFunction', true)
    },
    addForm (item) {
      this.isNum.push(item)
    },
    deleteItem (item) {
      const arr = this.listControl.NumList
      arr.splice(arr.findIndex(item2 => item2 === item), 1)
      this.listControl.NumList = arr
    },
    addListForm () {
      this.listControl.isShow = true
      this.listControl.num = this.listControl.num + 1
      this.listControl.NumList.push(this.listControl.num)
    },
    // 图片上传
    handleCancel () {
      console.log(this.fileList)
      this.previewVisible = false
    },
    handlePreview (file) {
      console.log('file')
      console.log(file)
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
    },
    handleChange ({ fileList }) {
      this.fileList = fileList
    }
  }
}
</script>
<style lang="less" scoped>
  .hands {
    width: 1200px;
    height: 100%;
    background-color: #fff;
    padding-bottom: 100px;
    margin: 0 auto;
  }
  .code {
    width: 200px;
  }
  .list_title {
    display: inline-block;
    padding: 15px;
    color: #33a67d;
    font-weight: bold;
  }
  .foot_bottom {
    padding-bottom: 120px;
  }
  .list_account {
    padding: 10px 0px;
  }
  .list_form {
    margin-left: 10px;
  }
  .back_btn {
    float: right;
    margin: 30px 0;
  }
  .next_Btb {
    margin: 0 10px;
  }
  .testInput {
    margin-top: 15px;
    margin-left: 10px;
    width: 600px;
  }
  .account_style {
    display: inline-block;
    padding: 0 15px;
    border: solid 1px #e2e2e2;
  }
  .addTitle {
    display: inline-block;
    width: 100%;
    text-align: left;
    padding: 10px 0;
    color: #33a67d;
    font-size: 18px;
    font-weight: bold;
  }
  .back2_btn {
    margin-left: 10px;
  }
  .upPic {
    display: inline-block;
    margin: 15px 0;
  }
  .select_btn {
    padding: 15px 10px;
  }
  .leftForm,.rightForm {
    display: inline-block;
    width: 100%;
    height: 280px;
  }
  .leftForm {
    border: solid 1px #ddd;
  }
  .error_title {
    font-size: 12px;
    color: red;
    padding-left: 75px;
  }
  .list_bottom {
    width: 100%;
    display: inline-block;
    padding-bottom: 15px;
  }
  .cancle {
    float: right;
    margin-top: 10px;
    margin-right: 15px;
  }
  .putWidth {
    width: 300px;
    padding-left: 10px;
  }
  .set {
    text-align: center;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
