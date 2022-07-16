<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import TestCpn from './views/tests/test-cpn.vue'
import TestsMain from './views/tests/tests-main.vue'
export default defineComponent({
  components: {
    // TestsMain
  },
  name: 'App'
})
</script>

<style lang="less"></style>
