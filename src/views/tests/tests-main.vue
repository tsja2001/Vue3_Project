<template>
  <div>
    <el-button @click="handleBtn">我是父组件, 点击了我</el-button>
    <test-cpn ref="testConRef"></test-cpn>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TestCpn from './test-cpn.vue'

export default defineComponent({
  // 想实现一个功能, 在父组件(本组件)点击按钮, 子组件能知道点击事件
  setup() {
    const testConRef = ref()

    const handleBtn = () => {
      // 更改子组件的值
      testConRef.value.cpnValue++
      // 调用子组件的方法(即 父组件 传递事件给 子组件)
      testConRef.value.getFunction()
    }

    return { testConRef, handleBtn }
  },
  components: { TestCpn }
})
</script>

<style scoped></style>
