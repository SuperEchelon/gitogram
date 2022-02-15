<template>
    <div class="c-stories">
        <header class="header">
            <div class="x-container">
                <button class="logo">
                    <logo />
                </button>
                <button class="close-btn" @click="goToFeeds">
                    <icon name="cross" />
                </button>
            </div>
        </header>
        <div class="content">
            <slider />
        </div>
    </div>
</template>

<script>
import { logo } from '../../components/logo'
import { icon } from '../../icons'
import { slider } from '../../components/slider'

export default {
  name: 'stories',
  components: {
    logo,
    icon,
    slider
  },
  methods: {
    goToFeeds () {
      this.$router.push('/')
    }
  }
}
</script>

<style src="./stories.scss" lang="scss" scoped></style>
