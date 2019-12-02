import { INPUT_TYPE_NAME } from '../../util/GlobalConstant'
import FormBasic from './FormBasic'

/**
 * 创建一个表单组件
 */
export default class InputBasic extends FormBasic {
  constructor (options) {
    options.componentType = INPUT_TYPE_NAME
    super(options)
  }
}
