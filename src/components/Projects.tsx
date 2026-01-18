import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Zap, TrendingUp, Users } from 'lucide-react';
import dejesusLogo from '../assets/dejesus.png';
const projects = [{
  id: 1,
  title: 'Lumina Finance',
  category: 'Fintech Dashboard',
  description: "Plateforme d'analyse financière en temps réel avec visualisation de données avancée, tracking de transactions et insights prédictifs par IA. Architecture microservices avec React, Node.js et PostgreSQL.",
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
  tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
  metrics: {
    performance: '40% plus rapide',
    users: '10K+ utilisateurs',
    uptime: '99.9% uptime'
  },
  links: {
    demo: '#',
    github: '#'
  },
  color: 'from-blue-500 to-cyan-500'
}, {
  id: 2,
  title: 'Aether Architecture',
  category: 'Portfolio 3D',
  description: "Portfolio immersif en 3D pour cabinet d'architecture. Rendu WebGL optimisé, transitions fluides et CMS headless. Performance optimisée avec lazy loading et code splitting pour un score Lighthouse de 95+.",
  image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1600',
  tags: ['Next.js', 'Three.js', 'WebGL', 'GSAP', 'Sanity'],
  metrics: {
    performance: 'Lighthouse 95+',
    load: '< 2s load time',
    seo: 'SEO optimisé'
  },
  links: {
    demo: '#',
    github: '#'
  },
  color: 'from-purple-500 to-pink-500'
}, {
  id: 3,
  title: 'Nexus AI',
  category: 'SaaS Platform',
  description: "Landing page haute conversion pour plateforme d'automatisation IA. Intégration Stripe pour paiements, démos interactives et calculateurs de pricing. Taux de conversion augmenté de 35% grâce à l'optimisation UX.",
  image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600',
  tags: ['React', 'Framer Motion', 'Stripe', 'Supabase'],
  metrics: {
    conversion: '+35% conversion',
    revenue: '$50K+ MRR',
    growth: '200% growth'
  },
  links: {
    demo: '#',
    github: '#'
  },
  color: 'from-emerald-500 to-teal-500'
}, {
  id: 4,
  title: 'Velvet Fashion',
  category: 'E-commerce',
  description: 'Solution e-commerce headless construite pour la vitesse et la scalabilité. Inventaire temps réel, wishlist, checkout optimisé. Architecture JAMstack avec Shopify Plus et React pour des performances exceptionnelles.',
  image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1600',
  tags: ['Shopify Plus', 'Hydrogen', 'React', 'GraphQL'],
  metrics: {
    speed: '60% plus rapide',
    sales: '+45% ventes',
    mobile: '100% mobile'
  },
  links: {
    demo: '#',
    github: '#'
  },
  color: 'from-orange-500 to-red-500'
}];
export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return <section id="projects" className="py-24 md:py-32 bg-dark-900 relative overflow-hidden">
      {/* Background Logos */}
      <img src={dejesusLogo} alt="" aria-hidden="true" className="absolute top-20 left-10 w-72 h-72 opacity-40 animate-pulse object-contain pointer-events-none select-none" style={{
      animationDuration: '6s'
    }} />
      <img src={dejesusLogo} alt="" aria-hidden="true" className="absolute bottom-40 right-16 w-80 h-80 opacity-35 animate-pulse object-contain pointer-events-none select-none" style={{
      animationDuration: '5s',
      animationDelay: '1.5s'
    }} />
      <img src={dejesusLogo} alt="" aria-hidden="true" className="absolute top-1/2 right-1/4 w-96 h-96 opacity-30 animate-pulse object-contain pointer-events-none select-none" style={{
      animationDuration: '7s',
      animationDelay: '0.5s'
    }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <span className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
              Projets Sélectionnés
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-cyan to-accent-purple" />
          </motion.div>

          <motion.p initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
            Une sélection de projets démontrant mon expertise en architecture
            logicielle, performance et expérience utilisateur.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {projects.map((project, index) => <motion.div key={project.id} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} onMouseEnter={() => setHoveredId(project.id)} onMouseLeave={() => setHoveredId(null)} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Project Image */}
              <div className={`lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 shadow-2xl transition-all duration-500 ${hoveredId === project.id ? 'shadow-accent-cyan/20 scale-[1.02]' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 mix-blend-overlay z-10`} />
                <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105" />

                {/* Overlay Actions */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <a href={project.links.demo} className="px-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform shadow-lg">
                    <ExternalLink className="w-4 h-4" /> Démo Live
                  </a>
                  <a href={project.links.github} className="px-6 py-3 bg-dark-900/80 text-white border border-white/20 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform backdrop-blur-md">
                    <Github className="w-4 h-4" /> Code Source
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="lg:col-span-5 relative z-10 lg:-ml-12 pointer-events-none lg:pointer-events-auto">
                <div className="bg-dark-800/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl hover:border-white/20 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-accent-cyan text-xs font-bold tracking-widest uppercase">
                      {project.category}
                    </span>
                    <div className="flex gap-3">
                      <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors" aria-label="Github">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors" aria-label="Live Demo">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-accent-cyan transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-dark-900/50 rounded-lg border border-white/5">
                    <div className="text-center">
                      <Zap className="w-4 h-4 text-accent-cyan mx-auto mb-1" />
                      <p className="text-xs text-gray-400">
                        {project.metrics.performance}
                      </p>
                    </div>
                    <div className="text-center border-x border-white/5">
                      <TrendingUp className="w-4 h-4 text-accent-purple mx-auto mb-1" />
                      <p className="text-xs text-gray-400">
                        {project.metrics.users || project.metrics.conversion || project.metrics.speed}
                      </p>
                    </div>
                    <div className="text-center">
                      <Users className="w-4 h-4 text-pink-500 mx-auto mb-1" />
                      <p className="text-xs text-gray-400">
                        {project.metrics.uptime || project.metrics.seo || project.metrics.mobile}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <span key={tag} className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/5 hover:border-accent-cyan/30 transition-colors">
                        {tag}
                      </span>)}
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>

        <div className="mt-24 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-white border-b border-accent-cyan pb-1 hover:text-accent-cyan transition-colors group">
            Voir tous les projets{' '}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>;
}