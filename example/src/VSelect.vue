<script lang="ts" setup>
defineProps<{
  options: string[]
}>()
const value = defineModel<string>('')
</script>

<template>
  <select v-model="value">
    <option v-for="o in options" :value="o">{{ o }}</option>
  </select>
</template>

<style lang="less" scoped></style>
