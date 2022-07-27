<template>
  <div>芜湖芜湖</div>
  width{{ width }} width{{ height }}
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  width?: string
  height?: string
}>()
</script>

<style lang="scss" scoped></style>
