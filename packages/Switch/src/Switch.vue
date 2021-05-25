<template>
  <div class="kiwi-switch--box">
    <div class="kiwi-switch--box-flex">
      <span class="kiwi-switch--lefttitle kiwi-switch--title">
        {{ leftTitle }}
      </span>
      <span
        :class="[
          'kiwi-switch--block' + '',
          value ? 'kiwi-switch--block-true' : 'kiwi-switch--block-false',
        ]"
        @click="handleSwitch"
      >
        <span
          :class="[
            'kiwi-switch--transform' + '',
            value
              ? 'kiwi-switch--transform-right'
              : 'kiwi-switch--transform-left',
          ]"
        ></span>
        <input
          type="checkbox"
          class="kiwi-switch--checkbox-init"
        />
      </span>
      <span class="kiwi-switch--righttitle kiwi-switch--title">
        {{ rightTitle }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "kiwi-switch",
  props: {
    leftTitle: String,
    rightTitle: String,
    value: {},
  },
  methods: {
    handleSwitch() {
      this.$emit('input', !this.value);
    },
  },
};
</script>

<style scoped>
.kiwi-switch--checkbox-init {
  opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}
.kiwi-switch--box-flex{
  display: flex;
}
.kiwi-switch--box {
  display: inline-block;
}
.kiwi-switch--block {
  width: 45px;
  height: 22px;
  display: inline-block;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 2px;
  cursor: pointer;
  margin: 0 8px;
}
.kiwi-switch--transform {
  height: 18px;
  width: 18px;
  background: #fff;
  border-radius: 100%;
  display: inline-block;
}
.kiwi-switch--block-true {
  background-color: #2ecc71;
  transition: 0.3s;
}
.kiwi-switch--block-false {
  background-color: #eb2f06;
  transition: 0.3s;
}
.kiwi-switch--transform-right {
  transform: translateX(23px);
  transition: 0.3s;
}
.kiwi-switch--transform-left {
  transform: translateX(0px);
  transition: 0.3s;
}
.kiwi-switch--title {
  font-size: 14px;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  font-weight: 300;
}
</style>