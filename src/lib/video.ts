/**
 * Shared video lazy-loading utility.
 * Defers video source injection until the element enters the viewport
 * (or page load for hero). Provides WebM + MP4 dual sources.
 */
export function initLazyVideo(
  videoId: string,
  webmSrc: string,
  mp4Src: string,
  options: { trigger?: 'viewport' | 'load' } = {},
) {
  const video = document.getElementById(videoId) as HTMLVideoElement;
  if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const loadVideo = () => {
    const webm = document.createElement('source');
    webm.src = webmSrc;
    webm.type = 'video/webm';
    video.appendChild(webm);
    const mp4 = document.createElement('source');
    mp4.src = mp4Src;
    mp4.type = 'video/mp4';
    video.appendChild(mp4);
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
