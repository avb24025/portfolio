import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 font-serif">
      {/* Hero Section - Enhanced with gradient and animation */}
      <header className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-gray-900 ring-opacity-10 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://ui-avatars.com/api/?name=Aditya+Bhosale&background=000&color=fff&size=128" 
              alt="Aditya Bhosale"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Aditya Bhosale
          </h1>
          <p className="text-2xl text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed">
            B.Tech IT Student | Full-Stack Developer | Problem Solver
          </p>
          <div className="flex justify-center gap-8 pt-6">
            <a href="mailto:av24bhosale@gmail.com" 
               className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300">
              Get in touch
            </a>
            <a href="#projects" 
               className="px-6 py-3 border-2 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
              View work
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">About</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            I'm a passionate Full-Stack Developer and IT student with a keen interest in building innovative web solutions. 
            Currently pursuing my B.Tech in Information Technology, I love tackling complex problems and turning ideas into 
            reality through code.
          </p>
          <div className="grid grid-cols-2 gap-8 font-sans">
            <div>
              <h3 className="font-medium mb-1">Location</h3>
              <p className="text-gray-600">Pune, Maharashtra</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Experience</h3>
              <p className="text-gray-600">2+ Years Coding</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-8">
            <article className="border-b pb-8">
              <h3 className="text-xl font-bold mb-2">PCCOE, Pune</h3>
              <p className="text-gray-600 mb-2">B.Tech in Information Technology</p>
              <div className="flex justify-between text-sm text-gray-500 font-sans">
                <span>2022-2026</span>
                <span>CGPA: 7.64</span>
              </div>
            </article>
            <article className="border-b pb-8">
              <h3 className="text-xl font-bold mb-2">Dnyandeep Vidyamandir</h3>
              <p className="text-gray-600 mb-2">Higher Secondary Education</p>
              <div className="flex justify-between text-sm text-gray-500 font-sans">
                <span>HSC: 83.33%</span>
                <span>SSC: 99.20%</span>
              </div>
            </article>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-12 font-sans">
            <div>
              <h3 className="text-lg font-bold mb-4">Languages</h3>
              <ul className="space-y-2 text-gray-700">
                {["C", "C++", "JavaScript", "HTML", "CSS", "SQL"].map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Frameworks</h3>
              <ul className="space-y-2 text-gray-700">
                {["React", "Node.js", "Express", "Firebase", "TailwindCSS"].map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Tools & Others</h3>
              <ul className="space-y-2 text-gray-700">
                {["Git", "GitHub", "VS Code", "AWS", "MongoDB", "REST APIs"].map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section - Enhanced with new design and added project */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
            <article className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3">Sangivani</h3>
              <p className="text-gray-700 mb-4">Developed a real-time blood donation platform with live donor search & SOS alerts.</p>
              <div className="flex flex-wrap gap-2 font-sans text-sm mb-4">
                {["React", "Firebase", "Node.js"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">{tech}</span>
                ))}
              </div>
              <a 
                href="https://github.com/avb24025/PackmanBytes_AB2_07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors"
              >
                View Source <span className="ml-2">→</span>
              </a>
            </article>

            <article className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3">ByteBlog</h3>
              <p className="text-gray-700 mb-4">Built a blogging platform with post bookmarking and MongoDB storage.</p>
              <div className="flex flex-wrap gap-2 font-sans text-sm mb-4">
                {["MongoDB", "Express", "React"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">{tech}</span>
                ))}
              </div>
              <a 
                href="https://github.com/avb24025/Byte-Blog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors"
              >
                View Source <span className="ml-2">→</span>
              </a>
            </article>

            <article className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3">BookMart</h3>
              <p className="text-gray-700 mb-4">E-commerce platform for books with personalized recommendations and user reviews.</p>
              <div className="flex flex-wrap gap-2 font-sans text-sm mb-4">
                {["React", "Node.js", "PostgreSQL", "AWS"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">{tech}</span>
                ))}
              </div>
              <a 
                href="https://github.com/avb24025/BookMart"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors"
              >
                View Source <span className="ml-2">→</span>
              </a>
            </article>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Achievements</h2>
          <div className="space-y-8">
            {[
              {
                title: "Competitive Programming",
                description: "Solved 300+ DSA problems on LeetCode & GFG"
              },
              {
                title: "Hackathon Success",
                description: "Top 20 in national-level hackathon AlphaByte"
              },
              {
                title: "Technical Competition",
                description: "Third place in CrickBlitz at Praxis TechFest"
              }
            ].map((achievement, index) => (
              <article key={index} className="border-b pb-8">
                <h3 className="font-bold text-xl mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20 bg-gray-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Let's Connect</h2>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-3xl mx-auto font-sans">
              {[
                {
                  name: "Email",
                  url: "mailto:av24bhosale@gmail.com",
                  username: "av24bhosale@gmail.com"
                },
                { 
                  name: "LinkedIn", 
                  url: "https://www.linkedin.com/in/aditya-bhosale-a53481259/",
                  username: "Aditya Bhosale"
                },
                { 
                  name: "GitHub",
                  url: "https://github.com/avb24025",
                  username: "avb24025"
                },
                { 
                  name: "LeetCode",
                  url: "https://leetcode.com/u/avb_24/",
                  username: "avb_24"
                }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-center group p-4 rounded-lg hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="font-medium mb-2">{link.name}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {link.username}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
