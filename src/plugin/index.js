import { OPFormDesign } from '@plug/OPFormDesign'
import formViewPlugin from '@plug/OPFormView'
import OPFormView from '@/plugin/OPFormView/OPFormView'

export default {
  /**
   * 安装插件
   * @param vue
   * @param options
   */
  install (vue, { formView, ...formDesignOptions }) {
    // 先安装FormView
    formViewPlugin.install(vue, formView)

    // 开始安装表单设计组件
    vue.component(OPFormDesign.name, OPFormDesign)
  }
}
