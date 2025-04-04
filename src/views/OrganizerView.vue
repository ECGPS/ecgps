<template>
  <div class="organizers-preview-container">
    <h2 class="section-title">Organizers</h2>
    <div class="organizers-grid">
      <div v-for="(organizer, index) in organizers" :key="index" class="organizer-card"
        @click="goToSpeakerDetail(organizer)">
        <div class="organizer-image-container">
          <img :src="organizer.image" :alt="organizer.name" class="organizer-image" />
        </div>
        <h3 class="organizer-name">{{ organizer.name }}</h3>
        <!-- 移除 title 显示 -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

// 只展示5位组织者 - 确保名称与 speakers 中的完全匹配
const organizers = [
  {
    name: 'Yue Li', // 确保名称与SpeakersView.vue中的名称完全匹配
    image: '/yueli.jpg',
  },
  {
    name: 'Jifan Shi', // 修正前面的空格
    image: '/JifanShi.png',
  },
  {
    name: 'Yu Gu', // 修正前面的空格
    image: '/YuGu.jpg',
  },
  {
    name: 'Tifei Yuan',
    image: '/TifeiYuan.jpg',
  },
  {
    name: 'Nashat Abumaria',
    image: '/NashatAbumaria.jpg',
  }
];

// 修复跳转功能
const goToSpeakerDetail = (organizer: { name: string }) => {
  // 为Jifan Shi和Yu Gu特别处理，因为SpeakersView中有前导空格
  const speakerName = organizer.name;

  // 将跳转延迟一点，确保路由完成
  setTimeout(() => {
    router.push({
      name: 'Speakers',
      query: { speaker: speakerName }
    });
  }, 50);
};

</script>

<style scoped>
.organizers-preview-container {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #2c3e50;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #2c3e50;
}

.organizers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.organizer-card {
  width: auto;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  text-align: center;
  padding-bottom: 1rem;
}

.organizer-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.organizer-image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
  /* 添加相对定位 */
}

/* 修改图片裁剪方式，裁剪下部而非顶部 */
.organizer-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  /* 确保图片从顶部开始显示 */
  transition: transform 0.5s ease;
}

.organizer-card:hover .organizer-image {
  transform: scale(1.05);
}

.organizer-name {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #2c3e50;
  padding: 0 1rem;
}

.view-all-button {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #1a2a3a;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .organizers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .organizers-grid {
    grid-template-columns: 1fr;
  }

  .organizer-image-container {
    height: 250px;
  }
}
</style>
