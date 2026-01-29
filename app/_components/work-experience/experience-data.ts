export interface ExperienceData {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const experience: ExperienceData[] = [
  {
    role: "Full Stack Developer",
    company: "Sunfox Technologies Pvt. Ltd.",
    period: "June 2025 – Present",
    description: [
      "Developing and maintaining internal and client-facing React.js applications for medical device analytics.",
      "Implementing Node.js APIs for real-time diagnostics and data visualization.",
      "Collaborating with product and research teams to deliver production-ready features.",
      "Improving UI/UX for healthcare workflows with a focus on accessibility and performance.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Appsquad Software Pvt. Ltd.",
    period: "May 2024 – July 2024",
    description: [
      "Worked on web-based features using React.js and Node.js.",
      "Integrated RESTful APIs and optimized existing code for better performance.",
      "Debugged and fixed issues across the stack to improve stability.",
    ],
  },
  {
    role: "Database Management Intern",
    company: "Azure Skynet Pvt. Ltd.",
    period: "May 2023 – July 2023",
    description: [
      "Worked with MySQL databases for data storage and management.",
      "Assisted in designing and maintaining database structures for internal applications.",
      "Gained hands-on experience with SQL queries and performance considerations.",
    ],
  },
];
