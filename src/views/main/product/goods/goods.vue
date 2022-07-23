<template>
  <div class="goods">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      ref="pageContentRef"
    >
      <!-- 图片的动态插槽 -->
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        />
      </template>
      <!-- 原价的动态插槽 -->
      <template #oldPrice="scope"> {{ scope.row.oldPrice }}元 </template>
      <!-- 现价的动态插槽 -->
      <template #newPrice="scope"> {{ scope.row.newPrice }}元 </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent
  },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>
