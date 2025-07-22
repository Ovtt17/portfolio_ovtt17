import type { Experience } from "../types/Experience";

export const experiences: Experience[] = [
  {
    id: 'job1',
    title: 'Freelance - Hey! Cha Inventory',
    position: 'Full-Stack Developer',
    url: '',
    startDate: 'December 2024',
    endDate: 'present',
    description: [
      'Developed Hey! Cha Inventory, a secure internal system for managing inventory, sales, and imported orders for a retail store.',
      'Built backend APIs with Spring Boot (Java 17) and frontend with React, TypeScript, and Tailwind CSS.',
      'Implemented authentication and authorization using JWT and OAuth 2.0, including Google login integration.',
      'Implemented advanced product filtering by multiple criteria to improve search efficiency.',
      'Deployed backend services on Railway with MySQL for data persistence and used AWS S3 for secure asset storage.',
      'Provided ongoing maintenance and feature updates to meet evolving client needs, enhancing operational efficiency.',
    ],
  },
];
