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

const copyButton = document.getElementById('copy-link');
const copyStatus = document.getElementById('copy-status');

if (copyButton && copyStatus) {
  copyButton.addEventListener('click', async () => {
    const target = new URL('./app-release.apk', window.location.href).href;
    try {
      await navigator.clipboard.writeText(target);
      copyStatus.textContent = '下载链接已复制';
    } catch {
      copyStatus.textContent = '复制失败，请手动复制当前页面地址';
    }
  });
}

const galleryImages = Array.from({ length: 9 }, (_, index) => `./gallery/sample${index}.jpg`);
const pageFrame = document.getElementById('page-frame');
const pageImage = document.getElementById('page-image');
const pagePrev = document.getElementById('page-prev');
const pageNext = document.getElementById('page-next');
const pageDots = document.getElementById('page-dots');
const pageIndex = document.getElementById('page-index');
let currentPage = 0;
let touchStartX = 0;

function renderDots() {
  if (!pageDots) return;
  pageDots.innerHTML = '';
  galleryImages.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `查看第 ${i + 1} 页`);
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
  pageImage.alt = `Inventarium 应用截图 ${next + 1}`;
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
  setPage(0, 'next');
}
