/* Your academic profile. Keep unknown information empty; the page handles it gracefully. */
window.PROFILE = {
  name: { en: 'Yangtian Ye', zh: '叶阳天' },
  role: { en: 'Second-year M.S. student', zh: '硕士研究生（二年级）' },
  affiliation: { en: 'FSII, Zhejiang University', zh: '浙江大学 FSII' },
  affiliationUrl: 'http://www.fsie-zju.com/',
  bio: {
    en: `Hi! I'm **Yangtian Ye (叶阳天)**, a second-year M.S. student at the [**FSII, Zhejiang University**](http://www.fsie-zju.com/), advised by [**Prof. Geng Yang**](https://person.zju.edu.cn/gengy) and working with the research team led by [**Academician Huayong Yang**](https://person.zju.edu.cn/0089022).

My research focuses on **Embodied AI**, particularly **whole-body tactile perception, physical interaction understanding, and human-robot interaction planning**. My long-term vision is to **bridge the last centimeter between humans and robots**, enabling robots to perceive, understand, and interact with the physical world in a more natural, intelligent, and human-centered way.

Beyond academia, I am also building an **early-stage startup in Embodied AI**, focusing on **multimodal robotic foundation models and next-generation human-robot interaction design**. I am passionate about translating cutting-edge research into real-world robotic intelligence.

I'm always excited to connect with researchers, entrepreneurs, and anyone passionate about the future of robotics. Feel free to reach out for **research collaborations, entrepreneurial opportunities, or simply an inspiring conversation**!`,
    zh: `你好！我是**叶阳天（Yangtian Ye）**，目前是[**浙江大学 FSII**](http://www.fsie-zju.com/)的硕士研究生（二年级），师从[**杨赓教授**](https://person.zju.edu.cn/gengy)，并在[**杨华勇院士**](https://person.zju.edu.cn/0089022)带领的研究团队中开展研究。

我的研究聚焦**具身智能**，尤其关注**全身触觉感知、物理交互理解与人机交互规划**。我的长期愿景是**跨越人与机器人之间的最后一厘米**，让机器人以更自然、更智能、更以人为中心的方式感知、理解物理世界，并与之交互。

在学术研究之外，我也正在创办一家**处于早期阶段的具身智能创业公司**，专注于**多模态机器人基础模型与下一代人机交互设计**。我热衷于将前沿研究转化为真实世界中的机器人智能。

我始终期待与研究人员、创业者，以及所有对机器人未来充满热情的人交流。无论是**科研合作、创业机会，还是一次启发彼此的对话**，都欢迎随时联系我！`
  },
  email: 'ethanye16@outlook.com',
  wechat: 'yyt13958582557',
  interests: [
    { en: 'Embodied AI', zh: '具身智能' },
    { en: 'Multimodal Perception', zh: '多模态感知' },
    { en: 'Robot Reasoning & Planning', zh: '机器人推理与规划' },
    { en: 'Robot Foundation Models', zh: '机器人基础模型' }
  ],
  portrait: 'assets/portrait.jpeg',
  cv: '',
  links: { scholar: '', github: 'https://github.com/yyt-66', linkedin: 'https://www.linkedin.com/in/yangtian-ye-7930b63b2/' },
  news: [
    {
      date: '2026.9',
      text: {
        en: 'I led our team to win Second Prize in the Startup Group at the finals of the 11th “Maker China” Intelligent Bionic Robotics SME Innovation and Entrepreneurship Competition.',
        zh: '带领团队斩获第十一届“创客中国”智能仿生机器人中小企业创新创业大赛决赛创业组二等奖。'
      },
      image: 'assets/证书.jpg', imageWidth: 1703, imageHeight: 2390,
      imageAlt: {
        en: 'Second Prize certificate for the project “Zhirou Interaction — Rapid Integration Platform for Large-Area Electronic Skin”, Zhejiang University.',
        zh: '浙江大学“智柔交互—大面积电子皮肤快速集成平台”项目创业组二等奖获奖证书'
      },
      mediaLinks: [
        {label: {en:'Xinhuanet',zh:'新华网'},logo:'assets/media/xinhua.png',url:'https://cq.news.cn/20260911/a132d50b3d3b4fe190793371ac27dae9/c.html'},
        {label: {en:'Xinhua Finance',zh:'新华财经 · 中国金融信息网'},logo:'assets/media/cnfin-hd.jpg',url:'https://www.cnfin.com/cmjj-lb/detail/20260911/4468962_1.html'},
        {label: {en:'People’s Daily Online',zh:'人民网'},logo:'assets/media/people.png',url:'https://cq.people.com.cn/n2/2026/0914/c367737-41695583.html'},
        {label: {en:'People’s Daily',zh:'人民日报'},logo:'assets/media/peoples-daily-wordmark.svg',url:'https://kpzg.people.com.cn/n1/2026/0910/c404214-40795912.html'},
        {label: {en:'ChinaVenture',zh:'投中网'},logo:'assets/media/chinaventure-trimmed.png',url:'https://www.chinaventure.com.cn/news/64-20260909-393183.html'}
      ]
    }
  ],
  affiliations: [
    {
      type: 'education',
      period: { en: '2025.09–Present', zh: '2025.09–至今' },
      role: { en: 'M.S. Student', zh: '硕士研究生' },
      organization: { en: 'Zhejiang University', zh: '浙江大学' },
      department: { en: 'School of Mechanical Engineering', zh: '机械工程学院' },
      programme: { en: 'Institute of Intelligent Equipment and Robotics', zh: '智能装备与机器人研究所' },
      detail: {
        en: 'Supervised by [Prof. Geng Yang](https://person.zju.edu.cn/gengy), with the team led by [Academician Huayong Yang](https://person.zju.edu.cn/0089022)',
        zh: '师从[杨赓教授](https://person.zju.edu.cn/gengy)，在[杨华勇院士](https://person.zju.edu.cn/0089022)团队开展研究'
      },
      logo: 'assets/affiliations/zju-blue.svg', url: 'https://www.zju.edu.cn/'
    },
    {
      type: 'experience',
      period: { en: '2024.10–2025.06', zh: '2024.10–2025.06' },
      role: { en: 'Research Intern', zh: '研发实习生' },
      organization: { en: 'Fourier', zh: '上海傅利叶智能科技股份有限公司' },
      detail: { en: 'Wearable robotic exoskeletons, teleoperation systems, and humanoid locomotion', zh: '机器人穿戴式外骨骼、遥操作系统及人形机器人运动控制' },
      logo: 'assets/affiliations/fourier-full.svg', url: 'https://www.fftai.com/'
    },
    {
      type: 'education',
      period: { en: '2024.02', zh: '2024.02' },
      role: { en: 'Visiting Student', zh: '访问学生' },
      organization: { en: 'National University of Singapore', zh: '新加坡国立大学（NUS）' },
      programme: { en: 'AI and LLMs Programme', zh: 'AI and LLMs Programme' },
      logo: 'assets/affiliations/nus.svg', url: 'https://www.nus.edu.sg/'
    },
    {
      type: 'education',
      period: { en: '2022.07', zh: '2022.07' },
      role: { en: 'Summer School Participant', zh: '暑校学员' },
      organization: { en: 'Zhejiang University', zh: '浙江大学' },
      department: { en: 'School of Aeronautics and Astronautics', zh: '航空航天学院' },
      programme: { en: 'MOE “Top-notch Plan 2.0” Mechanics Summer School', zh: '教育部“拔尖计划2.0”力学暑校' },
      detail: { en: 'Bipedal wheeled robot development', zh: '双足轮式机器人研发' },
      logo: 'assets/affiliations/zju-blue.svg', url: 'https://www.zju.edu.cn/'
    },
    {
      type: 'education',
      period: { en: '2021.09–2025.06', zh: '2021.09–2025.06' },
      role: { en: 'B.Eng.', zh: '工学学士' },
      organization: { en: 'Zhejiang University of Technology', zh: '浙江工业大学' },
      department: { en: 'College of Mechanical Engineering', zh: '机械工程学院' },
      programme: { en: 'Robotics Engineering', zh: '机器人工程专业' },
      logo: 'assets/affiliations/zjut.png', logoTheme: 'monochrome', url: 'https://www.zjut.edu.cn/'
    }
  ],
  research: [
    {
      "id": "fv-act",
      "group": "representative",
      "placeholder": false,
      "title": {
        "en": "FV-ACT: Force-Visual Action Chunking with Haptic Supervision for Robotic Tele-Auscultation",
        "zh": "FV-ACT: Force-Visual Action Chunking with Haptic Supervision for Robotic Tele-Auscultation"
      },
      "summary": {
        "en": "",
        "zh": ""
      },
      "tags": [
        "teleoperation",
        "imitation-learning",
        "haptics"
      ],
      "image": "assets/CoverFigforFVACT.png",
      "imageFit": "contain",
      "imageWidth": 2000,
      "imageHeight": 1125,
      "authors": "",
      "venue": {
        "en": "In submitting",
        "zh": "投稿中"
      },
      "year": "",
      "links": {}
    },
    {
      "id": "awakening-personality",
      "group": "representative",
      "placeholder": false,
      "title": {
        "en": "Large-Area Tactile Sensing for Fine-Grained Emotion Estimation and Personalized Human-Robot Interaction",
        "zh": "Large-Area Tactile Sensing for Fine-Grained Emotion Estimation and Personalized Human-Robot Interaction"
      },
      "summary": {
        "en": "",
        "zh": ""
      },
      "tags": [
        "perception",
        "sensors",
        "haptics"
      ],
      "image": "assets/large-area-introduction.png",
      "imageFit": "contain",
      "imageWidth": 2041,
      "imageHeight": 1134,
      "authors": "",
      "venue": {
        "en": "In submitting",
        "zh": "投稿中"
      },
      "year": "",
      "links": {}
    },
    {
      "id": "virtual-proxy-teleoperation",
      "group": "representative",
      "placeholder": false,
      "title": {
        "en": "Toward Intimate Human-Robot Interaction Virtual Proxy-Based Teleoperation for Safe Robotic Embrace",
        "zh": "Toward Intimate Human-Robot Interaction Virtual Proxy-Based Teleoperation for Safe Robotic Embrace"
      },
      "summary": {
        "en": "",
        "zh": ""
      },
      "tags": [
        "perception",
        "sensors",
        "haptics",
        "planning"
      ],
      "image": "",
      "authors": "",
      "venue": {
        "en": "In submitting",
        "zh": "投稿中"
      },
      "year": "",
      "links": {}
    },
    {
      "id": "spider-inspired-tactile-sensing",
      "group": "projects",
      "placeholder": false,
      "title": {
        "en": "Physics-prior fusion learning empowers super-resolution tactile sensing with a spider-inspired array-free architecture",
        "zh": "Physics-prior fusion learning empowers super-resolution tactile sensing with a spider-inspired array-free architecture"
      },
      "summary": {
        "en": "",
        "zh": ""
      },
      "tags": [
        "sensors",
        "haptics",
        "planning"
      ],
      "image": "",
      "authors": "",
      "venue": {
        "en": "",
        "zh": ""
      },
      "year": "",
      "links": {}
    }
  ],
  notes: []
};
