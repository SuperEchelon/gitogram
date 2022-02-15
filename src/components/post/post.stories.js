import post from './post.vue'
import card from '../../components/сard/card.vue'

export default {
  title: 'post',
  component: {
    post,
    card
  }
}

const template = () => ({
  components: {
    post,
    card
  },
  template: `
    <post>
      <template #card>
        <card />
      </template>
    </post>
  `
})

export const Default = template.bind(template)
