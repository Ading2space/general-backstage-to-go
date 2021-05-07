IconSelector
====

Composed by [@Saraka](https://github.com/saraka-tsukai) （源库已404）
modified by Dean

### 使用方式

```vue
<template>
  <div>
    <icon-selector @change="handleIconChange"/>
  </div>
</template>

<script>
import IconSelector from '@/components/IconSelector'

export default {
  name: 'YourView',
  components: {
    IconSelector
  },
  methods: {
    handleIconChange (icon) {
      console.log('change Icon', icon)
    }
  }
}
</script>
```



### 事件


| 名称   | 说明                       | 类型   | 默认值 |
| ------ | -------------------------- | ------ | ------ |
| change | 当改变了 `icon` 选中项触发 | String | -      |
