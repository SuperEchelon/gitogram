import storyUserItem from '../storyUserItem/storyUserItem.vue'
import avatar from '../avatar/avatar.vue'
import logo from '../logo/logo.vue'
import topline from '../topline/topline.vue'
import navBar from '../navBar/navBar.vue'

export default {
  title: 'UI/topline',
  component: { topline },
  subComponents: { avatar, logo, storyUserItem, navBar },
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

const template = (args) => ({
  props: Object.keys(args),
  components: {
    topline,
    avatar,
    logo,
    storyUserItem,
    navBar
  },
  data () {
    return {
      args
    }
  },
  template: `
    <topline>
        <template #headline>
            <div class="logo">
            <logo />
            </div>
            <navBar />
        </template>
        <template #content>
            <ul class="stories">
                <li class="stories__item" v-for="n in 10" :key="n">
                    <storyUserItem :avatar="args.avatar" :username="args.name" />
                </li>
            </ul>
        </template>
    </topline>
    `
})

export const Default = template.bind(template)

Default.args = {
  avatar: 'https://picsum.photos/id/234/100/100',
  size: 'l',
  name: 'LoftSchool User'
}
