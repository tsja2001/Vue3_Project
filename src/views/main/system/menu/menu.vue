<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="menu"
      ref="pageContentRef"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
