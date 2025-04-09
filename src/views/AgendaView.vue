<template>
  <div class="agenda-container">
    <h1 class="agenda-title">Conference Schedule</h1>
    <p class="agenda-subtitle">April 10th, 2025</p>

    <div class="agenda-tabs">
      <button v-for="(day, index) in agenda" :key="day.date" :class="['tab-btn', { active: activeTabIndex === index }]"
        @click="activeTabIndex = index">
        {{ day.date }}
      </button>
    </div>

    <div class="agenda-content">
      <div class="agenda-day" v-if="activeDay">

        <div class="timeline">
          <div v-for="(session, index) in activeDay.sessions" :key="index"
            :class="['timeline-item', { 'break-item': session.type === 'break' }]">
            <div class="timeline-time">
              <span class="time">{{ session.time }}</span>
            </div>

            <div class="timeline-content" :class="getSessionClass(session.type)">
              <div class="session-type" v-if="session.type">{{ session.type }}</div>
              <h3 class="session-title">{{ session.title }}</h3>

              <div class="session-speakers" v-if="session.speakers && session.speakers.length">
                <div v-for="(speaker, idx) in session.speakers" :key="idx" class="speaker">
                  <img v-if="speaker.image" :src="speaker.image" :alt="speaker.name" class="speaker-image">
                  <div class="speaker-info">
                    <!-- 添加点击事件，导航到对应的演讲者详情 -->
                    <div class="speaker-name" @click="navigateToSpeaker(speaker.name)" :class="{ clickable: true }">
                      {{ speaker.name }}
                    </div>
                    <!-- 移除了所属机构显示 -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 添加下载日程表按钮 -->
    <div class="agenda-download">
      <a :href="`${baseUrl}files/ECGPS-schedule.pdf`" download class="download-btn">
        <span class="download-icon"></span>
        <span>Download Full Schedule</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const baseUrl = import.meta.env.BASE_URL;
const activeTabIndex = ref(0);



const agenda = [
  {
    date: "A.M.",
    sessions: [
      {
        time: "8:00 - 8:30",
        type: "opening",
        title: "Gathering and Welcoming",
      },
      {
        time: "8:30 - 8:40",
        type: "opening",
        title: "Opening",
      },
      {
        time: "8:40 - 9:20",
        type: "keynote",
        title: "Stress and fatigue impair prefrontal cortical function needed for perseverance and higher cognition",
        speakers: [
          {
            name: "Amy Arnsten",
            affiliation: "Academy member, Goldman-Rakic Prize Recipient, School of Medicine, Yale University",
            image: `${baseUrl}agenda/AmyArnsten.png`
          }
        ],
      },
      {
        time: "9:20 - 10:00",
        type: "keynote",
        title: "Towards understanding complex neural dynamics via multiplex imaging of neuronal activity and signaling",
        speakers: [
          {
            name: "Haruhiko Bito",
            affiliation: "Professor and Chair, Department of Neurochemistry, division of Neuroscience, Tokyo University",
            image: `${baseUrl}agenda/HaruhikoBito.png`
          }
        ],
      },
      {
        time: "10:00 - 10:20",
        type: "keynote",
        title: "Hole-brain and whole-body computations for behavior and physiology",
        speakers: [
          {
            name: "Misha Benjamin Ahrens",
            affiliation: "Howard Hughes Medical Institute, Janelia Research Campus",
            image: `${baseUrl}agenda/MishaBenjaminAhrens.png`
          }
        ]
      },
      {
        time: "10:20 - 10:35",
        type: "break",
        title: "Coffee Break",
      },
      {
        time: "10:35 - 10:55",
        type: "talk",
        title: "Modeling Reinforcement-Based Cognitive Biases in Animal Models of Mental Disorders and Addictions",
        speakers: [
          {
            name: "Rafał Ryguła",
            affiliation: "Maj Institute of Pharmacology Polish Academy of Sciences",
            image: `${baseUrl}agenda/RafałRyguła .png`
          }
        ],
      },
      {
        time: "10:55 - 11:15",
        type: "talk",
        title: "The posterior parietal cortex mediates rarity-induced decision bias and learning under uncertainty",
        speakers: [
          {
            name: "Yang Yang",
            affiliation: "School of Life Science and Technology, ShanghaiTech University, State Key Laboratory of Advanced Medical Materials and Devices",
            image: `${baseUrl}agenda/YangYang.png`
          }
        ],
      },
      {
        time: "11:15 - 11:35",
        type: "talk",
        title: "Behavioral switch from action to no action when facing prolonged uncontrollability or repeated failure",
        speakers: [
          {
            name: "Nashat Abumaria",
            affiliation: "State Key Laboratory of Medical Neurobiology, MOE Frontiers Center for Brain Science, Institutes of Brain Science, Fudan University",
            image: `${baseUrl}agenda/NashatAbumaria.png`
          }
        ],
      },
      {
        time: "11:35 - 13:00",
        type: "meal",
        title: "Lunch break",
      },
    ]
  },
  {
    date: "P.M.",
    sessions: [
      {
        time: "13:00 - 13:20",
        type: "talk",
        title: "The Modulation of Persevering Drug Administration by Serotonin",
        speakers: [
          {
            name: "Yue Li",
            affiliation: "State Key Laboratory of Medical Neurobiology, MOE Frontiers Center for Brain Science, Institutes of Brain Science, Fudan University",
            image: `${baseUrl}agenda/YueLi.png`
          }
        ],
      },
      {
        time: "13:20 - 13:40",
        type: "talk",
        title: "Chronic Stress Reinforces the BLA-mPFC-LHb Neural Circuit Initiating Depression",
        speakers: [
          {
            name: "Wenzhi Sun",
            affiliation: "Chinese Institute for Brain Research, College of Basic Sciences, Capital Medical University",
            image: `${baseUrl}agenda/WenzhiSun.png`
          }
        ],
      },
      {
        time: "13:40 - 14:00",
        type: "talk",
        title: "Coordinated hippocampal ensemble dynamics underlie reliable representations of perception and memory",
        speakers: [
          {
            name: "Jingfeng Zhou",
            affiliation: "State Key Laboratory of Cognitive Neuroscience and Learning, Beijing Normal University & Chinese Institute for Brain Research, Beijing",
            image: `${baseUrl}agenda/JingfengZhou.png`
          }
        ],
      },
      {
        time: "14:00 - 14:20",
        type: "talk",
        title: "SimSort: A Powerful Framework for Spike Sorting by Large-Scale Electrophysiology Simulation",
        speakers: [
          {
            name: "Yu Gu",
            affiliation: "State Key Laboratory of Medical Neurobiology, MOE Frontiers Center for Brain Science, Institutes of Brain Science, Fudan University",
            image: `${baseUrl}agenda/YuGu.png`
          }
        ],
      },
      {
        time: "14:20 - 14:40",
        type: "talk",
        title: "The Evolution and Regulation of Rhythms in Complex Life Systems",
        speakers: [
          {
            name: "Wei Lin",
            affiliation: "School of Mathematical Sciences, Research Institute of Intelligent Complex Systems (IICS), Centre for Computational Systems Biology, Fudan University",
            image: `${baseUrl}agenda/WeiLin.png`
          }
        ],
      },
      {
        time: "14:40 - 15:00",
        type: "talk",
        title: "Modeling individual variability of neural computations underlying flexible decisions",
        speakers: [
          {
            name: "Bin Min",
            affiliation: "Lin Gang Laboratory",
            image: `${baseUrl}agenda/BinMin.png`
          }
        ],
      },
      {
        time: "15:00 - 15:15",
        type: "break",
        title: "Coffee Break",
      },
      {
        time: "15:15 - 15:35",
        type: "talk",
        title: "Brain stimulation for drug addiction: targeting the prefrontal cortex",
        speakers: [
          {
            name: "Tifei Yuan",
            affiliation: "Distinguished professor and executive dean of the School of Psychology, Shanghai Jiao Tong University",
            image: `${baseUrl}agenda/TifeiYuan.png`
          }
        ],
      },
      {
        time: "15:35 - 15:55",
        type: "talk",
        title: "Accelerated continuous theta-burst stimulation (a-cTBS) targeting the left primary motor cortex (M1) improves social communication impairment in autistic children",
        speakers: [
          {
            name: "Fei Li",
            affiliation: "Department of Developmental and Behavioural Paediatric & Child Primary Care, Shanghai Key Laboratory of Children's Environmental Health, Xinhua Hospital, Shanghai Jiao Tong University",
            image: `${baseUrl}agenda/FeiLi.png`
          }
        ],
      },
      {
        time: "15:55 - 16:15",
        type: "talk",
        title: "The Neural Basis and Neuromodulation of Procrastination Decision-Making",
        speakers: [
          {
            name: "Tingyong Feng",
            affiliation: "Department of Psychology Xi Nan University",
            image: `${baseUrl}agenda/TingyongFeng.png`
          }
        ],
      },
      {
        time: "16:15 - 16:35",
        type: "talk",
        title: "Fine-grained Emotion Neural Encoding and Decoding",
        speakers: [
          {
            name: "Huiguang He",
            affiliation: "State Key Laboratory of Brain Cognition and Brain-inspired Intelligence Technology, Institute of Automation, Chinese Academy of Sciences",
            image: `${baseUrl}agenda/HuiguangHe.png`
          }
        ],
      },
      {
        time: "16:35 - 16:55",
        type: "talk",
        title: "Unethical amnesia brain: Memory and metacognitive distortion induced by dishonesty",
        speakers: [
          {
            name: "Haiyan Wu",
            affiliation: "Affective, Neuroscience, and Decision-making Lab, Center for Cognitive and Brain Sciences, Institute of Collaborative Innovation, University of Macau",
            image: `${baseUrl}agenda/HaiyanWu.png`
          }
        ],
      },
      {
        time: "18:00 - ",
        type: "meal",
        title: "Dinner",
      },
    ]
  }
];

const getSessionClass = (type: string | undefined) => {
  if (!type) return '';
  return `session-${type.toLowerCase()}`;
};

const navigateToSpeaker = (speakerName: string) => {
  router.push({
    name: 'Speakers',
    query: { speaker: speakerName }
  });
};

const activeDay = computed(() => agenda[activeTabIndex.value]);
</script>

<style scoped>
.agenda-container {
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  overflow-y: auto;
}

.agenda-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  text-align: center;
}

.agenda-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  text-align: center;
}

.agenda-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
}

.tab-btn {
  background: none;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  position: relative;
  color: #666;
  transition: all 0.3s ease;
}



.tab-btn:hover {
  color: #2c3e50;
}

.tab-btn.active {
  color: #2c3e50;
  font-weight: bold;
}

.tab-btn.active:after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #2c3e50;
}

.agenda-content {
  margin-top: 1rem;
}

.day-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed #e0e0e0;
}

.day-header h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}


.timeline {
  position: relative;
}

.timeline-item {
  display: flex;
  margin-bottom: 2rem;
}

.timeline-time {
  width: 120px;
  padding-right: 1.5rem;
  position: relative;
  flex-shrink: 0;
}

.time {
  font-weight: bold;
  color: #2c3e50;
  white-space: nowrap;
}



.timeline-content {
  flex: 1;
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #2c3e50;
  position: relative;
}

.break-item .timeline-content {
  background-color: #f8f9fa;
  border-left-color: #6c757d;
}

.session-type {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  background-color: #e9ecef;
  color: #495057;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

/* 为各类型标签设置不同的背景色和文字色 */
.session-keynote .session-type {
  background-color: #d0dae6;
  /* 淡蓝色背景 */
  color: #1e4b75;
  /* 深蓝色文字 */
}

.session-talk .session-type {
  background-color: #d7e9f7;
  /* 淡蓝绿色背景 */
  color: #2471a3;
  /* 蓝绿色文字 */
}

.session-opening .session-type {
  background-color: #ede2f5;
  /* 淡紫色背景 */
  color: #9b59b6;
  /* 紫色文字 */
}

.session-registration .session-type {
  background-color: #dce8e0;
  /* 淡绿色背景 */
  color: #2d6d4b;
  /* 深绿色文字 */
}

.session-break .session-type {
  background-color: #e9ecef;
  /* 浅灰色背景 */
  color: #7f8c8d;
  /* 灰色文字 */
}

.session-meal .session-type {
  background-color: #fae5d3;
  /* 淡橙色背景 */
  color: #d35400;
  /* 橙色文字 */
}

.break-item .session-type {
  background-color: #dee2e6;
}

.session-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #212529;
}

.session-speakers {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.session-keynote {
  border-left-color: #1e4b75;
  /* 深蓝色 */
}

.session-talk {
  border-left-color: #2471a3;
  /* 蓝绿色 */
}

.session-opening {
  border-left-color: #9b59b6;
  /* 紫色 */
}


.session-break {
  border-left-color: #7f8c8d;
  /* 灰色 */
  background-color: #f8f9fa;
}

.session-meal {
  border-left-color: #d35400;
  /* 橙色 */
}

.speaker {
  display: flex;
  align-items: center;
}

.speaker-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.75rem;
}

/* 让演讲者名称更突出 */
.speaker-name {
  font-weight: 600;
  color: #2c3e50;
  font-size: 1rem;
}

.speaker-name.clickable {
  cursor: pointer;
  color: #3498db;
  transition: color 0.2s ease;
  display: inline-block;
  position: relative;
}

.speaker-name.clickable:hover {
  color: #2980b9;
}

.speaker-name.clickable::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: currentColor;
  transform: scaleX(0);
  transition: transform 0.2s ease;
  transform-origin: right;
}

.speaker-name.clickable:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.speaker-affiliation {
  font-size: 0.9rem;
  color: #6c757d;
}

.session-details {
  margin-top: 1rem;
  color: #495057;
  font-size: 0.95rem;
}


.agenda-download {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: #3498db;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 0.5rem;
}

.download-btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.download-icon::before {
  content: "📄";
  font-size: 1.2rem;
}



@media (max-width: 768px) {
  .agenda-tabs {
    overflow-x: auto;
    padding-bottom: 0.5rem;
    justify-content: flex-start;
  }

  .tab-btn {
    padding: 0.75rem 1rem;
    white-space: nowrap;
  }

  .timeline-item {
    flex-direction: column;
  }

  .timeline-time {
    width: 100%;
    padding-right: 0;
    padding-bottom: 0.5rem;
  }


  .session-speakers {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
