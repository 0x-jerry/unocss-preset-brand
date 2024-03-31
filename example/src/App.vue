<script setup lang="ts">
import { ref, watch } from 'vue'
import { changeBrand } from '@0x-jerry/unocss-preset-brand/runtime'
import VSelect from './VSelect.vue'

const primaryColorOptions = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]

const grayColorOptions = [
  //
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
]

const state = ref({
  primary: '',
  gray: '',
})

watch(
  state,
  () => {
    changeBrand(state.value)
  },
  {
    deep: true,
  }
)
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex gap-2">
      <span class="label text-right"> Change Primary Color </span>
      <VSelect v-model="state.primary" :options="primaryColorOptions"></VSelect>
      <VSelect v-model="state.gray" :options="grayColorOptions"></VSelect>
    </div>
    <div class="flex flex-wrap gap-2 items-center">
      <span class="label text-right"> Primary Color </span>
      <span class="block bg-b-primary-1"> </span>
      <span class="block bg-b-primary-2"> </span>
      <span class="block bg-b-primary-3"> </span>
      <span class="block bg-b-primary-4"> </span>
      <span class="block bg-b-primary-5"> </span>
      <span class="block bg-b-primary-6"> </span>
      <span class="block bg-b-primary-7"> </span>
      <span class="block bg-b-primary-8"> </span>
      <span class="block bg-b-primary-9"> </span>
    </div>
    <div class="flex flex-wrap gap-2 items-center">
      <span class="label text-right"> Gray Color </span>
      <span class="block bg-b-gray-1"> </span>
      <span class="block bg-b-gray-2"> </span>
      <span class="block bg-b-gray-3"> </span>
      <span class="block bg-b-gray-4"> </span>
      <span class="block bg-b-gray-5"> </span>
      <span class="block bg-b-gray-6"> </span>
      <span class="block bg-b-gray-7"> </span>
      <span class="block bg-b-gray-8"> </span>
      <span class="block bg-b-gray-9"> </span>
    </div>
  </div>
</template>

<style scoped>
.label {
  width: 10em;
}

.block {
  width: 4em;
  height: 4em;
  display: inline-block;
}
</style>
