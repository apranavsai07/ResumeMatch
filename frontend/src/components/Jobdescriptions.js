export const JOB_CATEGORIES = [
  {
    category: "Tech & Engineering",
    color: "#60a5fa",
    roles: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Data Scientist",
      "Machine Learning Engineer",
      "DevOps Engineer",
      "Mobile Developer",
      "Cybersecurity Analyst",
    ],
  },
  {
    category: "Business & Management",
    color: "#a78bfa",
    roles: [
      "Business Analyst",
      "Product Manager",
      "Project Manager",
      "Operations Manager",
    ],
  },
  {
    category: "Data & Finance",
    color: "#34d399",
    roles: [
      "Data Analyst",
      "Financial Analyst",
      "Investment Banking Analyst",
      "Accountant",
    ],
  },
  {
    category: "Marketing & Content",
    color: "#f472b6",
    roles: [
      "Digital Marketing Specialist",
      "Content Writer",
      "Social Media Manager",
    ],
  },
  {
    category: "Design & Creative",
    color: "#fbbf24",
    roles: ["UI/UX Designer", "Graphic Designer"],
  },
  {
    category: "Healthcare & Science",
    color: "#22d3ee",
    roles: ["Clinical Research Associate", "Biomedical Engineer"],
  },
  {
    category: "HR & Legal",
    color: "#fb923c",
    roles: ["HR Manager", "Legal Associate"],
  },
];

export const JOB_DESCRIPTIONS = {

  "Frontend Developer": `
About the Role:
We are looking for a skilled Frontend Developer to join our engineering team. You will be responsible for building responsive, high-performance web interfaces that deliver exceptional user experiences. You will work closely with designers and backend engineers to translate product requirements into clean, maintainable code.

Responsibilities:
- Develop and maintain responsive web applications using React.js and modern JavaScript (ES6+)
- Collaborate with UI/UX designers to implement pixel-perfect designs from Figma mockups
- Optimize applications for maximum speed, scalability, and cross-browser compatibility
- Write clean, reusable, and well-documented component-based code
- Integrate RESTful APIs and GraphQL endpoints with frontend interfaces
- Participate in code reviews, providing and receiving constructive feedback
- Identify and fix bugs, performance bottlenecks, and accessibility issues
- Work in an Agile environment with bi-weekly sprints and daily stand-ups

Required Skills:
- Proficiency in HTML5, CSS3, and JavaScript (ES6+)
- Strong experience with React.js, including hooks, context API, and state management (Redux or Zustand)
- Familiarity with CSS frameworks such as Tailwind CSS or Bootstrap
- Experience with version control using Git and GitHub
- Understanding of RESTful APIs and asynchronous JavaScript (fetch, async/await)
- Basic knowledge of web performance optimization techniques
- Familiarity with responsive design and mobile-first development

Nice to Have:
- Experience with TypeScript
- Knowledge of testing libraries such as Jest and React Testing Library
- Exposure to CI/CD pipelines and deployment platforms (Vercel, Netlify)
- Understanding of accessibility standards (WCAG 2.1)
- Familiarity with Next.js or Vite
`.trim(),

  "Backend Developer": `
About the Role:
We are seeking a Backend Developer to design, build, and maintain the server-side logic that powers our applications. You will work on building robust APIs, optimizing database performance, and ensuring the security and scalability of our backend systems.

Responsibilities:
- Design and develop RESTful APIs and microservices using Node.js or Python (Django/FastAPI)
- Build and optimize relational and non-relational databases (PostgreSQL, MongoDB)
- Implement authentication and authorization mechanisms (JWT, OAuth2)
- Write server-side logic for business-critical features with high reliability
- Collaborate with frontend developers to integrate APIs seamlessly
- Monitor application performance and troubleshoot production issues
- Write comprehensive unit and integration tests
- Participate in architecture discussions and technical design reviews

Required Skills:
- Strong proficiency in Node.js (Express) or Python (Django / FastAPI)
- Solid experience with SQL databases (PostgreSQL or MySQL) and ORM tools
- Experience with NoSQL databases such as MongoDB or Redis
- Understanding of RESTful API design principles and HTTP protocols
- Proficiency with Git for version control and collaborative development
- Knowledge of authentication patterns — JWT, session management, OAuth
- Basic understanding of Docker and containerization
- Familiarity with cloud platforms (AWS, GCP, or Azure)

Nice to Have:
- Experience with message queues (RabbitMQ, Kafka)
- Knowledge of GraphQL API design
- Familiarity with Kubernetes and container orchestration
- Understanding of OWASP security best practices
- Experience with CI/CD pipelines
`.trim(),

  "Full Stack Developer": `
About the Role:
We are looking for a Full Stack Developer who is comfortable working across the entire web development stack. You will own features end-to-end — from database schema design to pixel-perfect UI implementation — and work in a fast-paced, collaborative environment.

Responsibilities:
- Build and maintain full-stack web applications using React.js on the frontend and Node.js or Python on the backend
- Design and manage databases including schema design, query optimization, and migrations
- Develop and integrate RESTful or GraphQL APIs
- Deploy and manage applications on cloud infrastructure (AWS, GCP, or Heroku)
- Collaborate with product managers and designers to deliver features on time
- Write automated tests covering both frontend and backend codebases
- Perform code reviews and mentor junior developers
- Maintain technical documentation for systems and APIs

Required Skills:
- Strong proficiency in JavaScript/TypeScript across frontend (React) and backend (Node.js)
- Solid experience with relational databases (PostgreSQL, MySQL) and MongoDB
- Hands-on experience with RESTful API development
- Familiarity with Docker and basic DevOps practices
- Experience with Git and collaborative workflows (pull requests, branching strategies)
- Understanding of state management on the frontend (Redux, Context API)
- Knowledge of web security fundamentals

Nice to Have:
- Experience with Next.js for SSR/SSG
- Exposure to GraphQL (Apollo Client / Server)
- Familiarity with Redis for caching
- Experience with cloud deployment (AWS EC2, Lambda, S3)
- Knowledge of Agile/Scrum methodologies
`.trim(),

  "Data Scientist": `
About the Role:
We are looking for a Data Scientist to extract meaningful insights from large and complex datasets. You will apply statistical modeling, machine learning, and data visualization techniques to solve real business problems and inform strategic decisions.

Responsibilities:
- Analyze large datasets to identify patterns, trends, and actionable insights
- Build and validate machine learning models for classification, regression, and clustering tasks
- Clean, preprocess, and transform raw data into analysis-ready formats
- Develop dashboards and reports to communicate findings to non-technical stakeholders
- Collaborate with engineering teams to deploy models into production environments
- Design and run A/B experiments to test hypotheses and measure impact
- Stay up-to-date with the latest research and techniques in machine learning and AI
- Document models, methodologies, and data pipelines clearly

Required Skills:
- Strong proficiency in Python (Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn)
- Solid understanding of machine learning algorithms — regression, decision trees, SVM, clustering
- Experience with SQL for querying and manipulating structured data
- Knowledge of statistical concepts — hypothesis testing, probability distributions, confidence intervals
- Experience with data visualization tools (Matplotlib, Plotly, Tableau, or Power BI)
- Familiarity with Jupyter Notebooks for exploratory data analysis
- Understanding of model evaluation metrics and validation techniques

Nice to Have:
- Experience with deep learning frameworks (TensorFlow, PyTorch)
- Exposure to NLP techniques (text classification, sentiment analysis)
- Knowledge of big data tools (Spark, Hadoop)
- Experience with cloud ML platforms (AWS SageMaker, GCP Vertex AI)
- Familiarity with MLflow or other experiment tracking tools
`.trim(),

  "Machine Learning Engineer": `
About the Role:
We are hiring a Machine Learning Engineer to bridge the gap between data science research and production engineering. You will design, build, and deploy scalable ML systems that serve millions of users, focusing on reliability, performance, and maintainability.

Responsibilities:
- Design, train, and deploy machine learning models at production scale
- Build and maintain ML pipelines for data ingestion, feature engineering, training, and inference
- Optimize model performance for latency, throughput, and accuracy
- Collaborate with data scientists to productionize research models
- Monitor deployed models for performance degradation and data drift
- Implement A/B testing frameworks for model evaluation
- Build feature stores and data pipelines using modern MLOps tools
- Write high-quality, testable, and documented Python code

Required Skills:
- Strong Python programming skills with experience in ML libraries (Scikit-learn, TensorFlow, PyTorch)
- Experience building and deploying ML models in production environments
- Solid understanding of machine learning concepts and algorithms
- Proficiency with MLOps tools — MLflow, Kubeflow, or similar
- Experience with Docker and Kubernetes for containerized deployments
- Familiarity with cloud platforms (AWS SageMaker, GCP Vertex AI, or Azure ML)
- Strong understanding of data structures, algorithms, and software engineering principles
- Experience with SQL and data pipeline tools (Airflow, dbt)

Nice to Have:
- Experience with large language models (LLMs) and prompt engineering
- Knowledge of distributed training frameworks (Horovod, DeepSpeed)
- Familiarity with real-time inference systems
- Experience with feature stores (Feast, Tecton)
- Background in recommendation systems or NLP
`.trim(),

  "DevOps Engineer": `
About the Role:
We are looking for a DevOps Engineer to build and maintain the infrastructure, tools, and processes that enable our engineering teams to ship software reliably and efficiently. You will own our CI/CD pipelines, cloud infrastructure, and observability stack.

Responsibilities:
- Design, implement, and maintain CI/CD pipelines for automated testing and deployment
- Manage and optimize cloud infrastructure on AWS, GCP, or Azure
- Containerize applications using Docker and orchestrate with Kubernetes
- Implement infrastructure-as-code using Terraform or Ansible
- Monitor system health, performance, and availability using tools like Prometheus, Grafana, and ELK
- Respond to and resolve production incidents, performing root cause analysis
- Collaborate with development teams to improve deployment frequency and reliability
- Enforce security best practices across infrastructure and pipelines

Required Skills:
- Strong experience with cloud platforms — AWS (EC2, S3, RDS, Lambda) or equivalent
- Proficiency with Docker and Kubernetes
- Experience with CI/CD tools (Jenkins, GitHub Actions, GitLab CI, or CircleCI)
- Infrastructure-as-Code experience with Terraform or CloudFormation
- Scripting skills in Bash and Python
- Knowledge of monitoring and logging tools (Prometheus, Grafana, ELK stack)
- Understanding of networking fundamentals — DNS, load balancing, VPC, firewalls
- Experience with Git and branching workflows

Nice to Have:
- Certified Kubernetes Administrator (CKA) or AWS certifications
- Experience with service mesh (Istio, Linkerd)
- Knowledge of GitOps practices (ArgoCD, Flux)
- Familiarity with security scanning tools (Snyk, Trivy)
- Experience with cost optimization in cloud environments
`.trim(),

  "Mobile Developer": `
About the Role:
We are seeking a Mobile Developer to build high-quality, cross-platform mobile applications used by millions of users. You will work closely with product and design teams to deliver smooth, native-feeling experiences on both iOS and Android using React Native or Flutter.

Responsibilities:
- Design and develop cross-platform mobile applications using React Native or Flutter
- Implement pixel-perfect UI components based on design specifications
- Integrate RESTful APIs and third-party SDKs (payment gateways, maps, analytics)
- Optimize app performance — reduce load times, memory usage, and battery consumption
- Write unit and integration tests for mobile components
- Publish and manage releases on the App Store and Google Play
- Collaborate with backend engineers to design API contracts
- Troubleshoot and fix bugs reported by QA and production users

Required Skills:
- Strong proficiency in React Native (JavaScript/TypeScript) or Flutter (Dart)
- Understanding of mobile UI/UX principles and platform-specific guidelines (iOS HIG, Material Design)
- Experience integrating RESTful APIs and handling async data fetching
- Knowledge of state management solutions (Redux, MobX, Riverpod, or Provider)
- Familiarity with mobile build tools and deployment processes (Xcode, Android Studio)
- Experience with Git and code review workflows
- Understanding of mobile app performance profiling and optimization

Nice to Have:
- Experience with native development in Swift or Kotlin
- Knowledge of push notifications (Firebase Cloud Messaging)
- Familiarity with deep linking and in-app navigation patterns
- Experience with app analytics tools (Mixpanel, Firebase Analytics)
- Knowledge of offline-first architectures
`.trim(),

  "Cybersecurity Analyst": `
About the Role:
We are looking for a Cybersecurity Analyst to protect our organization's systems, networks, and data from threats. You will monitor for suspicious activity, respond to incidents, and work proactively to identify and remediate vulnerabilities before they are exploited.

Responsibilities:
- Monitor security alerts and events from SIEM tools (Splunk, QRadar, or similar)
- Investigate and respond to security incidents, performing root cause analysis
- Conduct vulnerability assessments and penetration testing on internal systems
- Perform threat hunting to proactively identify hidden threats in the environment
- Manage and configure security tools — firewalls, IDS/IPS, EDR solutions
- Develop and maintain incident response playbooks and documentation
- Conduct security awareness training for employees
- Ensure compliance with security frameworks (ISO 27001, NIST, SOC 2)

Required Skills:
- Strong understanding of network security — TCP/IP, DNS, firewalls, VPNs
- Experience with SIEM platforms and log analysis
- Knowledge of common attack techniques (OWASP Top 10, MITRE ATT&CK framework)
- Familiarity with vulnerability scanning tools (Nessus, Qualys, OpenVAS)
- Understanding of endpoint detection and response (EDR) tools
- Proficiency in scripting for automation (Python or Bash)
- Knowledge of security frameworks and compliance standards
- Experience with cloud security (AWS Security Hub, Azure Security Center)

Nice to Have:
- CEH, CISSP, CompTIA Security+ or similar certifications
- Experience with penetration testing tools (Metasploit, Burp Suite, Nmap)
- Knowledge of digital forensics and malware analysis
- Familiarity with zero-trust architecture principles
- Experience with threat intelligence platforms
`.trim(),

  "Business Analyst": `
About the Role:
We are hiring a Business Analyst to act as the bridge between business stakeholders and technology teams. You will gather and document requirements, analyze business processes, and help deliver solutions that meet organizational goals efficiently.

Responsibilities:
- Elicit, document, and validate business requirements from stakeholders across departments
- Create detailed BRDs (Business Requirements Documents), user stories, and process flows
- Analyze existing business processes and identify opportunities for improvement
- Collaborate with development teams to ensure requirements are understood and implemented correctly
- Facilitate workshops, interviews, and meetings with stakeholders
- Develop and maintain project documentation including use cases, workflows, and test cases
- Support UAT (User Acceptance Testing) and help validate delivered solutions
- Track project progress and communicate status updates to stakeholders

Required Skills:
- Strong analytical and problem-solving skills with attention to detail
- Proficiency in creating process flow diagrams using tools like Visio, Lucidchart, or Draw.io
- Experience with requirements documentation and agile user story writing
- Solid Excel skills — pivot tables, VLOOKUP, data analysis
- Basic SQL knowledge for querying and validating data
- Excellent verbal and written communication skills
- Familiarity with project management tools (Jira, Confluence, Trello)
- Understanding of Agile/Scrum and Waterfall methodologies

Nice to Have:
- CBAP (Certified Business Analysis Professional) certification
- Experience with BI tools (Power BI, Tableau)
- Exposure to ERP systems (SAP, Oracle)
- Knowledge of BPMN for process modeling
- Experience in a specific domain such as banking, healthcare, or e-commerce
`.trim(),

  "Product Manager": `
About the Role:
We are looking for a Product Manager to own the vision, strategy, and execution of our core product. You will define what to build, why to build it, and work cross-functionally to deliver features that create real value for users and drive business growth.

Responsibilities:
- Define and own the product roadmap aligned with company strategy and user needs
- Gather insights through user research, data analysis, and stakeholder interviews
- Write clear, detailed product requirement documents (PRDs) and user stories
- Prioritize the product backlog and make trade-off decisions based on impact and effort
- Work closely with engineering, design, and marketing teams throughout the product lifecycle
- Define and monitor key success metrics for each feature and product initiative
- Conduct competitive analysis to identify market opportunities and gaps
- Lead sprint planning, backlog grooming, and retrospective sessions

Required Skills:
- Strong product thinking — ability to identify user problems and define elegant solutions
- Experience writing PRDs, user stories, and acceptance criteria
- Data-driven mindset — comfortable using analytics tools (Mixpanel, Amplitude, Google Analytics)
- Excellent communication and stakeholder management skills
- Familiarity with Agile/Scrum frameworks
- Ability to work with design teams and give constructive UX feedback
- Proficiency with product management tools (Jira, Notion, ProductBoard)
- Basic understanding of technical architecture to communicate effectively with engineers

Nice to Have:
- Experience with A/B testing and experimentation frameworks
- SQL knowledge for self-serve data analysis
- Background in UX design or software engineering
- MBA or degree in Computer Science, Business, or related field
- Experience in B2B SaaS or consumer mobile products
`.trim(),

  "Project Manager": `
About the Role:
We are seeking an experienced Project Manager to lead cross-functional projects from initiation to delivery. You will ensure that projects are delivered on time, within scope, and within budget while managing stakeholder expectations effectively.

Responsibilities:
- Plan, execute, and close projects of varying complexity across departments
- Define project scope, goals, deliverables, and success criteria in collaboration with stakeholders
- Build and maintain detailed project plans, timelines, and resource allocation schedules
- Identify, assess, and mitigate project risks proactively
- Facilitate regular project status meetings and provide clear progress updates to stakeholders
- Manage project budgets and track expenditures against forecasts
- Coordinate between technical teams, vendors, and business stakeholders
- Conduct post-project reviews and document lessons learned

Required Skills:
- Proven experience managing projects using Agile, Scrum, or Waterfall methodologies
- Proficiency in project management tools (MS Project, Jira, Asana, Monday.com)
- Strong communication, negotiation, and conflict resolution skills
- Ability to manage multiple projects simultaneously in a fast-paced environment
- Experience with risk management and change management processes
- Solid understanding of budget planning and financial tracking
- PMP, PRINCE2, or equivalent project management certification

Nice to Have:
- Experience in a specific industry (IT, construction, healthcare, or finance)
- Familiarity with Lean and Six Sigma principles
- Experience managing remote or distributed teams
- Knowledge of resource management and capacity planning tools
- Certified Scrum Master (CSM) certification
`.trim(),

  "Operations Manager": `
About the Role:
We are looking for an Operations Manager to oversee and continuously improve the day-to-day operations of our organization. You will manage teams, streamline processes, and ensure that the business runs efficiently and scales effectively.

Responsibilities:
- Oversee daily operations across departments to ensure smooth and efficient functioning
- Design, implement, and improve operational processes and standard operating procedures (SOPs)
- Set performance goals and KPIs for operational teams and monitor progress
- Manage vendor relationships, contracts, and negotiations
- Analyze operational data to identify inefficiencies and opportunities for cost reduction
- Lead, mentor, and develop a team of operational staff
- Collaborate with senior leadership to align operations with company strategy
- Ensure compliance with regulatory requirements and company policies

Required Skills:
- Strong leadership and team management skills
- Experience in process improvement methodologies (Lean, Six Sigma, Kaizen)
- Proficiency with operational data analysis using Excel or BI tools
- Excellent organizational and multitasking abilities
- Strong communication skills for cross-functional collaboration
- Experience with ERP or operations management software
- Budget management and financial planning experience
- Ability to manage change and drive adoption of new processes

Nice to Have:
- Six Sigma Green Belt or Black Belt certification
- Experience in supply chain, logistics, or manufacturing operations
- Familiarity with automation tools for operational workflows
- MBA or degree in Operations Management or Business Administration
- Experience scaling operations in a startup or high-growth environment
`.trim(),

  "Data Analyst": `
About the Role:
We are looking for a Data Analyst to help us make sense of our data and turn it into actionable insights. You will work closely with business teams to understand their data needs, build dashboards, and perform analyses that directly influence decisions.

Responsibilities:
- Collect, clean, and analyze large datasets from multiple sources to identify trends and patterns
- Build and maintain dashboards and reports using BI tools (Power BI, Tableau, or Looker)
- Write complex SQL queries to extract, transform, and validate data
- Collaborate with business stakeholders to understand analytical requirements
- Present findings clearly to both technical and non-technical audiences
- Identify data quality issues and work with engineering teams to resolve them
- Support ad-hoc analysis requests from leadership and product teams
- Document data definitions, metrics, and analysis methodologies

Required Skills:
- Strong proficiency in SQL — joins, subqueries, window functions, aggregations
- Experience with BI and visualization tools (Power BI, Tableau, Google Data Studio)
- Proficiency in Excel — pivot tables, VLOOKUP, data validation, charts
- Basic Python skills for data manipulation (Pandas, NumPy)
- Strong analytical thinking and problem-solving ability
- Excellent communication skills to present data stories clearly
- Understanding of data warehousing concepts
- Attention to detail and commitment to data accuracy

Nice to Have:
- Experience with cloud data platforms (BigQuery, Redshift, Snowflake)
- Knowledge of statistical analysis techniques
- Familiarity with ETL processes and data pipeline tools
- Experience with A/B test analysis
- Background in a specific domain (e-commerce, finance, healthcare)
`.trim(),

  "Financial Analyst": `
About the Role:
We are seeking a Financial Analyst to support the finance team in budgeting, forecasting, and financial reporting. You will analyze financial performance, build models, and provide insights that guide business decisions at the executive level.

Responsibilities:
- Prepare monthly, quarterly, and annual financial reports and variance analyses
- Build and maintain financial models for budgeting, forecasting, and scenario planning
- Analyze financial statements (P&L, balance sheet, cash flow) and identify key trends
- Support the annual budgeting process and quarterly reforecasting cycles
- Conduct cost-benefit analyses for strategic initiatives and capital expenditures
- Collaborate with department heads to track performance against budgets
- Prepare presentations for senior management and board meetings
- Ensure accuracy and integrity of financial data in reporting systems

Required Skills:
- Strong proficiency in Microsoft Excel — financial modeling, DCF, sensitivity analysis
- Experience with financial reporting and accounting principles (GAAP/IFRS)
- Knowledge of budgeting, forecasting, and variance analysis techniques
- Familiarity with ERP systems (SAP, Oracle, or NetSuite)
- Strong analytical skills with high attention to detail
- Excellent written and verbal communication skills
- Understanding of financial statements and corporate finance concepts
- CFA Level 1 or CA Inter preferred

Nice to Have:
- Experience with Power BI or Tableau for financial dashboards
- Knowledge of SQL for financial data extraction
- CFA, CA, CPA, or CMA certification
- Experience in a specific industry (banking, FMCG, real estate)
- Familiarity with financial planning tools (Anaplan, Adaptive Insights)
`.trim(),

  "Investment Banking Analyst": `
About the Role:
We are looking for an Investment Banking Analyst to join our team in executing M&A transactions, capital market deals, and financial advisory mandates. You will be involved in every stage of a transaction — from initial pitch to deal closure.

Responsibilities:
- Build detailed financial models including DCF, LBO, comparable company analysis, and precedent transactions
- Prepare pitch books, information memorandums (IMs), and client presentations
- Conduct industry and company research to support deal origination and execution
- Assist in due diligence processes — financial, operational, and legal coordination
- Coordinate with legal counsels, auditors, and other advisors during transactions
- Analyze capital structure options and funding strategies for clients
- Maintain client relationships and support senior bankers in business development
- Monitor market trends, sector news, and regulatory developments

Required Skills:
- Strong financial modeling skills — DCF, LBO, merger models, trading comparables
- Proficiency in Microsoft Excel and PowerPoint at an advanced level
- Solid understanding of accounting, corporate finance, and valuation principles
- Strong research and analytical capabilities
- Ability to work under pressure and meet tight deadlines
- Excellent written and verbal communication skills
- Attention to detail and high standards for output quality
- Bachelor's degree in Finance, Economics, or related field

Nice to Have:
- CFA Level 1 or progress toward CFA charter
- Prior internship experience at a bank or Big 4 firm
- Knowledge of Bloomberg Terminal or CapIQ
- Understanding of regulatory frameworks (SEBI, SEC)
- MBA from a premier institution
`.trim(),

  "Accountant": `
About the Role:
We are seeking a qualified Accountant to manage the day-to-day financial operations of the company. You will ensure accurate bookkeeping, timely statutory compliance, and support the finance team in financial reporting and audits.

Responsibilities:
- Maintain accurate books of accounts using Tally ERP or equivalent accounting software
- Prepare and file GST returns, TDS returns, and other statutory compliances on time
- Process accounts payable and receivable, ensuring timely payments and collections
- Reconcile bank statements, vendor accounts, and inter-company balances monthly
- Assist in preparation of financial statements — P&L, balance sheet, and cash flow
- Support internal and external audit processes by providing necessary documentation
- Manage payroll processing and ensure timely salary disbursements
- Ensure compliance with Income Tax Act, Companies Act, and other applicable laws

Required Skills:
- Proficiency in Tally ERP 9 / Tally Prime
- Strong knowledge of GST, TDS, and direct/indirect taxation
- Understanding of Indian accounting standards (Ind AS) and GAAP
- Experience with bank reconciliation and accounts finalization
- B.Com / M.Com or CA Inter qualification
- Proficiency in Microsoft Excel for financial analysis
- Strong attention to detail and organizational skills
- Good understanding of payroll processes and compliance

Nice to Have:
- CA (Chartered Accountant) qualification
- Experience with ERP systems (SAP, Oracle, Zoho Books)
- Knowledge of MCA filings and ROC compliance
- Experience in a manufacturing, trading, or service industry
- Familiarity with advanced Excel (macros, pivot tables)
`.trim(),

  "Digital Marketing Specialist": `
About the Role:
We are looking for a Digital Marketing Specialist to plan, execute, and optimize our online marketing campaigns. You will manage paid and organic channels to drive traffic, generate leads, and grow our brand presence across digital platforms.

Responsibilities:
- Plan and execute SEO strategies — on-page optimization, technical SEO, and link building
- Manage Google Ads (Search, Display, Shopping) and Meta Ads campaigns end-to-end
- Monitor and analyze campaign performance using Google Analytics 4, Search Console, and Meta Business Suite
- Create and manage email marketing campaigns using tools like Mailchimp or HubSpot
- Collaborate with content and design teams to develop campaign creatives and landing pages
- Conduct keyword research, competitive analysis, and audience segmentation
- Report on KPIs — CPC, CTR, ROAS, CAC, and conversion rates — with actionable recommendations
- Stay updated on algorithm changes, platform updates, and digital marketing trends

Required Skills:
- Strong knowledge of SEO principles — technical SEO, on-page, and off-page
- Hands-on experience managing Google Ads and Meta Ads campaigns
- Proficiency in Google Analytics 4 and Google Search Console
- Experience with email marketing platforms (Mailchimp, HubSpot, Klaviyo)
- Understanding of conversion rate optimization (CRO) techniques
- Data-driven mindset with ability to interpret campaign data and optimize accordingly
- Familiarity with marketing automation concepts
- Good written communication skills for ad copy and campaign briefs

Nice to Have:
- Google Ads or Meta Blueprint certification
- Experience with marketing automation platforms (HubSpot, Marketo)
- Knowledge of affiliate marketing and influencer marketing
- Familiarity with programmatic advertising
- Experience with e-commerce marketing (Shopify, Amazon)
`.trim(),

  "Content Writer": `
About the Role:
We are looking for a talented Content Writer to create compelling, high-quality content across multiple formats and platforms. You will craft content that educates, engages, and converts our target audience while maintaining a consistent brand voice.

Responsibilities:
- Research and write long-form blog articles, whitepapers, case studies, and website copy
- Create SEO-optimized content targeting relevant keywords to improve organic search rankings
- Write email newsletters, product descriptions, social media posts, and ad copy
- Collaborate with the marketing and design teams to develop content campaigns
- Edit and proofread content for grammar, clarity, tone, and consistency
- Conduct interviews with subject matter experts and customers for content development
- Maintain a content calendar and ensure timely delivery of all content pieces
- Analyze content performance metrics and optimize based on data

Required Skills:
- Exceptional written English with strong grammar and storytelling ability
- Experience writing SEO-optimized content with understanding of keyword intent
- Ability to write across different formats — blogs, emails, social media, and long-form
- Research skills — ability to simplify complex topics for a general audience
- Familiarity with content management systems (WordPress, Webflow)
- Understanding of basic SEO principles and tools (Ahrefs, SEMrush, Yoast)
- Ability to adapt tone and style to different brand voices
- Portfolio of published writing samples

Nice to Have:
- Experience in a specific industry (tech, finance, healthcare, SaaS)
- Basic knowledge of HTML for CMS content formatting
- Familiarity with content performance tools (Google Analytics, Hotjar)
- Experience with AI writing tools and prompt engineering
- Video scriptwriting or podcast scripting experience
`.trim(),

  "Social Media Manager": `
About the Role:
We are seeking a creative and data-driven Social Media Manager to build and manage our brand presence across social platforms. You will be responsible for content creation, community management, and growing our engaged following.

Responsibilities:
- Develop and execute a comprehensive social media strategy across Instagram, LinkedIn, Twitter/X, and YouTube
- Create, curate, and schedule high-quality content — graphics, reels, carousels, and copy
- Manage and grow our online community by responding to comments, DMs, and mentions
- Collaborate with designers and videographers to produce platform-native content
- Plan and execute paid social media campaigns and boosted posts
- Monitor analytics and provide monthly performance reports on reach, engagement, and growth
- Stay ahead of social media trends, viral formats, and platform algorithm changes
- Work with influencers and brand partners for collaborative campaigns

Required Skills:
- Deep understanding of major social media platforms and their algorithms
- Strong visual storytelling and copywriting skills
- Experience with social media scheduling tools (Buffer, Hootsuite, Sprout Social, or Later)
- Proficiency in Canva or basic Adobe Creative Suite for content creation
- Analytical skills — comfortable interpreting social media metrics and insights
- Community management experience
- Knowledge of paid social advertising (Meta Ads, LinkedIn Ads)
- Creative thinking with a strong eye for trends and cultural moments

Nice to Have:
- Experience with video editing tools (CapCut, Adobe Premiere, or DaVinci Resolve)
- Knowledge of influencer marketing and partnership management
- Experience growing a social media account from scratch
- Familiarity with social listening tools (Brandwatch, Mention)
- Photography or videography skills
`.trim(),

  "UI/UX Designer": `
About the Role:
We are looking for a UI/UX Designer to create beautiful, intuitive, and user-centered digital experiences. You will own the design process end-to-end — from user research and wireframing to high-fidelity prototypes and design system maintenance.

Responsibilities:
- Conduct user research through interviews, surveys, and usability tests to understand user needs
- Create user personas, journey maps, and information architecture diagrams
- Design wireframes, low-fidelity mockups, and high-fidelity prototypes in Figma
- Build and maintain a consistent design system and component library
- Collaborate closely with product managers and engineers throughout the product lifecycle
- Design responsive interfaces for web and mobile platforms
- Present design concepts and rationale to stakeholders and incorporate feedback
- Analyze user behavior data (heatmaps, session recordings) to inform design improvements

Required Skills:
- Strong proficiency in Figma for UI design, prototyping, and design systems
- Solid understanding of UX principles — information architecture, interaction design, accessibility
- Experience conducting user research and translating insights into design decisions
- Knowledge of responsive design and mobile-first design principles
- Understanding of design handoff to engineering (Figma Dev Mode, Zeplin)
- Strong visual design sense — typography, color, spacing, and layout
- Ability to give and receive constructive design critique
- Portfolio demonstrating end-to-end design process

Nice to Have:
- Experience with animation and micro-interaction design (Lottie, Framer)
- Knowledge of accessibility standards (WCAG 2.1)
- Familiarity with front-end technologies (HTML, CSS) for better engineer collaboration
- Experience with usability testing platforms (Maze, Lookback, UserTesting)
- Knowledge of design psychology and behavioral design principles
`.trim(),

  "Graphic Designer": `
About the Role:
We are seeking a creative Graphic Designer to produce visually compelling designs across digital and print media. You will work on branding, marketing materials, social media assets, and product visuals that represent our brand identity consistently.

Responsibilities:
- Design brand identity assets — logos, color palettes, typography systems, and brand guidelines
- Create marketing collaterals — brochures, flyers, banners, presentations, and email templates
- Design social media graphics, display ads, and digital campaign assets
- Work with the marketing team to conceptualize and execute visual campaigns
- Ensure brand consistency across all touchpoints and communication channels
- Prepare print-ready files and manage relationships with print vendors
- Create motion graphics and simple animations for digital use
- Review and iterate on designs based on stakeholder and client feedback

Required Skills:
- Mastery of Adobe Creative Suite — Illustrator, Photoshop, InDesign
- Strong understanding of design fundamentals — typography, color theory, layout, and composition
- Experience creating brand identity systems and maintaining brand guidelines
- Ability to conceptualize and execute both digital and print designs
- Strong attention to detail and commitment to quality output
- Excellent time management to handle multiple projects simultaneously
- Ability to translate briefs into creative visual concepts
- Portfolio demonstrating diverse design work across formats

Nice to Have:
- Proficiency in Figma or Sketch for UI-oriented design work
- Experience with motion graphics tools (After Effects, Cinema 4D)
- Photography and photo retouching skills
- Experience with 3D design or product visualization
- Knowledge of print production processes and specifications
`.trim(),

  "Clinical Research Associate": `
About the Role:
We are looking for a Clinical Research Associate (CRA) to monitor clinical trials and ensure they are conducted in compliance with protocols, GCP guidelines, and regulatory requirements. You will act as the liaison between the sponsor and investigational sites.

Responsibilities:
- Conduct site qualification, initiation, monitoring, and close-out visits at investigational sites
- Verify that clinical trials are conducted in accordance with the approved protocol and GCP guidelines
- Review and verify source documents against Case Report Forms (CRFs) for accuracy
- Identify and report protocol deviations, adverse events, and safety issues promptly
- Maintain regular communication with site investigators and site staff
- Review and follow up on outstanding data queries and action items
- Prepare detailed monitoring visit reports and follow-up letters
- Ensure proper informed consent procedures are followed at all sites

Required Skills:
- Strong knowledge of ICH-GCP guidelines and clinical trial regulations
- Experience with source document verification (SDV) and data integrity checks
- Familiarity with Electronic Data Capture (EDC) systems (Medidata Rave, Oracle Inform)
- Excellent attention to detail and documentation skills
- Strong interpersonal and communication skills for site management
- Ability to work independently and manage multiple sites simultaneously
- Scientific background — degree in Life Sciences, Pharmacy, Nursing, or Medicine
- Willingness to travel to clinical sites (50–70% travel)

Nice to Have:
- ACRP (CCRA) or SOCRA (CCRP) certification
- Experience in a specific therapeutic area (oncology, cardiology, CNS)
- Familiarity with regulatory submissions (IND, NDA, BLA)
- Knowledge of risk-based monitoring (RBM) approaches
- Experience with CTMS (Clinical Trial Management Systems)
`.trim(),

  "Biomedical Engineer": `
About the Role:
We are seeking a Biomedical Engineer to design, develop, and evaluate medical devices and healthcare technologies. You will work at the intersection of engineering, biology, and medicine to create solutions that improve patient outcomes.

Responsibilities:
- Design and develop medical devices, instruments, and healthcare technology solutions
- Conduct testing, validation, and verification of biomedical devices per regulatory standards
- Collaborate with clinicians and healthcare professionals to understand clinical needs
- Prepare technical documentation — design history files, risk analyses, and test reports
- Ensure compliance with regulatory requirements (FDA 21 CFR, ISO 13485, CE marking)
- Troubleshoot and maintain existing medical equipment
- Support clinical trials and post-market surveillance activities
- Stay current with advances in biomaterials, diagnostics, and medical technology

Required Skills:
- Strong foundation in biomedical or mechanical/electrical engineering principles
- Knowledge of medical device regulations — FDA, ISO 13485, IEC 62304
- Experience with CAD tools (SolidWorks, AutoCAD) for device design
- Familiarity with biocompatibility standards and biomaterials
- Understanding of quality management systems (QMS) in a regulated environment
- Strong analytical and problem-solving skills
- Experience with technical documentation and design control processes
- Knowledge of signal processing for biosensors or diagnostic devices

Nice to Have:
- Experience with embedded systems and firmware for medical devices
- Knowledge of imaging technologies (MRI, CT, ultrasound)
- Familiarity with 3D printing for prototyping
- Experience with LabVIEW or MATLAB for signal analysis
- Advanced degree (M.Tech / MS) in Biomedical Engineering
`.trim(),

  "HR Manager": `
About the Role:
We are looking for an experienced HR Manager to lead our human resources function. You will manage the full employee lifecycle, build a strong organizational culture, and ensure the company attracts, develops, and retains top talent.

Responsibilities:
- Lead end-to-end recruitment processes — job posting, screening, interviewing, and offer management
- Develop and implement HR policies, procedures, and employee handbooks
- Manage onboarding and offboarding processes to ensure smooth transitions
- Oversee performance management cycles — goal setting, mid-year reviews, and annual appraisals
- Address employee grievances and conduct disciplinary proceedings fairly and professionally
- Manage payroll processing in coordination with the finance team
- Ensure compliance with labor laws and statutory requirements (PF, ESIC, Gratuity)
- Drive employee engagement initiatives, training programs, and culture-building activities

Required Skills:
- Strong knowledge of Indian labor laws and HR compliance requirements
- Experience with HRMS platforms (Darwinbox, Keka, BambooHR, or SAP SuccessFactors)
- Proven recruiting experience across technical and non-technical roles
- Excellent interpersonal and conflict resolution skills
- Strong organizational skills and ability to manage confidential information
- Experience designing performance management and appraisal frameworks
- Good understanding of payroll processing and statutory compliance
- MBA in HR or PGDM in Human Resources preferred

Nice to Have:
- SHRM-CP or SHRM-SCP certification
- Experience building HR processes from scratch in a startup environment
- Knowledge of talent analytics and HR data dashboards
- Experience with employer branding and campus hiring programs
- Familiarity with diversity, equity, and inclusion (DEI) initiatives
`.trim(),

  "Legal Associate": `
About the Role:
We are looking for a Legal Associate to support our legal team in managing contracts, regulatory compliance, and litigation matters. You will work across business units to provide sound legal counsel and ensure the organization operates within the bounds of the law.

Responsibilities:
- Draft, review, and negotiate commercial contracts — NDAs, vendor agreements, employment contracts, and service agreements
- Conduct legal research on applicable laws, regulations, and case precedents
- Assist in corporate compliance activities — board resolutions, ROC filings, and statutory registers
- Support litigation management — coordinating with external counsels and preparing case files
- Review and advise on intellectual property matters — trademarks, copyrights, and IP licensing
- Monitor regulatory changes and update internal teams on compliance requirements
- Assist in due diligence processes for mergers, acquisitions, and investments
- Maintain a well-organized legal repository of all contracts and corporate documents

Required Skills:
- LLB or LLM degree from a recognized institution
- Strong contract drafting and negotiation skills
- Good knowledge of Companies Act, Contract Act, and other applicable Indian laws
- Research skills — ability to analyze statutes, case laws, and legal opinions
- Excellent written and verbal communication skills in English
- Attention to detail and strong organizational skills
- Familiarity with legal document management systems
- Understanding of GDPR or Indian data protection laws is a plus

Nice to Have:
- Experience at a law firm or in-house legal department
- Knowledge of startup ecosystem legal requirements — term sheets, shareholder agreements
- Familiarity with SEBI regulations for listed companies
- Experience with international commercial contracts
- Bar Council enrollment and practice experience
`.trim(),

};