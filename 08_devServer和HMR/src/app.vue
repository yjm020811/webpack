<template>
  <div class="count">{{ count }}</div>
</template>
<script setup>
import { ref } from "vue";
const count = ref("你好");
</script>
<style scoped>
.count {
  color: red;
  font-size: 20px;
}
</style>
