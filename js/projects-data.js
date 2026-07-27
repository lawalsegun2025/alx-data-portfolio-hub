// ============================================================
// ALX Data Portfolio Hub — Project Catalogue Data
// Add new projects here. The site auto-renders them.
// ============================================================

const PROJECTS = [

  // ── DA-2: Google Sheets ──────────────────────────────────

  {
    id: "da2-001",
    title: "Healthcare Facility Performance Tracker",
    course: "DA-2",
    domain: "Healthcare",
    difficulty: "Beginner",
    estimatedTime: "6–10 hrs",
    skills: ["Data Cleaning", "Pivot Tables", "Charts", "Functions"],
    summary: "Analyse hospital outpatient data across African health facilities to identify performance gaps and improve patient flow planning.",
    datasetSource: "WHO Global Health Observatory",
    datasetLink: "https://www.who.int/data/gho",
    projectPage: "projects/da2-001.html",
    status: "Published"
  },
  {
    id: "da2-002",
    title: "Crop Yield & Food Security Analysis",
    course: "DA-2",
    domain: "Agriculture & Food Systems",
    difficulty: "Beginner",
    estimatedTime: "6–10 hrs",
    skills: ["Data Cleaning", "Descriptive Analysis", "Charts", "Pivot Tables"],
    summary: "Use FAO crop production records to assess food security trends across Sub-Saharan Africa and surface regions at highest risk.",
    datasetSource: "FAO — FAOSTAT",
    datasetLink: "https://www.fao.org/faostat/en/",
    projectPage: "projects/da2-002.html",
    status: "Published"
  },
  {
    id: "da2-003",
    title: "Mobile Money Adoption Trends",
    course: "DA-2",
    domain: "Banking & Finance",
    difficulty: "Intermediate",
    estimatedTime: "8–12 hrs",
    skills: ["Data Cleaning", "Validation", "Functions", "Statistical Reasoning"],
    summary: "Examine mobile money growth data across African markets to identify adoption patterns and recommend strategies for financial inclusion.",
    datasetSource: "World Bank Global Findex Database",
    datasetLink: "https://globalfindex.worldbank.org/",
    projectPage: "projects/da2-003.html",
    status: "Published"
  },
  {
    id: "da2-004",
    title: "School Enrollment & Gender Gap Analysis",
    course: "DA-2",
    domain: "Education",
    difficulty: "Beginner",
    estimatedTime: "6–8 hrs",
    skills: ["Data Cleaning", "Pivot Tables", "Charts", "Functions"],
    summary: "Analyse UNESCO education enrollment data to understand gender disparities and learning access gaps across African countries.",
    datasetSource: "UNESCO Institute for Statistics",
    datasetLink: "http://uis.unesco.org/",
    projectPage: "projects/da2-004.html",
    status: "Published"
  },
  {
    id: "da2-005",
    title: "Air Quality & Health Impact Report",
    course: "DA-2",
    domain: "Climate & Sustainability",
    difficulty: "Intermediate",
    estimatedTime: "8–12 hrs",
    skills: ["Data Cleaning", "Descriptive Statistics", "Charts", "Hypothesis Testing"],
    summary: "Process WHO air quality monitoring data to assess pollution levels in African cities and evaluate public health implications.",
    datasetSource: "WHO Ambient Air Quality Database",
    datasetLink: "https://www.who.int/data/gho/data/themes/air-pollution",
    projectPage: "projects/da2-005.html",
    status: "Published"
  },
  {
    id: "da2-006",
    title: "E-commerce Returns & Customer Behaviour",
    course: "DA-2",
    domain: "Retail & E-commerce",
    difficulty: "Intermediate",
    estimatedTime: "8–12 hrs",
    skills: ["Data Cleaning", "Functions", "Pivot Tables", "Charts"],
    summary: "Clean and analyse a retail transaction dataset to uncover return patterns, identify problem product categories, and make inventory recommendations.",
    datasetSource: "Kaggle — E-commerce Dataset",
    datasetLink: "https://www.kaggle.com/datasets/carrie1/ecommerce-data",
    projectPage: "projects/da2-006.html",
    status: "Published"
  },
  {
    id: "da2-007",
    title: "Electricity Access & Energy Poverty",
    course: "DA-2",
    domain: "Energy",
    difficulty: "Beginner",
    estimatedTime: "6–8 hrs",
    skills: ["Data Cleaning", "Functions", "Charts", "Descriptive Analysis"],
    summary: "Use World Bank energy access data to map electricity coverage gaps across Africa and calculate populations living without reliable power.",
    datasetSource: "World Bank — Sustainable Energy for All",
    datasetLink: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS",
    projectPage: "projects/da2-007.html",
    status: "Published"
  },
  {
    id: "da2-008",
    title: "HR Workforce Diversity & Attrition Audit",
    course: "DA-2",
    domain: "Human Resources",
    difficulty: "Intermediate",
    estimatedTime: "8–12 hrs",
    skills: ["Data Cleaning", "Pivot Tables", "Functions", "Statistical Reasoning"],
    summary: "Analyse an HR dataset to identify attrition drivers, audit workforce diversity metrics, and present recommendations to a people operations team.",
    datasetSource: "Kaggle — IBM HR Analytics Employee Attrition",
    datasetLink: "https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset",
    projectPage: "projects/da2-008.html",
    status: "Published"
  },

  // ── DA-3: MySQL ──────────────────────────────────────────

  {
    id: "da3-001",
    title: "Hospital Database: Patient & Treatment Analytics",
    course: "DA-3",
    domain: "Healthcare",
    difficulty: "Beginner",
    estimatedTime: "8–12 hrs",
    skills: ["SQL Foundations", "Joins", "Aggregations", "Filtering"],
    summary: "Query a structured hospital database to answer operational questions about patient volumes, treatment outcomes, and departmental performance.",
    datasetSource: "Kaggle — Hospital Database",
    datasetLink: "https://www.kaggle.com/datasets/nehaprabhavalkar/av-healthcare-analytics-ii",
    projectPage: "projects/da3-001.html",
    status: "Published"
  },
  {
    id: "da3-002",
    title: "E-commerce Orders & Revenue Intelligence",
    course: "DA-3",
    domain: "Retail & E-commerce",
    difficulty: "Beginner",
    estimatedTime: "8–12 hrs",
    skills: ["SQL Foundations", "Aggregations", "Joins", "Functions"],
    summary: "Use SQL to explore an e-commerce orders database, segment customers by purchase behaviour, and identify top-performing product categories.",
    datasetSource: "Kaggle — Brazilian E-commerce (Olist)",
    datasetLink: "https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce",
    projectPage: "projects/da3-002.html",
    status: "Published"
  },
  {
    id: "da3-003",
    title: "Banking Transactions & Fraud Pattern Detection",
    course: "DA-3",
    domain: "Banking & Finance",
    difficulty: "Intermediate",
    estimatedTime: "10–14 hrs",
    skills: ["Advanced SQL", "Subqueries", "Window Functions", "Aggregations"],
    summary: "Analyse a financial transactions database to identify suspicious patterns, segment customer risk profiles, and support a fraud monitoring team.",
    datasetSource: "Kaggle — Credit Card Fraud Detection",
    datasetLink: "https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud",
    projectPage: "projects/da3-003.html",
    status: "Published"
  },
  {
    id: "da3-004",
    title: "African Football League Statistics",
    course: "DA-3",
    domain: "Sports Analytics",
    difficulty: "Beginner",
    estimatedTime: "6–10 hrs",
    skills: ["SQL Foundations", "Joins", "Aggregations", "Filtering"],
    summary: "Query a football statistics database to rank teams, identify top scorers, and build a performance table for an African league season.",
    datasetSource: "Kaggle — European Soccer Database",
    datasetLink: "https://www.kaggle.com/datasets/hugomathien/soccer",
    projectPage: "projects/da3-004.html",
    status: "Published"
  },
  {
    id: "da3-005",
    title: "Telecom Subscriber Churn Analysis",
    course: "DA-3",
    domain: "Telecommunications",
    difficulty: "Intermediate",
    estimatedTime: "10–14 hrs",
    skills: ["Advanced SQL", "Subqueries", "Aggregations", "Window Functions"],
    summary: "Query a telecom subscriber database to identify churn signals, segment users by usage patterns, and recommend retention interventions.",
    datasetSource: "Kaggle — Telco Customer Churn",
    datasetLink: "https://www.kaggle.com/datasets/blastchar/telco-customer-churn",
    projectPage: "projects/da3-005.html",
    status: "Published"
  },
  {
    id: "da3-006",
    title: "Ride-Sharing Operations: Driver & Trip Analysis",
    course: "DA-3",
    domain: "Transportation & Logistics",
    difficulty: "Intermediate",
    estimatedTime: "10–14 hrs",
    skills: ["SQL Foundations", "Joins", "Aggregations", "Subqueries"],
    summary: "Analyse ride-sharing trip data to evaluate driver performance, peak demand windows, and route efficiency for an urban mobility operator.",
    datasetSource: "NYC TLC Open Data — Trip Records",
    datasetLink: "https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page",
    projectPage: "projects/da3-006.html",
    status: "Published"
  },
  {
    id: "da3-007",
    title: "Real Estate Listings & Market Intelligence",
    course: "DA-3",
    domain: "Real Estate",
    difficulty: "Intermediate",
    estimatedTime: "8–12 hrs",
    skills: ["SQL Foundations", "Joins", "Aggregations", "Filtering"],
    summary: "Query a property listings database to identify pricing trends by neighbourhood, property type, and listing age for a real estate advisory firm.",
    datasetSource: "Kaggle — House Prices Dataset",
    datasetLink: "https://www.kaggle.com/datasets/shree1992/housedata",
    projectPage: "projects/da3-007.html",
    status: "Published"
  },
  {
    id: "da3-008",
    title: "Insurance Claims & Risk Profiling",
    course: "DA-3",
    domain: "Insurance",
    difficulty: "Advanced",
    estimatedTime: "12–18 hrs",
    skills: ["Advanced SQL", "Subqueries", "Window Functions", "CTEs"],
    summary: "Use SQL to analyse insurance claims data, build risk profiles by customer segment, and surface insights that inform underwriting decisions.",
    datasetSource: "Kaggle — Insurance Dataset",
    datasetLink: "https://www.kaggle.com/datasets/teertha/ushealthinsurancedataset",
    projectPage: "projects/da3-008.html",
    status: "Published"
  },

  // ── DA-4: Power BI ───────────────────────────────────────

  {
    id: "da4-001",
    title: "Hospital Executive Performance Dashboard",
    course: "DA-4",
    domain: "Healthcare",
    difficulty: "Beginner",
    estimatedTime: "8–12 hrs",
    skills: ["Data Modelling", "DAX", "Dashboard Design", "Visualisation"],
    summary: "Design a Power BI dashboard giving hospital leadership a real-time view of patient volumes, bed occupancy, and departmental KPIs.",
    datasetSource: "Kaggle — Healthcare Analytics",
    datasetLink: "https://www.kaggle.com/datasets/nehaprabhavalkar/av-healthcare-analytics-ii",
    projectPage: "projects/da4-001.html",
    status: "Published"
  },
  {
    id: "da4-002",
    title: "Africa Energy Access Dashboard",
    course: "DA-4",
    domain: "Energy",
    difficulty: "Intermediate",
    estimatedTime: "10–14 hrs",
    skills: ["Power Query", "DAX", "Maps", "Dashboard Design"],
    summary: "Build an interactive Power BI report visualising electricity access rates, renewable energy capacity, and energy poverty across African nations.",
    datasetSource: "World Bank — Sustainable Energy for All",
    datasetLink: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS",
    projectPage: "projects/da4-002.html",
    status: "Published"
  },
  {
    id: "da4-003",
    title: "Sales Performance & Territory Dashboard",
    course: "DA-4",
    domain: "Retail & E-commerce",
    difficulty: "Beginner",
    estimatedTime: "8–12 hrs",
    skills: ["Data Modelling", "DAX", "Dashboard Design", "Data Storytelling"],
    summary: "Create a regional sales dashboard in Power BI to help a retail company track revenue against targets, monitor top products, and identify underperforming territories.",
    datasetSource: "Kaggle — Superstore Sales",
    datasetLink: "https://www.kaggle.com/datasets/vivek468/superstore-dataset-final",
    projectPage: "projects/da4-003.html",
    status: "Published"
  },
  {
    id: "da4-004",
    title: "HR Workforce & Attrition Analytics",
    course: "DA-4",
    domain: "Human Resources",
    difficulty: "Intermediate",
    estimatedTime: "10–14 hrs",
    skills: ["Power Query", "DAX", "Dashboard Design", "Data Modelling"],
    summary: "Build a Power BI report for an HR team that tracks headcount, attrition rates by department, and workforce diversity metrics.",
    datasetSource: "Kaggle — IBM HR Analytics",
    datasetLink: "https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset",
    projectPage: "projects/da4-004.html",
    status: "Published"
  },
  {
    id: "da4-005",
    title: "Climate & Carbon Emissions Tracker",
    course: "DA-4",
    domain: "Climate & Sustainability",
    difficulty: "Advanced",
    estimatedTime: "12–18 hrs",
    skills: ["Power Query", "DAX", "Maps", "Data Storytelling", "Dashboard Design"],
    summary: "Visualise global CO₂ emissions, temperature anomalies, and deforestation trends in a Power BI report that supports climate policy briefings.",
    datasetSource: "Our World in Data — CO₂ Emissions",
    datasetLink: "https://ourworldindata.org/co2-emissions",
    projectPage: "projects/da4-005.html",
    status: "Published"
  },
  {
    id: "da4-006",
    title: "Telecommunications KPI Dashboard",
    course: "DA-4",
    domain: "Telecommunications",
    difficulty: "Intermediate",
    estimatedTime: "10–14 hrs",
    skills: ["Data Modelling", "DAX", "Dashboard Design", "Visualisation"],
    summary: "Design a Power BI executive dashboard tracking subscriber growth, churn rates, revenue per user, and network performance for a telecoms company.",
    datasetSource: "Kaggle — Telco Customer Churn",
    datasetLink: "https://www.kaggle.com/datasets/blastchar/telco-customer-churn",
    projectPage: "projects/da4-006.html",
    status: "Published"
  },
  {
    id: "da4-007",
    title: "Agricultural Commodity Price Monitor",
    course: "DA-4",
    domain: "Agriculture & Food Systems",
    difficulty: "Intermediate",
    estimatedTime: "10–14 hrs",
    skills: ["Power Query", "DAX", "Time Intelligence", "Dashboard Design"],
    summary: "Build a Power BI report tracking price volatility of key African agricultural commodities, helping traders and policymakers monitor market movements.",
    datasetSource: "FAO — FAOSTAT Price Data",
    datasetLink: "https://www.fao.org/faostat/en/#data/PP",
    projectPage: "projects/da4-007.html",
    status: "Published"
  },
  {
    id: "da4-008",
    title: "Education Outcomes & Learning Poverty Report",
    course: "DA-4",
    domain: "Education",
    difficulty: "Beginner",
    estimatedTime: "8–12 hrs",
    skills: ["Data Modelling", "DAX", "Maps", "Visualisation"],
    summary: "Design a World Bank education dashboard showing literacy rates, learning poverty indicators, and school enrollment trends across African nations.",
    datasetSource: "World Bank Education Statistics",
    datasetLink: "https://data.worldbank.org/topic/education",
    projectPage: "projects/da4-008.html",
    status: "Published"
  },

  // ── Capstone ─────────────────────────────────────────────

  {
    id: "cap-001",
    title: "Healthcare Analytics: End-to-End Patient Insights",
    course: "Capstone",
    domain: "Healthcare",
    difficulty: "Advanced",
    estimatedTime: "20–30 hrs",
    skills: ["Data Cleaning", "SQL", "Power BI", "DAX", "Data Storytelling", "Business Recommendations"],
    summary: "A complete analytics project: clean hospital data in Google Sheets, query the structured database with MySQL, and build an executive Power BI dashboard with actionable recommendations.",
    datasetSource: "Kaggle — Healthcare Analytics",
    datasetLink: "https://www.kaggle.com/datasets/nehaprabhavalkar/av-healthcare-analytics-ii",
    projectPage: "projects/cap-001.html",
    status: "Published"
  },
  {
    id: "cap-002",
    title: "Retail Analytics: From Raw Data to Executive Insights",
    course: "Capstone",
    domain: "Retail & E-commerce",
    difficulty: "Advanced",
    estimatedTime: "20–30 hrs",
    skills: ["Data Cleaning", "SQL", "Power BI", "DAX", "Business Recommendations", "Data Storytelling"],
    summary: "Clean and validate a retail sales dataset, run SQL queries to answer business questions, and present findings in a Power BI sales performance dashboard with executive recommendations.",
    datasetSource: "Kaggle — Brazilian E-commerce (Olist)",
    datasetLink: "https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce",
    projectPage: "projects/cap-002.html",
    status: "Published"
  },
  {
    id: "cap-003",
    title: "Financial Inclusion: Analysing Access to Banking in Africa",
    course: "Capstone",
    domain: "Banking & Finance",
    difficulty: "Advanced",
    estimatedTime: "20–30 hrs",
    skills: ["Data Cleaning", "SQL", "Power BI", "DAX", "Data Storytelling", "Business Recommendations"],
    summary: "End-to-end project using World Bank Findex data to clean records, run SQL analysis, and produce a Power BI report on financial inclusion across African markets.",
    datasetSource: "World Bank Global Findex Database",
    datasetLink: "https://globalfindex.worldbank.org/",
    projectPage: "projects/cap-003.html",
    status: "Published"
  },
  {
    id: "cap-004",
    title: "Energy Access & Sustainable Development",
    course: "Capstone",
    domain: "Energy",
    difficulty: "Advanced",
    estimatedTime: "20–30 hrs",
    skills: ["Data Cleaning", "SQL", "Power BI", "DAX", "Maps", "Business Recommendations"],
    summary: "Prepare, query, and visualise data on energy access and renewable capacity across Africa, producing an integrated report for an energy policy team.",
    datasetSource: "World Bank — Sustainable Energy for All",
    datasetLink: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS",
    projectPage: "projects/cap-004.html",
    status: "Published"
  },
  {
    id: "cap-005",
    title: "Agricultural Supply Chain: From Yield to Market",
    course: "Capstone",
    domain: "Agriculture & Food Systems",
    difficulty: "Advanced",
    estimatedTime: "20–30 hrs",
    skills: ["Data Cleaning", "SQL", "Power BI", "DAX", "Data Storytelling"],
    summary: "Integrate crop yield, price, and trade data to analyse agricultural supply chain efficiency, food security risk, and market access challenges across African nations.",
    datasetSource: "FAO — FAOSTAT",
    datasetLink: "https://www.fao.org/faostat/en/",
    projectPage: "projects/cap-005.html",
    status: "Published"
  },
  {
    id: "cap-006",
    title: "Education System Performance: A National Analysis",
    course: "Capstone",
    domain: "Education",
    difficulty: "Advanced",
    estimatedTime: "20–30 hrs",
    skills: ["Data Cleaning", "SQL", "Power BI", "DAX", "Data Storytelling", "Business Recommendations"],
    summary: "Analyse UNESCO and World Bank education data across the full analytics pipeline to surface performance gaps, gender disparities, and investment priorities.",
    datasetSource: "UNESCO Institute for Statistics",
    datasetLink: "http://uis.unesco.org/",
    projectPage: "projects/cap-006.html",
    status: "Published"
  }
];

// ── Derived helpers ──────────────────────────────────────
const COURSES   = [...new Set(PROJECTS.map(p => p.course))].sort();
const DOMAINS   = [...new Set(PROJECTS.map(p => p.domain))].sort();
const DIFFS     = ["Beginner", "Intermediate", "Advanced"];
const COURSE_LABELS = { "DA-2": "DA-2: Google Sheets", "DA-3": "DA-3: MySQL", "DA-4": "DA-4: Power BI", "Capstone": "Data Analytics Capstone" };
const COURSE_ICONS  = { "DA-2": "📊", "DA-3": "🗄️", "DA-4": "📈", "Capstone": "🏆" };
const COURSE_COUNTS = {};
COURSES.forEach(c => { COURSE_COUNTS[c] = PROJECTS.filter(p => p.course === c && p.status === "Published").length; });
