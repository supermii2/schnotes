<template>
  <div class="create-view">
    <CreateNote @note-created="redirectToNote" />
  </div>
</template>

<script lang="ts">
import CreateNote from "@/components/CreateComponent.vue";

export default {
  components: {
    CreateNote,
  },
  methods: {
    redirectToNote(title: string) {
      this.$router.push(`/note/${encodeURIComponent(title)}`);
    },
  },
};
</script>

<style scoped>
.create-view {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
</style>
