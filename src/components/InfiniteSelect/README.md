<!-- /*
 * @Author: DeanLee 
 * @Date: 2020-12-09 17:15:57
 * @Last Modified by: Deanlee
 * @Last Modified time: 2020-12-09 17:16:17
 */ -->

InfiniteSelect 无限加载选择器
====


封装说明
----

>  基础的使用方式与 API 与 [官方版(Select)](https://www.antdv.com/components/select-cn/) 基本一致，在其基础上，封装了加载数据的方法，增加了滚动加载功能和宽度参数。
>
> 你无需在你使用本组件的页面进行分页逻辑处理，仅需向 InfiniteSelect 组件传递绑定 `:data="Promise"` 对象即可

该 `InfiniteSelect`组件 由 DeanLee 封装



### 使用方式

```vue
<template>
  <div>
    <infinite-select :data="loadData" :width="150"/>
  </div>
</template>

<script>
import InfiniteSelect from '@/components'

export default {
  name: 'YourView',
  components: {
    InfiniteSelect
  },
  data () {
    return {
      // 加载数据方法 必须返回 Promise 对象
      loadData: parameter => {
        return yourApi(parameter)
          .then(res => {
            return res.data
          })
      },
    }
  }
}
</script>
```



### 参数


| 名称   | 说明                       | 类型   | 默认值 |
| ------ | ------------------------- | ------ | ------ |
| data | 获取列表数据的异步请求方法 | 方法 | - |
| init | 组件初始化时是否获取列表数据| Boolean |```true```|
| page-size | 每次滚动加载的选项数 | Number |```10```|
| width | 宽度值，ex. ```'100px'``` ```150``` ```100%```| [Number, String] |```'100%'```|
