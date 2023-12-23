<script setup>
import { useHomeStore } from '@/stores/home.js'
const store = useHomeStore()
</script>

<template>
  <main>
    <TheWelcome />
    <h2>{{ store.name }}</h2>
    <button @click="store.setName">setName</button>
  </main>
</template>
