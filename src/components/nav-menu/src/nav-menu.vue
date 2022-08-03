<template>
  <div class="nav-menu">
    <!-- 顶部logo -->
    <div class="head">
      <img
        class="logo"
        src="~@/assets/logo.svg"
        alt="logo"
      />
      <div class="text" v-if="!isCollapse">
        Tsja Vue3 + TypeScript
      </div>
    </div>
    <el-menu
      default-active="2"
      class="el-menu"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <template
        v-for="subMenuItem in menus"
        :key="subMenuItem.id"
      >
        <el-sub-menu :index="subMenuItem.id + ''">
          <!-- 可以展开的标题 -->
          <template #title>
            <i :class="subMenuItem.icon"></i>
            <i class="icon-monitor"></i>
            <el-icon color="#409EFC" class="no-inherit">
              <component :is="subMenuItem.icon.slice(8)">
              </component>
            </el-icon>
            <span>{{ subMenuItem.name }}</span>
          </template>
          <!-- 每个可以点击路由的项目 -->
          <el-menu-item-group>
            <template
              v-for="menuItem in subMenuItem.children"
              :key="menuItem.id"
            >
              <el-menu-item :index="menuItem.id + ''">{{
                menuItem.name
              }}</el-menu-item>
            </template>
            <!-- <el-menu-item>{{ menuItem.name }}</el-menu-item> -->
          </el-menu-item-group>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { ref } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    // 获取所有menus
    const store = useStore()
    const menus = computed(() => store.state.login.menu)

    // 是否折叠
    const isCollapse = ref(false)

    // 点击打开/关闭某个标签
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (
      key: string,
      keyPath: string[]
    ) => {
      console.log(key, keyPath)
    }

    return {
      isCollapse,
      handleOpen,
      handleClose,
      menus
    }
  }
})
</script>

<style scoped lang="less">
.head {
  height: 60px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
  box-sizing: border-box;
  .logo {
    width: 35px;
    height: 35px;
  }
  .text {
    font-size: 14px;
    font-weight: 600;
    // margin-left: 5px;

    background-image: linear-gradient(
      to right,
      #f8ab5e 0,
      #f36961 20%,
      #a176c8 40%,
      #759beb 60%,
      #65beb3 80%,
      #70db96 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.el-menu {
  border: none;
}
</style>
