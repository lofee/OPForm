<template>
  <div class="op-form-view-main">
    <template v-for="cfg in formConfig">
      <component v-model="dataMap[cfg.id]" :is="cfg.componentId" :component-config="cfg" :key="cfg.id" :readOnly="readOnly" />
    </template>
  </div>
</template>

<script>
  export default {
    name: 'OPFormView',
    data () {
      return {
        dataMap: {}
      }
    },
    created () {
      // 将数组注入dataMap
      this.formData.forEach(d => this.dataMap[d.id] = d.value)
    },
    props: {
      // 表单配置
      formConfig: {
        type: Array,
        default () { return [] }
      },
      // 表单数据
      formData: {
        type: Array,
        default () { return [] }
      },
      // 规则配置
      rules: {
        type: Array,
        default () { return [] }
      },
      // 表单是否只读
      readOnly: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>

</style>
