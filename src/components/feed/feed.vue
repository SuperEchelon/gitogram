<template>
    <div class="c-feed" :class="{dark}">
      <toggler @onToggle='toggle' />
      <div class="comments" v-if='shown'>
        <ul class="comments-list">
          <li class="comments-item" v-for="n in 5" :key='n'>
            <comment text='Some text' username='John Doe' />
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import { comment } from '../comment'
import { user } from '../../components/user'
import { toggler } from '../../components/toggler'

export default {
  name: 'feed-item',
  props: {
    title: String,
    username: String,
    stars: Number,
    dark: Boolean,
    description: String
  },
  components: {
    comment,
    user,
    toggler
  },
  data () {
    return {
      shown: false,
      items: true
    }
  },
  methods: {
    toggle(isOpened){
      this.shown = isOpened
    },
    toggleClick (state) {
      this.showComment = state
    }
  }
}
</script>

<style lang="scss" scoped src="./feed.scss"></style>
