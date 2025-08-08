import LMS from "../assets/lms.png";
import SweetDessert from "../assets/sweetdessert.png";
import Xiujank from "../assets/xiujank.png"
import Tribe from "../assets/sweetdessert.png"

const Projects = [
  {
    title: "tribe",
    date: "Jun 2025 - Present ",
    description:
      "Designing and developing a streetwear fashion e-commerce platform with React, Vite, MongoDB, TailwindCSS, and Redis for caching.",
    image: Tribe,
    techStack: ["React", "Express", "TailwindCSS", "Redis", "MongoDB"],
    website: "test",
  },
  {
    title: "Xiujank Chocolate",
    date: "Jul 2025 - Aug 2025 ",
    description:
      "Developed a modern and responsive company profile website for a premium chocolate brand, showcasing products and brand story.",
    image: Xiujank,
    techStack: ["React", "Vite", "TailwindCSS"],
    website: "https://xi-uujank.my.id/",
  },
  {
    title: "Learning Management System",
    date: "Feb 2025 - Jun 2025",
    description:
      "Contributed to the development of the company's internal LMS website UI using HTML, CSS, JavaScript, Bootstrap, and Moodle customization.",
    image: LMS,
    techStack: ["Moodle", "PHP", "MySQL", "Bootstrap"],
    website: "https://elearning.syaamilgroup.id/my/",
  },
  {
    title: "Sweet Dessert",
    date: "Nov 2024 - Des 2024",
    description:
      "Designed and developed an e-commerce website, handling both frontend and backend development using Flask (Python), MongoDB, and Bootstrap.",
    image: SweetDessert,
    techStack: ["Flask", "MongoDB", "Bootstrap"],
    website: "https://sweetdessert.glitch.me/",
  },
];

export default Projects;