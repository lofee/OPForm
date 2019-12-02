import FillBasic from '../../basic/FillBasic'
import './title.less'

const title = new FillBasic({
  key: 'Title',
  defaultValue: '未命名',
  vueComponent: {
    template: `<label class="input-title">{{ Title }}</label>`
  }
})

export default title
