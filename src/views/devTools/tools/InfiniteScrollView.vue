<template>
  <div class="infinite-scroll-view">
    <a-spin :spinning="busy">
      <div
        class="loadmore-box"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
        infinite-scroll-immediate-check="false"
      >
        <a-list
          v-if="infiList.length > 0"
          item-layout="horizontal"
          :data-source="infiList"
          size="small"
        >
          <template #renderItem="item">
            <a-list-item>{{ item.title }}</a-list-item>
          </template>
          <a-list-item>...</a-list-item>
        </a-list>
      </div>
    </a-spin>
    <a-button
      @click="resetLoadMore"
      icon="undo"
    >
      {{ $t('common.reset') }}
    </a-button>
  </div>
</template>

<script>
import Mock from 'mockjs2'

export default {
  name: 'InfiniteScrollView',
  components: {},
  data () {
    return {
      infiList: [],
      busy: false,
    }
  },
  mounted () {
    this.loadMore()
  },
  watch: {},
  methods: {
    loadMore () {
      this.busy = true
      setTimeout(() => {
        const TEMP = {
          'list|10': [
            {
              'id': '@id',
              'title': '@ctitle(3, 10)'
            }
          ]
        }
        const mockList = Mock.mock(TEMP)
        this.infiList = [...this.infiList, ...mockList.list]
        this.busy = false
      }, 1000)
    },
    resetLoadMore () {
      this.infiList = []
      this.loadMore()
    },
  }
}
</script>

<style lang="less" scoped>
.infinite-scroll-view {
  width: 300px;
  .loadmore-box {
    padding: 5px 20px;
    width: 300px;
    height: 234px;
    overflow-y: auto;
    margin-bottom: 10px;
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    .option {
      box-sizing: border-box;
    }
    .tips-text {
      height: 20px;
      line-height: 20px;
      &.no-more {
        line-height: 21px;
        color: #9cc2e5;
      }
    }
  }
}
</style>
