<template>
  <div class="user">
    <hy-form v-bind="searchFormConfig" v-model="formData"></hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import HyForm from '@/base-ui/form/src/form.vue'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })

    return {
      searchFormConfig,
      formData
    }
  }
})
</script>

<style scoped></style>
