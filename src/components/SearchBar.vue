<template>
    <div class="flex gap-2 p-4">
      <input
        v-model="searchQuery"
        @keyup.enter="searchNote"
        type="text"
        placeholder="Search notes..."
        class="border p-2 rounded w-64"
      />
      <button @click="searchNote" class="bg-blue-500 text-white px-4 py-2 rounded">
        Go
      </button>
    </div>
  </template>
  
<script setup lang="ts">
import { ref } from "vue";
  
const searchQuery = ref("");
const emit = defineEmits(["search"]);
  
const searchNote = () => {
  if (searchQuery.value.trim()) {
    emit("search", searchQuery.value.trim());
  }
};
</script>
  
  <style scoped>
  button:hover {
    opacity: 0.8;
  }
  </style>
  