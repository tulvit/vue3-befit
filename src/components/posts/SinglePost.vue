<script setup>
const props = defineProps(['post'])
</script>

<template>
  <div class="p-2 mb-3 bg-slate-100">
    <h3 class="text-lg capitalize">{{ props.post.title }}</h3>
    <button>Fav</button>
    <button>Don't like</button>
  </div>
</template>

<style scoped></style>
