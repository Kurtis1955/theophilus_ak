export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  year: string;
  stack: string[];
  images: string[];
  imageAlt: string;
  liveUrl?: string;
  featured?: boolean;
  summary: string;
  contribution: string;
  overview: string;
  problem: string;
  role: string;
  architecture: string[];
  features: string[];
  challenges: string[];
}

export const projects: Project[] = [
  {
    slug: "aeroprep",
    name: "AeroPrep",
    tagline: "Aviation exam preparation and certification learning platform",
    category: "EdTech Platform",
    year: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    images: [],
    imageAlt: "AeroPrep platform",
    featured: true,
    summary:
      "A full learning platform for aviation students — certification courses, study materials, exam interfaces, subscriptions and role-based admin tooling.",
    contribution:
      "Frontend development across the student-facing application and administrative interfaces, including exam rendering, course/lesson management, dashboards and API integration.",
    overview:
      "AeroPrep is a multi-role learning platform that prepares aviation students for certification examinations. It combines a content-rich course catalog with structured exam interfaces, progress tracking, subscription management and administrative tools for managing courses, questions and users.",
    problem:
      "Aviation certification candidates need structured, exam-aligned preparation — course material, practice questions and simulated exam conditions — in one place, while content teams need tooling to manage that material without engineering support.",
    role: "Frontend Engineer — student application, exam interfaces, student dashboards and administrative management interfaces.",
    architecture: [
      "Next.js App Router for server-rendered, SEO-friendly pages with client components for interactive exam and dashboard flows",
      "REST API integration layer handling authentication, course content, enrolment and subscription state",
      "Role-based access control separating student, instructor and administrator experiences",
      "Reusable component architecture for question rendering, lesson layouts and data-driven dashboards",
    ],
    features: [
      "Certification course and lesson management with structured study paths",
      "Exam interfaces with dynamic question rendering and answer state handling",
      "Student dashboards for progress, enrolments and subscription status",
      "Administrative interfaces for content, user and subscription management",
      "Authentication flows with role-based routing and protected views",
    ],
    challenges: [
      "Designing exam interfaces that remain stable and accessible under timed conditions",
      "Keeping student, instructor and admin experiences consistent while enforcing different permission boundaries",
      "Synchronising subscription and enrolment state across course, lesson and exam views",
    ],
  },
  {
    slug: "ess-leave-management",
    name: "Employee Self-Service & Leave Management",
    tagline: "Business application for employee requests, approvals and HR administration",
    category: "Enterprise HR",
    year: "2024",
    stack: ["Next.js", "Tailwind CSS", "REST APIs"],
    images: ["/images/ESS_1.png", "/images/ESS_2.png", "/images/ESS_3.png"],
    imageAlt: "Employee Self-Service application interface",
    featured: true,
    summary:
      "An employee self-service platform where staff apply for leave and loans, managers approve or reject requests, and admins manage users, roles and company calendars.",
    contribution:
      "Built employee dashboards, leave and loan workflows, approval states, data tables with filtering, form validation, role-based admin interfaces and an interactive leave calendar.",
    overview:
      "A business application that digitises employee self-service operations — leave applications, loan requests, manager approvals and HR administration — replacing manual, paper-based processes with a single system of record.",
    problem:
      "Employees needed a self-service channel for routine requests, while managers and HR needed visibility into approvals, balances and company schedules — previously handled manually with no shared system of record.",
    role: "Frontend development — employee dashboards, leave/loan request flows, approval workflows, admin interfaces and calendar views.",
    architecture: [
      "Next.js frontend communicating with backend services over REST APIs",
      "Role-aware UI rendering different dashboards and actions for employees, managers and administrators",
      "Form-driven request workflows with client-side validation backed by server-side enforcement",
      "Data tables with filtering for administrative review of requests and employee records",
    ],
    features: [
      "Leave application and tracking with request status lifecycle",
      "Loan management workflows",
      "Manager approval and rejection interfaces",
      "Admin user and role setup",
      "Dashboards for leave and loan tracking",
      "Interactive calendar for holidays and scheduled leave",
    ],
    challenges: [
      "Modeling multi-step request states (draft, submitted, approved, rejected) consistently across roles",
      "Designing approval interfaces that give managers enough context to decide quickly",
      "Keeping calendars, balances and request lists in sync after each mutation",
    ],
  },
  {
    slug: "biometric-management",
    name: "Biometric Time & Attendance Platform",
    tagline: "Enterprise platform for biometric users, devices, enrolment and attendance — built at SuperTech",
    category: "Enterprise HR",
    year: "2024",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    images: [],
    imageAlt: "Biometric Management Platform",
    featured: true,
    summary:
      "A time & attendance platform built at SuperTech for managing biometric users, devices and attendance records — covering enrolment workflows, device administration and role-based access for enterprise operators.",
    contribution:
      "User and device management interfaces, role and permission management, biometric enrolment workflows, attendance views and enterprise dashboard interfaces — developed as part of SuperTech's business application portfolio.",
    overview:
      "A time & attendance platform built at SuperTech for organisations operating biometric attendance systems. It centralises management of enrolled users, biometric devices and attendance records that would otherwise be scattered across device-level tools.",
    problem:
      "Organisations using biometric devices need a single administrative layer to manage who is enrolled, which devices are active, and how attendance data is reviewed — with strict control over who can change what.",
    role: "Frontend development — user/device management, enrolment workflows, attendance interfaces and permission-aware admin views.",
    architecture: [
      "Component-based React interfaces consuming REST APIs for users, devices and attendance data",
      "Permission-driven UI that surfaces only the actions each role is authorised to perform",
      "Structured enrolment workflows guiding operators through device-user pairing steps",
      "Dashboard layouts aggregating attendance and device status for operational oversight",
    ],
    features: [
      "User and device management with searchable administrative lists",
      "Role and permission management interfaces",
      "Biometric enrolment workflow screens",
      "Attendance management and review views",
      "Enterprise dashboard interfaces for operational monitoring",
    ],
    challenges: [
      "Translating device-level enrolment concepts into clear, step-by-step web workflows",
      "Designing permission-aware interfaces that stay comprehensible as roles multiply",
      "Presenting high-volume attendance data in scannable, filterable views",
    ],
  },
  {
    slug: "quotation-erp",
    name: "Quotation & ERP Integration",
    tagline: "PHP proxy layer connecting the frontend to ERP quotation services",
    category: "Backend Integration",
    year: "2024",
    stack: ["PHP", "REST APIs", "ERP Integration", "JavaScript"],
    images: [],
    imageAlt: "Quotation management interface",
    summary:
      "A PHP backend proxy that sits between the frontend and the ERP system — receiving quotation requests from the UI, fetching data from the ERP and returning it reliably.",
    contribution:
      "Backend development of the PHP proxy service — ERP API communication, request handling, data retrieval, error handling and the frontend-facing contract.",
    overview:
      "A backend integration layer that connects the quotation management frontend to the organisation's ERP system. The PHP service acts as a proxy: the frontend makes requests to it, and it retrieves the corresponding quotation data from the ERP and returns it in a form the UI can consume.",
    problem:
      "The ERP system couldn't be called directly from the frontend — credentials, network boundaries and response formats required a dedicated intermediary that owns ERP communication and presents a clean contract to the UI.",
    role: "Backend development — PHP proxy service handling ERP requests, data retrieval and error responses for the frontend.",
    architecture: [
      "PHP proxy service as the single point of contact between frontend and ERP",
      "ERP API communication encapsulated server-side, keeping credentials and ERP specifics out of the frontend",
      "Request/response contract designed for the frontend's quotation workflows",
      "Error handling that translates ERP failures into meaningful responses for the UI",
    ],
    features: [
      "Quotation data retrieval from ERP services on frontend request",
      "Proxy endpoints that abstract ERP authentication and transport details",
      "Error handling and failure responses for the frontend to display",
      "Request validation before forwarding calls to the ERP",
    ],
    challenges: [
      "Designing a stable contract between the frontend and an external ERP whose responses and failures are outside our control",
      "Handling ERP timeouts and partial failures without leaving the UI hanging",
      "Keeping proxy logic thin while still adding useful validation and error context",
    ],
  },
  {
    slug: "360-gold-suite",
    name: "360 Gold Suite",
    tagline: "Paperless gold-buying platform for transaction management",
    category: "Web Platform",
    year: "2023",
    stack: ["Next.js", "Tailwind CSS", "JavaScript"],
    images: ["/images/360goldsuit.png", "/images/360goldsuit2.png"],
    imageAlt: "360 Gold Suite application",
    liveUrl: "https://www.360goldsuit.com/",
    featured: true,
    summary:
      "A web platform modernising the gold-buying industry — managing transactions and calculating gold values through an intuitive, paperless interface.",
    contribution:
      "Scalable UI component design, performance optimisation through lazy loading and code-splitting, API integration and cross-device responsive implementation.",
    overview:
      "360 Gold Suite digitises gold-buying operations, providing an intuitive platform for managing transactions and accurately calculating gold values — replacing paper-based processes with a web application.",
    problem:
      "Gold-buying workflows relied on paper records and manual calculation, which was slow, error-prone and hard to audit.",
    role: "Frontend development — component architecture, performance optimisation, API integration and responsive delivery.",
    architecture: [
      "Next.js application with component-based UI architecture",
      "Tailwind CSS for a consistent, responsive design system",
      "API integrations connecting the interface to transaction and valuation services",
      "Performance-oriented delivery using lazy loading and code-splitting",
    ],
    features: [
      "Transaction management interfaces",
      "Gold value calculation workflows",
      "Responsive experience across desktop and mobile",
      "Paperless record-keeping for buying operations",
    ],
    challenges: [
      "Designing interfaces that remain fast and clear while handling financial data",
      "Optimising load performance for users on varied connections",
      "Coordinating frontend delivery with backend and design teams",
    ],
  },
  {
    slug: "imperial-lodge",
    name: "Imperial Lodge Management System",
    tagline: "Desktop application for guest house reservations, billing and operations",
    category: "Desktop Application",
    year: "2023",
    stack: ["Next.js", "Tailwind CSS", "Rust", "Tauri", "MongoDB", "Node.js"],
    images: ["/images/imp.png", "/images/imp2.png"],
    imageAlt: "Imperial Lodge Management System",
    summary:
      "A high-performance desktop application for managing guest house operations — reservations, billing and day-to-day administration — built with Tauri and Rust.",
    contribution:
      "Full-stack development of a desktop application combining a web frontend with Rust backend performance and local MongoDB data storage.",
    overview:
      "A desktop management system for a guest house, handling reservations, billing and operational administration in a single locally-running application.",
    problem:
      "Guest house operations needed reliable local software for reservations and billing without dependence on constant network connectivity.",
    role: "Full-stack development — web frontend, Rust backend logic, Tauri desktop integration and MongoDB data layer.",
    architecture: [
      "Tauri shell combining web technologies with native desktop capabilities",
      "Rust backend for performance-critical application logic",
      "MongoDB for local data persistence",
      "Node.js services supporting backend functionality",
    ],
    features: [
      "Guest reservation management",
      "Billing and invoicing workflows",
      "Operational administration for lodge staff",
      "Local-first desktop operation with native performance",
    ],
    challenges: [
      "Bridging web frontend patterns with desktop application constraints",
      "Designing data flows between the web layer, Rust backend and local database",
      "Delivering a polished native-feeling experience through web technologies",
    ],
  },
  {
    slug: "akyer3-group",
    name: "Akyer3 Group Management System",
    tagline: "Multi-department business management desktop application",
    category: "Desktop Application",
    year: "2023",
    stack: ["Next.js", "Tailwind CSS", "Rust", "Tauri", "MongoDB"],
    images: ["/images/aky.png", "/images/aky2.png"],
    imageAlt: "Akyer3 Group Management System",
    summary:
      "A desktop management system streamlining operations across multiple departments within Akyer3 Group of Companies.",
    contribution:
      "Full-stack development of a scalable desktop application tailored to multi-department business processes.",
    overview:
      "A management system built for Akyer3 Group of Companies to coordinate operations across multiple departments within one application, replacing fragmented departmental tooling.",
    problem:
      "A group spanning multiple departments needed unified software for managing day-to-day business processes rather than separate, unconnected tools.",
    role: "Full-stack development — application architecture, frontend interfaces, Rust backend and Tauri desktop packaging.",
    architecture: [
      "Tauri desktop application with a web-based frontend",
      "Rust backend for performance and system integration",
      "MongoDB for structured business data",
      "Modular interfaces organised around departmental workflows",
    ],
    features: [
      "Multi-department operational management",
      "Department-specific workflow interfaces",
      "Centralised business data storage",
      "Desktop deployment for office environments",
    ],
    challenges: [
      "Modeling diverse departmental workflows in one coherent system",
      "Keeping the interface manageable as business scope grew",
      "Balancing performance with the complexity of business rules",
    ],
  },
  {
    slug: "becoming-creation",
    name: "Becoming Creation Website",
    tagline: "Corporate website for a growing services company",
    category: "Web Platform",
    year: "2022",
    stack: ["Next.js", "Tailwind CSS", "Sass", "Vercel"],
    images: ["/images/bc.png", "/images/bc2.png"],
    imageAlt: "Becoming Creation website",
    summary:
      "A corporate website for Becoming Creation Limited — an early professional project that established modern Next.js and Sass workflows.",
    contribution:
      "Designed and built the website, managing project timelines and collaborating with team and stakeholders through to deployment on Vercel.",
    overview:
      "The public website for Becoming Creation Limited, built to present the company's services and establish a professional digital presence.",
    problem:
      "The company needed a credible, fast-loading website that could be maintained and extended as the business grew.",
    role: "Web development — design implementation, Next.js development, Sass styling and deployment.",
    architecture: [
      "Next.js for static generation and fast page loads",
      "Sass for maintainable, organised styling",
      "Vercel deployment pipeline for continuous delivery",
    ],
    features: [
      "Company services and information presentation",
      "Responsive layout across devices",
      "Fast static page generation",
      "Managed deployment workflow",
    ],
    challenges: [
      "Delivering on a fixed timeline while iterating with stakeholders",
      "Establishing styling conventions early to keep the codebase maintainable",
    ],
  },
  {
    slug: "botech-website",
    name: "Botech Development Website",
    tagline: "Client website built with Next.js, Sass and Vercel",
    category: "Web Platform",
    year: "2023",
    stack: ["Next.js", "Tailwind CSS", "Sass", "Vercel"],
    images: ["/images/360botech.png", "/images/360botech2.png"],
    imageAlt: "Botech website",
    liveUrl: "https://www.360botech.com/",
    summary:
      "A client-facing website for Botech Development, built and shipped with Next.js, Sass and Vercel under real project timelines.",
    contribution:
      "End-to-end website development — interface implementation, styling architecture, client collaboration and deployment.",
    overview:
      "The website for Botech Development, delivering the company's services and identity through a fast, responsive web presence.",
    problem:
      "The business needed a professional website delivered within a defined timeline while accommodating client feedback throughout development.",
    role: "Web development — UI implementation, Sass styling, timeline management and client-facing delivery.",
    architecture: [
      "Next.js application for performance and maintainability",
      "Sass stylesheets for structured, scalable styling",
      "Vercel hosting with preview deployments for client review",
    ],
    features: [
      "Services and company information presentation",
      "Responsive design across screen sizes",
      "Client-reviewable deployment previews",
      "Optimised static delivery",
    ],
    challenges: [
      "Managing scope and timelines against evolving client requirements",
      "Communicating technical trade-offs clearly to non-technical stakeholders",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
