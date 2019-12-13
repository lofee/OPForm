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
    // 注入的表单组件
    OPFormView.formComponents = []
    const text = OPText.component()
    vue.component(text.name, text)
    OPFormView.formComponents.push(OPText)
  }
}
