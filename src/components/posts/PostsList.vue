<script setup>
import SinglePost from './SinglePost.vue'

const props = defineProps(['posts'])
console.table(props.posts)
</script>
<template>
  <div class="post-list">
    <h2>PostsList component</h2>
    <div v-for="post in props.posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>
