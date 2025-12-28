import Academix from "../assets/MyProject/Academix.png";
// import RhythmNest from "../assets/MyProject/MusicMaster.png";
// import Techfest from "../assets/MyProject/Techfest.png";
import LeetLab from "../assets/MyProject/LeetLab.png";

const projects = [
  {
    id: 1,
    title: "Academix – Student Management Platform",
    description: "Academix is a modern ed-tech platform that empowers students and educators by providing a seamless learning experience. It includes features like course browsing and enrollment, interactive learning content, progress tracking, and secure authentication. Designed with a responsive UI and smooth UX, it ensures easy navigation and accessibility across devices",
    image: `${Academix}`,
    vercelLink: "https://academix-sigma.vercel.app",
    githubLink: "https://github.com/Divyanshguptaj/academix",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT Auth",
      "REST API",
    ],
    category: "Full Stack",
    gradient: "from-indigo-600 via-blue-500 to-cyan-500",
    featured: true,
  },
  {
  id: 2,
  title: "LeetLab – Coding Practice & Challenge Platform",
  description: "LeetLab is a full-stack coding practice platform inspired by sites like LeetCode, designed to help users solve programming problems, write and test code in real time, and track their progress. It features secure authentication, an interactive code editor, problem browsing and filtering, multi-language code execution via the Judge0 API, and comprehensive submission tracking. Built with a modern UI for a smooth user experience.",
  image: `${LeetLab}`,  
  vercelLink: "https://leetlab-ten.vercel.app/",
  githubLink: "https://github.com/Divyanshguptaj/LeetLab",
  technologies: [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Judge0 API",
    "REST API",
    "Authentication"
  ],
  category: "Full Stack",
  gradient: "from-green-400 via-teal-500 to-blue-500",
  featured: false,
}

  // {
  //   id: 2,
  //   title: "RhythmNest – Music Discovery & Visualization",
  //   description: "A responsive music school landing page built with Next.js and TypeScript, styled with shadcn/ui for a clean and modern interface. It features sections for courses, instructors, testimonials, and contact information, with smooth navigation and a focus on accessibility and performance.",    vercelLink: "https://music-master-hazel.vercel.app/",
  //   image: `${RhythmNest}`,
  //   githubLink: "https://github.com/Divyanshguptaj/RhythmNest",
  //   technologies: [
  //     "Next.js",
  //     "React",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "SSR / SSG",
  //     "Responsive Design",
  //     "Git",
  //   ],
  //   category: "Frontend",
  //   gradient: "from-teal-500 via-blue-500 to-indigo-500",
  //   featured: false,
  // },
  // {
  //   id: 3,
  //   title: "College Techfest Website",
  //   description:
  //     "A responsive college techfest website built using HTML, CSS, and JavaScript, designed to highlight events, schedules, and fest details with an engaging and modern interface. The site features dedicated sections for event information, registrations, and contact details, with smooth navigation and a focus on accessibility and performance across devices.",    
  //   image: `${Techfest}`,
  //   vercelLink: "https://college-techfest-eta.vercel.app",
  //   githubLink: "https://github.com/Divyanshguptaj/College-Techfest",
  //   technologies: [
  //     "HTML5",
  //     "CSS3",
  //     "JavaScript",
  //     "Responsive Design",
  //     "UI Animations",
  //     // "Flexbox",
  //     // "CSS Grid",
  //     // "Accessibility",
  //     // "Git",
  //     // "Performance Optimization",
  //   ],
  //   category: "Frontend",
  //   gradient: "from-indigo-500 via-purple-500 to-pink-500",
  //   featured: false,
  // },
];

export default projects;
