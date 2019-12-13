<template>
  <div id="app">
    <o-p-form-design
      :formConfig="formConfig"
      :supportComponentNames="[ 'OPText' ]"
    ></o-p-form-design>
  </div>
</template>

<script>
  import formConfig from '@/mock/formConfig'
  import OPFormDesign from '@/plugin/OPFormDesign/OPFormDesign'

  export default {
    name: 'App',
    components: { OPFormDesign },
    data() {
      return {
        formConfig
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
