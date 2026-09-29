// Curated duplicate suppression for imported live project media.
// Keep the generated liveProjectMedia manifest untouched; this layer removes
// visitor-facing repeats where the live site exposed the same underlying photo
// at multiple sizes or formats. Prefer the highest-resolution source.
export const liveProjectMediaDuplicateMap = {
  '/assets/live-projects/projects-concrete-cleaning-in-port-clinton-ohio/03-cover-photo-jpg.jpg': '/assets/live-projects/projects-concrete-cleaning-in-port-clinton-ohio/01-cover-photo-jpg.jpg',
  '/assets/live-projects/house-washing-gutter-cleaning-kelleys-island-oh/02-house-gutter-1-webp.webp': '/assets/live-projects/house-washing-gutter-cleaning-kelleys-island-oh/01-house-gutter-1-jpg.jpg',
  '/assets/live-projects/projects-deck-cleaning-lakeside-marblehead-oh/02-lakeside-deck-cleaning-1-webp.webp': '/assets/live-projects/projects-deck-cleaning-lakeside-marblehead-oh/01-lakeside-deck-cleaning-1-jpg.jpg',
  '/assets/live-projects/projects-house-washing-oak-harbor/02-house-washing-oak-harbor-ohio-1-jpg.jpg': '/assets/live-projects/projects-house-washing-oak-harbor/01-house-washing-oak-harbor-ohio-1-jpg.jpg',
  '/assets/live-projects/projects-concrete-cleaning-in-port-clinton-oh/03-cover-photo-5-jpg.jpg': '/assets/live-projects/projects-concrete-cleaning-in-port-clinton-oh/01-cover-photo-5-jpg.jpg',
  '/assets/live-projects/projects-port-clinton-roof-cleaning/02-port-clinton-roof-cleaning-webp.webp': '/assets/live-projects/projects-port-clinton-roof-cleaning/01-port-clinton-roof-cleaning-jpg.jpg',
  '/assets/live-projects/projects-port-clinton-roof-cleaning/03-port-clinton-roof-cleaning-jpg.jpg': '/assets/live-projects/projects-port-clinton-roof-cleaning/01-port-clinton-roof-cleaning-jpg.jpg',
  '/assets/live-projects/projects-house-washing-oak-harbor-ohio/02-oak-harbor-house-1-jpg.jpg': '/assets/live-projects/projects-house-washing-oak-harbor-ohio/01-oak-harbor-house-1-jpg.jpg',
  '/assets/live-projects/projects-house-washing-oak-harbor-ohio/04-oak-harbor-house-3-jpg.jpg': '/assets/live-projects/projects-house-washing-oak-harbor-ohio/01-oak-harbor-house-1-jpg.jpg',
  '/assets/live-projects/projects-deck-staining-in-catawba-island-oh/02-deck-staining-in-catawba-island-oh-jpg.jpg': '/assets/live-projects/projects-deck-staining-in-catawba-island-oh/01-deck-staining-in-catawba-island-oh-jpg.jpg',
  '/assets/live-projects/projects-concrete-deck-and-window-cleaning-in-oak-harbor-ohio/03-cover-photo-2-jpg.jpg': '/assets/live-projects/projects-concrete-deck-and-window-cleaning-in-oak-harbor-ohio/01-cover-photo-2-jpg.jpg',
  // This Oak Harbor cover is byte-for-byte identical to the Port Clinton concrete-cleaning cover.
  // Suppress it rather than presenting the same photograph as evidence for two separate jobs.
  '/assets/live-projects/projects-concrete-deck-and-window-cleaning-in-oak-harbor-ohio/01-cover-photo-2-jpg.jpg': '/assets/live-projects/projects-concrete-cleaning-in-port-clinton-ohio/01-cover-photo-jpg.jpg',
  '/assets/live-projects/projects-house-washing-in-lakeside-marblehead-ohio/05-house-washing-in-lakeside-marblehead-ohio-01-jpg.jpg': '/assets/live-projects/projects-house-washing-in-lakeside-marblehead-ohio/01-house-washing-in-lakeside-marblehead-ohio-01-jpg.jpg',
  '/assets/live-projects/projects-concrete-cleaning-and-house-washing-in-marblehead-oh/03-cover-photo-6-jpg.jpg': '/assets/live-projects/projects-concrete-cleaning-and-house-washing-in-marblehead-oh/01-cover-photo-6-jpg.jpg',
  '/assets/live-projects/projects-house-washing-marblehead-ohio/03-d7e5780059d685c020230808-68-1w6b99-jpg.jpg': '/assets/live-projects/projects-house-washing-marblehead-ohio/01-d7e5780059d685c020230808-68-1w6b99-jpg.jpg',
}

export const liveProjectMediaDuplicateSources = new Set(Object.keys(liveProjectMediaDuplicateMap))

export function dedupeLiveProjectMedia(items = []) {
  return items.filter((item) => !liveProjectMediaDuplicateSources.has(item.src))
}
