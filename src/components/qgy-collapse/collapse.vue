<template>
  <div class="qgy-collapse" :selected.sync="selected" @update:selected="fn">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "collapse",
  props: {
    selected: {
      type: String,
      required: true
    },
    fn:{
      type:Function
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
.qgy-collapse {
  margin-top: -1px;
  margin-left: -1px;
  margin-right: -1px;
  border: 1px solid #999;
  border-radius: 5px;
  box-shadow: 0 1px 3px #999;

}
</style>