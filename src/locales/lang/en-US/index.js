import exceptionLang from '@/views/exception/locales/enUS'
import APP_SETTINGS from './appSettings'
import COMMON from './common'
import MENU from './menu'
import PAGES from './pages'

export default {
  ...COMMON,
  ...MENU,
  ...APP_SETTINGS,
  // page locales
  ...exceptionLang,
  ...PAGES
}
