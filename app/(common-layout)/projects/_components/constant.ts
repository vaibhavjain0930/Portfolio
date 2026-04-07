export interface ProjectData {
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
  stack: string[];
  image?: string;
  learning: string;
}

export const projectsData: ProjectData[] = [

  {
    title: "Intellicodex (MERN Stack + Gemini API + JDoodle API)",
    description:
      "AI-powered chatbot with Gemini API integration and an inbuilt JDoodle compiler for real-time code execution.",
    githubLink: "https://github.com/vaibhavjain0930/INTELLICODEX",
    liveLink: "https://intellicodex.vercel.app/",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "JDoodle API",
    ],
    learning:
      "AI integration, API orchestration, real-time code execution, and UI/UX for developer tools",
    image: "/user.png",
  },
  {
    title: "YouTube Watch Party System (MERN + Socket.IO)",
    description: "Real-time watch party application where multiple users can watch YouTube videos in sync with role-based controls (Host, Moderator, Participant).",
    githubLink: "https://github.com/vaibhavjain0930/watch-party-system",
    liveLink: "https://watch-party-system.vercel.app/",
    stack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "Material UI",
      "YouTube IFrame API"
    ],
    learning: "Real-time synchronization using WebSockets, RBAC (Role-Based Access Control), event-driven architecture, and handling shared state across multiple clients",
    image: "/watch-party.png"
  },
  {
    title: "Online Code Compiler",
    description:
      "Browser-based MERN code compiler supporting Python, C, C++, Java, and JavaScript with real-time execution and a fast, intuitive developer experience.",
    githubLink: "https://github.com/vaibhavjain0930/Online-Compiler",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JDoodle API",
    ],
    learning:
      "Integrated third-party execution APIs, handled async workflows, enabled secure real-time code execution, and built high-performance developer-focused UI/UX.",
    image: "/user.png",
  },
  {
    title: "Task Management System (MERN Stack)",
    description:
      "Full-featured task manager with task creation, status tracking, and deadlines.",

    githubLink: "https://github.com/vaibhavjain0930/Task-Manager",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
    ],
    learning:
      "CRUD operations, authentication, API integration, and MongoDB-based data storage",
    image: "/user.png",
  },
  {
    title: "Invoice Generator",
    description:
      "Web-based invoice generator built with Next.js that allows users to create, manage, and download professional invoices with real-time calculations.",
    githubLink: "https://github.com/vaibhavjain0930/Invoice_Generator",
    stack: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    learning:
      "Built dynamic form handling, implemented real-time price calculations, generated downloadable invoices, managed client data, and improved UI/UX performance.",
    image: "/user.png",
  },

  // {
  //   title: "Web Based Login System",
  //   description:
  //     "Secure web-based login system with user authentication and authorization.",
  //   stack: ["HTML", "CSS", "JavaScript", "Backend APIs", "Authentication"],
  //   image: "/user.png",
  //   learning:
  //     "User authentication flows, session management, and secure login design",
  // },


  // {
  //   title: "Image Compressor (MERN Stack)",
  //   description:
  //     "Web application to compress images using React.js, Node.js, and MongoDB with optimized upload and download.",
  //   stack: [
  //     "React.js",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Image Processing",
  //   ],
  //   learning:
  //     "MERN stack development, file handling, and performance optimization",
  //   image: "/user.png",
  // },

  // {
  //   title: "Netflix Clone",
  //   description:
  //     "Frontend Netflix clone showcasing responsive UI, grids, and carousels with a dark theme.",
  //   stack: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "Tailwind CSS",
  //   ],
  //   learning:
  //     "Responsive layout design, UI cloning, and modern frontend styling",
  //   image: "/user.png",
  // },



];
