import slide from '../../components/slide/slide.vue'
import user from '../../components/user/user.vue'
import { progress as Progress } from '../../components/progress/progress.vue'
import xbutton from '../../components/button/button.vue'

export default {
  title: 'slide',
  component: {
    slide
  },
  subcomponents: {
    user,
    Progress,
    xbutton
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
    slide,
    user,
    Progress,
    xbutton
  },
  data () {
    return {
      args
    }
  },
  template: `
    <slide :hoverText='args.hoverText' :buttonText='args.buttonText' />
  `
})

export const Default = template.bind(template)

Default.args = {
  hoverText: 'Unfollow',
  buttonText: 'Follow'
}
