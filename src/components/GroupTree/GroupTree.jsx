import { Menu, Icon, Input, Row, Col } from 'ant-design-vue'

const { Item, ItemGroup, SubMenu } = Menu
const { Search } = Input

export default {
  name: 'GroupTree',
  props: {
    preSource: {
      type: Array,
      required: true
    },
    dataSource: {
      type: Array,
      required: true
    },
    openKeys: {
      type: Array,
      default: () => []
    }
  },
  created () {
    this.localOpenKeys = this.openKeys.slice(0)
  },
  data () {
    return {
      localOpenKeys: []
    }
  },
  methods: {
    handlePlus (item) {
      this.$emit('add', item)
    },
    handleTitleClick (...args) {
      this.$emit('titleClick', { args })
    },

    renderSearch () {
      return (
        <Search
          placeholder="input search text"
        />
      )
    },
    renderIcon (icon) {
      return icon && (<Icon type={icon} />) || null
    },
    renderToolbar (childrenItems) {
      const title = (
        <div slot="title">
          <Row type="flex">
            <Col flex="auto">
              {this.renderSearch()}
            </Col>
            <Col>
              <a class="btn"
                style={{ width: '20px', verticalAlign: 'middle', padding: '0 5px' }}
                {...{ on: { click: () => this.handlePlus() } }}>
                <a-icon
                  type="plus"
                />
              </a>
            </Col>
          </Row>
        </div>
      )
      return (
        <ItemGroup>
          {title}
          {childrenItems}
        </ItemGroup>
      )
    },
    renderMenuItem (item) {
      return (
        <Item key={item.id}>
          { item.title}
        </Item>
      )
    },
    renderItem (item) {
      return item.children ? this.renderSubItem(item, item.key) : this.renderMenuItem(item, item.id)
    },
    renderItemGroup (item) {
      const childrenItems = item.children.map(o => {
        return this.renderItem(o, o.key)
      })

      return (
        <ItemGroup key={item.id}>
          <template slot="title">
            <span>{item.title}</span>
            <a-dropdown>
              <a class="btn"><a-icon type="ellipsis" /></a>
              <a-menu slot="overlay">
                <a-menu-item key="1">新增</a-menu-item>
                <a-menu-item key="2">合并</a-menu-item>
                <a-menu-item key="3">移除</a-menu-item>
              </a-menu>
            </a-dropdown>
          </template>
          { childrenItems}
        </ItemGroup>
      )
    },
    renderSubItem (item, key) {
      const childrenItems = item.children && item.children.map(o => {
        return this.renderItem(o, o.key)
      })

      const title = (
        <span slot="title">
          { this.renderIcon(item.icon)}
          <span>{item.title}</span>
        </span>
      )

      if (item.group) {
        return this.renderItemGroup(item)
      }
      // titleClick={this.handleTitleClick(item)}
      return (
        <SubMenu key={key}>
          { title}
          { childrenItems}
        </SubMenu>
      )
    }
  },
  render () {
    const { preSource, dataSource } = this.$props
    const preList = preSource.map(item => {
      return this.renderMenuItem(item)
    })
    // this.localOpenKeys = openKeys.slice(0)
    const list = dataSource.map(item => {
      return this.renderItem(item)
    })
    const asyncList = this.renderToolbar(list)
    return (
      <div class="tree-wrapper">
        <Menu mode="inline" {...{ on: { click: item => this.$emit('click', item), 'update:openKeys': val => { this.localOpenKeys = val } } }} openKeys={this.localOpenKeys}>
          {preList}
          {asyncList}
        </Menu>
      </div>
    )
  }
}
