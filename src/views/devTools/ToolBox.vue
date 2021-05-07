<template>
  <page-container
    :tab-list="tabList"
    :tab-active-key="tabActiveKey"
    :tab-change="
      (key) => {
        this.tabActiveKey = key
        console.log('PageHeader::tabChange', key)
      }
    "
    @back="
      () => {
        this.$router.go(-1)
      }"
  >
    <template #title>
      <span>{{ $t('menu.dev.toolBox') }}</span>
    </template>
    <template #tags>
      <a-tag>插件预览</a-tag>
      <a-tag color="cyan">本地可见</a-tag>
    </template>
    <template #content>
      <span>开发工具箱，仅在本地服务显示，用于展示公共组件的效果和示例</span>
    </template>
    <!-- 自定义 扩展信息 -->
    <template #extra>
      <div>
        <a-button @click="showIconModal">{{ $t('menu.dev.iconSelector') }}</a-button>
      </div>
    </template>
    <div class="tool-box">
      <a-card
        class="demo-wrapper"
        v-if="tabActiveKey === 'pageLoading'"
      >
        <h3>Page-Loading</h3>
        <p>3s后自动关闭</p>
        <a-button
          @click="showLoading"
          class="tool-button"
        >
          {{ $t('pages.dashboard.welcome.showLoading') }}
        </a-button>
        <!-- <a-button @click="hideLoading">
        {{ $t('pages.dashboard.welcome.hideLoading') }}
      </a-button> -->
      </a-card>
      <a-card
        class="demo-wrapper"
        v-if="tabActiveKey === 'dialog'"
      >
        <h3>Dialog</h3>
        <a-button @click="showDialog"> this.$dialog </a-button>
      </a-card>
      <a-card
        class="demo-wrapper"
        v-if="tabActiveKey === 'infScroll'"
      >
        <h3>Infinite-Scroll</h3>
        <infinite-scroll-view />
      </a-card>
      <a-card
        class="demo-wrapper"
        v-if="tabActiveKey === 'infSelect'"
      >
        <h3>Infinite-Select</h3>
        <infinite-select
          width="200px"
          :data="loadData"
        />
      </a-card>
    </div>
  </page-container>
</template>

<script>
import TaskForm from './modules/TaskForm'
import InfiniteSelect from '@/components/InfiniteSelect/InfiniteSelect'
import { getContactGroups } from '@/api/index'
import IconSelectorModal from './modules/iconSelectorModal'
import InfiniteScrollView from './tools/InfiniteScrollView'

export default {
  name: 'ToolBox',
  data () {
    return {
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return getContactGroups(parameter)
          .then(res => {
            return res.data
          })
      },
      console: window.console,
      tabList: [
        { tab: 'Page-Loading', key: 'pageLoading' },
        { tab: 'Dialog', key: 'dialog' },
        { tab: 'Infinite-Scroll', key: 'infScroll' },
        { tab: 'Infinite-Select', key: 'infSelect' }
      ],
      tabActiveKey: 'infSelect'
    }
  },
  methods: {
    // page-loading
    showLoading () {
      this.$loading.show({ tip: '数据加载中...' })

      setTimeout(() => {
        this.$loading.hide()
      }, 2000)
    },
    hideLoading () {
      this.$loading.hide()
    },
    // Dialog组件
    showDialog () {
      this.$dialog(TaskForm,
        // component props
        {
          record: {},
          on: {
            ok () {
              console.log('ok 回调')
            },
            cancel () {
              console.log('cancel 回调')
            },
            close () {
              console.log('modal close 回调')
            }
          }
        },
        // modal props
        {
          title: '新增',
          width: 700,
          centered: true,
          maskClosable: false
        })
    },
    handleInfSearch (item) {
      console.log(item)
    },
    handleTabChange (key) {
      this.tabActiveKey = key
      console.log('PageHeader::tabChange', key)
    },
    showIconModal () {
      const h = this.$createElement
      this.$info({
        width: '1000px',
        centered: true,
        title: this.$t('menu.dev.iconSelector'),
        content: h('div', {}, [h(IconSelectorModal)]),
        okText: '关闭',
        onOk () {
            // do nothing
         },
      })
    }
  },
  components: {
    InfiniteSelect,
    InfiniteScrollView,
  }
}
</script>

<style lang="less" scoped>
.tool-box {
  .tool-button {
    margin-right: 10px;
  }
  .demo-wrapper {
    margin-bottom: 15px;
  }
  .loadmore-box {
    width: 300px;
    height: 130px;
    overflow-y: auto;
    margin-bottom: 10px;
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);

    .tips-text {
      height: 20px;
      line-height: 20px;
      &.no-more {
        color: #9cc2e5;
        margin: 5px 0;
      }
    }
  }
}
</style>
