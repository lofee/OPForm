<script>
  import { INPUT_DATA_TYPE_STR } from '../../util/GlobalConstant'
  import { InputBasic } from '../index'
  import { Title } from '../../OPFormFunctions'

  const text = new InputBasic({
    dataType: INPUT_DATA_TYPE_STR,
    functions: []
  })

  export default text.component({
    mixins: [ Title ],
    render () {
      const title = Title.render.apply(this, arguments)
      return <div>text->{ title }</div>
    }
  })
</script>

<style lang="less" scoped></style>
