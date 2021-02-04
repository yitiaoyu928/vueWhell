<template>
  <div class="qgy-collapse-item" @click="hide">
    <div class="collapse-item-wrapper">
      <div class="collapse-content" v-text="title">
      </div>
      <qgy-icon class="icons" :icon="icon" :class="{'trans':!hides}"></qgy-icon>
    </div>
    <div class="collapse-item-content" v-show="hides">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "collapse-item",
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    }
  },
  data() {
    return {
      hides: true
    }
  },
  methods: {
    hide() {
      console.log(this.hides)
      this.hides = !this.hides;
    }
  }
}
</script>

<style lang="scss" scoped>
.qgy-collapse-item {
  display: flex;
  padding: 0.3em 1em;
  flex-direction: column;
  border: 1px solid #999;

  .collapse-item-wrapper {
    display: flex;

    .icons {
      margin-left: auto;

      &.trans {
        transform: rotate(-90deg);
      }
    }
  }

  //.collapse-item-content {
  //  transition: height 0.3s;
  //  overflow: hidden;
  //
  //  &.active {
  //    max-height: 100px;
  //  }
  //}
}

</style>