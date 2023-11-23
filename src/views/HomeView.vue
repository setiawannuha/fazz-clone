<script setup lang="ts">
import { state } from "@/store/user/user.store";
</script>

<template>
  <main>
    <h1>Home</h1>
    <p>{{ state.data.email }}</p>
    <p>{{ state.data.token }}</p>
  </main>
</template>
