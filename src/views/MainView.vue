<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <nav class="navbar">
      <div class="navbar-container">
        <!-- 左侧标题 -->
        <div class="navbar-logo">
          <h1>THE FIRST SYMPOSIUM ON EMOTION AND COGNITION</h1>
        </div>

        <!-- 右侧导航区 -->
        <div class="navbar-menu">
          <router-link :to="{ name: 'Home' }" class="navbar-item"
            :class="{ 'active': $route.name === 'Home' }">Home</router-link>
          <router-link :to="{ name: 'Organizer' }" class="navbar-item"
            :class="{ 'active': $route.name === 'Organizer' }">Organizer</router-link>
          <router-link :to="{ name: 'Speakers' }" class="navbar-item"
            :class="{ 'active': $route.name === 'Speakers' }">Speakers</router-link>
          <router-link :to="{ name: 'Agenda' }" class="navbar-item"
            :class="{ 'active': $route.name === 'Agenda' }">Agenda</router-link>
          <!--           <router-link :to="{ name: 'Sponsors' }" class="navbar-item"
            :class="{ 'active': $route.name === 'Sponsors' }">Sponsors</router-link>
          <router-link :to="{ name: 'FAQ' }" class="navbar-item"
            :class="{ 'active': $route.name === 'FAQ' }">FAQ</router-link> -->

          <!-- 移动端菜单按钮 -->
          <button class="menu-toggle" @click="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- 移动端下拉菜单 -->
      <div class="mobile-menu" :class="{ 'is-active': mobileMenuOpen }">
        <router-link :to="{ name: 'Home' }" class="mobile-item" :class="{ 'active': $route.name === 'Home' }"
          @click="closeMobileMenu">Home</router-link>
        <router-link :to="{ name: 'Organizer' }" class="mobile-item" :class="{ 'active': $route.name === 'Organizer' }"
          @click="closeMobileMenu">Organizer</router-link>
        <router-link :to="{ name: 'Speakers' }" class="mobile-item" :class="{ 'active': $route.name === 'Speakers' }"
          @click="closeMobileMenu">Speakers</router-link>
        <router-link :to="{ name: 'Agenda' }" class="mobile-item" :class="{ 'active': $route.name === 'Agenda' }"
          @click="closeMobileMenu">Agenda</router-link>
        <!--  <router-link :to="{ name: 'Sponsors' }" class="mobile-item" :class="{ 'active': $route.name === 'Sponsors' }"
          @click="closeMobileMenu">Sponsors</router-link>
        <router-link :to="{ name: 'FAQ' }" class="mobile-item" :class="{ 'active': $route.name === 'FAQ' }"
          @click="closeMobileMenu">FAQ</router-link> -->
      </div>
    </nav>
    <div class="main-router-view-container">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<style scoped>
.home {
  max-height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 80px;
  max-width: 1400px;
  margin: 0 auto;
}

.navbar-logo h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  letter-spacing: 1px;
}

.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-item {
  margin-left: 2rem;
  text-decoration: none;
  color: #555;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;
  padding-bottom: 5px;
}

.navbar-item:hover {
  color: #000;
}

.navbar-item::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000;
  transition: width 0.3s ease;
}

.navbar-item:hover::after,
.navbar-item.active::after {
  width: 100%;
}

.navbar-item.active {
  color: #000;
}

/* 移动端菜单按钮 */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1100;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #333;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}

/* 移动端下拉菜单 */
.mobile-menu {
  display: none;
  flex-direction: column;
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 999;
}

.mobile-menu.is-active {
  transform: translateY(0);
  opacity: 1;
}

.mobile-item {
  padding: 1rem 2rem;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  border-bottom: 1px solid #f0f0f0;
}

.mobile-item:last-child {
  border-bottom: none;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .navbar-item {
    margin-left: 1.5rem;
  }
}

@media (max-width: 768px) {
  .navbar-menu .navbar-item {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .mobile-menu {
    display: flex;
  }
}

.main-router-view-container {
  flex-grow: 1;
  overflow: auto;
}

/* 页面内容样式 */
.content {
  max-width: 1200px;
  margin: 120px auto 0;
  padding: 0 2rem;
}
</style>
