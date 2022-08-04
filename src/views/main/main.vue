<template>
  <div class="main">
    <el-container class="el-container">
      <el-aside
        class="aside"
        :width="ifFold ? '64px' : '210px'"
      >
        <NavMenu ref="navMenuRef"></NavMenu>
      </el-aside>
      <el-container>
        <el-header class="header" height="40px">
          <NavHeader
            @collapseEvent="handleCollapseEvent"
          ></NavHeader>
        </el-header>
        <el-main class="content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

export default defineComponent({
  setup() {
    // 控制nav-menu展开或者折叠
    const navMenuRef = ref<InstanceType<typeof NavMenu>>()
    // 标识是否折叠
    const ifFold = ref(false)

    // header控制折叠菜单
    const handleCollapseEvent = (e: any) => {
      navMenuRef.value!.isCollapse = e
      ifFold.value = e
    }

    return {
      navMenuRef,
      handleCollapseEvent,
      ifFold
    }
  },
  components: { NavMenu, NavHeader }
})
</script>

<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
  .el-container {
    width: 100%;
    height: 100%;
    .aside {
      border-right: 1px solid #e0e0e0;
      // height: 100%;
      transition: width 0.5s;
    }
    .header {
      // background-color: #f0f0f0;
      border-bottom: 1px solid #f0f0f0;
    }
  }
}
</style>
