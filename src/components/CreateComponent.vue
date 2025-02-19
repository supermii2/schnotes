<template>
    <div class="create-note">
      <h1>Create Post</h1>
      <form>
        <div>
          <label for="title">Title:</label>
          <input
            type="text"
            id="title"
            v-model="title"
            placeholder="Enter post title"
          />
        </div>
        <div>
          <label for="text">Text:</label>
          <textarea
            id="text"
            v-model="text"
            placeholder="Enter post text"
          ></textarea>
        </div>
        <button type="button" @click="handleSubmit" :disabled="!title || !text">
          Submit
        </button>
      </form>
    </div>
  </template>
  
<script lang="ts">
import { postRequest } from "@/api";
  
export default {
  data() {
    return {
      title: "",
      text: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const data = {
          title: this.title,
          text: this.text,
        };
        await postRequest("/writeData", data);
        this.$emit("note-created", this.title); // Emit event to parent
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  },
};
</script>
  
  <style scoped>
  .create-note {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  form div {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 15px;
    border: none;
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  