<template>
  <div class="attendee-info-container">
    <h2 class="section-title">Attendee Information</h2>
    <p class="section-description">
      Important information for attendees of the First Symposium on Emotion and Cognition.
    </p>

    <!-- 选项卡导航 -->
    <div class="info-tabs">
      <button v-for="tab in tabs" :key="tab.id" class="tab-button" :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id">
        {{ tab.title }}
      </button>
    </div>

    <!-- 入校申请部分 -->
    <div v-show="activeTab === 'campus-access'" class="info-content">
      <div class="info-section">
        <h3>Campus Access Application</h3>
        <div class="section-content">
          <div class="text-content">
            <p>To enter Fudan University campus, all external visitors need to apply for access permission in advance.
              Please follow these steps:</p>

            <ol>
              <li><strong>Scan QR Code:</strong> Use the QR code provided to access the application form.</li>
              <li><strong>Fill in Information:</strong> Complete your personal information including name, ID number,
                phone, and purpose of visit.</li>
              <li><strong>Submit Application:</strong> Submit your application at least 24 hours before your planned
                visit.</li>
              <li><strong>Verification:</strong> Once approved, you'll receive a digital pass via SMS or email.</li>
              <li><strong>Campus Entry:</strong> Show your digital pass and ID at the campus gate.</li>
            </ol>

            <div class="important-note">
              <p><strong>Important:</strong> Applications must be submitted no later than April 7, 2025. Please bring
                your personal ID that matches the information in your application.</p>
            </div>
          </div>

          <!-- 修改为固定在右侧的QR码 -->
          <div class="qr-code-container">
            <img :src="`${baseUrl}info/QRcode.png`" alt="Campus Access QR Code" class="qr-code" />
            <p class="qr-caption">Scan to apply for campus access</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 会议建筑部分 -->
    <div v-show="activeTab === 'venue'" class="info-content">
      <div class="info-section">
        <h3>Conference Venue</h3>
        <div class="section-content">
          <div class="text-content">
            <p>The symposium will be held at the <strong>Research Building 2#</strong>, located in <strong>Fenglin
                Campus, Fudan University</strong>, at <strong>131 Dong'an
                Road, Xuhui District, Shanghai</strong>.</p>

            <h4>Key Location:</h4>
            <ul>
              <li><strong>Main Sessions:</strong> Auditorium (B1 Floor)</li>
            </ul>

            <p>The entire symposium will take place in the auditorium located on the B1 floor (basement level). Signs
              will be posted to guide you to the venue. Staff members will be available to assist
              you with directions.</p>
          </div>

          <div class="map-container" @click="showMapOverlay = true">
            <img :src="`${baseUrl}info/map.png`" alt="Campus Map" class="campus-map" />
            <div class="zoom-hint"><i class="zoom-icon"></i> Click to enlarge map</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 交通信息部分 -->
    <div v-show="activeTab === 'transportation'" class="info-content">
      <div class="info-section">
        <h3>Transportation</h3>
        <div class="transportation-grid">
          <div class="transport-card">
            <h4>By Subway</h4>
            <p>Take Line 7/9 to <strong>Zhaojiabang Station</strong> (Exit 3). Then take a 10-minute walk to Fudan
              University Fenglin Campus.</p>
            <p class="fare-info">Fare: ¥4-7 depending on distance</p>
          </div>

          <div class="transport-card">
            <h4>By Bus</h4>
            <p>Bus routes 50, 218,303 all have stops near 131 Dong'an Road.</p>
            <p class="fare-info">Fare: ¥2</p>
          </div>

          <div class="transport-card">
            <h4>By Taxi</h4>
            <p>Show this address to the driver: <strong>上海市徐汇区东安路131号</strong></p>
            <p>From Pudong Airport: ~60 min (¥160-200)</p>
            <p>From Hongqiao Airport: ~45 min (¥100-130)</p>
            <p>From Shanghai Railway Station: ~30 min (¥40-60)</p>
          </div>

          <!--           <div class="transport-card">
            <div class="transport-icon car-icon"></div>
            <h4>By Car</h4>
            <p><strong>Address:</strong> 138 Yixueyuan Road, Yangpu District, Shanghai</p>
            <p><strong>Parking:</strong> Limited parking is available at the south gate of the campus. Daily rate is
              ¥20.</p>
            <p><strong>Note:</strong> Traffic around campus can be heavy during rush hours (7:30-9:30am, 5:00-7:00pm).
            </p>
          </div> -->
        </div>

        <!--         <div class="travel-tips">
          <h4>Travel Tips</h4>
          <ul>
            <li>Shanghai Transportation Card (交通卡) can be used on all public transportation and is available at any
              subway station.</li>
            <li>Major ride-hailing services like DiDi are available throughout Shanghai.</li>
            <li>Consider traffic conditions when planning your journey, especially during rush hours.</li>
            <li>Prepare cash for taxis as some drivers might not accept mobile payments from foreign apps.</li>
          </ul>
        </div> -->
      </div>
    </div>

    <!-- 仅保留地图的弹出层 -->
    <div v-if="showMapOverlay" class="image-overlay" @click="showMapOverlay = false">
      <div class="overlay-content map-overlay-content" @click.stop>
        <img :src="`${baseUrl}info/map.png`" alt="Campus Map" class="enlarged-image" />
        <div class="overlay-caption">Campus Map</div>
        <button class="close-button" @click="showMapOverlay = false">&times;</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const baseUrl = import.meta.env.BASE_URL;

// 选项卡数据
const tabs = [
  { id: 'campus-access', title: 'Campus Access' },
  { id: 'venue', title: 'Venue & Map' },
  { id: 'transportation', title: 'Transportation' }
];

// 当前活动选项卡
const activeTab = ref('campus-access');

// 仅保留地图弹窗的状态
const showMapOverlay = ref(false);
</script>

<style scoped>
.attendee-info-container {
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

/* 选项卡样式 */
.info-tabs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 1rem;
}

.tab-button {
  background: none;
  border: none;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  color: #5a6a7e;
  border-radius: 5px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tab-button:hover {
  background-color: #f5f5f5;
  color: #2c3e50;
}

.tab-button.active {
  background-color: #3498db;
  color: white;
}

/* 内容区域样式 */
.info-content {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  margin-bottom: 2rem;
}

.info-section {
  padding: 2rem;
}

.info-section h3 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eaeaea;
}

.info-section h4 {
  color: #3498db;
  font-size: 1.2rem;
  margin: 1.5rem 0 0.8rem;
}

.info-section p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #5a6a7e;
}

.info-section ul,
.info-section ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  color: #5a6a7e;
}

.info-section li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.section-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

/* 修改后的QR码容器样式 - 去掉点击放大功能 */
.qr-code-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
}

.qr-code-wrapper {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 2rem;
}

.qr-code {
  width: auto;
  height: 100%;
  border: 1px solid #eaeaea;
  object-fit: contain;
  background-color: white;
}

.qr-caption {
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #666;
  text-align: center;
}

.important-note {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #fff8dc;
  border-left: 4px solid #ffd700;
  border-radius: 4px;
}

/* 会议地图样式 - 保留点击提示 */
.map-container {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
}

.map-container:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.campus-map {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: block;
}

.zoom-hint {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.zoom-icon::before {
  content: "🔍";
}

/* 地图放大弹窗样式 - 仅保留地图弹窗 */
.image-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
}

.overlay-content {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  position: relative;
  cursor: default;
}

.map-overlay-content {
  max-width: 90%;
  max-height: 90%;
}

.enlarged-image {
  max-width: 100%;
  max-height: calc(90vh - 60px);
  object-fit: contain;
  display: block;
}

.overlay-caption {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #333;
}

.close-button {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e74c3c;
  color: white;
  border: none;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.close-button:hover {
  background-color: #c0392b;
}

/* 交通信息样式 */
.transportation-grid {
  display: flex;
  /*   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem; */
  margin-bottom: 2rem;
  flex-direction: row;
  justify-content: space-between;
}

.transport-card {
  width: 300px;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}


.fare-info {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
}

.travel-tips {
  background-color: #e9f7fe;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.travel-tips h4 {
  color: #2c3e50;
  margin-top: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section-content {
    grid-template-columns: 1fr;
  }

  .info-tabs {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 1rem;
    justify-content: flex-start;
  }

  .tab-button {
    white-space: nowrap;
    padding: 0.7rem 1rem;
  }

  .transportation-grid {
    grid-template-columns: 1fr;
  }

  .qr-code {
    width: 220px;
    height: 220px;
  }

  .qr-code-wrapper {
    position: relative;
    top: 0;
  }
}

@media (max-width: 480px) {
  .qr-code {
    width: 200px;
    height: 200px;
  }
}
</style>
