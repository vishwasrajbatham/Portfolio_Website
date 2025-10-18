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
        <div className="animate-fade-in-up">

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold border-b text-gray-700 dark:text-gray-300">Title</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold border-b text-blue-600 dark:text-blue-400">Need</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold border-b text-amber-600 dark:text-amber-400">Description</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold border-b text-green-600 dark:text-green-400">Results</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold border-b text-gray-600 dark:text-gray-400">Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  {
                    title: "BNPL-Buy Now Pay Later",
                    need: "Improve product risk monitoring",
                    desc: "Building automated end to end PowerBi dashboards for sanctioned loans with triggers based on rule validation",
                    result: "Faster risk detection closing 37 short term and 13 long term loans saving estimated chargeoffs of ~$437K",
                    timeline: "Jun 2025–Present",
                  },
                  {
                    title: "Complaints Analysis",
                    need: "Complaints increased 45% QoQ, needed to segregate and redirect complaints to improve efficiency",
                    desc: "Developed LLM based complaints categorizer to segregate complaints into categories",
                    result: "30% reduction in complaints",
                    timeline: "Mar–May 2025",
                  },
                  {
                    title: "Audience Sizer",
                    need: "Identify target audience segments for marketing campaigns",
                    desc: "Built audience segmentation model using clustering techniques in SAS",
                    result: "23% increase in campaign engagement",
                    timeline: "Aug–Oct 2024",
                  },
                  {
                    title: "Levy Automation",
                    need: "Eliminate manual checks for levies on US Bank customers",
                    desc: "Built automation pipeline using Power Automate",
                    result: "120+ hrs saved/month",
                    timeline: "Aug–Oct 2024",
                  },
                  {
                    title: "Risk Analysis Database",
                    need: "Track high-risk accounts",
                    desc: "Created centralized DB",
                    result: "~$700K savings annually",
                    timeline: "Mar–Jul 2024",
                  },
                ].map((exp, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                    <td className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200">{exp.title}</td>
                    <td className="px-4 py-3 text-sm text-blue-700 dark:text-blue-300">{exp.need}</td>
                    <td className="px-4 py-3 text-sm text-amber-700 dark:text-amber-300">{exp.desc}</td>
                    <td className="px-4 py-3 text-sm text-green-700 dark:text-green-300">{exp.result}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{exp.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-6 md:hidden">
            {[
              {
                title: "BNPL-Buy Now Pay Later",
                need: "Improve product risk monitoring",
                desc: "Building automated end to end PowerBi dashboards for sanctioned loans with triggers based on rule validation",
                result: "Faster risk detection closing 37 short term and 13 long term loans saving estimated chargeoffs of ~$437K",
                timeline: "Jun 2025–Present",
              },
              {
                title: "Complaints Analysis",
                need: "Complaints increased 45% QoQ, needed to segregate and redirect complaints to improve efficiency",
                desc: "Developed LLM based complaints categorizer to segregate complaints into categories",
                result: "30% reduction in complaints",
                timeline: "Mar–May 2025",
              },
              {
                title: "Audience Sizer",
                need: "Identify target audience segments for marketing campaigns",
                desc: "Built audience segmentation model using clustering techniques in SAS",
                result: "23% increase in campaign engagement",
                timeline: "Aug–Oct 2024",
              },
              {
                title: "Levy Automation",
                need: "Eliminate manual checks for levies on US Bank customers",
                desc: "Built automation pipeline using Power Automate",
                result: "120+ hrs saved/month",
                timeline: "Aug–Oct 2024",
              },
              {
                title: "Risk Analysis Database",
                need: "Track high-risk accounts",
                desc: "Created centralized DB",
                result: "~$700K savings annually",
                timeline: "Mar–Jul 2024",
              },
            ].map((exp, i) => (
              <div
                key={i}
                className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800"
              >
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{exp.title}</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300"><span className="font-medium">Need:</span> {exp.need}</p>
                <p className="text-sm text-amber-700 dark:text-amber-300"><span className="font-medium">Description:</span> {exp.desc}</p>
                <p className="text-sm text-green-700 dark:text-green-300"><span className="font-medium">Results:</span> {exp.result}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400"><span className="font-medium">Timeline:</span> {exp.timeline}</p>
              </div>
            ))}
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
