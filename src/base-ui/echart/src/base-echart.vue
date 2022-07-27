<template>
  <div>
    <div
      :style="{ width: width, height: height }"
      class="main"
      ref="echartDivRef"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, defineProps, watchEffect } from 'vue'
import * as echarts from 'echarts'
import { EChartsOption, ECharts } from 'echarts'
import useEcharts from '../hooks/uesEchar'
export default defineComponent({
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '360px'
    },
    option: {
      type: Object,
      required: true
    }
  },
  emits: ['onEchatInit'],
  setup(props, { emit }) {
    const echartDivRef = ref<HTMLElement>()
    onMounted(() => {
      const { setOptions, echartInstance } = useEcharts(echartDivRef.value!)
      emit('onEchatInit', echartInstance)
      watchEffect(() => {
        setOptions(props.option)
      })
    })

    return { echartDivRef }
  }
})
</script>

<style scoped>
.main {
  width: 400px;
  height: 400px;
  z-index: 9999;
}
</style>
