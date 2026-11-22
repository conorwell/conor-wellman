export default [
  {
    company: 'bet365',
    link: 'https://www.bet365.com',
    roles: [
      {
        role: 'Software Engineer · Denver, CO',
        period: 'April 2026 — Present',
        highlights: [
          'Developed and deployed an autonomous on-call agent triggered by live GCP alerts that investigates logs, metrics, code, git history, and databases to identify root cause, then files Jira tickets routed to developers or to a downstream bugfix agent for automated remediation',
          'Built an eval suite for the on-call agent, combining deterministic checks with LLM-judge scoring of tool-call trajectories and final outputs, plus sandboxed benchmark incident scenarios run in CI/CD to catch regressions before deployment',
          'Led design and delivery of an automated fixture-creation service that ingests third-party data feeds through Kafka, schedules game creation against trader-defined configs, and deduplicates via Redis — creating roughly 1,000 fixtures and saving around 8 hours of manual trader work weekly',
        ],
        skills: ['Go', 'React', 'Kafka', 'Redis', 'GCP', 'Claude AI'],
      },
      {
        role: 'Junior Software Engineer · Denver, CO',
        period: 'May 2025 — April 2026',
        highlights: [
          'Designed and implemented full stack applications in a distributed systems architecture, enabling migration from legacy platforms supporting up to 500k concurrent users to a modern Kubernetes-based infrastructure using Kafka and gRPC',
          'Established and owned observability platform by building metrics libraries, Grafana dashboards, and Terraform-based alerting with PromQL — detecting hundreds of development issues and many production incidents before user escalation',
          'Presented internal developer platform tooling to executive stakeholders and all engineers, driving adoption of new tools and standards by over 70 engineers across 25+ repositories',
        ],
        skills: ['Go', 'React', 'Grafana', 'Terraform', 'Kubernetes', 'PromQL'],
      },
    ],
  },
  {
    company: 'SmartBettor.ai',
    link: 'https://www.smartbettor.ai',
    roles: [
      {
        role: 'Software Engineer Intern · Colorado Springs, CO',
        period: 'Nov 2024 — Feb 2025',
        highlights: [
          'Developed backend services and database queries powering a new sports analytics feature, enabling user-defined filters to surface betting trends for upcoming games within a microservices architecture',
        ],
        skills: ['Python', 'SQL', 'Flask', 'React', 'AWS'],
      },
    ],
  },
  {
    company: 'Colorado College',
    link: 'https://www.coloradocollege.edu',
    roles: [
      {
        role: 'Tutor & Undergraduate Research Assistant · Colorado Springs, CO',
        period: 'July 2023 — May 2025',
        highlights: [
          'Served as a TA for upper-level mathematics and computer science courses, facilitating group and individual tutoring sessions',
          'Discovered a new family of harmonic mappings and minimal surfaces, modeled them in Mathematica, and 3D printed the results via Cura',
        ],
        skills: ['Mathematica', 'Complex Analysis', 'Teaching'],
      },
    ],
  },
  {
    company: 'National Institute of Standards and Technology',
    link: 'https://www.nist.gov',
    roles: [
      {
        role: 'SURF Intern · Boulder, CO',
        period: 'June 2024 — August 2024',
        highlights: [
          'Utilized advanced statistical methods in clock data analysis with Python and R to determine synchronization solutions',
          'Developed client-side network applications in C and Python to query NIST servers and support the NIST time scale',
          'Implemented Kalman filter synchronization algorithms to reduce noise and predict future states, increasing performance',
        ],
        skills: ['Python', 'R', 'C', 'Statistics', 'Network Programming', 'Algorithms'],
      },
    ],
  },
  {
    company: 'Connamara Technologies',
    link: 'https://www.connamara.tech/',
    roles: [
      {
        role: 'Software Engineer Intern · Chicago, IL',
        period: 'June 2023 — July 2023',
        highlights: [
          'Programmed AWS deployment wizard to rapidly initialize new environments, reducing setup time by up to 90%',
          'Developed and executed unit tests to ensure code quality and reliability, enhancing the stability of software releases',
        ],
        skills: ['AWS', 'Go'],
      },
    ],
  },
]
