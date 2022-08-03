<template>
  <div class="nav-header">
    <div class="left">
      <div class="left_icon" @click="handleCollapse">
        <el-icon>
          <DArrowRight v-if="ifCollapse" />
          <DArrowLeft v-else />
        </el-icon>
      </div>
      <div class="breadcrumb">面包屑</div>
    </div>
    <div class="right">wuhu</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['collapseEvent'],
  setup(props, { emit }) {
    // 点击折叠/展开侧边栏的icon
    const ifCollapse = ref(false)

    const handleCollapse = () => {
      ifCollapse.value = !ifCollapse.value
      emit('collapseEvent', ifCollapse.value)
    }

    return {
      ifCollapse,
      handleCollapse
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .left {
    height: 100%;
    display: flex;
    align-items: center;
    .left_icon {
      cursor: pointer;
      margin-right: 10px;
      margin-bottom: -3px;
    }
  }
  .right {
  }
}
</style>
