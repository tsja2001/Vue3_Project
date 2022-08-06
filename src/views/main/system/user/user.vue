<template>
  <div class="user">
    <div class="search">
      <TsjaForm v-bind="formConfig"></TsjaForm>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TsjaForm from '@/base-ui/form/src/TsjaForm.vue'
import { IFormItem } from '@/base-ui/form'
import formConfig from './config/search.config'
// import { formConfig } from './config'
export default defineComponent({
  name: 'user',
  setup() {
    const formItems: IFormItem[] = [
      {
        type: 'input',
        label: '姓名',
        placeholder: '请输入姓名'
      },
      {
        type: 'password',
        label: '密码',
        placeholder: '请输入密码'
      },
      {
        type: 'select',
        label: '运动',
        placeholder: '请选择喜欢的运动',
        selectOptions: [
          {
            label: '🏀',
            value: '篮球'
          },
          {
            label: '⚽️',
            value: '足球'
          }
        ]
      },
      {
        type: 'timeselect',
        label: '时间',
        placeholder: '请选择时间',
        otherOptions: {
          type: 'daterange',
          'start-placeholder': '开始时间',
          'end-placeholder': '结束时间'
        }
      }
    ]

    const labelWidth = '70px'
    const colLayout = {
      span: 8
    }

    return {
      formItems,
      labelWidth,
      colLayout,
      formConfig
    }
  },
  components: { TsjaForm }
})
</script>

<style scoped></style>
