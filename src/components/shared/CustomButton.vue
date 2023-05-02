<template>
  <button
    :class="['btn', `btn_${color}`, { btn_outlined: outlined }]"
    @click="clickOnButton"
  >
    <span>{{ label }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Button",
  },
  color: {
    type: String,
    default: "primary",
  },
  outlined: {
    type: Boolean,
    required: false,
  },
});
const emit = defineEmits(["click"]);
const clickOnButton = () => {
  emit("click");
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: var(--primary-text-color);
  border: none;
  border-radius: 25.5px;
  cursor: pointer;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 16px;
  line-height: 1.45;
  transition: 0.2s;
  &_primary {
    background: var(--accent-color);
    padding: 13px 35.5px;
  }
  &_outlined {
    padding: 13px 23px;
    background: transparent;
    border: 2px solid var(--accent-color);
    border-radius: 25.5px;
    color: var(--primary-text-color);
  }
}
</style>
