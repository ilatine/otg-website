<template>
  <div class="contact-us">
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="full-name">Full name:</label>
        <input type="text" id="full-name" v-model="fullName" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea id="comment" v-model="comment"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const fullName = ref("");
const email = ref("");
const comment = ref("");

function submitForm() {
  // Code to submit the form
  console.log("Form submitted:", {
    fullName: fullName.value,
    email: email.value,
    comment: comment.value,
  });
  // Clear form fields
  fullName.value = "";
  email.value = "";
  comment.value = "";
}
</script>

<style scoped>
.contact-us {
  padding: 20px;
}

.contact-us h1 {
  margin-top: 0;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-top: 5px;
}

button[type="submit"] {
  background-color: #2f3181;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
