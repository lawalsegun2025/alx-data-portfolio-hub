// Renders the full sample project detail page (cap-001)
// For real projects, each project has its own HTML in /projects/
document.addEventListener('DOMContentLoaded', () => {
  // Active nav link fix for project pages
  document.querySelectorAll('.nav-links a').forEach(a => {
    if ((a.getAttribute('href') || '').includes('projects.html')) a.classList.add('active');
  });
});
