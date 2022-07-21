<template>
  <div class="hy-table">
    <el-table :data="data" border style="width: 100%">
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    data: {
      type: Array,
      required: false
    },
    propList: {
      type: Array,
      required: false
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.hy-table {
  padding: 20px;
}
</style>
