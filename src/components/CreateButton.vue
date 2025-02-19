<template>
    <button @click="goToCreate" class="bg-green-500 text-white px-4 py-2 rounded">
      Create
    </button>
  </template>
  
<script setup lang="ts">
import { defineEmits } from "vue";
  
const emit = defineEmits(["create"]);
  
const goToCreate = () => {
  emit("create");
};
</script>
  
  <style scoped>
  button:hover {
    opacity: 0.8;
  }
  </style>
  