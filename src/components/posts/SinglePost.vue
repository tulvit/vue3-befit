<script setup lang="ts">
import { useEvaluationStore } from '@/stores/evaluation'
const postEvaluation = useEvaluationStore()
const props = defineProps(['post'])
const rate = function (id: number, value: any) {
  postEvaluation.evaluate(id, value)
}
const remove = function (id: number) {
  postEvaluation.remove(id)
}
const postEvaluated = postEvaluation.evaluatedPosts.has(props.post.id)
</script>

<template>
  <div class="p-2 mb-3 bg-slate-100">
    <h3 class="text-lg capitalize">{{ props.post.title }}</h3>
    <template v-if="!postEvaluated">
      <button
        class="py-1 px-2 text-white bg-green-600 hover:bg-green-700 lowercase font-bold rounded-l"
        @click="rate(props.post.id, true)"
      >
        Like
      </button>
      <button
        class="py-1 px-2 text-white bg-red-600 hover:bg-red-700 lowercase font-bold rounded-r"
        @click="rate(props.post.id, false)"
      >
        Dislike
      </button>
    </template>
    <template v-else>
      <button
        class="py-1 px-2 text-white bg-gray-400 hover:bg-gray-600 lowercase font-bold rounded"
        @click="remove(props.post.id)"
      >
        unvote
      </button>
    </template>
  </div>
</template>

<style scoped></style>
