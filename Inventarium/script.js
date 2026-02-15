const storageKey = 'site_lang';
let currentLanguage = 'zh';

const i18n = {
  zh: {
    pageTitle: 'Inventarium 珍藏录 | 本地离线物品管理',
    metaDescription:
      'Inventarium 珍藏录：专注本地存储、支持图片与进度追踪的物品管理工具。提供 Android APK 与 Windows 安装包下载。',
    brand: 'Inventarium 珍藏录',
    headerCta: '下载 APK',
    heroKicker: '个人收藏管理',
    heroTitleLine1: '把重要物品管理，',
    heroTitleLine2: '做成一件轻松的事。',
    heroDesc:
      '本地离线存储、图片上传、标签筛选、进度趋势、自动备份。不依赖云端账号，数据完全由你掌控。',
    heroDownload: '前往下载',
    heroFeatures: '查看功能',
    statRuntimeLabel: '运行方式',
    statRuntimeValue: '本地离线',
    statBackupLabel: '数据备份',
    statBackupValue: 'JSON 一键导入导出',
    statDeviceLabel: '适配设备',
    statDeviceValue: '手机 + 桌面浏览器',
    featuresTitle: '核心功能',
    feature1Title: '完全本地存储',
    feature1Desc: '新增、编辑、删除操作自动持久化保存，关闭应用后数据仍保留。',
    feature2Title: '图片与标签管理',
    feature2Desc: '支持上传图片封面、标签体系与类型管理，筛选和搜索更高效。',
    feature3Title: '进度趋势跟踪',
    feature3Desc: '记录每次进度变更，查看历史轨迹，清晰掌握物品状态变化。',
    feature4Title: '备份与迁移',
    feature4Desc: '支持备份文件导出，换设备也可通过导入快速恢复数据。',
    galleryKicker: '界面截图',
    galleryTitle: '界面预览',
    galleryDesc: '点击左右按钮，浏览应用界面。',
    downloadKicker: '下载',
    downloadTitle: '下载安装包',
    downloadDesc:
      '当前目录已提供 Android APK 与 Windows 安装包，可直接下载使用。',
    downloadApk: '下载 APK',
    downloadPc: '下载 Windows 安装包',
    copyLink: '复制 APK 下载链接',
    footerText: 'Inventarium 珍藏录 · 本地优先的数据管理体验',
    copySuccess: '下载链接已复制',
    copyFail: '复制失败，请手动复制当前页面地址',
    prevPage: '上一页',
    nextPage: '下一页',
    pageNavigation: '页面导航',
    dotAria: '查看第 {n} 页',
    screenshotAltPrefix: 'Inventarium 应用截图'
  },
  en: {
    pageTitle: 'Inventarium | Local Offline Collection Manager',
    metaDescription:
      'Inventarium: a local-first collection manager with image support and progress tracking. Download Android APK and Windows installer directly.',
    brand: 'Inventarium',
    headerCta: 'Download APK',
    heroKicker: 'Personal Collection Manager',
    heroTitleLine1: 'Manage important items,',
    heroTitleLine2: 'without the friction.',
    heroDesc:
      'Local offline storage, image upload, tag filtering, progress trends, and backup. No cloud account required, your data stays in your control.',
    heroDownload: 'Go to Downloads',
    heroFeatures: 'View Features',
    statRuntimeLabel: 'Runtime',
    statRuntimeValue: 'Local Offline',
    statBackupLabel: 'Backup',
    statBackupValue: 'One-click JSON import/export',
    statDeviceLabel: 'Devices',
    statDeviceValue: 'Mobile + Desktop Browser',
    featuresTitle: 'Core Features',
    feature1Title: 'Fully Local Storage',
    feature1Desc: 'Create, edit, and delete changes are persisted automatically and stay after closing the app.',
    feature2Title: 'Images and Tags',
    feature2Desc: 'Upload cover images, manage tags and item types, and filter or search efficiently.',
    feature3Title: 'Progress Timeline',
    feature3Desc: 'Track each progress update with history and understand item status changes clearly.',
    feature4Title: 'Backup and Migration',
    feature4Desc: 'Export backup files and restore data quickly on a new device by importing them.',
    galleryKicker: 'Screenshots',
    galleryTitle: 'Interface Preview',
    galleryDesc: 'Use the left and right buttons to browse the app screens.',
    downloadKicker: 'Download',
    downloadTitle: 'Download Installers',
    downloadDesc:
      'Both Android APK and Windows installer are available in this folder for direct download.',
    downloadApk: 'Download APK',
    downloadPc: 'Download Windows Installer',
    copyLink: 'Copy APK Link',
    footerText: 'Inventarium · Local-first data management experience',
    copySuccess: 'Download link copied',
    copyFail: 'Copy failed, please copy the current page URL manually',
    prevPage: 'Previous page',
    nextPage: 'Next page',
    pageNavigation: 'Page navigation',
    dotAria: 'View page {n}',
    screenshotAltPrefix: 'Inventarium screenshot'
  }
};

function t(key) {
  return (i18n[currentLanguage] && i18n[currentLanguage][key]) || i18n.zh[key] || key;
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

const textNodes = document.querySelectorAll('[data-i18n]');
const languageButtons = document.querySelectorAll('.lang-btn');
const metaDescription = document.getElementById('meta-description');
const copyButton = document.getElementById('copy-link');
const copyStatus = document.getElementById('copy-status');

const galleryImages = Array.from({ length: 9 }, (_, index) => `./gallery/sample${index}.jpg`);
const pageFrame = document.getElementById('page-frame');
const pageImage = document.getElementById('page-image');
const pagePrev = document.getElementById('page-prev');
const pageNext = document.getElementById('page-next');
const pageDots = document.getElementById('page-dots');
const pageIndex = document.getElementById('page-index');
let currentPage = 0;
let touchStartX = 0;

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

  if (pagePrev) {
    pagePrev.setAttribute('aria-label', t('prevPage'));
  }
  if (pageNext) {
    pageNext.setAttribute('aria-label', t('nextPage'));
  }
  if (pageDots) {
    pageDots.setAttribute('aria-label', t('pageNavigation'));
  }
  if (pageImage) {
    pageImage.alt = `${t('screenshotAltPrefix')} ${currentPage + 1}`;
  }

  localStorage.setItem(storageKey, currentLanguage);
  renderDots();
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang || 'zh'));
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

function renderDots() {
  if (!pageDots) return;
  pageDots.innerHTML = '';
  galleryImages.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', t('dotAria').replace('{n}', String(i + 1)));
    if (i === currentPage) {
      dot.classList.add('is-active');
    }
    dot.addEventListener('click', () => {
      const direction = i > currentPage ? 'next' : 'prev';
      setPage(i, direction);
    });
    pageDots.appendChild(dot);
  });
}

function setPage(index, direction = 'next') {
  if (!pageImage || !pageFrame) return;
  const next = (index + galleryImages.length) % galleryImages.length;
  pageFrame.classList.remove('is-flipping-next', 'is-flipping-prev');
  void pageFrame.offsetWidth;
  pageFrame.classList.add(direction === 'prev' ? 'is-flipping-prev' : 'is-flipping-next');
  pageImage.src = galleryImages[next];
  pageImage.alt = `${t('screenshotAltPrefix')} ${next + 1}`;
  currentPage = next;
  if (pageIndex) {
    pageIndex.textContent = `${currentPage + 1} / ${galleryImages.length}`;
  }
  renderDots();
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

const savedLanguage = localStorage.getItem(storageKey);
setLanguage(savedLanguage && i18n[savedLanguage] ? savedLanguage : 'zh');
if (pageImage && pagePrev && pageNext && pageFrame) {
  setPage(0, 'next');
}
