import { InputBasic } from '../index'
import { Title, Desc } from '@plug/OPFormFunctions'
import { INPUT_DATA_TYPE_STR } from '@G'

const text = new InputBasic({
  dataType: INPUT_DATA_TYPE_STR,
  functions: [ Title, Desc ],
  vueComponent: {
    name: 'OPText',
    render () {
      const { Title, Desc } = this.getFunctionRenders(arguments)
      return (
        <div className="op-form-input">
          {Title}
          <input type="text"/>
          {Desc}
        </div>
      )
    }
  }
})

export default text
