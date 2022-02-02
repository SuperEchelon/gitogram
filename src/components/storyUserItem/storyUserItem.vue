<template>
    <button class="c-story-user-item" @click="$emit('onPress')">
        <div class="avatar">
            <img :src="avatar" class="img" alt="username avatar" />
        </div>
        <div class="username">{{ username }}</div>
    </button>
</template>

<script>
// import { avatar } from '../avatar'
export default {
  name: 'storyUserItem',
  components: {
    // avatar
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./storyUserItem.scss"></style>
