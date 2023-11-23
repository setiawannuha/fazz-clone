<script setup lang="ts">
import Navbar from "@/components/organisms/Navbar.vue";
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <Navbar />
  </header>
  <main class="min-h-screen pt-16 bg-white">
    <RouterView />
  </main>
</template>
