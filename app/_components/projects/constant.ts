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
    title: "Online Code Compiler",
    description:
      "A browser-based code compiler built with the MERN stack that allows users to write, execute, and test Python, C, C++, Java, and JavaScript in real time. Designed to provide a smooth developer experience with fast execution and an intuitive UI.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JDoodle API",
    ],
    learning:
      "Learned how to integrate third-party execution APIs, manage asynchronous request flows, handle real-time code execution securely, and design developer-focused UI/UX with performance optimization.",
    image: "/user.png",
  },
   {
    title: "Task Management System (MERN Stack)",
    description:
      "Full-featured task manager with task creation, status tracking, and deadlines.",
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
