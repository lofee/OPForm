<template>
  <div :class="[ 'op-form-design-main', ...formDesignClass ]">
    <div :class="[ 'op-form-config-main', ...formConfigClass ]">

    </div>
    <!-- 表单预览组件 -->
    <o-p-form-view v-bind="formConfig"/>

    <div :class="[ 'op-form-dragger-main', ...formDraggerClass ]">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'OPFormDesign',
    data () {
      return { }
    },
    props: {
      // 主模块样式
      formDesignClass: [String, Array],
      // 配置模块样式
      formConfigClass: [ String, Array ],
      // 拖拽模块样式
      formDraggerClass: [ String, Array ],
      // 表单预览模块样式
      formConfig: {
        type: Object,
        default () { return {} }
      }
    }
  }
</script>

<style scoped>

</style>
