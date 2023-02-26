<template>
  <div class="courses">
    <h1>Courses</h1>
    <Course
      v-for="(course, index) in courses"
      :key="index"
      :title="course.title"
      :description="course.description"
      :price="course.price"
    />
  </div>
</template>

<script setup lang="ts">
import Course from "../views/Course.vue";

const courses = [
  {
    title: "Introduction to Vue 3",
    description: "Learn the basics of Vue 3 and build a simple application.",
    price: 49,
  },
  {
    title: "Advanced Vue 3",
    description: "Deep dive into the advanced features of Vue 3.",
    price: 99,
  },
  {
    title: "Vue 3 and TypeScript",
    description:
      "Learn how to use TypeScript with Vue 3 for better type safety.",
    price: 79,
  },
];
</script>

<style scoped>
.courses {
  max-width: 800px;
  margin: 0 auto;
}
</style>
