<script setup>
import { computed } from 'vue'
import getPosts from './composables/getPosts'
import PostsList from './components/posts/PostsList.vue'
import { useEvaluationStore } from '@/stores/evaluation'

const { posts, error, load } = getPosts()
const evaluatedPosts = useEvaluationStore()
const notEvaluatedPosts = computed(() => {
  return posts.value.filter((post) => !evaluatedPosts.evaluatedPosts.has(post.id))
})
const likedPosts = computed(() => {
  return posts.value.filter((post) => evaluatedPosts.evaluatedPosts.get(post.id) === true)
})
const dislikedPosts = computed(() => {
  return posts.value.filter((post) => evaluatedPosts.evaluatedPosts.get(post.id) === false)
})
load()
</script>

<template class="container">
  <header>
    <div class="wrapper">
      <h1 class="text-xl">Records</h1>
    </div>
  </header>

  <main class="container">
    <div v-if="notEvaluatedPosts.length">
      <PostsList :posts="notEvaluatedPosts" />
    </div>
    <div v-else>Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div class="grid grid-cols-2 gap-4">
      <div class="divide-y-8 divide-green-500">
        <h1 class="text-lg">Liked posts</h1>
        <PostsList :posts="likedPosts" />
      </div>
      <div class="divide-y-8 divide-red-500">
        <h1 class="text-lg">Disliked posts</h1>
        <PostsList :posts="dislikedPosts" />
      </div>
    </div>
  </main>
</template>
