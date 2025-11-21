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
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero/Home Section - Empty for now */}
      <section
        id="home"
        className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
      >
        {/* Empty section - to be filled later */}
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen pt-32 px-8 bg-white dark:bg-gray-900"
      >
        <h2 className="text-3xl font-mono flex items-center gap-3">
          <span className="text-purple-500">#</span>
          <span className="text-white">projects</span>
          <span className="text-purple-500 flex-1 border-t border-purple-500"></span>
        </h2>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen pt-32 px-8 bg-gray-50 dark:bg-gray-800"
      >
        <h2 className="text-3xl font-mono flex items-center gap-3">
          <span className="text-purple-500">#</span>
          <span className="text-white">skills</span>
          <span className="text-purple-500 flex-1 border-t border-purple-500"></span>
        </h2>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen pt-32 px-8 bg-white dark:bg-gray-900"
      >
        <h2 className="text-3xl font-mono flex items-center gap-3">
          <span className="text-purple-500">#</span>
          <span className="text-white">about</span>
          <span className="text-purple-500 flex-1 border-t border-purple-500"></span>
        </h2>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen pt-32 px-8 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-800 dark:to-gray-900"
      >
        <h2 className="text-3xl font-mono flex items-center gap-3">
          <span className="text-purple-500">#</span>
          <span className="text-white">contact</span>
          <span className="text-purple-500 flex-1 border-t border-purple-500"></span>
        </h2>
      </section>
    </div>
  );
}
