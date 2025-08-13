import Academix from "../assets/MyProject/Academix.png";
import RhythmNest from "../assets/MyProject/MusicMaster.png";
import Techfest from "../assets/MyProject/Techfest.png";

const projects = [
  {
    id: 1,
    title: "Academix – Student Management Platform",
    description:
      "A modern, responsive web platform designed to simplify academic management for students and faculty. Features include course tracking, assignment management, grade visualization, and secure authentication. Built with a clean UI/UX for intuitive navigation and optimized performance.",
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
    title: "RhythmNest – Music Discovery & Visualization",
    description:
      "An engaging, interactive music application built with Next.js, offering users the ability to explore trending tracks, visualize beats in real time, and create personalized playlists. Integrates multiple music APIs for fetching detailed song metadata, streaming previews, and generating dynamic waveform animations. Designed with responsive layouts, fast load times, and smooth UI transitions for an immersive listening experience.",
    image: `${RhythmNest}`, // Replace with actual screenshot URL
    vercelLink: "https://music-master-hazel.vercel.app/",
    githubLink: "https://github.com/Divyanshguptaj/RhythmNest",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Music API Integration",
      "SSR / SSG",
      "Responsive Design",
      "Git",
    ],
    category: "Frontend",
    gradient: "from-teal-500 via-blue-500 to-indigo-500",
    featured: false,
  },
  {
    id: 3,
    title: "College Techfest Website",
    description:
      "A visually appealing and mobile-friendly platform developed to showcase and manage my college’s first-ever tech festival. Includes sections for event categories, schedules, speaker profiles, and sponsors, alongside an interactive contact form. Emphasizes accessibility, optimized performance, and modern design with subtle animations. Served as the central hub for participants and organizers, enhancing engagement and streamlining communication before and during the event.",
    image: `${Techfest}`,
    vercelLink: "https://college-techfest-eta.vercel.app",
    githubLink: "https://github.com/Divyanshguptaj/College-Techfest",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Flexbox",
      "CSS Grid",
      "UI Animations",
      "Accessibility",
      "Git",
      "Performance Optimization",
    ],
    category: "Frontend",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    featured: false,
  },
];

export default projects;
