<script setup>
const props = defineProps(['post'])
</script>

<template>
  <div class="single-post">
    <h3>{{ props.post.title }}</h3>
    <button>Fav</button>
    <button>Don't like</button>
  </div>
</template>

<style scoped>
.single-post {
  background: rgb(248, 241, 241);
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
}
h3 {
  text-transform: capitalize;
}
</style>
