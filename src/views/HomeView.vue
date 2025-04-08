<template>
  <div class="home-container">
    <!-- 顶部横幅区 -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="main-title">First Symposium on Emotion and Cognition</h1>
        <h1 class="sub-title">Focus on Give Up, Perseverance, and Strategic Behavior</h1>
        <div class="event-details">
          <div class="event-detail"><i class="icon-calendar"></i> April 9-11, 2025</div>
          <div class="event-detail"><i class="icon-location"></i> School of Medicine, Fudan University, Shanghai</div>
        </div>
      </div>
    </div>

    <!-- 内容区 -->
    <div class="content-section">
      <div class="description-section">
        <h3>About the Symposium</h3>
        <div class="divider-small"></div>

        <p>This symposium aims to bring together leading neuroscientists, researchers, and young scholars from around
          the globe to explore the intricate interplay between emotion and cognition, with a particular focus on the
          themes of give up, perseverance, and strategic behavior. These topics are not only central to understanding
          human decision-making and adaptive behavior but also hold significant implications for mental health,
          education, and artificial intelligence.</p>

        <p>The symposium will feature a diverse program, including keynote presentations, interactive discussion
          sessions, and opportunities for one-on-one or group meetings. We are honored to host an exceptional lineup of
          speakers, including the academy member Dr. Amy Arnsten (Yale University), Dr. Haruhiko Bito (Tokyo
          University), and many other distinguished experts from institutions such as Janelia Research Campus, the
          Polish Academy of Sciences, Jiao Tong University, ShanghaiTech University, and the Chinese Academy of
          Sciences.</p>

        <p>In addition to fostering interdisciplinary and international collaborations, this symposium will serve as a
          platform for students, postdocs, and early-career scientists to engage in meaningful scientific dialogue with
          established leaders in the field. By initiating this academic activity, we hope to draw attention to the
          unique and underexplored topic of give up/perseverance behavior among researchers and the broader public,
          ultimately advancing our understanding of the brain and behavior.</p>

        <p>We are thrilled to welcome you to Shanghai, a city that seamlessly blends tradition and innovation, and to
          the Institutes of Brain Science at Fudan University, a hub for cutting-edge research in neuroscience.</p>

        <p class="highlight-text">We look forward to your participation and contributions to this pioneering event.</p>
      </div>

      <div class="organizers-section">
        <h3>Organizing Committee</h3>
        <div class="divider-small"></div>
        <p>Dr. Na De, Dr. Yu Gu, Dr. Yue Li, Dr. Jifen Shi (Fudan University) and Dr. Tifei Yuan (Shanghai Jiao Tong
          University).</p>
      </div>
    </div>
    <div class="copyright-info">
      <p>© 2025 First Symposium on Emotion and Cognition. All rights reserved. Designed & Developed by Zhou Sun</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// 可以添加页面计时器或其他交互功能
import { onMounted } from 'vue';

onMounted(() => {
  // 添加页面加载动画或其他效果
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.classList.add('fade-in');
  }
});
</script>

<style scoped>
/* 基础样式 */
.home-container {
  max-width: 100%;
  margin: 0 auto;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* 顶部横幅区样式 */
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/bg.jpg') center/cover no-repeat;
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.fade-in {
  opacity: 1;
}

.hero-content {
  max-width: 60%;
  margin: 0 auto;
}

.main-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.sub-title {
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 2rem;
  /*   opacity: 0.9; */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.199);
}

.event-details {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.event-detail {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
}

/* 内容区样式 */
.content-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
}

.welcome-section {
  text-align: center;
  margin-bottom: 3rem;
}

h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.divider {
  width: 80px;
  height: 4px;
  background-color: #3498db;
  margin: 0 auto 2rem;
}

.divider-small {
  width: 60px;
  height: 3px;
  background-color: #3498db;
  margin: 0 0 1.5rem;
}

.intro-text {
  font-size: 1.2rem;
  max-width: 900px;
  margin: 0 auto;
}

/* 信息卡片网格 */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.info-card {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 2rem;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #3498db;
}

/* 使用 Unicode 符号作为图标占位符 */
.icon-date::before {
  content: "📅";
}

.icon-goal::before {
  content: "🎯";
}

.icon-format::before {
  content: "📝";
}

/* 描述部分 */
.description-section {
  margin: 3rem 0;
}

p {
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
}

.highlight-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
  margin: 2rem 0;
}

.organizers-section {
  margin: 3rem 0;
}

/* CTA 部分 */
.cta-section {
  text-align: center;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.cta-button:hover {
  background-color: #2980b9;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.secondary-button {
  display: inline-block;
  background-color: transparent;
  color: #3498db;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid #3498db;
  transition: all 0.3s;
}

.secondary-button:hover {
  background-color: #3498db;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.copyright-info {
  /* 移除固定定位 */
  position: relative;
  margin-top: 3rem;
  padding: 0.5rem 0;
  background-color: #f8f9fa;
  font-size: 0.85rem;
  color: #666;
  text-align: center;
  border-top: 1px solid #e0e0e0;
  width: 100%;
}

.copyright-info p {
  margin: 0 0 3px 0;
  font-size: 0.85rem;
}

.credit-link {
  color: #3498db;
  text-decoration: none;
  transition: color 0.2s;
}

.credit-link:hover {
  color: #2980b9;
  text-decoration: underline;
}

/* 移动设备上的样式保持一致 */
@media (max-width: 768px) {
  .copyright-info {
    /* 已经是静态位置，不需要更改 */
    margin-top: 2rem;
    padding: 1rem 0;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-title {
    font-size: 2.2rem;
  }

  .sub-title {
    font-size: 1.4rem;
  }

  .event-detail {
    font-size: 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 4rem 1rem;
  }

  .main-title {
    font-size: 1.8rem;
  }

  .sub-title {
    font-size: 1.2rem;
  }

  .event-details {
    flex-direction: column;
    gap: 1rem;
  }

  .cta-section {
    flex-direction: column;
    gap: 1rem;
  }

  .cta-button,
  .secondary-button {
    width: 100%;
  }
}
</style>
