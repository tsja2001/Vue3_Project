<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapsed ? '60px' : '210px'">
        <!-- 以参数形式, 将是否要折叠的变量, 传递给组件 -->
        <nav-menu :collapse="isCollapsed"></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="HandlerFoldChange"></nav-header>
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// 左侧导航栏
import NavMenu from '@/components/nav-menu'
// 顶部header
import NavHeader from '@/components/nav-header'

export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    // 标识是否折叠
    const isCollapsed = ref(false)
    // 接受header传递来的折叠/展开导航栏事件,
    // 保存状态, 以参数形式传递给menu导航栏组件
    const HandlerFoldChange = (isFold: boolean) => {
      isCollapsed.value = isFold
    }
    return {
      isCollapsed,
      HandlerFoldChange
    }
  }
})
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
.page-info {
  // background-color: white;
}
</style>
