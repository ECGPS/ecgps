<template>
  <div class="main-container">
    <div class="bg-container" :class="{ 'slide-up': showView }" v-on:click="toHome">
      <img class="bg" src="/bg.jpg" />
      <div class="bg-title-container">
        <div class="bg-title">THE FIRST SYMPOSIUM ON EMOTION AND COGNITION</div>
        <div class="bg-title"> WITH FOCUS ON GIVE UP, PERSEVERANCE,
          AND STRATEGIC BEHAVIOR IT</div>
      </div>
      <div class="bg-subtitle">
        April 10th, 2025
      </div>
      <div class="click-enter" :class="{ 'fade-out': showView }">
        click to enter...
      </div>
    </div>

    <transition name="fade-in-up">
      <div class="router-view-container" v-if="showView">
        <RouterView />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const showView = ref(false);
const router = useRouter();

const toHome = () => {
  if (!showView.value) {
    showView.value = true;
    // 导航到首页
    setTimeout(() => {
      router.push({ name: 'Main' });
    }, 500); // 等待动画开始后再导航
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  overflow-x: hidden;
}

.main-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.bg-container {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in-out;
  z-index: 10;
  cursor: pointer;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.bg-title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 80%;
  max-width: 1200px;
}

.bg-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
}

.bg-subtitle {
  font-size: 1.5rem;
  color: white;
  margin-top: 2rem;
}

.click-enter {
  position: absolute;
  bottom: 10%;
  color: white;
  font-size: 1.2rem;
  opacity: 1;
  transition: opacity 0.5s ease;
}

.slide-up {
  transform: translateY(-100%);
}

.fade-out {
  opacity: 0;
}

.router-view-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 5;
}

/* 过渡效果 */
.fade-in-up-enter-active {
  transition: all 1s ease-out;
}

.fade-in-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-in-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
