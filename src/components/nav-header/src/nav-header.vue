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
    <div class="right">
      <div class="iconBox">
        <el-icon class="iconItem"><BellFilled /></el-icon>
        <el-icon class="iconItem"><List /></el-icon>
        <el-icon class="iconItem"><Tools /></el-icon>
      </div>
      <el-avatar
        size="small"
        class="el-avatar"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <div class="avatar">
        <UserInfo></UserInfo>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { ElMessage } from 'element-plus'
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'

export default defineComponent({
  emits: ['collapseEvent'],
  setup(props, { emit }) {
    // 点击折叠/展开侧边栏的icon
    const ifCollapse = ref(false)
    const handleCollapse = () => {
      ifCollapse.value = !ifCollapse.value
      emit('collapseEvent', ifCollapse.value)
    }
    const handleCommand = (command: string | number) => {
      ElMessage(`click on item ${command}`)
    }
    // 获取用户名
    const store = useStore()
    // const userInfo = store.
    // console.log(userInfo)
    return {
      ifCollapse,
      handleCollapse,
      handleCommand
    }
  },
  components: { UserInfo }
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
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .iconBox {
      .iconItem {
        margin-right: 10px;
        color: #cdd0d6;
        &:hover {
          color: #409eff;
        }
      }
      .el-avatar {
        padding-right: 10px;
      }
      .avatar {
        // height: 39px;
        margin-left: 10px;
        display: flex !important;
        flex-flow: row nowrap;
        align-items: center;
      }
    }
  }
}
</style>
