import { Select, Icon } from 'ant-design-vue'
import throttle from 'lodash.throttle'

const { Option } = Select
const EXTRA_STYLE = { verticalAlign: 'middle', userSelect: 'unset', cursor: 'default' }
export default {
  name: 'InfiniteSelect',
  props: Object.assign({}, Select.props, {
    // 获取列表数据的方法，必须为Promise
    data: {
      type: Function,
      required: true
    },
    // 初始化即获取首页选项
    init: {
      type: Boolean,
      default: true
    },
    // 页容量
    pageSize: {
      type: Number,
      default: 10
    },
    // 宽度 ex. '100px', 100, '100%'
    width: {
      type: [Number, String],
      default: '100%'
    },
    // 预加载高度：距离滚动到底的高度
    distance: {
      type: Number,
      default: 64
    }
  }),
  data () {
    return {
      // 选项列表
      infiniteList: [],
      // 当前页码
      pageNo: 1,
      // 检索关键字
      keywords: '',
      // 加载中
      localLoading: false
    }
  },
  mounted () {
    if (this.init) this.loadData(true)
  },
  methods: {
    loadData (init) {
      this.localLoading = true
      const parameter = {
        pageNo: this.pageNo,
        keywords: this.keywords,
        pageSize: this.pageSize
      }
      const result = this.data(parameter)
      if ((typeof result === 'object' || typeof result === 'function') && typeof result.then === 'function') {
        result
          .then(r => {
            if (r.resultList.length > 0) {
              if (init) {
                this.infiniteList = r.resultList
              } else {
                this.infiniteList = [...this.infiniteList, ...r.resultList]
              }
            } else {
              this.isAll = true
            }
            this.localLoading = false
          })
          .catch(() => {
            this.localLoading = false
          })
      }
    },
    renderOptions (item) {
      return (
        <Option label={item.title} title={item.title} value={item.id} disabled={item.disabled}>
          {item.title}
        </Option>
      )
    },
    renderExtraOption () {
      return (
        <Option label="extraOpetion" value={''} disabled={true} style={EXTRA_STYLE}>
          {this.localLoading ? <Icon type="loading" /> : <Icon type="ellipsis" />}
        </Option>
      )
    },
    handleScroll: throttle(function ({ target }) {
      if (
        this.isAll ||
        this.localLoading ||
        !target ||
        !target.scrollHeight ||
        !target.clientHeight ||
        target.scrollHeight - target.scrollTop - this.distance > target.clientHeight
      ) return
      this.pageNo += 1
      this.loadData()
    }, 600),
    handleSearch: throttle(function (item) {
      if (this.localLoading) return
      this.pageNo = 1
      this.keywords = item
      this.isAll = false
      this.loadData(true)
    }, 600)
  },
  render () {
    const options = this.infiniteList.map(item => {
      return this.renderOptions(item)
    })
    const extraOption = this.renderExtraOption()

    return (
      <Select
        {...this.$props}
        showSearch={true}
        filterOption={false}
        style={{ width: typeof this.width === 'number' ? `${this.width}px` : this.width }}
        {...{
          on: {
            search: item => this.handleSearch(item),
            change: item => this.handleScroll(item),
            popupScroll: item => this.handleScroll(item)
          }
        }}>
        {options}
        {this.isAll ? null : extraOption}
      </Select >
    )
  }
}
