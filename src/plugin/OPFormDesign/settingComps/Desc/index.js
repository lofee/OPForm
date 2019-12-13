import { SettingBasic } from '@plug/OPFormDesign'
import { Desc } from '@plug/OPFormFunctions'

const descSeting = new SettingBasic({
  label: '描述',
  funcCompObj: Desc,
  vueComp: {
    template: `<textarea :value="currValue" @input="e => $emit('input', e.target.value)"/>`
  }
})

export default descSeting
