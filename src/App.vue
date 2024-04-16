<script setup lang="ts">
import { ref, computed } from 'vue'
import getPosts from './composables/getPosts'
import PostsList from './components/posts/PostsList.vue'
import { useEvaluationStore } from '@/stores/evaluation'

interface post {
  id: number
  title: string
}
const { posts, error, load } = getPosts()
const evaluatedPosts = useEvaluationStore()
const notEvaluatedPosts = computed(() => {
  return posts.value.filter((post: post) => !evaluatedPosts.evaluatedPosts.has(post.id))
})
const likedPosts = computed(() => {
  return posts.value.filter((post: post) => evaluatedPosts.evaluatedPosts.get(post.id) === true)
})
const dislikedPosts = computed(() => {
  return posts.value.filter((post: post) => evaluatedPosts.evaluatedPosts.get(post.id) === false)
})
load()

const page = ref(1)
const pages = computed(() => Math.ceil(notEvaluatedPosts.value.length / 5))
</script>

<template class="container">
  <!-- <header>
    <div class="wrapper">
      <h1 class="text-xl">Records</h1>
    </div>
  </header> -->

  <main class="container">
    <div v-if="notEvaluatedPosts.length">
      <PostsList :posts="notEvaluatedPosts" :page="page" />
      <v-pagination :length="pages" v-model="page"></v-pagination>
    </div>
    <div v-else>Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div class="grid grid-cols-2 gap-4">
      <div class="divide-y-8 divide-green-500">
        <h1 class="text-lg">Liked</h1>
        <PostsList :posts="likedPosts" />
      </div>
      <div class="divide-y-8 divide-red-500">
        <h1 class="text-lg">Disliked</h1>
        <PostsList :posts="dislikedPosts" />
      </div>
    </div>
  </main>
</template>
