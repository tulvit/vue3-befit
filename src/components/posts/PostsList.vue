<script setup>
import SinglePost from './SinglePost.vue'

const props = defineProps(['posts'])
</script>
<template>
  <div class="post-list">
    <div v-for="post in props.posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>
