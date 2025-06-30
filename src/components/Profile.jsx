import profilePic from "../assets/Pic.jpeg";
import SyaamilGroup from "../assets/Syaamil.png";
import LearningX from "../assets/learningx.png";
import Unikom from "../assets/unikom.png";
import Skills from "../data/Skills";
import Projects from "../data/Projects";
import Experience from "./Experience";
import {FaGlobe} from "react-icons/fa"

export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 text-gray-800">
      {/* Header */}
      <div className="flex flex-row md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className=" md:text-3xl font-bold mb-2 text-2xl ">
            Hi, I'm Rafli <span className="inline-block">👋</span>
          </h1>
          <p className="md:text-lg text-[16px] text-gray-600">
            Software Engineer Wanna be. I love coding because it feels like
            solving puzzles.
          </p>
        </div>
        <img
          src={profilePic}
          alt="Rafli"
          className="w-28 h-28 rounded-full object-cover"
        />
      </div>

      {/* About */}
      <section className="mt-8">
        <h2 className="text-xl font-bold mb-2">About</h2>
        <p className="text-gray-700">
          6th-semester Information Systems student at Universitas Komputer
          Indonesia with a strong interest in web development, particularly in
          front-end. Skilled in JavaScript and Python frameworks, and committed
          to continuous learning and growth to make meaningful contributions in
          the tech industry.
        </p>
      </section>

      {/* Education */}
      <section className="mt-8">
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src={Unikom}
                alt="syaamilgroup"
                className="w-8 md:h-8 object-contain "
              />
              <div>
                <h3 className="md:text-[16px] font-semibold text-[12px]">
                  Universitas Komputer Indonesia
                </h3>
                <p className="md:text[16px] text-sm text-gray-600 text-[12px]">
                  Bachelor Degree Information System
                </p>
              </div>
            </div>
            <p className="md:text-sm text-[12px] text-gray-500">
              Nov 2022 – Now
            </p>
          </li>
        </ul>
      </section>

      {/*  Experience */}
      <section className="mt-8">
        <h2 className="text-xl font-bold mb-4">Experience</h2>
        <ul className="space-y-4 ">
          <Experience
            logo={SyaamilGroup}
            title="Syaamil Group"
            position="Intern Frontend Developer"
            date="Feb 2025 - Jun 2025"
            description="Contributed to the development of the company's internal LMS website UI using HTML, CSS, JavaScript, and Bootstrap.

"
          />

          <Experience
            logo={LearningX}
            title="Learning X | MSIB Batch 7"
            position="Fullstack Developer"
            date="Aug 2024 - Nov 2024"
            description="Designed and developed an e-commerce website, handling both frontend and backend development using Flask (Python), MongoDB, and Bootstrap."
          />
        </ul>
      </section>

      {/* Skills */}
      <section className="mt-8">
        <h2 className="font-bold text-xl mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {Skills.map((Skill) => (
            <span
              key={Skill}
              className="bg-black text-[12px] text-white p-1.5 rounded-xl font-semibold hover:opacity-80 "
            >
              {Skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-bold text-xl mt-4">Projects</h2>
        <div className="grid gap-6 mt-6 grid-cols-1 md:grid-cols-2 bg-[#Fefcf6]">
          {Projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border border-gray-300  shadow-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 p-3 object-contain"
              />
              <div className="p-3">
                <h2 className="font-semibold text-[16px]">{project.title}</h2>
                <p className="text-[12px] text-gray-700">{project.date}</p>
                <p className="text-left text-[12px] text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mt-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-[10px] text-gray-900 p-1.5 rounded-xl font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.website && (
                  <div className="mt-2">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-black text-[10px] text-white p-1.5 rounded-xl font-semibold hover:opacity-80"
                    >
                      <div className="flex items-center gap-1">
                        <FaGlobe className="w-2.5 h-2.5" />
                        Website
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
