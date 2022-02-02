import storyUserItem from './storyUserItem.vue'
import avatar from '../avatar/avatar.vue'

export default {
  title: 'UI/storyUserItem',
  component: { storyUserItem },
  subComponents: { avatar },
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['s', 'm', 'l']
    },
    name: {
      type: 'text'
    },
    avatar: {
      type: 'text'
    }
  }
}

const template = args => ({
  props: Object.keys(args),
  components: {
    storyUserItem
  },
  data () {
    return {
      args
    }
  },
  template: `
    <storyUserItem :avatar="args.avatar" :username="args.name"/>
    `
})

export const Default = template.bind(template)

Default.args = {
  avatar: 'https://picsum.photos/id/234/100/100',
  size: 'l',
  name: 'LoftSchool User'
}
