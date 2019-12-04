import { InputBasic } from '../index'
import { Title, Desc } from '@plug/OPFormFunctions'
import { INPUT_DATA_TYPE_STR } from '@G'

const text = new InputBasic({
  dataType: INPUT_DATA_TYPE_STR,
  functions: [ Title, Desc ],
  vueComponent: {
    name: 'OPText',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: String
    },
    render () {
      const { Title, Desc } = this.getFunctionRenders(arguments)
      return (
        <div className="op-form-input">
          {Title}
          <input
            class="input-text"
            type="text"
            onInput={e => this.$emit('input', e.target.value)}
            value={this.value}
            readOnly={this.readOnly}
          />
          {Desc}
        </div>
      )
    }
  }
})

export default text
