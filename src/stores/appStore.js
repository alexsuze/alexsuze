import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const appName = ref('Alex Portfolio')
  const isLoading = ref(false)

  function setLoading(value) {
    isLoading.value = value
  }

  return {
    appName,
    isLoading,
    setLoading
  }
})
