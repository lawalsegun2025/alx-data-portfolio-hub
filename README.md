# ALX Data Portfolio Hub

A curated library of real-world portfolio projects for ALX Data Analytics self-paced learners.

**Live site:** https://lawalsegun2025.github.io/alx-data-portfolio-hub

## What This Is
The Portfolio Hub gives ALX Data Analytics learners a structured way to keep building after their courses end. Projects cover DA-2 (Google Sheets), DA-3 (MySQL), DA-4 (Power BI), and Data Analytics Capstones — across 15+ industries using real-world public datasets.

## Status
Pilot prototype — Technical Mentorship initiative, ALX Data Programs, July 2026.

## Structure
```
alx-data-portfolio-hub/
├── index.html           Homepage
├── projects.html        Project catalogue (search + filter)
├── how-it-works.html    Learner guide
├── responsible-ai.html  AI use guidance
├── github-guide.html    GitHub portfolio walkthrough
├── linkedin-guide.html  LinkedIn showcase guide
├── about.html           Initiative background
├── feedback.html        Feedback channel
├── 404.html
├── css/styles.css       All styles
├── js/
│   ├── projects-data.js Project catalogue data
│   ├── projects.js      Filtering and rendering
│   ├── project-detail.js
│   └── main.js
└── projects/            Individual project pages
    └── cap-001.html     Sample: Healthcare Analytics Capstone
```

## Adding a New Project
1. Add the project object to `js/projects-data.js`
2. Create `projects/[project-id].html` using `projects/cap-001.html` as a template
3. Commit and push — the catalogue updates automatically

## Owner
Segun Lawal, Data Scientist & Technical Mentor, ALX Data Programs
