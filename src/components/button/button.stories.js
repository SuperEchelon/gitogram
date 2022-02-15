import button from './button.vue'

export default {
  title: 'button',
  component: {
    button
  },
  argTypes: {
    hoverText: {
      type: 'string'
    },
    buttonText: {
      type: 'string'
    }
  }
}

const template = (args) => ({
  props: Object.keys(args),
  components: {
    xButton: button
  },
  data () {
    return {
      args
    }
  },
  template: `
    <x-button :hoverText='args.hoverText' :buttonText='args.buttonText' />
  `
})

export const Default = template.bind(template)

Default.args = {
  hoverText: 'Unfollow',
  buttonText: 'Follow'
}
