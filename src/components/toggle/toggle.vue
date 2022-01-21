<template>
  <div>
      <button :class="[{active:show}, 'button']" @click="onToggle">
          <div>
              <span>{{ buttonText }}issues</span>
              <span>
                  <icon icon-name="triangle" class="icon"/>
              </span>
          </div>
      </button>
  </div>
</template>

<script>
import {icon} from "./components/icon";
export default {
    components: {
        icon
    },
    emits:["onToggle"],
    data() {
        return {
            show:false
        }
    },
    computed: {
        buttonText(){
            return this.show ? "Hide" : "Show"
        }
    },
    methods: {
        ontoggle(){
            this.show = !this.show;
            this.$emit('onToggle', this.show);
        }
    }
};
</script>

<style lang="scss" scoped>
.button{
    display: flex;
    align-items: center;
    padding: 0;
}
.icon {
    widows: 10px;
    transform: rotate(180deg);
    transition: 0.4s;
}

.active {
    .icon{
        transform: rotate(0deg);
    }
}
</style>