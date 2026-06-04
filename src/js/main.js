// Set the current year in the footer dynamically.
document.getElementById('current-year').textContent = new Date().getFullYear();

// Animate the hero year counting up to its founding year (1856).
// To stop the heading from jittering, the number uses tabular (equal-width)
// figures and its box is locked to the final width before the value starts
// changing, so neither the number nor the centered <h1> reflows during the
// count. Honors prefers-reduced-motion (just leaves the static 1856).
const yearEl = document.getElementById('dynamic-year');
const prefersReducedMotion =
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (yearEl && !prefersReducedMotion) {
  const run = () => {
    const finalYear = parseInt(yearEl.textContent, 10) || 1856;
    const startYear = finalYear - 56;
    const durationMs = 1000;

    // Freeze the box size (tabular figures + an explicit width) so the count
    // can never reflow the heading, regardless of which digits are showing.
    yearEl.style.fontVariantNumeric = 'tabular-nums';
    yearEl.style.display = 'inline-block';
    yearEl.style.textAlign = 'center';
    yearEl.style.width = yearEl.getBoundingClientRect().width + 'px';
    yearEl.textContent = startYear;

    let startTime = null;
    const tick = (now) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      yearEl.textContent = Math.round(startYear + (finalYear - startYear) * eased);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        yearEl.textContent = finalYear; // snap to the exact final value
      }
    };
    requestAnimationFrame(tick);
  };

  // Measure after web fonts load so the locked width matches the real glyphs.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(run);
  } else {
    run();
  }
}
