import { INPUT_TYPE_NAME } from '../../util/GlobalConstant'
import FormBasic from './FormBasic'

/**
 * 创建一个表单组件
 */
export default class InputBasic extends FormBasic {
  // 录入组件默认选项
  static inputBasicProps = {
    // 组件是否只读
    readOnly: {
      type: Boolean,
      default: false
    }
  }

  constructor (options) {
    options.componentType = INPUT_TYPE_NAME
    super(options)
  }

  // 获取vue组件信息
  component () {
    // const self = this
    const basic = {
      // 可注入参数
      props: InputBasic.inputBasicProps
    }

    const comp = super.component()

    comp.mixins.unshift(basic)

    return comp
  }
}
