import LMS from "../assets/lms.png";
import SweetDessert from "../assets/sweetdessert.png";
import Xiujank from "../assets/xiujank.png";
import Petadik from "../assets/petadik.jpg";
import TanyaKampus from "../assets/tanyakampus.jpeg";

const Projects = [
  {
    title: "Tanya Kampus",
    date: "Nov 2025 - Present",
    description:
      "a web app helping students find suitable universities and majors through aptitude tests. Served as backend developer, designing APIs to support recommendations.",
    image: [TanyaKampus],
    techStack: [
      "React",
      "Express",
      "TailwindCSS",
      "Typescript",
      "Cloudinary",
      "Mysql",
      "Prisma",
    ],
    github: "https://github.com/orgs/TanyaKampus/repositories",
    website: "https://tanyakampus.vercel.app/",
  },
  {
    title: "PETADIK",
    date: "Aug 2025 - Sep 2025",
    description:
      "Focused on creating a feature for periodic salary increases for teachers and designing an interactive dashboard using Bootstrap to improve efficiency and user experience.",
    image: Petadik,
    techStack: ["PHP", "Laravel", "Bootstrap", "MySQL", "Blade", "Eloquent"],
    website: "https://disdikkbb.org/petadik/",
  },
  {
    title: "Xiujank Chocolate",
    date: "Jul 2025 - Aug 2025 ",
    description:
      "Developed a modern and responsive company profile website for a premium chocolate brand, showcasing products and brand story.",
    image: Xiujank,
    techStack: ["React", "Vite", "TailwindCSS"],
    website: "https://xi-u-jank.vercel.app/",
    github: "https://github.com/RafliAAA/XI-U-JANK",
  },
  {
    title: "Learning Management System",
    date: "Feb 2025 - Jul 2025",
    description:
      "Contributed to the development of the company's internal LMS website UI using HTML, CSS, JavaScript, Bootstrap, and Moodle customization.",
    image: LMS,
    techStack: ["Moodle", "PHP", "MySQL", "Bootstrap"],
    website: "https://elearning.syaamilgroup.id/my/",
  },
  {
    title: "Sweet Dessert",
    date: "Sep 2024 - Des 2024",
    description:
      "Designed and developed an e-commerce website, handling both frontend and backend development using Flask (Python), MongoDB, and Bootstrap.",
    image: SweetDessert,
    techStack: ["Flask", "MongoDB", "Bootstrap"],
    github: "https://github.com/hadimughny7/SweetDessertWeb",
  },
];

export default Projects;