import { FuncBasic } from '@plug/OPFormFunctions'

export default class SettingBasic {
  /**
   * 配置类
   * @param label
   * @param category
   * @param funcCompObj
   * @param vueComp
   * @param parent
   * @param otherOptions
   */
  constructor ({
                 label,
                 category,
                 funcCompObj,
                 vueComp,
                 parent,
                 ...otherOptions
               }) {
    // 配置名称
    this.label = label
    // 配置分类
    this.category = category
    // 主要填写组件对象
    this.funcCompObj = funcCompObj
    // vue 组件
    this.vueComp = vueComp
    // 父组件
    this.parent = parent
    // 剩余选项
    this.otherOptions = otherOptions

    // 验证是否为组件配置项对象
    if (!(funcCompObj instanceof  FuncBasic)) {
      throw new Error('funcCompObj选项请传入FuncBasic对象')
    }

    this.key = funcCompObj.key
    this.defaultValue = funcCompObj.defaultValue

    // 设置组件的vue名称
    vueComp.name = `${this.key}Setting`

    // 将当前的设置组件赋给填写组件
    funcCompObj.setting = this
  }

  /**
   * 基本组件属性选项
   */
  static basicProps = {
    // 配置的值
    value: { default: null }
  }

  /**
   * 设置组件的数据
   * @returns {function(): {}}
   */
  data () {
    const self = this
    return function () {
      return {
        currValue: this.value || self.defaultValue
      }
    }
  }

  /**
   * 继承该功能组件
   * @param args
   * @returns {FuncBasic}
   */
  extends (args = {}) {
    args.parent = this
    return new SettingBasic(args)
  }

  /**
   * 生成vue对象
   */
  component () {
    const self = this
    const basic = {
      // 父级信息
      extends: self.parent && self.parent.component(),
      // 默认数据
      data: self.data(),
      // 可注入参数
      props: SettingBasic.basicProps,
      // 基本方法
      methods: { },
      // 属性监听
      watch: { }
    }

    // 混入基础api
    if (!self.vueComp.mixins) {
      self.vueComp.mixins = []
    }
    self.vueComp.mixins.unshift(basic)
    self.vueComp.ops = self

    return self.vueComp
  }
}
