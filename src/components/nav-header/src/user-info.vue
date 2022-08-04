<template>
  <div class="user-info">
    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        {{ userName }}
        <el-icon class="el-icon--right"
          ><arrow-down
        /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const userName = computed(
      () => store.state.login.userInfo.name
    )
    return {
      userName
    }
  }
})
</script>

<style scoped>
.user-info {
  /* height: 100%; */
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 14px;
}
</style>
