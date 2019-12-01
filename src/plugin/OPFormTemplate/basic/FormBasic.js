import vue from 'vue'
import {
  INPUT_TYPE_NAME,
  CONTAINER_TYPE_NAME,
  VIEW_TYPE_NAME
} from '../../util/GlobalConstant'

/**
 * 基础表单组件
 */
export default class FormBasic {
  /**
   * 基本组件属性选项
   */
  static basicProps = {
    // 组件配置
    componentConfig: {
      type: Object,
      default () { return {} }
    },
    // 表单状态信息
    formStatus: {
      type: Object,
      default () { return {} }
    }
  }

  /**
   * 基本组件方法
   * @type {{}}
   */
  static basicMethods = {
    // 获取所有组件功能对应的模板管理器
    getFunctionRenders () {
      return this.op.functions.reduce((map, func) => {
        map[func.opf.key] = func.render.apply(this, arguments)
        return map
      }, {})
    }
  }

  /**
   * 创建默认数据
   * @returns {function(): {op: *}}
   */
  data () {
    const self = this
    return function () {
      return { op: self }
    }
  }

  /**
   * 基本实例化方法
   * @param componentType
   * @param dataType
   * @param functions
   */
  constructor ({ componentType, dataType, functions = [] }) {
    // 主要类型
    this.componentType = componentType
    // 子类型
    this.dataType = dataType

    // 编译模板为render, 统一后期api
    functions.forEach( f => {
      if (!f.render && f.template) {
        f.render = vue.compile(f.template)
      }
    } )
    // 控件相关功能
    this.functions = functions

    // 是否为录入组件
    this._isInput = INPUT_TYPE_NAME === componentType
    // 是否为容器组件
    this._isContainer = CONTAINER_TYPE_NAME === componentType,
    // 是否为视图组件
    this._isView = VIEW_TYPE_NAME === componentType

  }

  /**
   * 向当前vue对象内注入表单传入的组件配置
   * @param currVue
   */
  injectComponentConfig (currVue) {
    console.log(currVue)
    Object.entries(currVue.componentConfig).forEach(([k, v]) => {
      currVue[k] = v
    })
  }

  /**
   * 生成vue对象
   * @param vueOptions
   */
  component (vueOptions = {}) {
    const self = this
    const basic = {
      // 默认数据
      data: self.data(),
      // 可注入参数
      props: FormBasic.basicProps,
      // 基本方法
      methods: FormBasic.basicMethods,
      // 属性监听
      watch: { },
      // 注入参数
      mounted () {
        // 注入组件配置
        self.injectComponentConfig(this)

      }
    }

    // 混入基础api
    if (!vueOptions.mixins) {
      vueOptions.mixins = []
    }
    vueOptions.mixins.unshift(basic)

    // 向组件内注入功能
    Array.prototype.push.apply(vueOptions.mixins, this.functions)

    return vueOptions
  }
}
