<!-- 可以传入form格式的配置文件, 即可动态渲染出一组表单 -->

<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form label-position="right">
      <el-row>
        <!-- 循环传入的每一项表单 -->
        <template v-for="item in formItems" :key="item.label">
          <!-- 对布局使用传入colLayout, 可以指定布局方式: 是否响应式 -->
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              class="form-item"
              :label="item.lable"
              :rules="item.rules"
              :style="itemStyle"
              :label-width="labelWidth"
            >
              <!-- 匹配每一项类型, 显示对应表单 -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
                v-bind="item.otherOptions"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-input>
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.title"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '180px'
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: '10px 0px'
      })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12
      })
    },
    formData: {
      type: Object,
      default: () => ({})
    },
    //
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 对传来的双向绑定数据, 重新使用ref包裹, 不直接在表单中更改原数据
    // const formData = ref({ ...props.modelValue })

    // watch(
    //   () => props.modelValue,
    //   (newValue) => {
    //     formData.value = { ...newValue }
    //   }
    // )

    // 监听包裹的数据, 发生改变时候, 使用emit传回数据
    // watch(
    //   formData,
    //   (newValue) => {
    //     console.log(newValue)
    //     emit('update:modelValue', newValue)
    //   },
    //   {
    //     deep: true
    //   }
    // )

    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }

    return {
      // formData,
      handleValueChange
    }
  }
})
</script>

<style scoped lang="less">
.hy-form {
  padding-top: 20px;
  .form-item {
    display: flex;
    align-items: center;
    // justify-content: center;
    justify-content: flex-start;
    // width: 100%;
  }
}
</style>
