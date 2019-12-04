<template>
  <div class="hello">
    <!--<o-p-form-view :formConfig="formConfig" :formData="formData" :readOnly="true"/>-->
    <o-p-form-design :formConfig="{ formConfig, formData }" />
  </div>
</template>

<script>

import OPFormDesign from '@/plugin/OPFormDesign/OPFormDesign'
export default {
  name: 'HelloWorld',
  components: { OPFormDesign },
  data() {
    return {
      formConfig: [
        {
          Title: '你好,我是第1个标题',
          Desc: '我是描述信息',
          componentId: 'OPText',
          id: 'dataid'
        }
      ],
      formData: [
        {
          id: 'dataid',
          value: '你好'
        }
      ]
    }
  },
  created() {
  }
}
</script>

<style lang="less" scoped>
</style>
