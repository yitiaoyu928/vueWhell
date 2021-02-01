<template>
  <div class="qgy-tab" :class="[direction]">
    <slot></slot>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: "tab",
  props: {
    direction: {
      type: String,
      default: "horizontal"
    },
    selected: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name, vm) => {
      let {offsetWidth, offsetLeft, offsetTop, offsetHeight} = vm.$el;
      this.$refs.line.style.width = offsetWidth + 'px';
      if (this.direction === 'vertical') {
        this.$refs.line.style.transform = `translateY(${offsetTop+offsetHeight}px)`;
      } else {
        this.$refs.line.style.transform = `translateX(${offsetLeft}px)`;
      }

    });


  },
  mounted() {
    this.$children.forEach((item) => {
      if (item.name === this.selected) {
        this.eventBus.$emit('update:selected', this.selected, item);
      }
    })

  }
}
</script>

<style lang="scss" scoped>
.qgy-tab {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  &.horizontal {
    flex-direction: row;
    >.line {
      bottom: 0;
    }
  }

  &.vertical {
    flex-direction: column;
    >.line {
      top: 0;
    }
  }

  .line {
    position: absolute;
    border-bottom: 3px solid lightblue;
    transition: transform 0.3s;
  }

}

</style>