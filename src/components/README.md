公共组件文档
====
> 部分组件可在本地服务的开发工具页面预览和试用，标题可跳转至详细文档

# 1.独立模块

|组件名|功能|使用说明|参数|备注|来源|
|-|-|-|-|-|-|
|[IconSelector](./IconSelector/README.md)|图标选择器|工具箱页面点击对应图标|-|预览Antd自带图标,点击时可复制对应图标组件|modified from [IconSelector](https://pro.antdv.com/components/icon-selector) of ```ant-design-vue-pro```|
___
<br>

# 2.全局方法
|组件名|功能|使用说明|参数|来源|
|-|-|-|-|-|-|
|[PageLoading](./PageLoading/README.md)|全局覆层loading| this.\$loading.show(param)<br>this.\$hide()|param:```String``` loading提示语|```antdv-pro-template```|
|Dialog|全局dialog方法|this.$dialog(component, componentProps, modalProps)|component:自定义表单组件 [参考](../views/devTools/modules/TaskForm.vue)<br>componentProps: 组件参数 <br>modalProps: 弹窗参数|```antdv-pro```|
|v-infinite-scroll|全局directive滚动加载|目标DOM元素添加v-infinite-scroll指令|[README](https://github.com/ElemeFE/vue-infinite-scroll/blob/master/README.MD)|[ElemeFE/vue-infinite-scroll](https://github.com/ElemeFE/vue-infinite-scroll)|
|UTable|增强的表单组件|[说明](./Table/README.md)|-|modified from ```Table``` of ```Antdv```|
|Ellipsis|文本过长自动处理省略号，支持按照文本长度和最大行数两种方式截取|[说明](./Ellipsis/index.md)|-|```antdv-pro```|
___
<br>

componentProps参数说明

```
componentProps: {
  ex.props: {}   // 传递给表单子组件的参数对象,在子组件的props中接收，key可自定义
  on: {          // 事件
    ok () {},    // 确认的回调方法
    cancel() {}, // 取消的回调方法
    close() {},  // 关闭的调方法
  }
}
```

modalProps参数说明

```
modalProps: {
  title: 'ex',          // String类型，标题
  width: 700,           // Number类型，宽度
  centered: true,       // Boolean类型，居中显示
  maskClosable: false,  // Boolean类型，点击蒙层是否关闭
}
```
