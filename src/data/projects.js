export const PROJECTS = [
  {
    id: "prospectmind-ai",
    title: "ProspectMind AI",
    tagline: "Autonomous Sales & Outbound SDR System",
    category: "Autonomous Sales & Lead Generation",
    tier: "flagship",
    status: "active",
    summary:
      "Fully autonomous outbound SDR system built to eliminate manual prospect research and lead tiering. Integrates Model Context Protocol (MCP) domain scraping with intent scoring to generate personalized, verified outbound briefs.",
    metrics: [
      { label: "AI COST / 2 MEETINGS", value: "$0.0420", trend: "positive" },
      { label: "INBOX DELIVERY RATE", value: "100%", trend: "positive" },
      { label: "HUMAN-IN-LOOP REVIEW", value: "VERIFIED", trend: "neutral" },
    ],
    techStack: ["Python", "LangGraph", "FastAPI", "MCP", "OpenAI", "PostgreSQL"],
    architectureFlow: [
      {
        step: "01",
        name: "Domain Scrape (MCP)",
        detail: "Autonomous web and domain scraping via Model Context Protocol tools.",
      },
      {
        step: "02",
        name: "Intent Scoring (ICP Fit)",
        detail: "Deterministic scoring against Ideal Customer Profile (ICP) criteria.",
      },
      {
        step: "03",
        name: "HITL Outbound Review",
        detail: "Human-in-the-Loop review queue for high-value enterprise accounts.",
      },
      {
        step: "04",
        name: "Executive Briefing",
        detail: "Automated generation of executive sales briefs and meeting invites.",
      },
    ],
    loomDemoUrl: "https://www.loom.com/embed/placeholder-prospectmind",
    youtubeId: "1sRv7sZSmOU",
    demoType: "video",
  },
  {
    id: "docmind-ai",
    title: "DocMind AI",
    tagline: "Multi-Modal Document RAG Platform",
    category: "Multimodal RAG & Document Intelligence",
    tier: "flagship",
    status: "active",
    summary:
      "Production-grade Multimodal RAG platform designed to parse 50+ page technical manuals, engineering schematics, and financial reports with exact source page highlighting and zero hallucination.",
    metrics: [
      { label: "GROUNDING ACCURACY", value: "100%", trend: "positive" },
      { label: "DOCUMENT CAPACITY", value: "50+ Pages", trend: "neutral" },
      { label: "SOURCE CITATIONS", value: "EXACT PAGE", trend: "positive" },
    ],
    techStack: ["React", "Gemini Vision", "pgvector", "Python", "FastAPI", "Tailwind CSS"],
    architectureFlow: [
      {
        step: "01",
        name: "Multi-Modal Parse",
        detail: "Gemini Vision API parsing diagrams, tables, and dense typography.",
      },
      {
        step: "02",
        name: "Async Ingestion Queue",
        detail: "Background processing and embedding generation into pgvector.",
      },
      {
        step: "03",
        name: "Self-Verification Node",
        detail: "Self-checking LLM node evaluating claim-to-citation accuracy.",
      },
      {
        step: "04",
        name: "Interactive Viewer",
        detail: "Custom React viewer displaying side-by-side exact page citations.",
      },
    ],
    loomDemoUrl: "https://www.loom.com/embed/placeholder-docmind",
    youtubeId: "YcmPddKAjvM",
    demoType: "interactive",
  },
  {
    id: "supportmind-ai",
    title: "SupportMind AI",
    tagline: "Enterprise Support & Ticket Resolution Engine",
    category: "Enterprise Support Automation",
    tier: "flagship",
    status: "active",
    summary:
      "Self-healing AI customer support engine providing $0.0000 cost per deflection while maintaining 100% resolution accuracy and strict zero-PII data leakage security controls.",
    metrics: [
      { label: "VERIFIED RESOLUTION", value: "100%", trend: "positive" },
      { label: "DEFLECTION COST", value: "$0.0000", trend: "positive" },
      { label: "PII DATA LEAKAGE", value: "0%", trend: "positive" },
    ],
    techStack: ["LangChain", "Python", "Redis", "FastAPI", "Zendesk API", "Docker"],
    architectureFlow: [
      {
        step: "01",
        name: "Security Gateway",
        detail: "Prompt injection firewall and automatic PII redaction layer.",
      },
      {
        step: "02",
        name: "Dynamic Model Routing",
        detail: "Intelligent routing between fast/small LLMs and reasoning models.",
      },
      {
        step: "03",
        name: "HITL Decision Queue",
        detail: "Escalation trigger routing edge cases to human support reps.",
      },
      {
        step: "04",
        name: "Escalation Brief",
        detail: "Auto-generated 8-part summary brief attached to ticket handoffs.",
      },
    ],
    loomDemoUrl: "https://www.loom.com/embed/placeholder-supportmind",
    youtubeId: "550KRi4X1wE",
    demoType: "architecture",
  },
  {
    id: "opsmind-ai",
    title: "OpsMind AI",
    tagline: "Autonomous Lead Qualification & Business Operations Engine",
    subtitle: "Autonomous Lead Qualification & Business Operations Engine",
    slug: "opsmind_operations_engine",
    youtubeId: "lGUJoXjWZxo",
    category: "Business Operations & Lead Triage",
    tier: "production",
    status: "active",
    summary:
      "Autonomous business operations engine that performs real-time inbox reading, sentiment detection, automated company research, instant CRM logging, Slack hot-lead alerts, 5:00 PM daily CrewAI activity reports, FinOps budget threshold alerts, and weekly accuracy evaluation.",
    metrics: [
      { label: "RESPONSE LATENCY", value: "<60s", trend: "positive" },
      { label: "VERIFIED ACCURACY", value: "92.5%", trend: "positive" },
      { label: "OPERATIONAL SAVINGS", value: "10+ Hrs/Wk", trend: "positive" },
    ],
    techStack: ["Python", "LangChain", "CrewAI", "Slack API", "HubSpot CRM", "FinOps Triggers"],
    architectureFlow: [
      {
        step: "01",
        name: "Inbox & Sentiment Read",
        detail: "Real-time email inbox ingestion, LLM sentiment analysis, and automated company research.",
      },
      {
        step: "02",
        name: "CRM & Slack Triage",
        detail: "Instant CRM lead logging and instant Slack alerts for high-priority hot leads.",
      },
      {
        step: "03",
        name: "5:00 PM Daily Brief",
        detail: "Automated end-of-day CrewAI activity report compiled and dispatched to Slack.",
      },
      {
        step: "04",
        name: "FinOps & Accuracy Guard",
        detail: "Budget threshold alerts and weekly accuracy evaluation (faithfulness & relevancy at 92.5%).",
      },
    ],
    loomDemoUrl: "https://www.loom.com/embed/placeholder-operations-agent",
    demoType: "video",
  },
  {
    id: "lead-qualification-pipeline",
    title: "Inbound Lead Qualification Pipeline",
    tagline: "Automated Lead Scoring & Gmail Dispatch",
    category: "Automated Lead Triage & Routing",
    tier: "production",
    status: "active",
    summary:
      "Automated inbound processing pipeline converting raw form submissions into firmographically enriched intent matrix scores, deflecting 2-3 hours of daily manual SDR work.",
    metrics: [
      { label: "RESPONSE LATENCY", value: "<60s", trend: "positive" },
      { label: "INTENT MATRIX SCORE", value: "1–100", trend: "neutral" },
      { label: "MANUAL WORK DEFLECTED", value: "2–3 hrs/day", trend: "positive" },
    ],
    techStack: ["n8n", "JotForm API", "Gmail API", "Clearbit", "Webhooks", "JSON Schema"],
    architectureFlow: [
      {
        step: "01",
        name: "Webhook Ingestion",
        detail: "Instant capture of JotForm and landing page submissions.",
      },
      {
        step: "02",
        name: "Firmographic Enrich",
        detail: "Automated API enrichment of company size, tech stack, and location.",
      },
      {
        step: "03",
        name: "AI Intent Tiering",
        detail: "Algorithmic scoring (1-100) assigning high/medium/low priority.",
      },
      {
        step: "04",
        name: "Gmail API Dispatch",
        detail: "Personalized response dispatch and calendar booking trigger.",
      },
    ],
    loomDemoUrl: "https://www.loom.com/embed/placeholder-lead-qualification",
    demoType: "interactive",
  },
  {
    id: "famocare-backend",
    title: "FamoCare Microservices Backend",
    tagline: "Full-Stack Healthcare Mobile App APIs",
    category: "Full-Stack Healthcare Backend API",
    tier: "systems",
    status: "active",
    summary:
      "High-availability backend microservices powering live healthcare iOS and Android mobile apps. Features JWT authentication, RBAC authorization, and real-time push notification delivery.",
    metrics: [
      { label: "API UPTIME", value: "99.99%", trend: "positive" },
      { label: "ENDPOINT LATENCY", value: "<120ms", trend: "positive" },
      { label: "SECURITY PROTOCOL", value: "JWT + RBAC", trend: "neutral" },
    ],
    techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Firebase Push"],
    architectureFlow: [
      {
        step: "01",
        name: "API Gateway",
        detail: "Rate-limited entry gateway handling CORS, SSL, and request routing.",
      },
      {
        step: "02",
        name: "JWT Authentication",
        detail: "Stateless JWT token verification and RBAC permission checks.",
      },
      {
        step: "03",
        name: "Database Query Engine",
        detail: "Optimized PostgreSQL relational queries backed by Redis caching.",
      },
      {
        step: "04",
        name: "Push Notification",
        detail: "Asynchronous FCM dispatch for appointment reminders and alerts.",
      },
    ],
    loomDemoUrl: "https://www.loom.com/embed/placeholder-famocare",
    demoType: "architecture",
  },
  {
    id: "nutricalc-engine",
    title: "NutriCalc Analytics Engine",
    tagline: "High-Throughput Nutritional Compute API",
    category: "High-Performance Calculation Engine",
    tier: "systems",
    status: "active",
    summary:
      "High-throughput calculation engine delivering under 250ms latency for complex nutritional metrics, serving over 10,000 requests per minute with Redis caching and Docker isolation.",
    metrics: [
      { label: "ENDPOINT LATENCY", value: "<250ms", trend: "positive" },
      { label: "THROUGHPUT CAPACITY", value: "10k req/min", trend: "positive" },
      { label: "DEPLOYMENT CONTAINER", value: "DOCKER", trend: "neutral" },
    ],
    techStack: ["Python", "FastAPI", "Redis", "Docker", "PostgreSQL", "JSON Schema"],
    architectureFlow: [
      {
        step: "01",
        name: "HTTP Ingestion",
        detail: "FastAPI async endpoint receiving structured nutritional payloads.",
      },
      {
        step: "02",
        name: "Redis Cache Lookup",
        detail: "Instant retrieval of previously computed calculation hashes.",
      },
      {
        step: "03",
        name: "Compute Processing",
        detail: "Algorithmic nutritional compute and macronutrient breakdown.",
      },
      {
        step: "04",
        name: "Response Serialization",
        detail: "Strict JSON schema validation and response serialization.",
      },
    ],
    loomDemoUrl: "https://www.loom.com/embed/placeholder-nutricalc",
    demoType: "video",
  },
];
