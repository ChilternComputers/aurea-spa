/**
 * Shared video lazy-loading utility.
 * Defers video source injection until the element enters the viewport
 * (or page load for hero). Provides WebM + MP4 dual sources.
 * On mobile (<768px), serves smaller -mobile variants automatically.
 */
export function initLazyVideo(
  videoId: string,
  webmSrc: string,
  mp4Src: string,
  options: { trigger?: 'viewport' | 'load' } = {},
) {
  const video = document.getElementById(videoId) as HTMLVideoElement;
  if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const isMobile = window.innerWidth < 768;
  const webm = isMobile ? webmSrc.replace('.webm', '-mobile.webm') : webmSrc;
  const mp4 = isMobile ? mp4Src.replace('.mp4', '-mobile.mp4') : mp4Src;

  const loadVideo = () => {
    const webmSource = document.createElement('source');
    webmSource.src = webm;
    webmSource.type = 'video/webm';
    video.appendChild(webmSource);
    const mp4Source = document.createElement('source');
    mp4Source.src = mp4;
    mp4Source.type = 'video/mp4';
    video.appendChild(mp4Source);
    video.load();
    video.play().catch(() => {});
  };

  if (options.trigger === 'load') {
    // Defer to after page load (for hero — don't compete with LCP)
    if (document.readyState === 'complete') loadVideo();
    else window.addEventListener('load', loadVideo);
  } else {
    // Defer to viewport intersection (for below-fold sections)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadVideo();
          observer.disconnect();
        }
      });
    }, { rootMargin: '200px' });
    observer.observe(video);
  }
}
