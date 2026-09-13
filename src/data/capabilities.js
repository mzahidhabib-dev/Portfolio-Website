export const CAPABILITY_DOMAINS = [
  {
    id: "agentic-systems",
    title: "Autonomous AI & Agentic Orchestration",
    tagline: "Multi-agent graph architectures, tool calling, and self-healing LLM workflows.",
    techStack: ["LangGraph", "CrewAI", "Python", "FastAPI", "MCP", "OpenAI / Claude APIs"],
    standards: [
      "Deterministic self-verification nodes before final output delivery",
      "Human-in-the-Loop (HITL) approval gates for high-risk write actions",
      "Dynamic model routing (fast model triage → reasoning model execution)",
      "FinOps token tracking and cost-per-transaction monitoring",
    ],
  },
  {
    id: "document-rag",
    title: "Multi-Modal RAG & Document Intelligence",
    tagline: "Enterprise document parsing, vector search, and visual citation engines.",
    techStack: ["Gemini Vision", "pgvector", "LangChain", "Python", "Hybrid Search", "React"],
    standards: [
      "Complex diagram, table, and multi-column document extraction",
      "Exact source-page highlight rendering via custom React viewers",
      "Async background ingestion queues for 50+ page PDF manuals",
      "100% answer grounding verification to prevent hallucinations",
    ],
  },
  {
    id: "workflow-automation",
    title: "Resilient Workflow Pipelines & APIs",
    tagline: "Production automation workflows connecting CRMs, webhooks, and messaging tools.",
    techStack: ["n8n", "Webhooks", "REST APIs", "Slack API", "Gmail API", "JotForm / HubSpot"],
    standards: [
      "Strict JSON schema validation on all inbound and outbound payloads",
      "Exponential backoff retry logic and dead-letter queue alerting",
      "Sub-60 second lead response latency and automated email triage",
      "Zero manual data entry deflection across operations",
    ],
  },
  {
    id: "fullstack-architecture",
    title: "Full-Stack Software Engineering",
    tagline: "Scalable frontend interfaces, backend microservices, and containerized deployments.",
    techStack: ["React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    standards: [
      "5+ years of full-stack software engineering and microservice API design",
      "Clean architecture with decoupled data layers and reusable UI primitives",
      "Stateless JWT auth, RBAC security controls, and rate-limiting gateways",
      "Guaranteed 30-day post-launch support warranty on all custom builds",
    ],
  },
];
