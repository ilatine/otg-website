<template>
  <div class="course">
    <h2>{{ props.title }}</h2>
    <p>{{ props.description }}</p>
    <p>Price: {{ props.price }} USD</p>
    <button @click="enroll">Enroll</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  description: String,
  price: Number,
});

const enroll = () => {
  alert("Enrolled in course " + title);
};
</script>

<style scoped>
.course {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
