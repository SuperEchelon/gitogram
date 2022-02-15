import avatar from './avatar.vue'

export default {
  title: 'avatar',
  component: {
    avatar
  },
  argTypes: {
    avatar: {
      type: 'text'
    }
  }
}

const template = (args) => ({
  props: Object.keys(args),
  components: {
    avatar
  },
  data () {
    return {
      args
    }
  },
  template: `
  <avatar :avatar='args.avatar'></avatar>
  `
})

export const Default = template.bind(template)

Default.args = {
  avatar: 'https://picsum.photos/100/100'
}
