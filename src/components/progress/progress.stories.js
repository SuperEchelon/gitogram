import progress from './progress.vue'

export default {
  title: 'progress',
  component: {
    progress
  },
  argTypes: {
    onFinish: {
      action: 'onFinish'
    }
  }
}

const template = (args) => ({
  components: {
    progress
  },
  data () {
    return { args }
  },
  template: `
  <progress @onFinish="args.onFinish" />
  `
})

export const Default = template.bind(template)
