import FuncBasic from '../../basic/FuncBasic'
import './title.less'

const title = new FuncBasic({
  key: 'Title',
  defaultValue: '未命名',
  vueComponent: {
    template: `<label class="input-title">{{ Title }}</label>`
  }
})

export default title
