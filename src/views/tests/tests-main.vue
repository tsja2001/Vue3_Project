<template>
  <div>
    <test-cpn ref="testConRef"></test-cpn>
    <el-button @click="handleBtn">我是父组件, 点击了我</el-button>
    <h2>store中的name: {{ $store.state.name }}</h2>
    <h2>store中的age: {{ $store.state.age }}</h2>
    <h2>store中的height: {{ $store.state.height }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TestCpn from './test-cpn.vue'

export default defineComponent({
  // 想实现一个功能, 在父组件(本组件)点击按钮, 子组件能知道点击事件
  setup() {
    const handleBtn = () => {
      console.log('点击了父组件')
      // $store.commit('mutationsFn')
    }
    return { handleBtn }
  },
  components: {
    TestCpn
  }
})
</script>

<style scoped></style>
