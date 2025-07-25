import type { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Heycha Inventory",
    slug: "heycha-inventory",
    role: "Full Stack Developer",
    description:
      "Full-stack inventory and sales management system built for a real business. Features secure authentication with OAuth2.0 and JWT, AWS S3 file storage, and a scalable architecture using Spring Boot and React.",
    descriptionExtend:
      "This project is designed to manage inventory and sales for a real business, providing a comprehensive solution for tracking products, sales, and inventory levels. It includes secure user authentication using OAuth2.0 and JWT, allowing for safe access to the system. The application also integrates with AWS S3 for file storage, enabling users to upload and manage product images efficiently. Built with a modular architecture using Spring Boot for the backend and React for the frontend, it ensures scalability and maintainability.",
    image: "/src/assets/images/projects/heycha-inventory/heycha-inventory.webp",
    technologies: ["Spring Boot", "Java", "React", "TypeScript", "Tailwind", "JWT", "OAuth2.0", "MySQL", "AWS S3", "Email Sending"],
  },
  {
    id: 2,
    title: "WhatsApp Clone",
    slug: "whatsapp-clone",
    role: "Full Stack Developer",
    description:
      "Full-stack WhatsApp Web clone with real-time chat using WebSockets, authentication via Keycloak, and a scalable Spring Boot backend.",
    descriptionExtend:
      "This project replicates the core functionalities of WhatsApp Web, allowing users to send and receive messages in real-time. It features user authentication managed by Keycloak, ensuring secure access to the application. The backend is built with Spring Boot, utilizing WebSockets for real-time communication, which allows for instant message delivery. The architecture is designed to be scalable, accommodating a growing number of users and messages without performance degradation.",
    image: "/src/assets/images/projects/whatsapp-clone/whatsapp-clone.webp",
    videoDemo: "/src/assets/videos/projects/whatsapp-clone/whatsapp-clone.mp4",
    technologies: ["Spring Boot", "Java", "React", "TypeScript", "Tailwind", "Keycloak", "WebSocket", "Vite", "Docker Compose"],
    codeUrl: "https://github.com/Ovtt17/whatsapp-clone-api"
  },
  {
    id: 3,
    title: "Survey App",
    slug: "survey-app",
    role: "Full Stack Developer",
    description:
      "Full-stack survey management platform built with Spring Boot and React. Includes OAuth2.0 authentication with Google and Facebook, email notifications, image uploads via Imgur API, and modular services such as reviews, reports, and user profiles. Features a clean REST API and a dynamic architecture suitable for real-world use.",
    descriptionExtend:
      "This project provides a comprehensive solution for creating and managing surveys. It allows users to authenticate using OAuth2.0 with Google and Facebook, ensuring secure access. The application supports email notifications for survey updates and uses the Imgur API for image uploads, enhancing user experience. The architecture is modular, featuring services for reviews, reports, and user profiles, making it adaptable for various use cases. The backend is built with Spring Boot, providing a robust REST API, while the frontend is developed with React, ensuring a responsive and dynamic user interface.",
    image: "/src/assets/images/projects/survey-app/survey-app.webp",
    videoDemo: "/src/assets/videos/projects/survey-app/survey-app.mp4",
    technologies: ["Spring Boot", "Java", "React", "TypeScript", "Tailwind", "OAuth2.0", "JWT", "MySQL", "Imgur API", "REST API"],
    codeUrl: "https://github.com/Ovtt17/survey-app-api"
  },
  {
    id: 4,
    title: "Ecommerce API (Enterprise Architecture)",
    slug: "ecommerce-api",
    role: "Back End Developer",
    description:
      "Microservices backend for an e-commerce platform with Spring Boot, Spring Cloud, Keycloak authentication, Kafka, and observability tools like Zipkin. Supports relational and NoSQL databases, containerized with Docker Compose.",
    descriptionExtend:
      "This project implements a microservices architecture for an e-commerce platform, focusing on scalability and maintainability. It utilizes Spring Boot for building individual services, Spring Cloud for service discovery and configuration management, and Keycloak for secure user authentication. The system incorporates Kafka for asynchronous messaging between services, enhancing performance and reliability. Observability is achieved through tools like Zipkin for distributed tracing. The architecture supports both relational databases (PostgreSQL) and NoSQL databases (MongoDB), providing flexibility in data management. The entire system is containerized using Docker Compose, facilitating easy deployment and scaling.",
    image: "/src/assets/images/projects/ecommerce-architecture/ecommerce-architecture.webp",
    technologies: ["Micro Services", "Spring Boot", "Spring Cloud", "Java", "Docker Compose", "Keycloak", "Kafka", "MongoDB", "PostgreSQL", "Zipkin", "Zookeeper", "API Gateway", "Resource Server", "Email Sending"],
    codeUrl: "https://github.com/Ovtt17/ecommerce-app-api"
  },
];