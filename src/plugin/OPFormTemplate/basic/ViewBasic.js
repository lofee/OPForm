import { VIEW_TYPE_NAME } from '../../util/GlobalConstant'
import FormBasic from './FormBasic'

/**
 * 创建一个表单组件
 * @param subType
 * @param options
 * @returns {*}
 * @constructor
 */
export default class ViewBasic extends FormBasic {
  constructor (options) {
    options.componentType = VIEW_TYPE_NAME
    super(options)
  }
}
