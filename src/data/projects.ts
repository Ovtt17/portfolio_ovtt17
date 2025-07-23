import type { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Heycha Inventory",
    description:
      "Full-stack inventory and sales management system built for a real business. Features secure authentication with OAuth2.0 and JWT, AWS S3 file storage, and a scalable architecture using Spring Boot and React.",
    image: "/projects/heycha-inventory.png",
    tags: ["Spring Boot", "Java", "React", "TypeScript", "Tailwind", "JWT", "OAuth2.0", "MySQL", "AWS S3", "Email Sending"],
  },
  {
    id: 2,
    title: "WhatsApp Clone",
    description:
      "Full-stack WhatsApp Web clone with real-time chat using WebSockets, authentication via Keycloak, and a scalable Spring Boot backend.",
    image: "/projects/whatsapp-clone.png",
    tags: ["Spring Boot", "Java", "React", "TypeScript", "Tailwind", "Keycloak", "WebSocket", "Vite"],
    codeUrl: "https://github.com/Ovtt17/whatsapp-clone-api"
  },
  {
    id: 3,
    title: "Survey App",
    description:
      "Full-stack survey management platform built with Spring Boot and React. Includes OAuth2.0 authentication with Google and Facebook, email notifications, image uploads via Imgur API, and modular services such as reviews, reports, and user profiles. Features a clean REST API and a dynamic architecture suitable for real-world use.",
    image: "/projects/survey-app.png",
    tags: ["Spring Boot", "Java", "React", "TypeScript", "Tailwind", "OAuth2.0", "JWT", "MySQL", "Imgur API", "REST API"],
    codeUrl: "https://github.com/Ovtt17/survey-app-api"
  },
  {
    id: 4,
    title: "Ecommerce API (Enterprise Architecture)",
    description:
      "Microservices backend for an e-commerce platform with Spring Boot, Spring Cloud, Keycloak authentication, Kafka, and observability tools like Zipkin. Supports relational and NoSQL databases, containerized with Docker Compose.",
    image: "/projects/ecommerce-architecture.png",
    tags: ["Micro Services", "Spring Boot", "Spring Cloud", "Java", "Docker Compose", "Keycloak", "Kafka", "MongoDB", "PostgreSQL", "Zipkin", "Zookeeper", "API Gateway", "Resource Server", "Email Sending"],
    codeUrl: "https://github.com/Ovtt17/ecommerce-app-api"
  },
];