<script>
  import { InputBasic } from '../index'
  import { Title } from '@plug/OPFormFunctions'
  import { INPUT_DATA_TYPE_STR } from '@G'

  const text = new InputBasic({
    dataType: INPUT_DATA_TYPE_STR,
    functions: [ Title ]
  })

  export default text.component({
    render () {
      const { Title } = this.getFunctionRenders(arguments)
      return <div>{ Title }</div>
    }
  })
</script>

<style lang="less" scoped></style>
