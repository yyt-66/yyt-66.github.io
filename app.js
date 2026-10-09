(() => {
  'use strict';
  const p = window.PROFILE;
  if (!p) return;
  const isNotes = document.body.dataset.page === 'notes';
  const root = isNotes ? '../' : '';
  const translations = {
    en: {
      skip:'Skip to content',brandSub:'RESEARCH PROFILE',navAbout:'About',navNews:'News',navResearch:'Research',navNotes:'Notes',cvPending:'CV · soon',cvReady:'CV ↗',heroEyebrow:'From Perception to Understanding, From Intelligence to Interaction.',tagHumanoid:'Humanoid',tagPerception:'Perception',tagUnderstanding:'Understanding',tagPlanning:'Planning',tagModels:'Models',fieldRobotics:'Robotics',fieldModels:'Large models',fieldSensing:'Sensors',explore:'Explore research',contactMe:'Get in touch',profileNote:'Profile preview · personal details to be added',photoPending:'PORTRAIT TO BE ADDED',portraitEyebrow:'A PERSONAL RESEARCH SPACE',portraitTitle:'Perceive.<br>Reason.<br>Interact.',field:'RESEARCH FIELD',roboticsSub:'Intelligence in motion.',modelsSub:'Learning across modalities.',sensingSub:'A connection to the physical.',scroll:'SCROLL TO DISCOVER',sectionNews:'LATEST UPDATES',newsTitle:'News & moments.',sectionAffiliations:'THE JOURNEY',affiliationsTitle:'Affiliations.',affiliationsIntro:'Places to learn, collaborate, and build.',sectionResearch:'SELECTED WORK & DIRECTIONS',researchTitle:'Research.',researchIntro:'Perception, understanding, planning, and models — exploring humanoid intelligence from physical signals to action.',filterAll:'All areas',researchDraft:'Cards marked “Research outline” are placeholders; their publication or project details are yet to be added.',sectionContact:'CONTACT',contactTitle:'Let’s connect.',contactIntro:'For research conversations, ideas, and potential collaborations.',emailLabel:'Email',wechatLabel:'WeChat',contactDetailsLabel:'CONTACT DETAILS',copyWechat:'Copy WeChat ID',wechatCopied:'WeChat ID copied',wechatCopyFailed:'Please select and copy the WeChat ID.',footerTagline:'Embodied AI · Multimodal Perception · Robot Reasoning & Planning · Robot Foundation Models',backTop:'Back to top ↑',designCredit:'Design references',pending:'pending',newsEmptyTitle:'The next chapter starts here.',newsEmptyText:'New papers, projects, and research milestones will appear here.',current:'Current position',education:'Education',experience:'Research experience',detailsPending:'Details to be added',institutionPending:'Institution / lab to be added',datesPending:'DATES TO BE ADDED',affiliationPending:'Academic information pending',representative:'Representative Research',projects:'Core Projects',others:'Other Publications',representativeLabel:'SELECTED RESEARCH',projectsLabel:'SYSTEMS & EXPERIMENTS',othersLabel:'MORE WORK',outline:'RESEARCH OUTLINE',concept:'CONCEPT ILLUSTRATION',projectPending:'Project details forthcoming',paperPending:'Publication details forthcoming',otherEmpty:'Additional publications will appear here.',noResults:'No work in this area yet.',emailPending:'Email to be added',cvTextPending:'Curriculum vitae · to be added',downloadCV:'View curriculum vitae ↗',copyEmail:'Copy',copied:'Email copied',copyFailed:'Please select and copy the email address.',notesEyebrow:'THE RESEARCH NOTEBOOK',notesTitle:'Notes & ideas.',notesIntro:'A place for research reflections, experiments, and things learned along the way.',notesEmptyTitle:'A notebook, soon to be filled.',notesEmptyText:'Research notes and technical writing will be published here. There are no posts yet.',backHome:'← Back to profile',returnResearch:'Explore research',notesFooter:'A small space for ideas in progress.',draftCardCount:n=>`${n} research outline${n===1?'':'s'}`,cardCount:n=>`${n} item${n===1?'':'s'}`,read:'Read note ↗',portraitGeneric:'Personal portrait',portraitAlt:'Portrait of ',placeholderAlt:'Illustrated portrait placeholder',illustrationAlt:'Concept illustration for ',homeLabel:'Home',navLabel:'Main navigation',filterLabel:'Filter research',fieldsLabel:'Research interests',languageLabel:'Language'
    },
    zh: {
      skip:'跳至主要内容',brandSub:'个人学术主页',navAbout:'简介',navNews:'动态',navResearch:'研究',navNotes:'笔记',cvPending:'简历 · 待补充',cvReady:'简历 ↗',heroEyebrow:'从感知到理解，从智能到交互。',tagHumanoid:'人形机器人',tagPerception:'感知',tagUnderstanding:'理解',tagPlanning:'规划',tagModels:'模型',fieldRobotics:'机器人',fieldModels:'大模型',fieldSensing:'传感器',explore:'了解我的研究',contactMe:'联系交流',profileNote:'主页预览 · 个人资料待补充',photoPending:'个人照片待补充',portraitEyebrow:'我的学术空间',portraitTitle:'感知。<br>理解。<br>交互。',field:'研究方向',roboticsSub:'让智能走向物理世界。',modelsSub:'跨越模态的理解与学习。',sensingSub:'连接真实世界的信息。',scroll:'向下探索',sectionNews:'近期动态',newsTitle:'动态与进展。',sectionAffiliations:'学术之路',affiliationsTitle:'教育与经历。',affiliationsIntro:'学习、协作与探索发生的地方。',sectionResearch:'代表研究与探索方向',researchTitle:'研究。',researchIntro:'围绕感知、理解、规划与模型，探索人形机器人从物理信号到智能行动的过程。',filterAll:'全部方向',researchDraft:'标有“研究方向示意”的卡片为占位，论文或项目详情待补充。',sectionContact:'联系交流',contactTitle:'从交流开始。',contactIntro:'欢迎就研究问题、想法与合作机会展开交流。',emailLabel:'邮箱',wechatLabel:'微信',contactDetailsLabel:'联系方式',copyWechat:'复制微信号',wechatCopied:'微信号已复制',wechatCopyFailed:'请选中微信号并复制。',footerTagline:'具身智能 · 多模态感知 · 机器人推理与规划 · 机器人基础模型',backTop:'回到顶部 ↑',designCredit:'设计参考',pending:'待补充',newsEmptyTitle:'下一段探索，从这里开始。',newsEmptyText:'新论文、项目进展与学术动态将在这里更新。',current:'当前任职',education:'教育背景',experience:'研究经历',detailsPending:'信息待补充',institutionPending:'机构 / 实验室待补充',datesPending:'起止时间待补充',affiliationPending:'学术履历待完善',representative:'代表研究',projects:'核心项目',others:'其他论文',representativeLabel:'精选研究成果',projectsLabel:'系统与实验',othersLabel:'更多成果',outline:'研究方向示意',concept:'概念示意图',projectPending:'项目详情待补充',paperPending:'论文信息待补充',otherEmpty:'其他论文与成果将在这里展示。',noResults:'这一方向暂无研究条目。',emailPending:'公开邮箱待补充',cvTextPending:'个人简历 · 待补充',downloadCV:'查看个人简历 ↗',copyEmail:'复制',copied:'邮箱已复制',copyFailed:'请选中邮箱地址并复制。',notesEyebrow:'研究笔记',notesTitle:'笔记与想法。',notesIntro:'记录研究思考、实验探索，以及沿途学到的东西。',notesEmptyTitle:'留白，等待新的思考。',notesEmptyText:'这里将陆续发布研究笔记与技术文章，目前暂无文章。',backHome:'← 返回个人主页',returnResearch:'浏览研究方向',notesFooter:'为进行中的思考，留一个位置。',draftCardCount:n=>`${n} 个方向示意`,cardCount:n=>`${n} 个条目`,read:'阅读笔记 ↗',portraitGeneric:'个人形象照',portraitAlt:'个人照片：',placeholderAlt:'个人照片占位示意',illustrationAlt:'研究方向概念示意：',homeLabel:'个人主页',navLabel:'主要导航',filterLabel:'筛选研究方向',fieldsLabel:'研究方向',languageLabel:'语言'
    }
  };
  let lang = 'en';
  try { const saved = localStorage.getItem('research-profile-language'); if (saved === 'zh' || saved === 'en') lang = saved; } catch (_) {}
  let selected = 'all';
  const t = key => translations[lang][key] || key;
  const local = value => typeof value === 'string' ? value : value?.[lang] || value?.en || value?.zh || '';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function url(value) {
    if (typeof value !== 'string' || !value.trim()) return '';
    const v = value.trim();
    if (/^[a-z][a-z\d+.-]*:/i.test(v)) return /^https?:\/\//i.test(v) ? v : '';
    if (v.startsWith('//') || /[\\\u0000-\u001f]/.test(v)) return '';
    return v.startsWith('/') || v.startsWith('#') ? v : root + v;
  }
  const link = (href, label, css = '') => `<a class="${css}" href="${esc(href)}"${/^https?:/i.test(href) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(label)}</a>`;
  const research = Array.isArray(p.research) ? p.research : [];
  const tagLabels = {perception:'tagPerception',understanding:'tagUnderstanding',planning:'tagPlanning',models:'tagModels'};
  const tags = list => `<div class="work-tags">${(list || []).map(x => `<span>${esc(t(tagLabels[x] || x))}</span>`).join('')}</div>`;

  const email = typeof p.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email) ? p.email : '';
  const wechat = typeof p.wechat === 'string' ? p.wechat.trim() : '';
  const contactIcon = kind => `<img class="contact-icon" src="${root}assets/icon-${kind}.svg" width="18" height="18" alt="" aria-hidden="true">`;
  const inline = value => esc(value).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  const biography = () => local(p.bio).trim().split(/\n\s*\n/).filter(Boolean).map(paragraph => `<p>${inline(paragraph)}</p>`).join('');
  function contactChips() {
    return (email ? `<a class="contact-chip" href="mailto:${esc(email)}">${contactIcon('email')}<span><span class="contact-label">${esc(t('emailLabel'))}:</span> ${esc(email)}</span></a>` : '') +
      (wechat ? `<button type="button" class="contact-chip" data-copy-wechat aria-label="${esc(t('copyWechat'))}: ${esc(wechat)}" title="${esc(t('copyWechat'))}">${contactIcon('wechat')}<span><span class="contact-label">${esc(t('wechatLabel'))}:</span> ${esc(wechat)}</span></button>` : '');
  }
  function bindWechatCopy() {
    document.querySelectorAll('[data-copy-wechat]').forEach(button => button.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(wechat); toast(t('wechatCopied')); } catch (_) { toast(t('wechatCopyFailed')); }
    }));
  }
  function renderShared() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = `${isNotes ? local({en:'Notes',zh:'研究笔记'}) : local({en:'Research Profile',zh:'个人学术主页'})} · ${local(p.name)}`;
    document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.dataset.i18n; if (key === 'portraitTitle') el.innerHTML = t(key); else el.textContent = t(key); });
    document.querySelectorAll('[data-profile]').forEach(el => { if (el.dataset.profile === 'bio') el.innerHTML = biography(); else el.textContent = local(p[el.dataset.profile]); });
    document.querySelectorAll('[data-interests]').forEach(el => { el.innerHTML = (p.interests || []).map(interest => `<span>${esc(local(interest))}</span>`).join(''); });
    const heroContact = document.querySelector('#hero-contact');
    if (heroContact) heroContact.innerHTML = contactChips();
    document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed',String(el.dataset.lang === lang)));
    document.querySelector('.brand')?.setAttribute('aria-label',t('homeLabel'));
    document.querySelector('.primary-nav')?.setAttribute('aria-label',t('navLabel'));
    document.querySelector('.language-switch')?.setAttribute('aria-label',t('languageLabel'));
    document.querySelector('.filters')?.setAttribute('aria-label',t('filterLabel'));
    document.querySelector('.hero-stage')?.setAttribute('aria-label',t('fieldsLabel'));
    const cv = url(p.cv);
    document.querySelectorAll('[data-cv]').forEach(el => { el.textContent = t(cv ? 'cvReady' : 'cvPending'); el.href = cv || root + '#contact'; if (cv) { el.target = '_blank'; el.rel = 'noopener noreferrer'; } else { el.removeAttribute('target'); el.removeAttribute('rel'); } });
    document.querySelectorAll('[data-social]').forEach(el => {
      el.innerHTML = [['scholar','Scholar'],['github','GitHub'],['linkedin','LinkedIn']].map(([key,label]) => {
        const href = url(p.links?.[key]);
        return href ? link(href,`${label} ↗`) : `<span class="social-pending">${label}<small>· ${esc(t('pending'))}</small></span>`;
      }).join('');
    });
    const portrait = document.querySelector('#portrait');
    if (portrait) {
      portrait.src = url(p.portrait) || 'assets/portrait-placeholder.svg';
      const hasPortrait = !!url(p.portrait);
      const hasName = !['Your Name', '你的姓名', ''].includes(local(p.name));
      portrait.alt = hasPortrait ? (hasName ? t('portraitAlt') + local(p.name) : t('portraitGeneric')) : t('placeholderAlt');
      portrait.closest('.portrait-panel').classList.toggle('has-portrait', hasPortrait);
      document.querySelector('.photo-label').hidden = !!url(p.portrait);
    }
    const profileNote = document.querySelector('.profile-note');
    if (profileNote) profileNote.hidden = !['Your Name','你的姓名'].includes(local(p.name));
  }
  function renderNews() {
    const items = Array.isArray(p.news) ? p.news : [];
    document.querySelector('#news-list').innerHTML = items.length ? items.map(n => `<div class="news-item"><time>${esc(n.date)}</time><p>${url(n.url) ? link(url(n.url),local(n.text)) : esc(local(n.text))}</p></div>`).join('') : `<div class="empty-row"><span class="empty-symbol" aria-hidden="true">↗</span><div><strong>${esc(t('newsEmptyTitle'))}</strong><p>${esc(t('newsEmptyText'))}</p></div></div>`;
  }
  function renderAffiliations() {
    const items = p.affiliations?.length ? p.affiliations : ['current','education','experience'].map(type => ({type,placeholder:true}));
    document.querySelector('#affiliations-list').innerHTML = items.map((a, i) => `<article class="affiliation-card"><div class="affiliation-top"><span class="affiliation-icon" aria-hidden="true">${['⌘','◇','◎'][i % 3]}</span><span class="affiliation-period">${esc(a.placeholder ? t('datesPending') : local(a.period))}</span></div><h3>${esc(a.placeholder ? t(a.type) : local(a.role))}</h3><p>${a.url && url(a.url) ? link(url(a.url),local(a.organization)) : esc(a.placeholder ? t('institutionPending') : local(a.organization))}</p><span class="affiliation-detail">${esc(a.placeholder ? t('affiliationPending') : local(a.detail))}</span></article>`).join('');
  }
  function workCard(work) {
    const title = local(work.title);
    const resources = Object.entries(work.links || {}).filter(([,v]) => url(v));
    const imageUrl = url(work.image);
    const image = imageUrl ? `<div class="research-image"><img loading="lazy" src="${esc(imageUrl)}" width="800" height="480" alt="${esc(work.placeholder ? t('illustrationAlt') + title : title)}">${work.placeholder ? `<span class="image-corner">${esc(t('concept'))}</span>` : ''}</div>` : '';
    return `<article class="research-card ${work.group==='projects'?'project-card':''}">${image}<div class="research-card-body"><div class="work-meta"><span>${esc(work.placeholder ? t('outline') : local(work.venue))}</span><span>${esc(work.year)}</span></div><h4>${esc(title)}</h4>${work.authors ? `<p class="work-authors">${esc(local(work.authors))}</p>` : ''}<p class="work-summary">${esc(local(work.summary))}</p><div class="work-bottom">${tags(work.tags)}${resources.length ? `<div class="work-links">${resources.map(([key,v])=>link(url(v),key.toUpperCase()+' ↗')).join('')}</div>` : (work.placeholder ? `<span class="work-pending">${esc(t(work.group==='projects'?'projectPending':'paperPending'))}</span>` : '')}</div></div></article>`;
  }
  function renderResearch() {
    const items = research.filter(w => selected === 'all' || w.tags?.includes(selected));
    const allDraft = items.length > 0 && items.every(w => w.placeholder);
    document.querySelector('#filter-status').textContent = t(allDraft ? 'draftCardCount' : 'cardCount')(items.length);
    document.querySelectorAll('[data-filter]').forEach(b => { b.classList.toggle('active',b.dataset.filter === selected); b.setAttribute('aria-pressed',String(b.dataset.filter === selected)); });
    document.querySelector('.research-draft-note').hidden = !items.some(w => w.placeholder);
    let html = '';
    for (const group of ['representative','projects','others']) {
      const works = items.filter(w => w.group === group);
      if (!works.length && selected !== 'all') continue;
      html += `<div class="research-group"><div class="group-heading"><h3>${esc(t(group))}</h3><span>${esc(t(group+'Label'))}</span></div>${works.length ? `<div class="research-grid">${works.map(workCard).join('')}</div>` : `<p class="empty-works">${esc(t('otherEmpty'))}</p>`}</div>`;
    }
    document.querySelector('#research-groups').innerHTML = html || `<div class="no-results">${esc(t('noResults'))}</div>`;
  }
  function renderContact() {
    document.querySelector('#email-contact').innerHTML = email ? `<div class="email-line">${contactIcon('email')}<a href="mailto:${esc(email)}">${esc(email)}</a><button type="button" class="copy-button" id="copy-email">${esc(t('copyEmail'))}</button></div>` : `<span class="email-pending">${esc(t('emailPending'))}</span>`;
    document.querySelector('#wechat-contact').innerHTML = wechat ? `<button type="button" class="contact-chip" data-copy-wechat aria-label="${esc(t('copyWechat'))}: ${esc(wechat)}" title="${esc(t('copyWechat'))}">${contactIcon('wechat')}<span><span class="contact-label">${esc(t('wechatLabel'))}:</span> ${esc(wechat)}</span></button>` : '';
    const cv = url(p.cv);
    document.querySelector('#cv-contact').innerHTML = `<p class="cv-status">${cv ? link(cv,t('downloadCV')) : esc(t('cvTextPending'))}</p>`;
    document.querySelector('#copy-email')?.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(email); toast(t('copied')); } catch (_) { toast(t('copyFailed')); }
    });
  }
  function renderNotes() {
    const items = Array.isArray(p.notes) ? p.notes : [];
    document.querySelector('#notes-list').innerHTML = items.length ? items.map(n => `<article class="note-card"><time>${esc(n.date)}</time><div><h2>${url(n.url) ? link(url(n.url),local(n.title)) : esc(local(n.title))}</h2><p>${esc(local(n.summary))}</p>${tags(n.tags)}</div></article>`).join('') : `<div class="notes-empty glass-panel"><div><h2>${esc(t('notesEmptyTitle'))}</h2><p>${esc(t('notesEmptyText'))}</p><a class="button button-dark" href="../#research">${esc(t('returnResearch'))}<span aria-hidden="true">↗</span></a></div><div class="notes-art" aria-hidden="true"></div></div>`;
  }
  let toastTimer;
  function toast(message) { const el = document.querySelector('#toast'); if (!el) return; el.textContent = message; el.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(()=>el.classList.remove('visible'),3000); }
  function render() { renderShared(); if (isNotes) renderNotes(); else { renderNews(); renderAffiliations(); renderResearch(); renderContact(); bindWechatCopy(); } }
  document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click',()=>{lang=b.dataset.lang;try{localStorage.setItem('research-profile-language',lang);}catch(_){}render();}));
  document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click',()=>{selected=b.dataset.filter;renderResearch();}));
  document.querySelectorAll('[data-topic]').forEach(a => a.addEventListener('click',()=>{selected=a.dataset.topic;renderResearch();}));
  if (!isNotes && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) document.querySelectorAll('.primary-nav a[href^="#"]').forEach(a => a.classList.toggle('active',a.getAttribute('href') === '#'+entry.target.id)); });
    },{rootMargin:'-20% 0px -65% 0px',threshold:0});
    document.querySelectorAll('#about,#news,#research').forEach(s=>observer.observe(s));
  }
  render();
})();
