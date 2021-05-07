<template>
  <a-dropdown placement="bottomRight">
    <template v-slot:overlay>
      <a-menu
        :class="['menu', 'ant-pro-select-lang']"
        :selected-keys="[currentLang]"
        @click="handleChangeLang"
      >
        <a-menu-item v-for="locale in locales" :key="locale">
          <span role="img" style="margin-right: 4px;" :aria-label="locale | languageLabels">
            {{ locale | languageIcons }}
          </span>
          {{ locale | languageLabels }}
        </a-menu-item>
      </a-menu>
    </template>
    <span class="drop-down">
      <a-icon type="global" :title="$t('navBar.lang')" />
    </span>
  </a-dropdown>
</template>

<script>
import i18nMixin from '@/store/i18n-mixin'

const locales = ['zh-CN', 'en-US']
const languageLabels = {
  'zh-CN': '简体中文',
  'en-US': 'English',
}
const languageIcons = {
  'zh-CN': '🇨🇳',
  'en-US': '🇺🇸',
}

export default {
  name: 'SelectLang',
  mixins: [i18nMixin],
  data () {
    // Not listening get/set
    this.locales = locales
    return {
    }
  },
  methods: {
    handleChangeLang ({ key }) {
      this.setLang(key)
    },
  },
  filters: {
    languageLabels (locale) {
      return languageLabels[locale]
    },
    languageIcons (locale) {
      return languageIcons[locale]
    },
  },
}
</script>

<style lang="less" scoped>
@import "~ant-design-vue/es/style/themes/default";

@header-menu-prefix-cls: ~'@{ant-prefix}-pro-header-menu';

.drop-down {
  line-height: @layout-header-height;
  vertical-align: top;
  cursor: pointer;
  > i {
    font-size: 16px !important;
    transform: none !important;
    svg {
      position: relative;
      top: -1px;
    }
  }
}

.ant-pro-select-lang {
  .ant-dropdown-menu-item {
    min-width: 160px;
  }
}

</style>
