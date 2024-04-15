<script setup>
import SinglePost from './SinglePost.vue'

const props = defineProps(['posts', 'page'])
</script>
<template>
  <div class="post-list">
    <div
      v-for="post in page ? props.posts.slice((page - 1) * 10, page * 10) : props.posts"
      :key="post.id"
    >
      <SinglePost :post="post" />
    </div>
  </div>
</template>
