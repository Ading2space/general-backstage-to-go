<template>
  <page-container
    @back="
      () => {
        this.$router.go(-1)
      }"
  >
    <a-row type="flex" :gutter="16">
      <a-col>
        <group-tree
          :pre-source="preSource"
          :data-source="dataSource"
          :open-keys.sync="openKeys"
          search
          @click="handleClick"
          @add="handleAdd"
          @titleClick="handleTitleClick"
        />
      </a-col>
      <a-col flex="1">
        <a-card :bordered="false">
          <a-row
            type="flex"
            justify="space-between"
            class="tool-box"
          >
            <a-col>
              <a-row
                :gutter="10"
                type="flex"
                justify="start"
              >
                <a-col>
                  <span>共</span>
                  &nbsp;
                  <a href="#">{{ totalCount }}</a>
                  &nbsp;
                  <span>联系人</span>
                </a-col>
                <a-col>
                  <a-button
                    type="primary"
                    size="small"
                  >
                    标签
                  </a-button>
                </a-col>
                <a-col>
                  <a-dropdown>
                    <a class="ant-dropdown-link">
                      其他操作
                      <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay">
                      <a-menu-item>
                        <a ref="#">移至分组</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a ref="#">导出联系人</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a ref="#">删除联系人</a>
                      </a-menu-item>
                    </a-menu>
                  </a-dropdown>
                </a-col>
              </a-row>
            </a-col>
            <a-col>
              <a-input-search
                v-model="keywords"
                placeholder="input search text"
                style="width: 200px"
                @search="handleSearch"
              />
            </a-col>
          </a-row>
          <u-table
            bordered
            ref="table"
            size="default"
            :columns="columns"
            :data="loadData"
            :alert="false"
            page-url
            :row-key="(record) => record.id"
            :row-selection="{
              selectedRowKeys: selectedRowKeys,
              onChange: onSelectChange
            }"
          >
            <span
              slot="action"
              slot-scope="text, record"
            >
              <template>
                <a @click="handleEdit(record)">编辑</a>
                <a-divider type="vertical" />
              </template>
              <a-dropdown>
                <a class="ant-dropdown-link">
                  更多
                  <a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a @click="handleDetail(record)">详情</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a @click="handleDel(record)">删除</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </span>
          </u-table>
        </a-card>
      </a-col>
    </a-row>
  </page-container>
</template>

<script>
import { UTable, GroupTree } from '@/components'
import { getContactGroups, getContacts } from '@/api/index'

export default {
  name: 'ContactList',
  components: {
    UTable,
    GroupTree
  },
  data () {
    return {
      preSource: [
        {
          id: -1,
          title: '默认分组',
          fieldName: 'defaultGroup',
          type: '',
          count: '3,333,455'
        },
        {
          id: -2,
          title: '全部分组',
          fieldName: 'AllGroup',
          count: '44,566,788',
          type: ''
        },
        {
          id: -3,
          title: '我创建的',
          fieldName: 'createGroup',
          count: '756,654,124',
        }
      ],
      // 分组列表
      dataSource: [],
      openKeys: [],
      // 查询参数
      queryParam: {},
      // 表头
      columns: [
        {
          title: 'User_ID',
          dataIndex: 'userId',
          ellipsis: true,
        },
        {
          title: '姓名',
          dataIndex: 'name',
          ellipsis: true
        },
        {
          title: '邮箱',
          dataIndex: 'email',
          ellipsis: true
        },
        {
          title: '手机',
          dataIndex: 'mobile',
          ellipsis: true
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          sorter: true,
          ellipsis: true
        },
        {
          title: '更新时间',
          dataIndex: 'updateTime',
          sorter: true,
          ellipsis: true
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: '150px',
          scopedSlots: { customRender: 'action' }
        }
      ],
      keywords: null,
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return getContacts(Object.assign(parameter, this.queryParam))
          .then(res => {
            this.totalCount = res.data.totalCount
            return res.data
          })
      },
      totalCount: null,
      orgTree: [],
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  mounted () {
    this.getGroupList()
  },
  methods: {
    getGroupList () {
      getContactGroups().then(res => {
        this.dataSource = res.data.resultList
      })
    },
    handleClick (e) {
      console.log('handleClick', e)
      this.queryParam = {
        id: e.id
      }
      this.$refs.table.refresh(true)
    },
    handleSearch (e) {
      this.queryParam.keywords = e
      this.$refs.table.refresh(true)
    },
    handleAdd () {
      console.log('add button, item')
      this.$message.info('提示：你点了添加按钮')
      // this.$refs.modal.add(item.key)
    },
    handleTitleClick (item) {
      console.log('handleTitleClick', item)
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    handleEdit (item) {
      this.$message.info(`编辑id为${item.id}的项目`)
    },
    handleDetail (item) {
      this.$message.info(`查看id为${item.id}的详情`)
    },
    handleDel (item) {
      this.$message.info(`删除id为${item.id}的项目`)
    }
  }
}
</script>

<style lang="less" scope>
.tool-box {
  margin-bottom: 24px;
  line-height: 32px;
}
</style>
