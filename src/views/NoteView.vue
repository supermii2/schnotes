<template>
  <div class="note-view" v-if="note">
    <NoteComponent :title="note?.title" :text="note?.text" />
  </div>
  <div v-else class="loading">
    <p>Loading...</p>
  </div>
</template>

<script lang="ts">
import { getRequest } from "@/api";
import NoteComponent from "@/components/NoteComponent.vue";

interface Note {
  title: string;
  text: string;
}

export default {
  components: { NoteComponent },
  data() {
    return {
      note: null as Note | null, // Explicitly typing the note property
    };
  },
  async created() {
    const title = this.$route.params.title;
    try {
      this.note = await getRequest("/getData", { title });
    } catch (error) {
      console.error("Error fetching note:", error);
      this.$router.push("/NoteNotFound");
    }
  },
};
</script>

<style scoped>
.note-view {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.loading {
  text-align: center;
  font-size: 18px;
  color: #888;
}
</style>
