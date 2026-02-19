const storageKey = 'co_site_lang';
let currentLanguage = 'zh';

const i18n = {
  zh: {
    pageTitle: 'Centrum Operum 万事中枢 | AI 任务与笔记管理',
    metaDescription:
      'Centrum Operum 万事中枢：本地优先的任务、笔记、日历与 AI 助手。支持 OpenAI/DeepSeek、中英切换、数据导入导出，提供 Android APK 下载。',
    brand: 'Centrum Operum 万事中枢',

    heroKicker: '任务中枢',
    heroTitleLine1: '任务、笔记、日历与 AI，',
    heroTitleLine2: '集中在一个工作台。',
    heroDesc:
      '支持 OpenAI 与 DeepSeek 双模型、本地优先存储、中英切换、数据导入导出，以及 Android / Windows 多端使用。',
    heroDownload: '下载',
    heroFeatures: '功能',

    stat1Label: 'AI 服务商',
    stat1Value: 'OpenAI + DeepSeek',
    stat2Label: '数据策略',
    stat2Value: '本地持久化 + JSON 导入导出',
    stat3Label: '可用平台',
    stat3Value: 'Android + Windows',

    featuresTitle: '核心能力',
    feature1Title: '任务 / 笔记 / 日历一体化',
    feature1Desc: '同一工作流内完成记录、追踪与复盘，减少切换成本。',
    feature2Title: 'AI 赋能',
    feature2Desc: '支持 AI 解析任务、今日计划、下一步建议、笔记标题标签总结。',
    feature3Title: '本地优先 + 可迁移',
    feature3Desc: '核心数据保存在本地，可一键导出备份，并在新设备导入恢复。',
    feature4Title: '多端可用',
    feature4Desc: '同一套任务与笔记工作流可在 Android 与 Windows 端使用。',

    galleryKicker: '截图',
    galleryTitle: '界面预览',
    galleryDesc: '可切换手机 / PC 视图，按左右键浏览。',
    tabMobile: '手机界面',
    tabPc: 'PC 界面',

    downloadKicker: '下载',
    downloadTitle: '获取安装包',
    downloadDesc: 'Android 与 Windows 安装包均已提供，可直接下载。',
    downloadApk: '下载 Android APK',
    downloadPc: '下载 Windows 安装包',
    downloadPcUnavailable: 'Windows 安装包暂未提供',
    copyLink: '复制 APK 下载链接',

    faqTitle: '常见问题',
    faq1Q: '数据会上传云端吗？',
    faq1A: '默认不会。主要数据保存在本地，并支持你手动导入导出。',
    faq2Q: 'AI 结果语言如何控制？',
    faq2A: 'AI 输出会自动跟随当前界面语言（中文或英文）。',

    footerText: 'Centrum Operum 万事中枢 · AI 驱动的本地优先任务工作台',

    copySuccess: '下载链接已复制',
    copyFail: '复制失败，请手动复制当前页面地址',
    prevPage: '上一页',
    nextPage: '下一页',
    pageNavigation: '页面导航',
    dotAria: '查看第 {n} 页',
    screenshotAltPrefix: 'Centrum Operum 截图'
  },
  en: {
    pageTitle: 'Centrum Operum | AI Task and Note Workspace',
    metaDescription:
      'Centrum Operum is a local-first workspace for tasks, notes, calendar, and AI copilot. Supports OpenAI/DeepSeek, bilingual UI, and JSON import/export.',
    brand: 'Centrum Operum',

    heroKicker: 'Task Hub',
    heroTitleLine1: 'Tasks, notes, calendar, and AI,',
    heroTitleLine2: 'in one focused workspace.',
    heroDesc:
      'Dual-provider AI (OpenAI + DeepSeek), local-first storage, bilingual UI, JSON import/export, and multi-device use on Android and Windows.',
    heroDownload: 'Download',
    heroFeatures: 'Features',

    stat1Label: 'AI Providers',
    stat1Value: 'OpenAI + DeepSeek',
    stat2Label: 'Data Strategy',
    stat2Value: 'Local persistence + JSON import/export',
    stat3Label: 'Platforms',
    stat3Value: 'Android + Windows',

    featuresTitle: 'Core Capabilities',
    feature1Title: 'Unified Tasks / Notes / Calendar',
    feature1Desc: 'Capture, track, and review in one workflow with less context switching.',
    feature2Title: 'AI-Enhanced Workflow',
    feature2Desc: 'Parse tasks, generate daily plans, suggest next steps, and summarize note metadata.',
    feature3Title: 'Local-First and Portable',
    feature3Desc: 'Primary data stays local. Export backups and restore quickly on a new device.',
    feature4Title: 'Multi-Device Use',
    feature4Desc: 'The same task and note workflow is available on Android and Windows.',

    galleryKicker: 'Screenshots',
    galleryTitle: 'Preview',
    galleryDesc: 'Switch between mobile and PC views, then browse with arrows.',
    tabMobile: 'Mobile UI',
    tabPc: 'PC UI',

    downloadKicker: 'Download',
    downloadTitle: 'Get Installers',
    downloadDesc: 'Android and Windows packages are both available for direct download.',
    downloadApk: 'Download Android APK',
    downloadPc: 'Download Windows Installer',
    downloadPcUnavailable: 'Windows installer not available yet',
    copyLink: 'Copy APK Link',

    faqTitle: 'FAQ',
    faq1Q: 'Will my data be uploaded to cloud?',
    faq1A: 'Not by default. Core data is local, and you control import/export manually.',
    faq2Q: 'How is AI output language controlled?',
    faq2A: 'AI output follows the current UI language automatically.',

    footerText: 'Centrum Operum · AI-powered local-first productivity workspace',

    copySuccess: 'Download link copied',
    copyFail: 'Copy failed. Please copy the current page URL manually.',
    prevPage: 'Previous page',
    nextPage: 'Next page',
    pageNavigation: 'Page navigation',
    dotAria: 'View page {n}',
    screenshotAltPrefix: 'Centrum Operum screenshot'
  }
};

const galleryGroups = {
  mobile: [
    './gallery/mobile0.png',
    './gallery/mobile1.png',
    './gallery/mobile2.png',
    './gallery/mobile3.png',
    './gallery/mobile4.png',
    './gallery/mobile5.png'
  ],
  pc: ['./gallery/pc0.png', './gallery/pc1.png', './gallery/pc2.png', './gallery/pc3.png']
};

let currentGroup = 'mobile';
let currentPage = 0;
let touchStartX = 0;

const textNodes = document.querySelectorAll('[data-i18n]');
const languageButtons = document.querySelectorAll('.lang-btn');
const metaDescription = document.getElementById('meta-description');
const copyButton = document.getElementById('copy-link');
const copyStatus = document.getElementById('copy-status');

const pageFrame = document.getElementById('page-frame');
const pageImage = document.getElementById('page-image');
const pagePrev = document.getElementById('page-prev');
const pageNext = document.getElementById('page-next');
const pageDots = document.getElementById('page-dots');
const pageIndex = document.getElementById('page-index');
const groupButtons = document.querySelectorAll('.gallery-tab');

function t(key) {
  return (i18n[currentLanguage] && i18n[currentLanguage][key]) || i18n.zh[key] || key;
}

function getCurrentImages() {
  return galleryGroups[currentGroup] || galleryGroups.mobile;
}

function setLanguage(lang) {
  currentLanguage = i18n[lang] ? lang : 'zh';
  document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'zh-CN';
  document.title = t('pageTitle');

  if (metaDescription) {
    metaDescription.setAttribute('content', t('metaDescription'));
  }

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (key) {
      node.textContent = t(key);
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === currentLanguage);
  });

  if (pagePrev) pagePrev.setAttribute('aria-label', t('prevPage'));
  if (pageNext) pageNext.setAttribute('aria-label', t('nextPage'));
  if (pageDots) pageDots.setAttribute('aria-label', t('pageNavigation'));

  if (pageImage) {
    pageImage.alt = `${t('screenshotAltPrefix')} ${currentPage + 1}`;
  }

  localStorage.setItem(storageKey, currentLanguage);
  renderDots();
}

function renderDots() {
  if (!pageDots) return;
  pageDots.innerHTML = '';
  const images = getCurrentImages();
  images.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', t('dotAria').replace('{n}', String(index + 1)));
    if (index === currentPage) dot.classList.add('is-active');
    dot.addEventListener('click', () => {
      const direction = index > currentPage ? 'next' : 'prev';
      setPage(index, direction);
    });
    pageDots.appendChild(dot);
  });
}

function setPage(index, direction = 'next') {
  if (!pageImage || !pageFrame || !pageIndex) return;

  const images = getCurrentImages();
  const next = (index + images.length) % images.length;

  pageFrame.classList.remove('is-flipping-next', 'is-flipping-prev');
  void pageFrame.offsetWidth;
  pageFrame.classList.add(direction === 'prev' ? 'is-flipping-prev' : 'is-flipping-next');

  pageImage.src = images[next];
  pageImage.alt = `${t('screenshotAltPrefix')} ${next + 1}`;
  currentPage = next;

  pageIndex.textContent = `${currentPage + 1} / ${images.length}`;
  renderDots();
}

function setGroup(group) {
  if (!galleryGroups[group]) return;
  currentGroup = group;
  currentPage = 0;
  groupButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.group === group);
  });
  setPage(0, 'next');
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang || 'zh'));
});

groupButtons.forEach((button) => {
  button.addEventListener('click', () => setGroup(button.dataset.group || 'mobile'));
});

if (copyButton && copyStatus) {
  copyButton.addEventListener('click', async () => {
    const target = new URL('./app-release.apk', window.location.href).href;
    try {
      await navigator.clipboard.writeText(target);
      copyStatus.textContent = t('copySuccess');
    } catch {
      copyStatus.textContent = t('copyFail');
    }
  });
}

if (pageImage && pagePrev && pageNext && pageFrame) {
  pagePrev.addEventListener('click', () => setPage(currentPage - 1, 'prev'));
  pageNext.addEventListener('click', () => setPage(currentPage + 1, 'next'));

  pageFrame.addEventListener('animationend', () => {
    pageFrame.classList.remove('is-flipping-next', 'is-flipping-prev');
  });

  pageFrame.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
  });

  pageFrame.addEventListener('touchend', (event) => {
    const deltaX = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) < 35) return;
    if (deltaX < 0) {
      setPage(currentPage + 1, 'next');
    } else {
      setPage(currentPage - 1, 'prev');
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      setPage(currentPage + 1, 'next');
    } else if (event.key === 'ArrowLeft') {
      setPage(currentPage - 1, 'prev');
    }
  });
}

const revealTargets = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
revealTargets.forEach((node) => observer.observe(node));

const savedLanguage = localStorage.getItem(storageKey);
setLanguage(savedLanguage && i18n[savedLanguage] ? savedLanguage : 'zh');
setGroup('mobile');

