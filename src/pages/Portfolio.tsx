
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { AfricanMotifBackground } from '../components/AfricanMotifBackground';
import dejesusLogo from '../assets/dejesus.png';
export function Portfolio() {
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return <div className="bg-dark-950 min-h-screen text-white selection:bg-accent-cyan/30 selection:text-white font-sans relative">
      {/* African Pattern Background */}
      {/* African Pattern Background */}
      <AfricanMotifBackground />

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple origin-left z-50" style={{
      scaleX
    }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-6 transition-all duration-300 bg-dark-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-white tracking-tight group">
            <div className="p-1.5 bg-white text-black rounded-lg group-hover:bg-accent-cyan transition-colors">
              <Code2 className="w-5 h-5" />
            </div>
            <span>
              DEJESUS<span className="text-accent-cyan">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['About', 'Projects', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest hover:underline decoration-accent-cyan decoration-2 underline-offset-4">
                {item}
              </a>)}
            <a href="#contact" className="px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all hover:scale-105">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 py-12 bg-dark-900 border-t border-white/5 text-center overflow-hidden">
        {/* Background Logos in Footer */}
        <img src={dejesusLogo} alt="" aria-hidden="true" className="absolute top-4 left-4 w-40 h-40 opacity-20 animate-pulse object-contain pointer-events-none select-none" style={{
        animationDuration: '8s'
      }} />
        <img src={dejesusLogo} alt="" aria-hidden="true" className="absolute bottom-4 right-4 w-48 h-48 opacity-18 animate-pulse object-contain pointer-events-none select-none" style={{
        animationDuration: '9s',
        animationDelay: '1s'
      }} />
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="text-left">
            <h3 className="text-xl font-bold text-white mb-2">Dejesus.</h3>
            <p className="text-gray-500 text-sm">
              Building digital experiences that matter.
            </p>
          </div>

          <div className="text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Developer Portfolio. All rights
              reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>;
}