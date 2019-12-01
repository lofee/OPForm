/**
 * 基础功能api
 */
export default class FillBasic {
  /**
   * 功能实例化
   * @param key
   * @param defaultValue
   */
  constructor ({ key, defaultValue }) {
    // 功能名称
    this.key = key
    // 功能默认值
    this.defaultValue = defaultValue
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
   * 生成vue对象
   * @param vueOptions
   */
  component (vueOptions = {}) {
    const basic = {
      // 默认数据
      data: this.data(),
      // 基本方法
      methods: { },
      // 属性监听
      watch: { }
    }

    // 混入基础api
    if (!vueOptions.mixins) {
      vueOptions.mixins = []
    }
    vueOptions.mixins.unshift(basic)
    vueOptions.opf = this

    return vueOptions
  }

}
