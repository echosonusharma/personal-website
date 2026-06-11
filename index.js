const DATA = {
  name: "Sonu Sharma",
  role: "Software Developer",
  bio: "Nearly 5 years building scalable backend systems, microservices, and high-performance web applications. Comfortable across the full stack — from distributed data pipelines to browser extensions and AI-powered automation.",
  links: [
    { label: "github",   url: "https://github.com/echosonusharma",     icon: "github"   },
    { label: "linkedin", url: "https://www.linkedin.com/in/sonusharma007", icon: "linkedin" }
  ],
  blogs: [
    {
      slug:    "building-rag-support-system",
      title:   "Building a RAG-powered Support System",
      date:    "2024-03-10",
      summary: "How I built an AI support automation system using RAG and LangGraph multi-agent workflows that resolved 80% of L1 queries.",
      tags:    ["AI", "RAG", "LangChain"],
      content: `
<p>When tasked with reducing manual support load, I built a retrieval-augmented generation pipeline that pulls context from user-specific data before generating responses.</p>

<h3>The Problem</h3>
<p>Support teams were drowning in repetitive L1 queries. Most answers existed somewhere in the docs — the challenge was retrieving the right context fast enough to be useful.</p>

<h3>Architecture</h3>
<p>The system uses a LangGraph multi-agent workflow. A router agent classifies the query, a retrieval agent pulls relevant chunks from Qdrant, and a generation agent synthesizes the final response using the retrieved context.</p>

<h3>Results</h3>
<p>~80% of L1 end-user queries and ~40% of admin queries now resolve automatically. Manual support workload dropped significantly within the first month.</p>
      `
    },
    {
      slug:    "chrome-mv3-migration",
      title:   "Migrating a Chrome Extension from MV2 to MV3",
      date:    "2023-11-22",
      summary: "Lessons learned migrating a proxy-based browser extension to Manifest V3 — service workers, declarativeNetRequest, and the tradeoffs.",
      tags:    ["Chrome", "JavaScript", "Extensions"],
      content: `
<p>Chrome's Manifest V3 deadline forced a full rewrite of our proxy-based extension. Here's what actually broke and how we fixed it.</p>

<h3>The Hardest Part: Background Pages → Service Workers</h3>
<p>MV2 background pages persist indefinitely. Service workers don't — they terminate after ~30 seconds of inactivity. Any state stored in memory is gone. We moved all persistent state to <code>chrome.storage.session</code> and rebuilt the proxy logic around the service worker lifecycle.</p>

<h3>Network Interception</h3>
<p>The <code>webRequest</code> API's blocking mode is gone in MV3. We migrated to <code>declarativeNetRequest</code> with dynamic rules, which covers 90% of our use cases but required rethinking a few edge cases where we needed programmatic control.</p>

<h3>Takeaway</h3>
<p>The migration is worth it — the extension is noticeably faster and uses less memory. The service worker constraint forces you to write cleaner, stateless code.</p>
      `
    }
  ],
  projects: [
    {
      slug:        "project-name",
      name:        "Project Name",
      icon:        "https://raw.githubusercontent.com/github/explore/main/topics/go/go.png",
      description: "Short description of what this does and why it matters.",
      details: `
<p>Full overview of the project — what problem it solves, why you built it, and what makes it interesting.</p>

<h3>Motivation</h3>
<p>Describe the problem you were solving and why existing solutions didn't cut it.</p>

<h3>Architecture</h3>
<p>Walk through the key technical decisions: data flow, services involved, notable tradeoffs.</p>

<h3>Results</h3>
<p>Concrete outcomes — performance numbers, adoption, what you learned.</p>
      `,
      tags:     ["Go", "PostgreSQL", "Docker"],
      url:      "https://github.com",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      slug:        "another-project",
      name:        "Another Project",
      icon:        "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
      description: "Short description of what this does and why it matters.",
      details: `
<p>Full overview of the project — what problem it solves, why you built it, and what makes it interesting.</p>

<h3>Motivation</h3>
<p>Describe the problem you were solving and why existing solutions didn't cut it.</p>

<h3>Stack</h3>
<p>Key libraries and infrastructure choices, and the reasoning behind them.</p>

<h3>Results</h3>
<p>Concrete outcomes — performance numbers, adoption, what you learned.</p>
      `,
      tags:     ["React", "TypeScript", "Node.js"],
      url:      "https://github.com",
      videoUrl: ""
    }
  ],
  experience: [
    {
      role:   "Backend Developer",
      company: "Eclat Engineering",
      type:   "Remote",
      period: "Feb 2023 – Present",
      bullets: [
        "Built AI-powered support automation using <hl>RAG</hl> + <hl>LangChain/LangGraph</hl> multi-agent workflows, resolving ~80% of L1 queries. Also owned <hl>CDC pipelines</hl> and <hl>BI dashboards</hl>.",
        "Architected <hl>microservices</hl>, maintained <hl>CI/CD pipelines</hl>, handled L3 production support and global client escalations.",
        "Migrated Chrome Extension <hl>MV2 → MV3</hl>. Maintained a <hl>Go</hl> open-source server fork adding auth and proxy features."
      ]
    },
    {
      role:   "Full Stack Developer",
      company: "Cudy Pte. Ltd.",
      type:   "Remote",
      period: "Jun 2021 – Jan 2023",
      bullets: [
        "Built full-stack platform features and internal dashboards using <hl>React</hl>, <hl>Express</hl>, <hl>GraphQL</hl>, and WebSockets.",
        "Implemented <hl>Typesense</hl> search across millions of docs at millisecond latency and integrated <hl>OpenAI</hl>-powered content generation.",
        "Built <hl>workflow automation</hl> and scheduling systems with third-party API integrations."
      ]
    }
  ]
};

