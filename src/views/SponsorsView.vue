<template>
  <div class="sponsors-container">
    <h2 class="section-title">Our Sponsors</h2>
    <p class="section-description">
      We thank our generous sponsors who make this symposium possible.
    </p>

    <div class="sponsors-grid">
      <div v-for="(sponsor, index) in sponsors" :key="index" class="sponsor-card">
        <a :href="sponsor.website" target="_blank" class="sponsor-link">
          <div class="sponsor-logo-container">
            <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-logo" />
          </div>
          <h4 class="sponsor-name">{{ sponsor.name }}</h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const baseUrl = import.meta.env.BASE_URL;

// 赞助商数据
const sponsors = ref([
  {
    name: 'Inper',
    logo: `${baseUrl}sponsors/Inper.png`,
    website: 'https://inper.com/'
  },
  {
    name: 'NeuronXess',
    logo: `${baseUrl}sponsors/NeuroXess.png`,
    website: 'https://neuroxess.com/'
  },
  {
    name: 'ProBeCare',
    logo: `${baseUrl}sponsors/PBC.jpg`,
    website: 'https://www.probecare.com/'
  },
  {
    name: 'RWD',
    logo: `${baseUrl}sponsors/RWD.png`,
    website: 'https://www.rwdls.com/'
  }
]);
</script>

<style scoped>
.sponsors-container {
  padding: 2rem 1rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  padding-top: 40px;
  text-align: center;
  margin-bottom: 1rem;
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

.section-description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  color: #5a6a7e;
  line-height: 1.6;
}

.sponsors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.sponsor-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sponsor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.sponsor-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.sponsor-logo-container {
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.sponsor-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.sponsor-name {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #2c3e50;
  text-align: center;
}

.sponsorship-info {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
}

.sponsorship-info h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.sponsorship-info p {
  margin-bottom: 0;
  color: #5a6a7e;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .sponsors-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .sponsors-grid {
    grid-template-columns: 1fr;
  }
}
</style>
