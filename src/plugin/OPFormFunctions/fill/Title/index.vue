<template>
  <label class="input-title">{{ Title }}</label>
</template>

<script>
  import FillBasic from '../../basic/FillBasic'
  import './title.less'

  const title = new FillBasic({
    key: 'Title',
    defaultValue: '未命名'
  })

  export default title.component()
</script>
