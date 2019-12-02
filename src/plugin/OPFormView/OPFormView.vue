<template>
  <div class="op-form-view-main">
    <o-p-text :component-config="{Title: '你好,我是第一个标题', Desc: '我是描述信息'}" />
  </div>
</template>

<script>
  export default {
    name: 'OPFormView',
    props: {
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
