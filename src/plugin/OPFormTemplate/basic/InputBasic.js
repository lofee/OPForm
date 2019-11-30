import { INPUT_TYPE_NAME } from '../../util/GlobalConstant'
import FormBasic from './FormBasic'

/**
 * 创建一个表单组件
 * @param subType
 * @param options
 * @returns {*}
 * @constructor
 */
export default class InputBasic extends FormBasic {
  constructor ({ dataType, functions }) {
    super({
      componentType: INPUT_TYPE_NAME,
      dataType,
      functions
    })
  }
}
