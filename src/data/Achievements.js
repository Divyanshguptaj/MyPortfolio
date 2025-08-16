import AhoubaCP from "../assets/Achievements/AhoubaCP.jpg";
import InterIIITA from "../assets/Achievements/InterIIITA.jpg";
import SIH2024 from "../assets/Achievements/SIH2024.jpg";
import Voulenteer from "../assets/Achievements/Voulenteer.jpg";
import { Trophy, Code, Target, Users } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Smart India Hackathon 2024",
    issuer: "Government of India",
    date: "2024",
    category: "Hackathon",
    orientation: "landscape",
    image: `${SIH2024}`,
    description:
      "Winner of Smart India Hackathon 2024 for developing innovative solutions to real-world problems.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Real World Problem Solving",
      "MongoDB",
    ],
    color: "from-purple-600 via-blue-600 to-cyan-500",
    icon: Trophy,
    achievement: "Winner",
  },
  {
    id: 2,
    title: "Inter IIITA Sports Contest",
    issuer: "IIIT Allahabad",
    date: "2024",
    category: "Sports",
    orientation: "portrait",
    image: `${InterIIITA}`,
    description:
      "Secured 3rd place in the 4×100m relay, demonstrating teamwork, speed, and coordination.",
    skills: ["Teamwork", "Speed", "Endurance", "Athletic Coordination"],
    color: "from-emerald-500 via-teal-500 to-blue-500",
    icon: Code,
    achievement: "3rd Place",
  },
  {
    id: 3,
    title: "Ahouba Competitive Programming",
    issuer: "Ahouba Platform",
    date: "2024",
    category: "Programming",
    orientation: "landscape",
    image: `${AhoubaCP}`,
    description:
      "Recognized for exceptional performance in competitive programming, consistently securing top positions on the Ahouba platform through strong analytical thinking and efficient coding practices.",
    skills: [
      "C++ Programming",
      "Algorithm Design",
      "Problem-Solving Strategies",
    ],
    color: "from-orange-500 via-red-500 to-pink-500",
    icon: Target,
    achievement: "Excellence",
  },
  {
    id: 4,
    title: "Volunteer Excellence Award",
    issuer: "Community Service",
    date: "2022",
    category: "Service",
    orientation: "landscape",
    image: `${Voulenteer}`,
    description:
      "Recognition for outstanding volunteer service and community engagement initiatives.",
    skills: [
      "Leadership",
      "Community Service",
      "Team Management",
      "Social Impact",
    ],
    color: "from-green-500 via-emerald-500 to-teal-500",
    icon: Users,
    achievement: "Recognition",
  },
];

export default achievements;
