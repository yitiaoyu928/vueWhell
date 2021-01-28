<template>
  <div :class="['qgy-col',colClass]"
       :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
// 默认值校验
let validator = (value) => {
  let valid = false;
  let phoneKeys = Object.keys(value);
  phoneKeys.forEach(item => {
    if (['span', 'offset'].indexOf(item) !== -1) {
      valid = true;
    }
  })
  return valid;
};
// 校验value的值是否为整数
let validaType = (value) => {
  if (value.span && typeof value.span !== 'number') {
    throw new TypeError('If you want to use span, then you should pass offset an integer value');
  }
  if (value.offset && typeof value.span !== 'number') {
    throw new TypeError('If you want to use offset, then you should pass offset an integer value');
  }
}
// 添加样式
let addType = (value, name) => {
  if (typeof name !== 'string') {
    throw new TypeError('The name argument should be passed in as a string');
  }
  if (value) {
    let tmp = [];
    let colName = `col-${name}-`;
    let offsetName = `offset-${name}-`;
    validaType(value);
    if(value.span) {
      tmp.push((colName+value.span))
    }
    if(value.offset) {
      tmp.push((offsetName+value.offset))
    }
    return tmp;
  }
}
export default {
  name: "cols",
  props: {
    span: {
      type: [String, Number],
      default: function (value) {
        if (value) {
          return '24';
        } else {
          return value;
        }
      }
    },
    offset: {
      type: [String, Number],
      default: ''
    },
    xs: {
      type: Object,
      validator
    },
    sm: {
      type: Object,
      validator
    },
    md: {
      type: Object,
      validator
    },
    lg: {
      type: Object,
      validator
    }
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colStyle() {
      let {gutter} = this;
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      }
    },
    colClass() {
      let {span, offset, xs, sm, md, lg} = this;
      let classStyle = [
        span && `col-${span}`,
        offset && `offset-${offset}`
      ];
      let returnXs = addType(xs, 'xs');
      let returnSm = addType(sm, 'sm');
      let returnMd = addType(md, 'md');
      let returnLg = addType(lg, 'lg');
      if (returnXs) {
        classStyle.push(...returnXs)
      }
      if (returnSm) {
        classStyle.push(...returnSm)
      }
      if (returnMd) {
        console.log(returnMd)
        classStyle.push(...returnMd)
      }
      if (returnLg) {
        classStyle.push(...returnLg)
      }
      return classStyle;
    }
  }
}
</script>

<style lang="scss" scoped>
@import './col.scss';
</style>