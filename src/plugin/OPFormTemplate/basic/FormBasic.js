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
   * 基本实例化方法
   * @param componentType
   * @param dataType
   * @param functions
   */
  constructor ({ componentType, dataType, functions }) {
    // 主要类型
    this.componentType = componentType
    // 子类型
    this.dataType = dataType
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
   * 生成vue对象
   * @param vueOptions
   */
  component (vueOptions) {
    const basic = {
      // 默认数据
      data: this.data(),
      // 可注入参数
      props: FormBasic.basicProps,
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

    return vueOptions
  }
}
