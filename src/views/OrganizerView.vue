<template>
  <div class="organizers-preview-container">
    <!-- 组织者部分 -->
    <h2 class="section-title">Organizing Committee</h2>
    <div class="organizers-grid">
      <div v-for="(organizer, index) in organizers" :key="index" class="organizer-card"
        @click="goToSpeakerDetail(organizer)">
        <div class="organizer-image-container">
          <img :src="organizer.image" :alt="organizer.name" class="organizer-image" />
        </div>
        <h3 class="organizer-name">{{ organizer.name }}</h3>
      </div>
    </div>
    <div class="section-divider"></div>
    <!-- 主办单位部分 -->
    <h2 class="section-title">Organizing Institutions</h2>
    <div class="institutions-container">
      <div v-for="(institution, index) in institutions" :key="'inst-' + index"
           class="institution-card"
           @click="goToInstitutionWebsite(institution.website)">
        <div class="institution-logo-container">
          <img :src="institution.logo" :alt="institution.name" class="institution-logo" />
        </div>
        <h3 class="institution-name-en">{{ institution.nameEn }}</h3>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const baseUrl = import.meta.env.BASE_URL;

// 主办单位数据 - 增加了网站链接
const institutions = [
  {
    name: '复旦大学脑科学研究院',
    nameEn: 'The Institutes of Brain Science, Fudan University',
    logo: `${baseUrl}institutions/IOBS.png`,
    website: 'https://iobs.fudan.edu.cn/iobsenglish/'
  },
  {
    name: '脑功能与脑疾病全国重点实验室',
    nameEn: 'State Key Laboratory of Medical Neurobiology',
    logo: `${baseUrl}institutions/SKLMN.png`,
    website: 'https://skmn.fudan.edu.cn/'
  },
  {
    name: '脑科学前沿科学中心',
    nameEn: 'MOE Frontiers Center for Brain Science',
    logo: `${baseUrl}institutions/MEFCBS.png`,
    website: 'https://fcbs.fudan.edu.cn/'
  }
];

const organizers = [
  {
    name: 'Yue Li',
    image: `${baseUrl}speaker/YueLi.jpg`,
  },
  {
    name: 'Jifan Shi',
    image: `${baseUrl}speaker/JifanShi.jpg`,
  },
  {
    name: 'Yu Gu',
    image: `${baseUrl}speaker/YuGu.jpg`,
  },
  {
    name: 'Tifei Yuan',
    image: `${baseUrl}speaker/TifeiYuan.jpg`,
  },
  {
    name: 'Nashat Abumaria',
    image: `${baseUrl}speaker/NashatAbumaria.jpg`,
  }
];

// 修复跳转功能
const goToSpeakerDetail = (organizer: { name: string }) => {
  const speakerName = organizer.name;
  setTimeout(() => {
    router.push({
      name: 'Speakers',
      query: { speaker: speakerName }
    });
  }, 50);
};

// 新增：跳转到机构网站
const goToInstitutionWebsite = (website: string) => {
  if (website) {
    // 在新标签页打开网站
    window.open(website, '_blank');
  }
};
</script>

<style scoped>
.organizers-preview-container {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  padding-top: 40px;
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

.section-divider {
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 3rem 0 1rem;
}

/* 主办单位样式 - 增加了鼠标指针和网站按钮 */
.institutions-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.institution-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
}

.institution-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.institution-logo-container {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.institution-logo {
  max-width: 80%;
  max-height: 100%;
  object-fit: contain;
}

.institution-name {
  font-size: 1.3rem;
  margin: 0.5rem 0;
  color: #2c3e50;
}

.institution-name-en {
  font-size: 1rem;
  color: #5a6a7e;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

/* 新增访问网站按钮样式 */
.visit-website-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  background-color: #3498db;
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: background-color 0.3s;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s, transform 0.3s, background-color 0.3s;
}

.institution-card:hover .visit-website-btn {
  opacity: 1;
  transform: translateY(0);
}

.visit-website-btn:hover {
  background-color: #2980b9;
}

.website-icon::before {
  content: "🔗";
}

/* 现有的组织者样式 */
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
}

.organizer-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
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

@media (max-width: 992px) {
  .institutions-container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .organizers-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .institutions-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .visit-website-btn {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .organizers-grid {
    grid-template-columns: 1fr;
  }

  .organizer-image-container {
    height: 250px;
  }

  .institution-logo-container {
    height: 100px;
  }
}
</style>
