<template>
  <div>我是子组件, 我在这里</div>
  <div>cpnValue1: {{ cpnValue }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    let cpnValue = ref(1)

    const getFunction = () => {
      console.log('收到父组件传入的的点击事件')
    }

    return {
      cpnValue,
      getFunction
    }
  }
})
</script>

<style scoped></style>
