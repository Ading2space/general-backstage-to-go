<template>
  <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
    <icon-selector v-model="currentSelectedIcon" @change="handleIconChange" />
    <a-divider />
    <a-tag v-if="iconName">{{ iconName }}</a-tag>
  </a-card>
</template>

<script>
import IconSelector from '@/components/IconSelector'

export default {
  name: 'IconSelectorModal',
  components: {
    IconSelector
  },
  data () {
    return {
      currentSelectedIcon: 'directional',
      iconName: ''
    }
  },
  methods: {
    handleIconChange (icon) {
      this.iconName = `<a-icon type="${icon}" />`
    },
    changeIcon (type) {
      this.currentSelectedIcon = type
    }
  }
}
</script>
