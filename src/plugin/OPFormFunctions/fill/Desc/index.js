import Title from '../Title'

const desc = Title.extends({
  key: 'Desc',
  defaultValue: '',
  vueComponent: {
    template: `<p class="input-desc text-muted small">{{ Desc }}</p>`
  }
})

export default desc
