import draggable from 'vuedraggable'
import './OPFormViewDragger.less'

export default {
  name: 'OPFormViewDragger',
  components: { draggable },
  render () {
    const dragEles = this.$slots.default
    if(this.isDesign){
      return <draggable list={this.list} group={this.group} ghost-class={'o-p-form-ghost'}>{dragEles}</draggable>
    }else{
      return <div>{dragEles}</div>
    }
  },
  props: {
    // 表单预览模块样式
    isDesign: { type: Boolean, default: false },
    // 拖拽数组
    list: { type: Array, default () { return [] } },
    // 拖拽数据分组名称
    group: { type: String }
  }
}
