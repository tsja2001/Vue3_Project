<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/logo.png" alt="logo" />
      <span class="text" v-if="!collapse">Tsja Vue3+TS Program</span>
    </div>
    <!-- type=1: 可以展开的菜单; type=2: 可以切换页面的菜单 type=3: 按钮权限 -->
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type == 1">
          <el-sub-menu :index="item.id + ''">
            <!-- 二级菜单大标题(点击后,里面的item展开) -->
            <template #title>
              <el-icon>
                <component
                  :is="item.icon.slice(8, item.icon.length)"
                ></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''">
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单(暂无数据) -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
// import { useStore } from 'vuex'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    return {
      userMenus
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
}

.logo {
  // display: flex;
  // height: 28px;
  padding: 12px 10px 8px 15px;
  box-sizing: border-box;
  // flex-direction: row;
  // justify-content: flex-start;
  // align-items: center;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
  width: 100%;
  .img {
    width: 30px;
    height: 30px;
  }
  .text {
    font-size: 12px;
    color: white;
    margin-left: 10px;
  }
}

.el-menu-vertical {
  border-right: none;
}
.title {
  font-size: 16px;
  font-weight: 700;
  color: white;
}
</style>