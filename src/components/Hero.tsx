
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code2, Award } from 'lucide-react';
import dejesusLogo from '../assets/dejesus.png';
export function Hero() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950 px-6 pt-20">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 bg-[size:50px_50px] bg-grid-pattern opacity-[0.03]" />

      <img src={dejesusLogo} alt="" aria-hidden="true" className="absolute top-16 left-10 w-72 h-72 opacity-35 animate-pulse object-contain pointer-events-none select-none" style={{
      animationDuration: '4s'
    }} />
      <img src={dejesusLogo} alt="" aria-hidden="true" className="absolute top-36 right-20 w-80 h-80 opacity-35 animate-pulse object-contain pointer-events-none select-none" style={{
      animationDuration: '5s',
      animationDelay: '1s'
    }} />
      <img src={dejesusLogo} alt="" aria-hidden="true" className="absolute bottom-40 left-1/4 w-96 h-96 opacity-30 animate-pulse object-contain pointer-events-none select-none" style={{
      animationDuration: '6s',
      animationDelay: '2s'
    }} />
      <img src={dejesusLogo} alt="" aria-hidden="true" className="absolute top-1/3 right-10 w-72 h-72 opacity-30 animate-pulse object-contain pointer-events-none select-none" style={{
      animationDuration: '5s',
      animationDelay: '0.5s'
    }} />

      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-purple/10 blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-cyan/10 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] rounded-full bg-blue-500/5 blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="flex justify-center mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative px-4 py-1.5 bg-dark-900 ring-1 ring-white/10 rounded-full flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-300">
                Available for new projects
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} className="mb-6 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <Award className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm font-medium text-gray-300">
              Ingénieur Fullstack
            </span>
          </div>
          <div className="px-4 py-2 bg-accent-purple/10 backdrop-blur-sm border border-accent-purple/20 rounded-full">
            <span className="text-sm font-medium text-accent-purple">
              5+ ans d'expérience
            </span>
          </div>
        </motion.div>

        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-[1.1] mb-8 tracking-tight">
          Engineering <br />
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 blur-xl" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-purple bg-300% animate-gradient-xy">
              digital excellence
            </span>
          </span>
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Ingénieur Fullstack spécialisé dans la conception d'architectures web
          scalables et performantes. Je transforme des exigences complexes en
          solutions techniques élégantes et maintenables.
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a href="#projects" className="group relative px-8 py-4 bg-white text-dark-950 rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
            <span className="relative z-10 flex items-center gap-2">
              Voir mes réalisations
              <Code2 className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="#contact" className="px-8 py-4 text-white border border-white/10 rounded-full font-medium hover:bg-white/5 hover:border-white/20 transition-all hover:scale-105 backdrop-blur-sm">
            Démarrer un projet
          </a>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 0.8
      }} className="flex justify-center gap-6">
          {[{
          icon: Github,
          href: '#',
          label: 'GitHub'
        }, {
          icon: Linkedin,
          href: '#',
          label: 'LinkedIn'
        }, {
          icon: Twitter,
          href: '#',
          label: 'Twitter'
        }].map((social, index) => <a key={index} href={social.href} aria-label={social.label} className="p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all hover:scale-110 border border-transparent hover:border-white/10">
              <social.icon className="w-5 h-5" />
            </a>)}
        </motion.div>
      </div>

      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1.2
    }} className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 text-gray-500">
          <span className="text-[10px] uppercase tracking-[0.2em]">
            Scroll to explore
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </motion.div>
    </section>;
}