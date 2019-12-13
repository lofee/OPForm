<template>
  <div class="op-form-view-main">
    <o-p-form-view-dragger :list="formConfig" :is-design="isDesign">
      <template v-for="cfg in formConfig">
        <component
          ref="formComponent"
          v-model="dataMap[cfg.id]"
          :is="cfg.compName"
          :component-config="cfg"
          :key="cfg.id"
          :readOnly="readOnly"
          :formStatus="{ isDesign }"
          @click.native="selectComponent(cfg)"
        />
      </template>
    </o-p-form-view-dragger>
  </div>
</template>

<script>
  import OPFormViewDragger from './OPFormViewDragger'

  export default {
    name: 'OPFormView',
    components: { OPFormViewDragger },
    data () {
      return {
        dataMap: this.formData
      }
    },
    methods: {
      // 选中一个组件
      selectComponent (cfg) {
        this.$emit('select-component', cfg)
      },
      // 提取组件配置
      getFormConfig () {
        const formConfig = {}
        formConfig.formConfig = this.$refs.formComponent.reduce((rets, comp) => {
          rets.push(comp.getConfigResult())
          return rets
        }, [])
        return formConfig
      }
    },
    props: {
      // 表单配置
      formConfig: { type: Array, default () { return [] } },
      // 表单数据
      formData: { type: Object, default () { return {} } },
      // 规则配置
      rules: { type: Array, default () { return [] } },
      // 表单是否只读
      readOnly: { type: Boolean, default: false },
      // 是否是设计状态
      isDesign: { type: Boolean, default: false }
    }
  }
</script>

<style scoped>

</style>
