/* Your academic profile. Keep unknown information empty; the page handles it gracefully. */
window.PROFILE = {
  name: { en: 'Your Name', zh: '你的姓名' },
  role: { en: 'Researcher', zh: '研究人员' },
  affiliation: { en: 'Affiliation to be added', zh: '所属机构待补充' },
  bio: {
    en: 'My research interests span robotics, large models, and sensors — exploring how intelligent systems perceive, reason, and interact with the physical world.',
    zh: '我的研究兴趣涵盖机器人、大模型与传感器，关注智能系统如何感知环境、理解信息，并与物理世界交互。'
  },
  email: '',
  portrait: '',
  cv: '',
  links: { scholar: '', github: '', linkedin: '' },
  news: [],
  affiliations: [],
  research: [
    {
      id: 'robotics-outline', group: 'representative', placeholder: true,
      title: { en: 'Robotics research', zh: '机器人研究' },
      summary: { en: 'A space for work on robotic perception, learning, and interaction with the physical world.', zh: '用于展示机器人感知、学习以及与物理世界交互的研究。' },
      tags: ['robotics', 'models'], image: 'assets/robotics.svg', authors: '', venue: '', year: '', links: {}
    },
    {
      id: 'models-outline', group: 'representative', placeholder: true,
      title: { en: 'Large-model research', zh: '大模型研究' },
      summary: { en: 'A space for work connecting language, visual understanding, and intelligent decision-making.', zh: '用于展示语言、视觉理解与智能决策相关的研究。' },
      tags: ['models'], image: 'assets/models.svg', authors: '', venue: '', year: '', links: {}
    },
    {
      id: 'sensing-outline', group: 'projects', placeholder: true,
      title: { en: 'Sensor research', zh: '传感器研究' },
      summary: { en: 'A space for sensor systems, multimodal data, and experiments that connect hardware with intelligence.', zh: '用于展示传感系统、多模态数据及连接硬件与智能的实验项目。' },
      tags: ['sensing', 'robotics'], image: 'assets/sensing.svg', authors: '', venue: '', year: '', links: {}
    }
  ],
  notes: []
};
