'use client';

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiRust,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiSupabase,
  SiSqlite,
  SiVercel,
  SiRender,
  SiDocker,
  SiLinux,
  SiGit,
  SiExpo,
  SiOnnx,
} from 'react-icons/si';
import { BiData } from 'react-icons/bi';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Dane Froelicher
          </h1>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a
                  href="#home"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  #home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  #projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  #skills
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  #about
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  #contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero/Home Section */}
      <section
        id="home"
        className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 to-gray-800 relative flex items-center justify-center"
      >
        {/* Main Content - Positioned in Upper-Center */}
        <div className="flex flex-col items-center text-center px-8 -translate-y-12">
          {/* Main Heading */}
          <h1 className="text-7xl font-bold text-white mb-6">
            Dane Froelicher
          </h1>

          {/* Subheading */}
          <h2 className="text-3xl font-semibold text-purple-400 mb-12">
            Developer. Automator. ML Engineer.
          </h2>

          {/* Body Text */}
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl">
            I build intelligent systems that solve real problems.
            <br />
            Chess engines. Conversational AI. Automated workflows.
          </p>
        </div>

        {/* Bouncing Arrow - Bottom Center */}
        <a
          href="#projects"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-purple-500 hover:text-purple-400 transition-colors cursor-pointer"
          aria-label="Scroll to projects"
        >
          <svg
            className="w-12 h-12 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-gray-900 py-20 px-8"
      >
        <h2 className="text-3xl font-mono flex items-center gap-3 mb-16">
          <span className="text-purple-500">#</span>
          <span className="text-white">projects</span>
          <span className="text-purple-500 w-full max-w-md border-t border-purple-500"></span>
        </h2>

        <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
          {/* Project 1: Chess Engine */}
          <div className="flex flex-col items-center">
            <div className="w-[540px] bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
              {/* Clickable Image Area */}
              <a
                href="https://danefroelicher2.github.io/ChessEngine2/chess.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-80 bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors duration-300 group"
              >
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors text-lg">
                  Image Placeholder
                </span>
              </a>

              {/* Non-clickable Content Area */}
              <div className="p-8 bg-gray-800">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Chess Engine
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Placeholder description for Chess Engine project
                </p>
              </div>
            </div>

            {/* Learn More Button */}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-8 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition-colors duration-300 shadow-md hover:shadow-lg text-lg"
            >
              Learn More
            </a>
          </div>

          {/* Project 2: Conversationalist AI */}
          <div className="flex flex-col items-center">
            <div className="w-[540px] bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
              {/* Clickable Image Area */}
              <a
                href="https://github.com/danefroelicher2/conversationalist-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-80 bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors duration-300 group"
              >
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors text-lg">
                  Image Placeholder
                </span>
              </a>

              {/* Non-clickable Content Area */}
              <div className="p-8 bg-gray-800">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Conversationalist AI
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Placeholder description for Conversationalist AI project
                </p>
              </div>
            </div>

            {/* Learn More Button */}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-8 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition-colors duration-300 shadow-md hover:shadow-lg text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="bg-gray-900 py-20 px-8"
      >
        <h2 className="text-3xl font-mono flex items-center gap-3 mb-16">
          <span className="text-purple-500">#</span>
          <span className="text-white">skills</span>
          <span className="text-purple-500 w-full max-w-md border-t border-purple-500"></span>
        </h2>

        <div className="max-w-7xl mx-auto space-y-6">
          {/* LANGUAGES */}
          <div className="flex items-start gap-8">
            <h3 className="text-2xl font-semibold text-white w-64 flex-shrink-0 pt-2">LANGUAGES</h3>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
                { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
                { icon: SiPython, name: 'Python', color: '#3776AB' },
                { icon: SiCplusplus, name: 'C++', color: '#00599C' },
                { icon: SiRust, name: 'Rust', color: '#CE422B' },
                { icon: BiData, name: 'SQL', color: '#CC2927' },
                { icon: SiHtml5, name: 'HTML', color: '#E34F26' },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 bg-gray-900 border border-gray-700 rounded-lg hover:border-purple-500 hover:scale-105 transition-all duration-300"
                >
                  <skill.icon className="text-5xl mb-3" style={{ color: skill.color }} />
                  <span className="text-white text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FRAMEWORKS / RUNTIMES */}
          <div className="flex items-start gap-8">
            <h3 className="text-2xl font-semibold text-white w-64 flex-shrink-0 pt-2">FRAMEWORKS / RUNTIMES</h3>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: SiReact, name: 'React', color: '#61DAFB' },
                { icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF' },
                { icon: SiReact, name: 'React Native', color: '#61DAFB' },
                { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
                { icon: SiExpo, name: 'Expo', color: '#000020' },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 bg-gray-900 border border-gray-700 rounded-lg hover:border-purple-500 hover:scale-105 transition-all duration-300"
                >
                  <skill.icon className="text-5xl mb-3" style={{ color: skill.color }} />
                  <span className="text-white text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MACHINE LEARNING */}
          <div className="flex items-start gap-8">
            <h3 className="text-2xl font-semibold text-white w-64 flex-shrink-0 pt-2">MACHINE LEARNING</h3>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: SiPytorch, name: 'PyTorch', color: '#EE4C2C' },
                { icon: SiNumpy, name: 'NumPy', color: '#013243' },
                { icon: SiPandas, name: 'Pandas', color: '#150458' },
                { icon: SiOnnx, name: 'ONNX', color: '#005CED' },
                { icon: BiData, name: 'Ollama', color: '#FFFFFF' },
                { icon: BiData, name: 'Whisper', color: '#10A37F' },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 bg-gray-900 border border-gray-700 rounded-lg hover:border-purple-500 hover:scale-105 transition-all duration-300"
                >
                  <skill.icon className="text-5xl mb-3" style={{ color: skill.color }} />
                  <span className="text-white text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DATABASES & BACKEND SERVICES */}
          <div className="flex items-start gap-8">
            <h3 className="text-2xl font-semibold text-white w-64 flex-shrink-0 pt-2">DATABASES & BACKEND SERVICES</h3>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
                { icon: SiSqlite, name: 'SQLite', color: '#003B57' },
                { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E' },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 bg-gray-900 border border-gray-700 rounded-lg hover:border-purple-500 hover:scale-105 transition-all duration-300"
                >
                  <skill.icon className="text-5xl mb-3" style={{ color: skill.color }} />
                  <span className="text-white text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CLOUD & DEVOPS */}
          <div className="flex items-start gap-8">
            <h3 className="text-2xl font-semibold text-white w-64 flex-shrink-0 pt-2">CLOUD & DEVOPS</h3>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: SiVercel, name: 'Vercel', color: '#FFFFFF' },
                { icon: SiRender, name: 'Render', color: '#46E3B7' },
                { icon: SiDocker, name: 'Docker', color: '#2496ED' },
                { icon: SiLinux, name: 'Linux', color: '#FCC624' },
                { icon: SiGit, name: 'Git', color: '#F05032' },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 bg-gray-900 border border-gray-700 rounded-lg hover:border-purple-500 hover:scale-105 transition-all duration-300"
                >
                  <skill.icon className="text-5xl mb-3" style={{ color: skill.color }} />
                  <span className="text-white text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-gray-900 py-20 px-8"
      >
        <h2 className="text-3xl font-mono flex items-center gap-3 mb-16">
          <span className="text-purple-500">#</span>
          <span className="text-white">about</span>
          <span className="text-purple-500 w-full max-w-md border-t border-purple-500"></span>
        </h2>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gray-900 py-20 px-8"
      >
        <h2 className="text-3xl font-mono flex items-center gap-3 mb-16">
          <span className="text-purple-500">#</span>
          <span className="text-white">contact</span>
          <span className="text-purple-500 w-full max-w-md border-t border-purple-500"></span>
        </h2>
      </section>
    </div>
  );
}
