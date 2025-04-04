<template>
  <div class="bg-container">
    <div class="click-to-route" v-on:click="toHome"></div>
    <img class="bg" src="/bg.jpg" />
    <div class="bg-title-container">
      <div class="bg-title">THE FIRST SYMPOSIUM ON EMOTION AND COGNITION</div>
      <div class="bg-title"> WITH FOCUS ON GIVE UP, PERSEVERANCE,
        AND STRATEGIC BEHAVIOR IT</div>
    </div>
    <div class="bg-subtitle">
      April 10th, 2025
    </div>
    <div class="click-enter">
      click to enter...
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const toHome = () => {
  router.push({ name: 'Home' })
}
</script>



<style scoped>
.click-to-route {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 1000;
}

.bg-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 40px
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

.bg-title-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  /*   align-items: center; */
  justify-content: center;
  gap: 1rem
}

.bg-title {
  width: 80%;
  font-size: 80px;
  color: white;
  align-content: center;
}

.bg-subtitle {
  width: 80%;
  font-size: 40px;
  color: white;
  align-content: center;
}

.click-enter {
  padding-top: 40px;
  /* font-size: 80px; */
  color: white;
}
</style>
