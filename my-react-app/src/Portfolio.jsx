import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden">
            <img 
              src="https://ui-avatars.com/api/?name=Aditya+Bhosale&background=000&color=fff&size=128" 
              alt="Aditya Bhosale"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-6xl font-bold tracking-tight">
            Aditya Bhosale
          </h1>
          <p className="text-xl text-gray-600 font-sans max-w-2xl mx-auto">
            B.Tech IT Student | Full-Stack Developer | Problem Solver
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a href="mailto:av24bhosale@gmail.com" 
               className="text-gray-900 border-b-2 border-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors">
              Get in touch
            </a>
            <a href="#projects" 
               className="text-gray-900 border-b-2 border-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors">
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

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <article className="space-y-4">
              <h3 className="text-xl font-bold">Sangivani</h3>
              <p className="text-gray-700">Developed a real-time blood donation platform with live donor search & SOS alerts.</p>
              <div className="flex flex-wrap gap-2 font-sans text-sm">
                <span className="text-gray-600">React</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">Firebase</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">Node.js</span>
              </div>
              <a 
                href="https://github.com/avb24025/PackmanBytes_AB2_07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-900 border-b border-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                View Source →
              </a>
            </article>
            <article className="space-y-4">
              <h3 className="text-xl font-bold">ByteBlog</h3>
              <p className="text-gray-700">Built a blogging platform with post bookmarking and MongoDB storage.</p>
              <div className="flex flex-wrap gap-2 font-sans text-sm">
                <span className="text-gray-600">MongoDB</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">Express</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">React</span>
              </div>
              <a 
                href="https://github.com/avb24025/Byte-Blog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-900 border-b border-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                View Source →
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
        <section className="mb-20 border-t pt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Let's Connect</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
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
                className="text-center group border-b pb-4 hover:border-gray-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-medium mb-1">{link.name}</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                  {link.username}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
