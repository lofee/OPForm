<template>
  <div class="op-form-view-main">
    <o-p-text :component-config="{Title: '你好,我是第一个标题'}" />
  </div>
</template>

<script>
  import { OPText } from '../OPFormTemplate'

  export default {
    name: 'FormView',
    components: { OPText },
    props: {
      // 表单使用到的所有组件配置信息
      components: {
        type: Array,
        validator (value) {
          return value.every(fc => !!fc.op)
        }
        // 此处需要引用一个默认的组件表
      },
      // 表单配置
      formConfig: {
        type: Array,
        default () { return [] }
      },
      // 表单数据
      data: {
        type: Array,
        default () { return [] }
      },
      // 规则配置
      rules: {
        type: Array,
        default () { return [] }
      }
    }
  }
</script>

<style scoped>

</style>
