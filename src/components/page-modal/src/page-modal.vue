<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
      <hy-form v-bind="modalConfig" :modelValue="formData"></hy-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import HyForm from '@/base-ui/form/src/form.vue'
import { forEach } from 'lodash'
import { defineComponent, ref, watch } from 'vue'

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
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
        console.log(formData.value)
      }
    )

    return {
      dialogVisible,
      formData
    }
  }
})
</script>

<style scoped></style>
