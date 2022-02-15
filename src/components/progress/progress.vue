<template>
    <div :class= "{ active }" class="c-progress">
        <div ref="indicator" class="indicator"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  props: {
    progressMove: Boolean
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
      this.active = false
    }
  },
  mounted () {
    if (this.progressMove) {
      this.active = true
    }

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  updated () {
    this.active = !!this.progressMove
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style src="./progress.scss" lang="scss" scoped></style>
