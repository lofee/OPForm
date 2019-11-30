<template>
  <label>{{ Title }}</label>
</template>

<script>
  import FillBasic from '../basic/FillBasic'

  const title = new FillBasic({
    key: 'Title',
    defaultValue: '未命名'
  })

  export default title.component({

  })
</script>

<style scoped>

</style>
