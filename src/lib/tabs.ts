/**
 * Shared tab filter utility for treatment and gallery tab interfaces.
 * Handles click activation, arrow key navigation, ARIA attributes, and item filtering.
 */
export function initTabs(
  tabSelector: string,
  itemSelector: string,
  tabAttr: string,
  itemAttr: string,
) {
  const tabs = document.querySelectorAll(tabSelector);
  const items = document.querySelectorAll(itemSelector);
  if (!tabs.length) return;

  // Create aria-live region for screen reader announcements
  let liveRegion = document.getElementById('tab-filter-status');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'tab-filter-status';
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
  }

  function activateTab(tab: Element) {
    const category = tab.getAttribute(tabAttr);

    tabs.forEach((t) => {
      const isActive = t === tab;
      t.setAttribute('aria-selected', String(isActive));
      (t as HTMLElement).tabIndex = isActive ? 0 : -1;
      if (isActive) {
        (t as HTMLElement).classList.remove('btn-outline');
        (t as HTMLElement).classList.add('btn-fill');
      } else {
        (t as HTMLElement).classList.remove('btn-fill');
        (t as HTMLElement).classList.add('btn-outline');
      }
    });

    let visibleCount = 0;
    items.forEach((item) => {
      const el = item as HTMLElement;
      const visible = category === 'all' || item.getAttribute(itemAttr) === category;
      if (visible) el.style.removeProperty('display');
      else el.style.display = 'none';
      if (visible) visibleCount++;
    });

    // Announce result count to screen readers
    const label = tab.textContent?.trim() || category;
    if (liveRegion) {
      liveRegion.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? 'item' : 'items'} for ${label}`;
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab));
  });

  // Arrow key navigation between tabs
  const tabList = tabs[0]?.closest('[role="tablist"]');
  tabList?.addEventListener('keydown', (e) => {
    const tabArray = Array.from(tabs);
    const currentIdx = tabArray.findIndex(
      (t) => t.getAttribute('aria-selected') === 'true',
    );
    let newIdx = currentIdx;
    if ((e as KeyboardEvent).key === 'ArrowRight')
      newIdx = (currentIdx + 1) % tabArray.length;
    else if ((e as KeyboardEvent).key === 'ArrowLeft')
      newIdx = (currentIdx - 1 + tabArray.length) % tabArray.length;
    else return;
    (e as KeyboardEvent).preventDefault();
    activateTab(tabArray[newIdx]);
    (tabArray[newIdx] as HTMLElement).focus();
  });
}
