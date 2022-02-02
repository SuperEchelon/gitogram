<template>
    <div class="c-feed" :class="{dark}">
      <h1>title: {{ title }}</h1>
      <h2>owner: {{ username }}</h2>
      <h3>stars: {{ stars }}</h3>
      <p v-if="description">description: {{ description }}</p>
    </div>
</template>

<script>
import { user } from '../../components/user'
import { toggler } from '../../components/toggler'

export default {
  name: 'feed',
  props: {
    title: String,
    username: String,
    stars: Number,
    dark: Boolean,
    description: String
  },
  components: {
    user,
    toggler
  },
  data () {
    return {
      items: true
    }
  },
  methods: {
    toggleClick (state) {
      this.showComment = state
    }
  }
}
</script>

<style lang="scss" scoped src="./feed.scss"></style>
