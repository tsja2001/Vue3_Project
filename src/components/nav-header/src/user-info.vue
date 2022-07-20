<template>
  <div class="user-info">
    <el-dropdown>
      <div class="el-dropdown-link">
        <el-avatar
          :size="30"
          src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
        />
        <div class="user-name">{{ name }}</div>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="CircleClose"> 退出登录 </el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    // 通过计算属性, 绑定用户名的显示
    const name = computed(() => store.state.login.userInfo.name)

    return {
      name
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  .user-name {
    margin-left: 10px;
  }
}
</style>
