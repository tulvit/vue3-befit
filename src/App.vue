<script setup>
import getPosts from './composables/getPosts'
import PostsList from './components/posts/PostsList.vue'

const { posts, error, load } = getPosts()
load()
</script>

<template class="container">
  <header>
    <div class="wrapper">
      <h1 class="text-xl">Records</h1>
    </div>
  </header>

  <main class="container">
    <div v-if="posts.length">
      <PostsList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <div v-if="error">{{ error }}</div>
  </main>
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
