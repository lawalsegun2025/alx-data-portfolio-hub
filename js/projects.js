// ── Populate filter dropdowns ────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const courseEl  = document.getElementById('filter-course');
  const domainEl  = document.getElementById('filter-domain');
  const diffEl    = document.getElementById('filter-diff');
  const searchEl  = document.getElementById('filter-search');
  const resetEl   = document.getElementById('filter-reset');
  const gridEl    = document.getElementById('projects-grid');
  const countEl   = document.getElementById('results-count');
  const noResEl   = document.getElementById('no-results');

  if (!gridEl) return;

  // Populate dropdowns
  COURSES.forEach(c => {
    const o = document.createElement('option');
    o.value = c; o.textContent = COURSE_LABELS[c] || c;
    courseEl.appendChild(o);
  });
  DOMAINS.forEach(d => {
    const o = document.createElement('option');
    o.value = d; o.textContent = d;
    domainEl.appendChild(o);
  });
  DIFFS.forEach(d => {
    const o = document.createElement('option');
    o.value = d; o.textContent = d;
    diffEl.appendChild(o);
  });

  // Read URL params for pre-filtering (e.g. from homepage category cards)
  const params = new URLSearchParams(window.location.search);
  if (params.get('course')) courseEl.value = params.get('course');
  if (params.get('domain')) domainEl.value = params.get('domain');

  renderProjects();

  courseEl.addEventListener('change', renderProjects);
  domainEl.addEventListener('change', renderProjects);
  diffEl.addEventListener('change', renderProjects);
  searchEl.addEventListener('input', renderProjects);
  resetEl.addEventListener('click', () => {
    courseEl.value = ''; domainEl.value = ''; diffEl.value = ''; searchEl.value = '';
    renderProjects();
  });

  function renderProjects() {
    const course  = courseEl.value;
    const domain  = domainEl.value;
    const diff    = diffEl.value;
    const query   = searchEl.value.toLowerCase().trim();

    const filtered = PROJECTS.filter(p => {
      if (p.status !== 'Published') return false;
      if (course && p.course !== course) return false;
      if (domain && p.domain !== domain) return false;
      if (diff   && p.difficulty !== diff) return false;
      if (query) {
        const haystack = [p.title, p.summary, p.domain, ...p.skills].join(' ').toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });

    countEl.textContent = `${filtered.length} project${filtered.length !== 1 ? 's' : ''} found`;
    noResEl.style.display = filtered.length === 0 ? 'block' : 'none';
    gridEl.innerHTML = filtered.map(cardHTML).join('');
  }
});

function cardHTML(p) {
  const diffClass = `difficulty-${p.difficulty.toLowerCase()}`;
  const skills = p.skills.slice(0, 3).map(s => `<span class="tag">${s}</span>`).join('');
  return `
  <div class="project-card">
    <div class="card-top">
      <span class="card-domain">${p.domain}</span>
      <span class="card-difficulty ${diffClass}">${p.difficulty}</span>
    </div>
    <h3>${p.title}</h3>
    <p class="summary">${p.summary}</p>
    <div class="card-meta">
      <span class="tag">${COURSE_LABELS[p.course] || p.course}</span>
      ${skills}
    </div>
    <div class="card-footer">
      <span class="card-time">⏱ ${p.estimatedTime}</span>
      <span class="badge-real">✓ Real Data</span>
    </div>
    <div style="margin-top:16px;">
      <a href="${p.projectPage}" class="btn btn-outline btn-sm btn-arrow">View Project</a>
    </div>
  </div>`;
}
