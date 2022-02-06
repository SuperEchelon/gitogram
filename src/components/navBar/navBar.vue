<template>
  <div class="c-nav-bar">
    <div class="icon-button">
      <icon name="home" />
    </div>
    <div class="icon-avatar">
      <avatar :src="user" class="avatar" />
    </div>
    <div class="icon-button">
      <icon name="exit" />
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'
import { avatar } from '../../components/avatar'
export default {
  name: 'navBar',
  components: {
    icon,
    avatar
  },
  props: {
    user: {
      type: String,
      required: true,
      default: 'https://picsum.photos/100/100'
    }
  }
}
</script>

<style lang="scss" src="./navBar.scss" scoped></style>
