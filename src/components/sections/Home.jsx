import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-secondary-50 via-secondary-50/50 to-primary-50/30 dark:from-secondary-900 dark:via-secondary-900/50 dark:to-primary-900/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="inline-block text-primary-500 font-medium mb-4 tracking-wider">
              DESENVOLVEDOR FRONT-END 
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transformando ideias em
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-transparent bg-clip-text"> experiências digitais</span>
            </h1>
            <p className="text-lg text-secondary-700 dark:text-secondary-300 mb-10 max-w-xl">
              Especializado em criar interfaces modernas e intuitivas que encantam usuários
              e elevam marcas através do poder do design e da tecnologia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn btn-primary group">
                Ver Projetos
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Fale Comigo
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-secondary-200/50 dark:border-secondary-700/50 transform hover:scale-[1.02] transition-transform duration-300 group">
              <img
                src="/img/img.png"
                alt="Setup moderno com iluminação neon"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 mix-blend-overlay"></div>
              {/* Efeito de brilho nos cantos */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
            {/* Efeitos decorativos animados */}
            <div className="absolute top-8 -right-8 w-72 h-72 bg-accent-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            {/* Partículas decorativas */}
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary-500 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent-500 rounded-full animate-ping animation-delay-500"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home