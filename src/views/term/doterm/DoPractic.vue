<template>
  <div class="dopractic">
    <span v-if="isShow">
      <a-row class="doInner">
        <a-col :span="24">
          <a-button class="btn1" @click="addPractic"><a-icon type="plus"/>添加实操题</a-button>
        </a-col>
        <a-col :span="24">
          <span class="knowledge">
            <a-select
              class="selectbtn"
              placeholder="知识点"
            >
              <a-select-option value="1">知识点</a-select-option>
              <a-select-option value="2">2</a-select-option>
              <a-select-option value="3">3</a-select-option>
            </a-select>
          </span>
          <span class="input_k"><a-input style="height: 40px;"></a-input></span>
          <a-button class="searchbtn"><a-icon type="search"/>查询</a-button>
          <a-button class="highbtn" @click="dohighcheck()"><a-icon style="color: #33A67CFF" type="security-scan"/>高级查询</a-button>
          <a-button class="bigdelete" @click="start"><a-icon style="color: orange" type="delete"/>批量删除</a-button>
          <a-button class="resetbtn"><a-icon style="color: #33A67CFF" type="redo"/>重置</a-button>
        </a-col>
      </a-row>
      <a-row class="dotable">
        <a-col :span="24">
          <a-table :columns="PracticeColumns" :dataSource="PracticeData" :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}" bordered>
            <template slot="IdRender" slot-scope="text">
              <span v-if="text === 0"></span>
              <span v-else>{{ text | ellipsis }}</span>
            </template>
            <template slot="StyleRender" slot-scope="text">
              <span v-if="text === null">
                <a-input class="select_in" value="实操题"></a-input>
              </span>
              <span v-else>{{ text | ellipsis }}</span>
            </template>
            <template slot="StationRender" slot-scope="text">
              <span v-if="text === null">
                <a-select class="select_in" >
                  <a-select-option value="1">1</a-select-option>
                  <a-select-option value="2">1</a-select-option>
                  <a-select-option value="3">1</a-select-option>
                  <a-select-option value="4">1</a-select-option>
                </a-select>
              </span>
              <span v-else>{{ text | ellipsis }}</span>
            </template>
            <template slot="ContentRender" slot-scope="text">
              <span v-if="text === null">
                <a-input class="putbtn"></a-input>
              </span>
              <span v-else>{{ text | ellipsis }}</span>
            </template>
            <template slot="KnowledgeRender" slot-scope="text">
              <span v-if="text === null">
                <a-input class="putbtn"></a-input>
              </span>
              <span v-else>{{ text | ellipsis }}</span>
            </template>
            <template slot="LevelRender" slot-scope="text">
              <span v-if="text === null">
                <a-select class="select_in2" >
                  <a-select-option value="1">1</a-select-option>
                  <a-select-option value="2">1</a-select-option>
                  <a-select-option value="3">1</a-select-option>
                  <a-select-option value="4">1</a-select-option>
                </a-select>
              </span>
              <span v-else>{{ text | ellipsis }}</span>
            </template>
            <template slot="AreaRender" slot-scope="text">
              <span v-if="text === null">
                <a-input class="putbtn"></a-input>
              </span>
              <span v-else>{{ text | ellipsis }}</span>
            </template>
            <template slot="IstestRender" slot-scope="text">
              <span v-if="text === null">
                <a-switch/>
              </span>
              <span v-else>{{ text | ellipsis }}</span>
            </template>
            <template slot="OptionsRender" slot-scope="text">
              <span v-for="(item, index) in text" :key="index">
                <span v-if="item === 0"><a>查询</a>|</span>
                <span v-if="item === 1"><a>重置</a></span>
                <span v-if="item === 2"><a>查看</a></span>
                <span v-if="item === 3">|<a>删除</a></span>
                <span v-if="item === 4">|<a>添加至试卷</a></span>
                <span v-if="item === 5">|<a>编辑</a></span>
              </span>
            </template>
            <template slot="VirtualRender" slot-scope="text">
              <span v-if="text === null">
                <a-input class="putbtn"/>
              </span>
              <span v-else>{{ text | ellipsis }}</span>
            </template>
            <template slot="CreaterRender" slot-scope="text">
              <span v-if="text === null">
                <a-input class="putbtn"/>
              </span>
              <span v-else>{{ text | ellipsis }}</span>
            </template>
            <template slot="CreattimeRender" slot-scope="text">
              <span v-if="text === null">
                <a-input class="putbtn"/>
              </span>
              <span v-else>{{ text }}</span>
            </template>
          </a-table>
        </a-col>
      </a-row>
    </span>
    <add-practic v-if="!isShow" @backFun="backFun"></add-practic>
  </div>
</template>
<script>
import AddPractic from '@/views/term/doterm/AddPractic.vue'
const PracticeColumns = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 50,
    key: 'id',
    scopedSlots: { customRender: 'IdRender' },
    align: 'center'
  },
  {
    title: '试题分类',
    dataIndex: 'style',
    width: 70,
    key: 'style',
    scopedSlots: { customRender: 'StyleRender' },
    align: 'center'
  },
  {
    title: '岗位',
    dataIndex: 'station',
    width: 70,
    key: 'station',
    scopedSlots: { customRender: 'StationRender' },
    align: 'center'
  },
  {
    title: '试题内容',
    dataIndex: 'content',
    key: 'content',
    scopedSlots: { customRender: 'ContentRender' },
    align: 'center'
  },
  {
    title: '知识点',
    dataIndex: 'knowledge',
    key: 'knowledge',
    scopedSlots: { customRender: 'KnowledgeRender' },
    align: 'center'
  },
  {
    title: '级别',
    dataIndex: 'level',
    key: 'level',
    scopedSlots: { customRender: 'LevelRender' },
    align: 'center'
  },
  {
    title: '适用范围',
    dataIndex: 'area',
    key: 'area',
    scopedSlots: { customRender: 'AreaRender' },
    align: 'center'
  },
  {
    title: '是否练习题',
    dataIndex: 'istest',
    width: 50,
    key: 'istest',
    scopedSlots: { customRender: 'IstestRender' },
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'options',
    key: 'options',
    scopedSlots: { customRender: 'OptionsRender' },
    align: 'center'
  },
  {
    title: '虚拟公司',
    dataIndex: 'virtualcor',
    key: 'virtualcor',
    scopedSlots: { customRender: 'VirtualRender' },
    align: 'center'
  },
  {
    title: '创建人',
    dataIndex: 'creater',
    key: 'creater',
    scopedSlots: { customRender: 'CreaterRender' },
    align: 'center'
  },
  {
    title: '创建时间',
    dataIndex: 'creattime',
    key: 'creattime',
    scopedSlots: { customRender: 'CreattimeRender' },
    align: 'center'
  }
]
const PracticeData = [
  {
    id: 0,
    style: null,
    station: null,
    content: null,
    knowledge: null,
    level: null,
    area: null,
    istest: null,
    options: [0, 1],
    virtualcor: null,
    creater: null,
    creattime: null
  },
  {
    id: 1,
    style: '实操题',
    station: '财务经理',
    content: '东莞市嘉诚电脑',
    knowledge: '实际利率',
    level: '员工',
    area: '适用范围',
    istest: '练习题',
    options: [2, 3, 4, 5],
    virtualcor: '东莞白酒',
    creater: 'admin',
    creattime: '2019-11-28'
  }
]
export default {
  name: 'DoPractic',
  components: {
    AddPractic
  },
  data () {
    return {
      PracticeColumns,
      PracticeData,
      isShow: true,
      Visibal: false,
      selectedRowKeys: []
    }
  },
  computed: {
    hasSelected () {
      return this.selectedRowKeys.length > 0
    }
  },
  filters: {
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 8) {
        return value.slice(0, 8) + '...'
      }
      return value
    }
  },
  methods: {
    backFun () {
      this.isShow = true
    },
    dohighcheck () {
      this.$emit('closeMask', true)
    },
    start () {
      setTimeout(() => {
        this.selectedRowKeys = []
      }, 1000)
    },
    onSelectChange (selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    },
    addPractic () {
      this.isShow = false
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .ant-select-selection--single {
  height: 40px;
}
/deep/ .select_in .ant-select-selection--single {
  height: 32px;
}
/deep/ .select_in2 .ant-select-selection--single {
  height: 32px;
}
/deep/ .ant-select-selection__placeholder {
  top: 60%;
}
/deep/ .ant-spin-container {
  background-color: #fff;
}
/deep/ .ant-table-bordered .ant-table-body > table {
  background-color: #fff;
}
.knowledge {
  display: inline-block;
  height: 40px;
  float: left;
  padding-top: 20px;
}
.selectbtn {
  width: 140px;
  height: 40px;
}
.putbtn {
  width: 50px!important;
}
.select_in {
  display: inline-block;
  height: 32px;
  width: 65px;
  font-size: 12px;

  input {
    height: 32px;
  }
}
.select_in2 {
  display: inline-block;
  height: 32px;
  width: 50px;
  font-size: 12px;

  input {
    height: 32px;
  }
}
.searchbtn,.highbtn,.resetbtn,.bigdelete {
  margin-left: 16px;
  margin-top: 17px;
  font-size: 17px;
}
.searchbtn {
  background-color: #33A67CFF;
  color: #fff;
  height: 45px;
  width: 90px;
}
.bigdelete {
  height: 40px;
  width: 135px;
  color: #333;
  float: right;
}
.resetbtn {
  height: 40px;
  width: 90px;
  color: #333;
  float: right;
}
.highbtn {
  width: 135px;
  height: 45px;
  color: #333;
}
.dotable {
  padding-top: 30px;
  padding-left: 15px;
}
.input_k {
  display: inline-block;
  width: 327px;
  height: 40px;
  margin-left: 16px;
  float: left;
  padding-top: 20px;
}
.dopractic {
  width: 60%;
  min-width: 900px;
  height: calc(100% - 120px);
  margin-right: calc(16% + 209px);
  background-color: transparent;
  position: absolute;
  left: calc(16% + 209px);
  overflow-y: auto;

  .doInner {
    padding-top: 50px;
    padding-left: 15px;

    .btn1 {
      width: 150px;
      height: 45px;
      background-color: #4C9BF0FF;
      color: #fff;
      border-radius: 6px;
      font-size: 16px;
    }
  }
}
</style>
