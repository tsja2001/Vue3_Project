<template>
  <div class="nav-header">
    <!-- 展开/折叠 icon -->
    <el-icon class="fold-class" @click="handleFoldClick">
      <!-- 根据isFold, 判断展开折叠 -->
      <component :is="isFold ? 'Fold' : 'Expand'"></component>
    </el-icon>
  </div>
</template>

<script lang="ts">
// import { emit } from 'process'
// import { emit } from 'process'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['flodChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange' as any, isFold.value as any)
    }
    return { handleFoldClick, isFold }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold-class {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
