<template>
  <div class="form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template
          v-for="item in formItems"
          :key="item.label"
        >
          <el-col :style="itemStyle" v-bind="colLayout">
            <div class="grid-content ep-bg-purple">
              <el-form-item
                :label="item.label + ' :'"
                :rules="item.rules"
              >
                <!-- 1. 文字或者密码输入 -->
                <template
                  v-if="
                    item.type == 'input' ||
                    item.type == 'password'
                  "
                >
                  <el-input
                    v-bind="item.otherOptions"
                    :placeholder="item.placeholder"
                    :type="
                      item.type == 'password'
                        ? 'password'
                        : 'text'
                    "
                  ></el-input>
                </template>
                <!-- 2. select选择器 -->
                <template v-if="item.type == 'select'">
                  <el-select
                    :placeholder="item.placeholder"
                    style="width: 100%"
                    v-bind="item.otherOptions"
                  >
                    <el-option
                      v-for="options in item.selectOptions"
                      :key="options.value"
                      :label="options.label"
                      :value="options.value"
                    />
                  </el-select>
                </template>
                <!-- 3. 时间选择器 -->
                <template v-if="item.type == 'timeselect'">
                  <el-date-picker
                    class="data-picker"
                    v-bind="item.otherOptions"
                  />
                </template>
              </el-form-item>
            </div>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '70px'
    },
    itemStyle: {
      type: Object,
      default: () => {
        return {
          padding: '10px 10px'
        }
      }
    },
    // 配置布局
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.el-col {
  margin-top: 20px;
}
.data-picker {
  width: 100%;
}
</style>
