import draggable from 'vuedraggable'
export default {
  name: 'OPFormViewDragger',
  components: { draggable },
  render () {
    const dragEles = this.$slots.default
    if(this.isDesign){
      return <draggable list={this.list}>{dragEles}</draggable>
    }else{
      return <div>{dragEles}</div>
    }
  },
  props: {
    // 表单预览模块样式
    isDesign: { type: Boolean, default: false },
    list: { type: Array, default () { return [] } }
  }
}
