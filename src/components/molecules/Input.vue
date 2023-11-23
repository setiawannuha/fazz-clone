<script lang="ts">
interface IProps {
  type: string;
  placeholder: string;
  label: string;
  defaultValue: string;
}

interface IEmit {
  (e: "passing-value", value: string): void;
}
</script>

<script setup lang="ts">
import { defineProps, defineEmits, ref, computed } from "vue";

const { placeholder, label, defaultValue, type } = defineProps<IProps>();
const emit = defineEmits<IEmit>();
const inputValue = ref(defaultValue);

const handleInput = computed({
  get() {
    return inputValue.value;
  },
  set(value) {
    inputValue.value = value;
    emit("passing-value", inputValue.value);
  },
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <label><span class="text-[#f16d1b]">*</span> {{ label }}</label>

    <input
      :type="type"
      :placeholder="placeholder"
      v-model="handleInput"
      class="w-full px-3 py-2 rounded-md border"
      required
    />
  </div>
</template>
