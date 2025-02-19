<template>
  <div class="flex gap-2 p-4">
    <h1>Note NOT FOUND</h1>
    <SearchBar @search="handleSearch" />
    <CreateButton @create="goToCreate" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import SearchBar from "@/components/SearchBar.vue";
import CreateButton from "@/components/CreateButton.vue";

const router = useRouter();

const handleSearch = (query: string) => {
  router.push(`/note/${query}`);
};

const goToCreate = () => {
  router.push("/create");
};
</script>
