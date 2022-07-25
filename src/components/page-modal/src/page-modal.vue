<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      destroy-on-close
    >
      <!-- <hy-form v-bind="modalConfig" :modelValue="formData"></hy-form> -->
      <hy-form v-bind="modalConfig" v-model="formData"></hy-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import HyForm from '@/base-ui/form/src/form.vue'
import { defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    // 组件配置文件
    modalConfig: {
      type: Object,
      require: true
    },
    // 默认显示的值(不传即无默认显示)
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    // 页面名称(用于匹配url)
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    HyForm
  },
  setup(props) {
    const dialogVisible = ref(false)

    /**
     * 由于传入的 defaultInfo可能先没有, 点击后才有值
     * 因此监听传入的值, 保存在formData, 并传给form组件
     */
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig!.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`] ?? ''
        }
      }
    )

    // 监听点击确定按钮
    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      // 判断当时是新建还是编辑
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value },
          id: props.defaultInfo.id
        })
      } else {
        // 新建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value }
        })
      }
    }

    return {
      dialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<style scoped></style>
