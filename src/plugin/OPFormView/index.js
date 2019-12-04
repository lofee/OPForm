import OPFormView from './OPFormView.vue'
import { FormBasic, OPText } from '@plug/OPFormTemplate'
import '@plug/style/global.css'

export default {
  /**
   * 安装插件
   * @param vue
   * @param options
   */
  install (vue, options) {
    FormBasic.baseOption = options
    vue.component(OPFormView.name, OPFormView)
    const text = OPText.component()
    vue.component(text.name, text)
  }
}
