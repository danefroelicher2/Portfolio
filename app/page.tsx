'use client';

import Image from 'next/image';
import { useState } from 'react';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: 'error',
        message: 'All fields are required.',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    // Message length validation
    if (formData.message.length < 10) {
      setSubmitStatus({
        type: 'error',
        message: 'Message must be at least 10 characters long.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });

        // Auto-dismiss success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' });
        }, 5000);
      } else {
        const data = await response.json();
        setSubmitStatus({
          type: 'error',
          message:
            data.error ||
            'Failed to send message. Please try again or email me directly.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message:
          'Failed to send message. Please try again or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
                  href="#experience"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  #experience
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
                  href="#projects"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  #projects
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
          href="#experience"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-purple-500 hover:text-purple-400 transition-colors cursor-pointer"
          aria-label="Scroll to experience"
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

      {/* Experience Section */}
      <section
        id="experience"
        className="bg-gray-900 py-20 px-8"
      >
        <h2 className="text-3xl font-mono flex items-center gap-3 mb-16">
          <span className="text-purple-500">#</span>
          <span className="text-white">experience</span>
          <span className="text-purple-500 w-full max-w-md border-t border-purple-500"></span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Job 1: P.L. Marketing */}
          <div className="bg-gray-800 border-l-4 border-purple-500 rounded-lg p-8 shadow-lg">
            {/* Header: Company and Duration */}
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-2xl font-bold text-white">P.L. Marketing</h3>
              <span className="text-gray-400 text-sm">Oct 2024 - Present</span>
            </div>

            {/* Position */}
            <h4 className="text-xl font-semibold text-purple-400 mb-4">Space Technology Analyst</h4>

            {/* Bullet Points */}
            <ul className="space-y-3 text-gray-300 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-purple-500 mt-1.5">•</span>
                <span>Develop custom JavaScript commodity-specific algorithms that generate optimized planograms for multiple product commodities across the Kroger enterprise.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-500 mt-1.5">•</span>
                <span>Engineer mathematical optimization logic to automate tasks previously done manually, drastically reducing execution time and increasing accuracy.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-500 mt-1.5">•</span>
                <span>Design and implement math-driven decision trees to handle complex product positioning, fixture constraints, adjacency logic, and spatial rules.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-500 mt-1.5">•</span>
                <span>Collaborate cross-functionally with category managers to clarify requirements, validate rule sets, and align on automation outputs.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-500 mt-1.5">•</span>
                <span>Learn and apply the manual merchandising steps and category workflows to ensure automation aligns with real-world processes.</span>
              </li>
            </ul>
          </div>

          {/* Job 2: Siemens */}
          <div className="bg-gray-800 border-l-4 border-purple-500 rounded-lg p-8 shadow-lg">
            {/* Header: Company and Duration */}
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-2xl font-bold text-white">Siemens</h3>
              <span className="text-gray-400 text-sm">Dec 2022 - May 2024</span>
            </div>

            {/* Position */}
            <h4 className="text-xl font-semibold text-purple-400 mb-4">Data Analytics Internship</h4>

            {/* Bullet Points */}
            <ul className="space-y-3 text-gray-300 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-purple-500 mt-1.5">•</span>
                <span>Led and managed multiple cross-functional data projects, serving as the central point of contact for data collection, processing, and visualization for leadership.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-500 mt-1.5">•</span>
                <span>Directed Siemens’ supplier carbon-neutrality initiative, hosting informational meetings with 100+ attendees and coordinating bi-weekly progress check-ins. Built Tableau dashboards and executive presentations to track sustainability progress. </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-500 mt-1.5">•</span>
                <span>Served as the primary contact for supplier account updates, including new account creation, reactivations, banking changes, and user information corrections. Produced quarterly analytic reports summarizing changes for leadership.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-500 mt-1.5">•</span>
                <span>Managed system/tool access rights for Siemens users across North America, reviewing, approving, and documenting access requests for internal platforms.</span>
              </li>
            </ul>
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

          {/* DATABASES / BACKEND SERVICES */}
          <div className="flex items-start gap-8">
            <h3 className="text-2xl font-semibold text-white w-64 flex-shrink-0 pt-2">DATABASES / BACKEND SERVICES</h3>
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
                className="block h-80 relative bg-gray-700 hover:opacity-90 transition-opacity duration-300 group overflow-hidden"
              >
                <Image
                  src="/images/chess.png?v=2"
                  alt="Chess Engine"
                  fill
                  className="object-cover object-[center_bottom]"
                  sizes="540px"
                  unoptimized
                />
              </a>

              {/* Non-clickable Content Area */}
              <div className="p-8 bg-gray-800">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Chess Engine
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  C++ chess engine combining classical hand-coded evaluation with neural network inference. Trained a PyTorch model on 100K+ master-level games, converted to ONNX, and integrated into production C++ engine deployed on Render. Users can toggle between classical and ML evaluation modes via clean interface.
                </p>
              </div>
            </div>

            {/* Learn More Button */}
            <a
              href="https://danefroelicher2.github.io/ChessEngine2/chess.html"
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
                href="https://github.com/danefroelicher2/Conversationalist"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-80 relative bg-gray-700 hover:opacity-90 transition-opacity duration-300 group overflow-hidden"
              >
                <Image
                  src="/images/ai.png"
                  alt="Conversationalist AI"
                  fill
                  className="object-cover object-[center_bottom]"
                  sizes="540px"
                />
              </a>

              {/* Non-clickable Content Area */}
              <div className="p-8 bg-gray-800">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Conversationalist AI
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Voice-driven conversationalist AI with real-time speech processing pipeline. Integrated OpenAI Whisper for transcription, local Llama 3.1 LLM (0.18-0.58s response times via Ollama), and PostgreSQL for persistent memory. Features voice authentication, bcrypt security, and context-aware dialogue using PyAudio/pyttsx3.                </p>
              </div>
            </div>

            {/* Learn More Button */}
            <a
              href="https://github.com/danefroelicher2/Conversationalist"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-8 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition-colors duration-300 shadow-md hover:shadow-lg text-lg"
            >
              Learn More
            </a>
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

        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="flex gap-16 items-center">
            {/* LEFT SIDE: Image (40%) */}
            <div className="w-[40%] flex-shrink-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-purple-500/20">
                <Image
                  src="/images/me.jpeg"
                  alt="Profile"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* RIGHT SIDE: Content (60%) */}
            <div className="w-[60%] space-y-8">
              {/* Section 1: Intro */}
              <div>
                <p className="text-xl text-gray-200 leading-relaxed font-light">
                  I'm a software developer passionate about building intelligent systems that solve real problems. I specialize in automation, machine learning, and full-stack development—turning complex challenges into elegant solutions.
                </p>
              </div>

              {/* Section 2: Background */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-purple-400 font-semibold mb-3 flex items-center gap-2">
                  <span>📚</span> Background
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I studied [Computer Science/relevant field] at [University Name], where I developed a deep interest in artificial intelligence and software architecture. My journey has taken me from building chess engines with reinforcement learning to creating conversational AI systems.
                </p>
              </div>

              {/* Section 3: What I Do */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-purple-400 font-semibold mb-3 flex items-center gap-2">
                  <span>💻</span> What I Build
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I focus on projects at the intersection of AI and practical application—whether that's developing machine learning pipelines, crafting responsive web applications, or exploring new ways to make technology more intuitive and accessible.
                </p>
              </div>

              {/* Section 4: Beyond Code */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-purple-400 font-semibold mb-3 flex items-center gap-2">
                  <span>✨</span> Beyond Code
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me [hiking/traveling/playing chess/whatever hobbies]. I'm always exploring new technologies and looking for interesting problems to solve.
                </p>
              </div>
            </div>
          </div>
        </div>
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

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-2"
              >
                message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-vertical"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 disabled:bg-purple-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Success/Error Messages */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${submitStatus.type === 'success'
                  ? 'bg-green-900/30 border border-green-500 text-green-300'
                  : 'bg-red-900/30 border border-red-500 text-red-300'
                  }`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
