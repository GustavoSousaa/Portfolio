import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiTool } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      category: 'Desenvolvimento Front-end',
      icon: <FiCode className="w-6 h-6 text-primary-500" />,
      items: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 'SASS']
    },
    {
      category: 'UI/UX Design',
      icon: <FiLayout className="w-6 h-6 text-accent-500" />,
      items: ['Figma', 'Canvas', 'Prototipagem', 'Pesquisa de Usuário', 'Wireframing']
    },
    {
      category: 'Ferramentas',
      icon: <FiTool className="w-6 h-6 text-warning-500" />,
      items: ['Git', 'GitHub', 'VS Code', 'Supabase', 'Vercel']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="about" className="section bg-gradient-to-b from-secondary-50/50 to-secondary-100/50 dark:from-secondary-800/20 dark:to-secondary-900/20" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Sobre Mim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-secondary-700 dark:text-secondary-300">
            Meu nome é Gustavo Teixeira, tenho 22 anos
            Sou um desenvolvedor front-end e designer apaixonado por criar experiências digitais
            únicas e memoráveis, combinando código limpo com design intuitivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-6">Minha História</h3>
            <div className="space-y-4 text-secondary-700 dark:text-secondary-300">
              <p>
                Com vasta experiência em desenvolvimento front-end e design de interfaces,
                tenho trabalhado em diversos projetos desafiadores que me permitiram aperfeiçoar minhas
                habilidades e desenvolver um olhar crítico para detalhes.
              </p>
              <p>
                Minha abordagem combina princípios modernos de design com as melhores práticas de
                desenvolvimento, criando interfaces que não só são bonitas, mas também funcionais e
                acessíveis para todos os usuários.
              </p>
              <p>
                Estou sempre em busca de novos desafios e oportunidades para criar experiências
                digitais inovadoras que façam a diferença na vida das pessoas.
              </p>
            </div>
            <a 
              href="/extras/curriculo gustavo teixeira sousa.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-8 inline-flex items-center group hover:scale-105 transform transition-all duration-300"
              download="curriculo.pdf"
            >
              Ver Currículo
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-secondary-200/50 dark:border-secondary-700/50 transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src="/img/front.png"
                alt="Retrato profissional"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary-500/20 rounded-full filter blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-500/20 rounded-full filter blur-2xl"></div>
          </motion.div>
        </div>

        <motion.h3 
          className="text-2xl text-center mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Minhas Habilidades
        </motion.h3>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="glass rounded-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-secondary-100/50 dark:bg-secondary-800/50 mr-4">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold">{skill.category}</h4>
              </div>
              <ul className="space-y-3">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-secondary-700 dark:text-secondary-300 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary-500/50 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About