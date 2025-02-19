<template>
    <div class="note-content">
      <h1 class="text-black">{{ title }}</h1>
      <p class="text-gray-700">{{ text }}</p>
    </div>
  </template>
  
<script setup lang="ts">
defineProps({
  title: String,
  text: String,
});
</script>

  <style scoped>
  /* Ensure text color remains visible */
  h1 {
    color: black;
  }

  p {
    color: #333;
  }
  </style>
  