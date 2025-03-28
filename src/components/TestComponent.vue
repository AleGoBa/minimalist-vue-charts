<script setup>
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <button @click="increment" class="pepe-btn">
    Clicks: {{ count }}
  </button>
</template>

<style scoped>
.pepe-btn {
  background: #4caf50;
  color: #fff;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.pepe-btn:hover {
  background: #45a049;
}
</style>
