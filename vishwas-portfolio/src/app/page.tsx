import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Section id="about" title="About Me">
        <p>
          IIT Indore graduate with strong experience in analytics and full-stack
          development. Currently working as Business Analyst at EXL Analytics.
        </p>
      </Section>

      <Section id="experience" title="Work Experience">
        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg transition hover:scale-105">
            <h3 className="text-xl font-semibold">Business Analyst @ EXL Analytics</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Worked on BNPL product, complaint categorization (30% reduction), levy automation 
              (120+ hrs saved), risk database (~$700K savings).
            </p>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-8">
          <a
            href="https://pricewise-git-main-vishwasrajbathams-projects.vercel.app/"
            target="_blank"
            className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-lg font-semibold">📈 Pricewise</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Price tracker built with Next.js, Node.js, MongoDB.
            </p>
          </a>

          <a
            href="https://github.com/vishwasrajbatham/amazon-clone"
            target="_blank"
            className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-lg font-semibold">🛒 Amazon Clone</h3>
            <p className="text-gray-600 dark:text-gray-400">
              E-commerce clone using React + Firebase.
            </p>
          </a>

          <a
            href="https://chessiiti.netlify.app/"
            target="_blank"
            className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-lg font-semibold">♟️ Chess Web App</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Real-time multiplayer chess with Socket.io.
            </p>
          </a>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">

          {/* Analytical Skills Card */}
          <div className="p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
              📊 Analytical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Python",
                "SAS",
                "Power BI",
                "Tableau",
                "SQL (MySQL, Oracle)",
                "Data Visualization",
                "Business Analysis",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 
                            text-blue-800 dark:text-blue-200 
                            font-medium rounded-md shadow-sm 
                            hover:scale-105 hover:shadow-md transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Web Development Skills Card */}
          <div className="p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
              💻 Web Development Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Git & GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 
                            text-blue-800 dark:text-blue-200 
                            font-medium rounded-md shadow-sm 
                            hover:scale-105 hover:shadow-md transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </Section>





      <Section id="contact" title="Contact">
        <div className="max-w-xl mx-auto space-y-6 animate-fadeInUp">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Feel free to reach out — I’m always open to new opportunities, collaborations, or just a chat.
          </p>

          <div className="flex flex-col gap-4">
            {/* Phone */}
            <a
              href="tel:+916387891938"
              className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl shadow 
                        hover:scale-105 transition transform"
            >
              📞 <span className="text-gray-800 dark:text-gray-200 font-medium">+91 63878 91938</span>
            </a>

            {/* Email */}
            <a
              href="mailto:bathamvishwasraj.151@gmail.com"
              className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl shadow 
                        hover:scale-105 transition transform"
            >
              📧 <span className="text-gray-800 dark:text-gray-200 font-medium">bathamvishwasraj.151@gmail.com</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/vishwas-raj-batham-58b3701a4"
              target="_blank"
              className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl shadow 
                        hover:scale-105 transition transform"
            >
              💼 <span className="text-gray-800 dark:text-gray-200 font-medium">linkedin.com/in/vishwas-raj-batham</span>
            </a>
          </div>
        </div>
      </Section>


    </div>
  );
}
