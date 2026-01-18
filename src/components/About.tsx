import { motion } from 'framer-motion';
import { Database, Layout, Server, Zap, Award, Target, CheckCircle2 } from 'lucide-react';
import dejesusLogo from '../assets/dejesus.png';
const skills = [{
  name: 'Frontend Development',
  icon: Layout,
  level: 95
}, {
  name: 'Backend Architecture',
  icon: Server,
  level: 92
}, {
  name: 'Database Design',
  icon: Database,
  level: 90
}, {
  name: 'DevOps & Cloud',
  icon: Zap,
  level: 88
}];
const techStack = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
  Backend: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'GraphQL', 'Prisma'],
  DevOps: ['Docker', 'AWS', 'CI/CD', 'Vercel', 'Git', 'Kubernetes'],
  Tools: ['Figma', 'VS Code', 'Postman', 'Jest', 'Cypress', 'Webpack']
};
const certifications = [{
  name: 'AWS Certified Solutions Architect',
  org: 'Amazon Web Services',
  year: '2023'
}, {
  name: 'Professional Scrum Master',
  org: 'Scrum.org',
  year: '2022'
}, {
  name: 'Google Cloud Professional',
  org: 'Google Cloud',
  year: '2023'
}];
const methodologies = ['Agile / Scrum', 'Test-Driven Development', 'CI/CD Pipeline', 'Microservices Architecture', 'RESTful API Design', 'Clean Code Principles'];
const experience = [{
  year: '2023 - Présent',
  role: 'Ingénieur Fullstack Senior',
  company: 'Freelance',
  description: "Conception et développement d'applications web scalables pour startups et entreprises. Architecture de solutions techniques complexes avec React, Node.js et AWS."
}, {
  year: '2021 - 2023',
  role: 'Lead Frontend Engineer',
  company: 'TechFlow Solutions',
  description: "Direction d'une équipe de 5 développeurs. Amélioration des performances de 40% et implémentation d'un design system complet. Migration vers une architecture micro-frontend."
}, {
  year: '2019 - 2021',
  role: 'Ingénieur Fullstack',
  company: 'Creative Digital Agency',
  description: 'Développement de solutions e-commerce sur mesure et plateformes marketing pour des marques internationales. Stack: React, Node.js, PostgreSQL.'
}];
export function About() {
  return <section id="about" className="py-24 md:py-32 bg-dark-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Background Logos */}
      <img src={dejesusLogo} alt="" aria-hidden="true" className="absolute top-32 right-16 w-72 h-72 opacity-40 animate-pulse object-contain pointer-events-none select-none" style={{
      animationDuration: '5s'
    }} />
      <img src={dejesusLogo} alt="" aria-hidden="true" className="absolute bottom-32 left-20 w-80 h-80 opacity-35 animate-pulse object-contain pointer-events-none select-none" style={{
      animationDuration: '6s',
      animationDelay: '1s'
    }} />
      <img src={dejesusLogo} alt="" aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 opacity-30 animate-pulse object-contain pointer-events-none select-none" style={{
      animationDuration: '7s',
      animationDelay: '2s'
    }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mb-20">
          <span className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-4 block">
            À Propos
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Ingénieur passionné par <br />
            <span className="text-gray-500">l'excellence technique.</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-cyan to-accent-purple" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h3 className="text-2xl font-serif text-white mb-6">
              Mon Parcours
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Diplômé en ingénierie informatique, j'ai débuté ma carrière il y a
              5 ans avec une fascination pour l'architecture logicielle et les
              systèmes distribués. Ce qui a commencé comme une passion pour le
              code est devenu une expertise dans la conception de solutions
              techniques robustes et scalables.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Aujourd'hui, j'accompagne les entreprises dans leur transformation
              digitale en concevant des architectures modernes, performantes et
              maintenables. Mon approche combine rigueur technique,
              méthodologies agiles et focus constant sur la qualité du code.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-dark-900 border border-white/5 rounded-xl hover:border-accent-cyan/30 transition-colors">
                <h4 className="text-3xl font-bold text-white mb-1">5+</h4>
                <p className="text-sm text-gray-500">Années d'expérience</p>
              </div>
              <div className="p-4 bg-dark-900 border border-white/5 rounded-xl hover:border-accent-purple/30 transition-colors">
                <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                <p className="text-sm text-gray-500">Projets livrés</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-white flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-accent-cyan" />
                Certifications
              </h4>
              {certifications.map((cert, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="flex items-start gap-3 p-3 bg-dark-900/50 rounded-lg border border-white/5 hover:border-accent-cyan/30 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {cert.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {cert.org} • {cert.year}
                    </p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="space-y-8">
            <h3 className="text-2xl font-serif text-white mb-6">
              Compétences Techniques
            </h3>
            {skills.map((skill, index) => <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg text-accent-cyan group-hover:text-white group-hover:bg-accent-cyan/20 transition-colors">
                      <skill.icon className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                  <motion.div initial={{
                width: 0
              }} whileInView={{
                width: `${skill.level}%`
              }} viewport={{
                once: true
              }} transition={{
                duration: 1,
                delay: 0.2 + index * 0.1
              }} className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
                </div>
              </div>)}

            {/* Methodologies */}
            <div className="mt-12">
              <h4 className="text-lg font-medium text-white flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-accent-purple" />
                Méthodologies & Pratiques
              </h4>
              <div className="flex flex-wrap gap-2">
                {methodologies.map(method => <span key={method} className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/5 hover:border-accent-purple/30 hover:bg-white/10 transition-colors">
                    {method}
                  </span>)}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <div className="mb-24">
          <h3 className="text-2xl font-serif text-white mb-10 text-center">
            Stack Technique
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, items], index) => <motion.div key={category} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-dark-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors group">
                <h4 className="text-lg font-medium text-white mb-4 border-b border-white/5 pb-2 group-hover:text-accent-cyan transition-colors">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => <span key={item} className="px-3 py-1 text-xs text-gray-400 bg-white/5 rounded-full border border-white/5">
                      {item}
                    </span>)}
                </div>
              </motion.div>)}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-serif text-white mb-12">
            Expérience Professionnelle
          </h3>
          <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
            {experience.map((exp, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2
          }} className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent-purple ring-4 ring-dark-950 group-hover:ring-8 group-hover:bg-accent-cyan transition-all" />
                <span className="text-sm text-accent-cyan font-medium tracking-wider mb-1 block">
                  {exp.year}
                </span>
                <h4 className="text-xl font-bold text-white mb-1">
                  {exp.role}
                </h4>
                <p className="text-gray-400 text-sm mb-3">{exp.company}</p>
                <p className="text-gray-500 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}