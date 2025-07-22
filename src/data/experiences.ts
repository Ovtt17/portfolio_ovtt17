import type { Experience } from "../types/Experience";

export const experiences: Experience[] = [
  {
    id: 'job1',
    title: 'Retail Store - Full-Stack Developer',
    position: 'Full-Stack Developer',
    url: '',
    startDate: 'June 2024',
    endDate: 'present',
    description: [
      'Developed and maintained an internal inventory management system for a retail store using Spring Boot (Java 17) and React with TypeScript.',
      'Implemented product management, stock control, category filters, and user authentication with JWT.',
      'Deployed backend services on AWS EC2, storing assets in S3, and used PostgreSQL with Hibernate for persistence.',
      'Optimized UX/UI with responsive design using Tailwind CSS and improved business efficiency by automating manual inventory processes.',
    ],
  }
];