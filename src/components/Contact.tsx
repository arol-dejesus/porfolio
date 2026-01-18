import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Upload, CheckCircle, ArrowRight, MessageSquare, Briefcase } from 'lucide-react';
import dejesusLogo from '../assets/dejesus.png';
type Tab = 'contact' | 'project';
export function Contact() {
  const [activeTab, setActiveTab] = useState<Tab>('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };
  return <section id="contact" className="py-24 md:py-32 bg-dark-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      {/* Background Logos */}
      <img src={dejesusLogo} alt="" aria-hidden="true" className="absolute top-10 left-10 w-72 h-72 opacity-35 animate-pulse object-contain pointer-events-none select-none" style={{
      animationDuration: '6s'
    }} />
      <img src={dejesusLogo} alt="" aria-hidden="true" className="absolute bottom-10 right-10 w-80 h-80 opacity-30 animate-pulse object-contain pointer-events-none select-none" style={{
      animationDuration: '7s',
      animationDelay: '1s'
    }} />
      <img src={dejesusLogo} alt="" aria-hidden="true" className="absolute top-1/3 right-1/3 w-64 h-64 opacity-25 animate-pulse object-contain pointer-events-none select-none" style={{
      animationDuration: '5s',
      animationDelay: '2s'
    }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Contact Info - 2 Columns */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <span className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-4 block">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Let's build something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
                  extraordinary.
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                I'm currently available for freelance projects and open to new
                opportunities.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-dark-800 rounded-lg border border-white/10 group-hover:border-accent-cyan/50 transition-colors">
                  <Mail className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <a href="mailto:hello@developer.com" className="text-gray-400 hover:text-white transition-colors">
                    hello@developer.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-dark-800 rounded-lg border border-white/10 group-hover:border-accent-purple/50 transition-colors">
                  <Phone className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">
                    Schedule a Call
                  </h3>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Book a 15-min intro
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-dark-800 rounded-lg border border-white/10 group-hover:border-pink-500/50 transition-colors">
                  <MapPin className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Location</h3>
                  <p className="text-gray-400">Remote / New York, NY</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Section - 3 Columns */}
          <div className="lg:col-span-3">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="bg-dark-900 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
              {/* Tabs */}
              <div className="flex border-b border-white/5">
                <button onClick={() => setActiveTab('contact')} className={`flex-1 py-6 text-sm font-medium tracking-wide uppercase transition-all relative ${activeTab === 'contact' ? 'text-white bg-white/5' : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]'}`}>
                  <div className="flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Say Hello
                  </div>
                  {activeTab === 'contact' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-cyan" />}
                </button>
                <button onClick={() => setActiveTab('project')} className={`flex-1 py-6 text-sm font-medium tracking-wide uppercase transition-all relative ${activeTab === 'project' ? 'text-white bg-white/5' : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]'}`}>
                  <div className="flex items-center justify-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Start a Project
                  </div>
                  {activeTab === 'project' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-purple" />}
                </button>
              </div>

              {/* Form Content */}
              <div className="p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {activeTab === 'contact' ? <motion.form key="contact" initial={{
                  opacity: 0,
                  x: -20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} exit={{
                  opacity: 0,
                  x: 20
                }} transition={{
                  duration: 0.3
                }} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Name
                          </label>
                          <input type="text" id="name" required className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all placeholder:text-gray-700" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Email
                          </label>
                          <input type="email" id="email" required className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all placeholder:text-gray-700" placeholder="john@example.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Message
                        </label>
                        <textarea id="message" rows={5} required className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all placeholder:text-gray-700 resize-none" placeholder="How can I help you?" />
                      </div>
                      <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-white text-dark-950 font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                        {isSubmitting ? <span className="animate-pulse">Sending...</span> : isSuccess ? <>
                            Sent Successfully{' '}
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          </> : <>
                            Send Message <Send className="w-4 h-4" />
                          </>}
                      </button>
                    </motion.form> : <motion.form key="project" initial={{
                  opacity: 0,
                  x: 20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} exit={{
                  opacity: 0,
                  x: -20
                }} transition={{
                  duration: 0.3
                }} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="p-name" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Name
                          </label>
                          <input type="text" id="p-name" required className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all placeholder:text-gray-700" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="p-email" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Email
                          </label>
                          <input type="email" id="p-email" required className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all placeholder:text-gray-700" placeholder="john@company.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="type" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Project Type
                          </label>
                          <select id="type" className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all">
                            <option>Web Application</option>
                            <option>E-commerce</option>
                            <option>Marketing Site</option>
                            <option>Mobile App</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="budget" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Budget Range
                          </label>
                          <select id="budget" className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all">
                            <option>$1k - $5k</option>
                            <option>$5k - $10k</option>
                            <option>$10k - $25k</option>
                            <option>$25k+</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="p-desc" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Project Details
                        </label>
                        <textarea id="p-desc" rows={4} required className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all placeholder:text-gray-700 resize-none" placeholder="Tell me about your goals, timeline, and requirements..." />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Project Brief (Optional)
                        </label>
                        <div className="border-2 border-dashed border-white/10 rounded-lg p-6 text-center hover:border-accent-purple/50 transition-colors cursor-pointer bg-dark-950/50">
                          <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-400">
                            Drag and drop or click to upload
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            PDF, DOCX, or TXT up to 10MB
                          </p>
                        </div>
                      </div>

                      <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-accent-purple to-pink-600 text-white font-bold rounded-lg shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                        {isSubmitting ? <span className="animate-pulse">Submitting...</span> : isSuccess ? <>
                            Request Sent <CheckCircle className="w-5 h-5" />
                          </> : <>
                            Submit Request <ArrowRight className="w-4 h-4" />
                          </>}
                      </button>
                    </motion.form>}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
}