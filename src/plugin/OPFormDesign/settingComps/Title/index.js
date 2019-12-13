import { SettingBasic } from '@plug/OPFormDesign'
import { Title } from '@plug/OPFormFunctions'

const titleSeting = new SettingBasic({
  label: '标题',
  funcCompObj: Title,
  vueComp: {
    template: `<input type="text" :value="currValue" @input="e => $emit('input', e.target.value)"/>`
  }
})

export default titleSeting
