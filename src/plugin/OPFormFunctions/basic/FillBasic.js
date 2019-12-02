import vue from 'vue'

/**
 * 基础功能api
 */
export default class FillBasic {
  /**
   * 功能实例化
   * @param key
   * @param defaultValue
   * @param vueComponent
   * @param parent
   * @param otherOptions
   */
  constructor ({ key, defaultValue, vueComponent = {}, parent, ...otherOptions }) {
    // 功能名称
    this.key = key
    // 功能默认值
    this.defaultValue = defaultValue
    // vue 组件
    this.vueComponent = vueComponent
    // 剩余配置
    this.otherOptions = otherOptions
    // 父级功能组件
    this.parent = parent

    // 编译模板为render, 统一后期api
    if (!vueComponent.render && vueComponent.template) {
      Object.assign(vueComponent, vue.compile(vueComponent.template))
    }

  }

  /**
   * 初始化键值
   * @returns {function(): {}}
   */
  data () {
    const self = this
    return function () {
      return { [self.key]: self.defaultValue }
    }
  }

  /**
   * 继承该功能组件
   * @param args
   * @returns {FillBasic}
   */
  extends (args = {}) {
    args.parent = this
    return new FillBasic(args)
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
      // 基本方法
      methods: { },
      // 属性监听
      watch: { }
    }

    // 混入基础api
    if (!self.vueComponent.mixins) {
      self.vueComponent.mixins = []
    }
    self.vueComponent.mixins.unshift(basic)
    self.vueComponent.opf = self

    return self.vueComponent
  }

}
