export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    company: 'Integrity Web Consulting',
    role: 'Senior Software Engineer',
    startDate: 'April 2024',
    endDate: 'October 2025',
    achievements: [
      'Developed and maintained a structured, multi-step provider registration workflow',
      'Designed and implemented Auth0 authentication and session management',
      'Built modular, dynamic forms with real-time validation and error handling',
      'Optimized provider registration workflow, reducing average completion time by 40% and improving conversion rates',
      'Designed a scalable architecture with partial views and modular JavaScript files',
      'Authored comprehensive technical documentation for future maintainability',
      'Customized WordPress themes and plugins to extend CMS functionality',
      'Integrated WordPress with modern front-end frameworks and APIs',
    ],
    technologies: [
      'C#',
      '.NET',
      'jQuery',
      'JavaScript',
      'SQL Server',
      'WordPress',
      'React',
      'Tailwind',
    ],
  },
  {
    company: 'Sogeti',
    role: 'Senior Software Consultant',
    startDate: 'March 2023',
    endDate: 'January 2024',
    achievements: [
      'Designed and developed a RESTful API encompassing contract definition, microservice architecture and data repositories',
      'Designed and implemented scalable and cost-effective cloud-based solutions',
      'Leveraged Azure Functions for serverless computing and Azure Cosmos DB for data storage',
      'Completed application development in compressed timeline',
    ],
    technologies: ['Azure Functions', 'CosmosDB', 'C#', '.NET', 'Azure'],
  },
  {
    company: 'Spear Claims (acquired Insurium)',
    role: 'Software Engineer',
    startDate: 'August 2022',
    endDate: 'January 2023',
    achievements: [
      'Developed in Microsoft Power Platform',
      'API Integration with existing product',
    ],
    technologies: [
      'Microsoft Power Platform',
      'JavaScript',
      'React',
      'SQL Server',
      'C#',
    ],
  },
  {
    company: 'Insurium',
    role: 'Software Engineer',
    startDate: 'November 2021',
    endDate: 'August 2022',
    achievements: [
      'Worked on code across four unique products (Connections, Client Portal, Producer Access, Claims)',
      'Interfaced with product and design team to visualize, architect, implement and deploy new features',
      'Architected and implemented security updates across three products',
      '3rd party API integration with USPS',
      'Minimized service degradation by optimizing data relationships and improved queries',
      'Participated in developer forums and pair programming',
      'Enhanced configuration for email services',
      'General bug fixes and error handling improvements',
    ],
    technologies: [
      '.NET',
      'ASPX',
      'jQuery',
      'C#',
      'JavaScript',
      'React',
      'Handlebars',
    ],
  },
  {
    company: 'RK Mechanical Inc.',
    role: 'Software Engineer',
    startDate: 'March 2021',
    endDate: 'August 2021',
    achievements: [
      'Centralized all delivery processes in a SPA',
      'Multi-million dollar inventory management microservice with integrated RFID scanner technology',
      'Integrated Microsoft Graph, Algolia AI search, and user authentication with hard and soft errors',
      'Containerized services using Docker and deployed on Microsoft Azure',
    ],
    technologies: [
      'JavaScript',
      'React',
      'Django',
      'Docker',
      'Microsoft Graph',
      'Algolia',
      'RFID',
      'Jitterbit',
    ],
  },
  {
    company: 'Healthcare',
    role: 'Physical Therapy Assistant & OR Tech',
    startDate: '2016',
    endDate: '2020',
    achievements: [
      'Assisted surgeons in operating rooms during gastrointestinal (GI) procedures, maintaining sterile environments',
      'Prepared surgical instruments, equipment, and patient positioning to ensure efficiency and safety',
      'Supported patient rehabilitation programs as a physical therapy assistant',
      'Provided overnight customer service and facility support in a fitness center',
    ],
    technologies: [
      'Patient Care',
      'Medical Equipment',
      'Rehabilitation',
      'Customer Service',
    ],
  },
];
