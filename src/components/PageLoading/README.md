PageLoading
====
>全局loading方法

### 使用方式

```vue
<template>
  <div>
    <a-button @click="showLoading" style="margin-right: 12px;">
      {{ $t('pages.dashboard.welcome.showLoading') }}
    </a-button>
    <a-button @click="hideLoading">
      {{ $t('pages.dashboard.welcome.hideLoading') }}
    </a-button>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  methods: {
    showLoading () {
      this.$loading.show({ tip: '3 秒后自动隐藏' })
      setTimeout(() => {
        this.$loading.hide()
      }, 3000)
    },
    hideLoading () {
      this.$loading.hide()
    },
  },
}
</script>
```



### 方法


|名称|说明|参数|类型|默认值|
| - | - | - | - |-|
| $loading.show( ) | 开启loading，参数为提示文字 | {tip: text} |string| - |
| $loading.hide( ) | 关闭loading | - | - | - |