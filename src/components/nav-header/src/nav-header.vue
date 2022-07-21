<template>
  <div class="nav-header">
    <!-- 展开/折叠 icon -->
    <el-icon class="fold-class" @click="handleFoldClick">
      <!-- 根据isFold, 判断展开折叠 -->
      <component :is="isFold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <!-- 面包屑🍞和用户信息 -->
    <div class="content">
      <div class="router">
        <nav-breadcrumb :breadcrumb="breadcrumb"></nav-breadcrumb>
      </div>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
import NavBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import { pathMapToBreadcrumbs } from '@/utils/map-menus'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default defineComponent({
  emits: ['flodChange'],
  components: {
    UserInfo,
    NavBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    // 点击 折叠/展开 icon
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      // 通过事件总线, 向父组件传递折叠/展开的事件
      emit('foldChange' as any, isFold.value as any)
    }

    // 面包屑数据
    const store = useStore()

    // const userMenus = store.state.login.userMenus
    // const route = useRoute()
    // const currentRoute = route.path
    // const breadcrumb: IBreadcrumb[] = pathMapToBreadcrumbs(
    //   userMenus,
    //   currentRoute
    // )

    const breadcrumb = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentRoute = route.path

      return pathMapToBreadcrumbs(userMenus, currentRoute)
    })

    return { handleFoldClick, isFold, breadcrumb }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  .fold-class {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
