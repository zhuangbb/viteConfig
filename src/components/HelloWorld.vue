<script setup>
import { ref } from 'vue'
console.log(import.meta.env)
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="box"></div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
