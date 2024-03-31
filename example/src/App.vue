<script setup lang="ts">
import {reactive} from 'vue'

import VSelect from './VSelect.vue';

const primaryColorOptions = [
  'Red',
  'Orange',
  'Amber',
  'Yellow',
  'Lime',
  'Green',
  'Emerald',
  'Teal',
  'Cyan',
  'Sky',
  'Blue',
  'Indigo',
  'Violet',
  'Purple',
  'Fuchsia',
  'Pink',
  'Rose',
]

const grayColorOptions = ['Slate', 'Gray', 'Zinc', 'Neutral', 'Stone']

const state = reactive({
  primary: '',
  gray: ''
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex gap-2">
      <span class="w-10em text-right"> Change Primary Color </span>
      <VSelect v-model="state.primary" :options="primaryColorOptions"></VSelect>
      <VSelect v-model="state.gray" :options="grayColorOptions"></VSelect>
    </div>
    <div class="flex flex-wrap gap-2 items-center">
      <span class="w-10em text-right"> Primary Color </span>
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
      <span class="w-10em text-right"> Gray Color </span>
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
.block {
  width: 1em;
  height: 1em;
  display: inline-block;
}
</style>
