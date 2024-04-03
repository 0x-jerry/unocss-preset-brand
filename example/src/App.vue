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
  <div>
    <a href="https://github.com/0x-jerry/unocss-preset-brand">
      <h1 class="text-b-primary text-opacity-80">
        UnoCSS Preset Brand

        <small class="text-3xl text-b-primary-6">
          <i class="icon i-bxl:github"></i>
        </small>
      </h1>
    </a>
  </div>
  <div class="flex flex-col gap-2 w-900px">
    <div class="flex gap-2">
      <span class="label text-right"> Change Primary </span>
      <VSelect v-model="state.primary" :options="primaryColorOptions"></VSelect>
    </div>
    <div class="flex gap-2">
      <span class="label text-right"> Change Gray</span>
      <VSelect v-model="state.gray" :options="grayColorOptions"></VSelect>
    </div>
    <hr>
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
  @apply text-bGray-6;
}

.block {
  width: 4em;
  height: 4em;
  display: inline-block;
}

.icon {
  width: 1em;
  height: 1em;
  display: inline-flex;
}
</style>
