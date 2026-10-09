/* Your academic profile. Keep unknown information empty; the page handles it gracefully. */
window.PROFILE = {
  name: { en: 'Yangtian Ye', zh: '叶阳天' },
  role: { en: 'Researcher', zh: '研究人员' },
  affiliation: { en: 'Affiliation to be added', zh: '所属机构待补充' },
  bio: {
    en: 'My research focuses on humanoid robots, spanning perception, understanding, planning, and the models that connect them to intelligent action in the physical world.',
    zh: '我的研究兴趣聚焦人形机器人，涵盖感知、理解、规划与模型，探索智能系统如何理解环境并在物理世界中行动。'
  },
  email: '',
  portrait: 'assets/portrait.jpeg',
  cv: '',
  links: { scholar: '', github: '', linkedin: '' },
  news: [],
  affiliations: [],
  research: [
    {
      id: 'robotics-outline', group: 'representative', placeholder: true,
      title: { en: 'Robotics research', zh: '机器人研究' },
      summary: { en: 'A space for work on robotic perception, motion planning, and interaction with the physical world.', zh: '用于展示机器人感知、运动规划以及与物理世界交互的研究。' },
      tags: ['perception', 'planning'], image: 'assets/robotics.svg', authors: '', venue: '', year: '', links: {}
    },
    {
      id: 'models-outline', group: 'representative', placeholder: true,
      title: { en: 'Large-model research', zh: '大模型研究' },
      summary: { en: 'A space for work connecting language, visual understanding, and intelligent decision-making.', zh: '用于展示语言、视觉理解与智能决策相关的研究。' },
      tags: ['understanding', 'planning', 'models'], image: 'assets/models.svg', authors: '', venue: '', year: '', links: {}
    },
    {
      id: 'sensing-outline', group: 'projects', placeholder: true,
      title: { en: 'Sensor research', zh: '传感器研究' },
      summary: { en: 'A space for sensor systems, multimodal data, and experiments that connect hardware with intelligence.', zh: '用于展示传感系统、多模态数据及连接硬件与智能的实验项目。' },
      tags: ['perception'], image: 'assets/sensing.svg', authors: '', venue: '', year: '', links: {}
    }
  ],
  notes: []
};
