<template>
  <div class="post">
    <div class="post__user">
      <div class="avatar">
        <avatar :src="user" />
      </div>
        <div class="user-name">
          {{ name }}
        </div>
    </div>
    <div class="post__card">
        <slot name="card"/>
    </div>
    <div class="toggler">
      <toggler @onToggle="toggleClick" />
    </div>
    <div class="post__comments comment" v-if="showComments">
        <ul class="comment__list">
            <li class="comment__item" v-for="n in 5" :key="n">
                <p>
                    <span class="comment__user"> {{Username}} </span>
                    <span class="comment__text"> {{text}} </span>
                </p>
            </li>
        </ul>
        <time class="post__item">15 MAY</time>
    </div>
  </div>
</template>

<script>
import { avatar } from '../avatar'
import { toggler } from '../toggler'
export default {
  name: 'post',
  components: {
    avatar,
    toggler
  },
  props: {
    user: {
      type: String,
      required: true,
      default: 'https://picsum.photos/100/100'
    },
    name: {
      type: String,
      required: true,
      default: 'John'
    }
  },
  data () {
    return {
      showComment: false
    }
  },
  methods: {
    toggleClick (state) {
      this.showComments = state
    }
  }
}
</script>

<style lang="scss"  src="./post.scss" scoped></style>
