<script lang="ts" setup>
defineProps<{
  options: string[]
}>()

const value = defineModel<string>()
</script>

<template>
  <div class="flex-1 flex flex-wrap gap-1">
    <button v-for="opt in options" @click="value = opt">
      {{ opt }}
    </button>
  </div>
</template>

<style lang="less" scoped></style>
