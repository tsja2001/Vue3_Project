<template>
  <div class="dashboard">
    11
    <div ref="divRef" :style="{ width: '300px', height: ' 300px' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'dashboard',
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction', {})

    return {}
  }
})
</script>

<style scoped></style>
