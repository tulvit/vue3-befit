import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEvaluationStore = defineStore('evaluatedPosts', () => {
  const evaluatedPosts = ref(new Map())
  function evaluate(id: Number, like: Boolean) {
    evaluatedPosts.value.set(id, like)
  }
  function remove(id: Number) {
    evaluatedPosts.value.delete(id)
  }
  return { evaluatedPosts, evaluate, remove }
})
