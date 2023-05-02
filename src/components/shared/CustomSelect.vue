<template>
  <div class="custom-select" :tabindex="tabindex" @blur="isOpen = false">
    <div class="selected" :class="{ open: isOpen }" @click="toggleOpen">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !isOpen }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="selectOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, defineEmits } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  default: {
    type: String,
    required: false,
    default: null,
  },
  tabindex: {
    type: Number,
    required: false,
    default: 0,
  },
});

const selected = ref(
  props.default
    ? props.default
    : props.options.length > 0
    ? props.options[0]
    : null
);
const isOpen = ref(false);

const emit = defineEmits(["option-selected"]);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selected.value = option;
  isOpen.value = false;
  emit("option-selected", selected.value);
};

onMounted(() => {
  emit("option-selected", selected.value);
});
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 355px;
  text-align: left;
  outline: none;
  height: 44px;
  line-height: 44px;
}

.custom-select .selected {
  background: #fff;
  border: 1px solid #f3f3f3;
  border-radius: 22px;
  color: #000;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #f3f3f3;
  border-radius: 22px 22px 0px 0px;
  background: #c1f600;
  color: #fff;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 20px;
  right: 1em;
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-color: #191919 transparent transparent transparent;
}

.custom-select .items {
  color: #fff;
  border-radius: 0px 0px 22px 22px;
  overflow: hidden;
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  position: absolute;
  background-color: #c1f600;
  left: 0;
  right: 0;
  z-index: 1000;
}

.custom-select .items div {
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #fff;
  color: #191919;
}

.selectHide {
  display: none;
}
</style>
