import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiTag } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Filter state
  const [activeFilter, setActiveFilter] = useState('all')

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'Tela Login',
      description: 'Tela de login com opção de cadastro, desenvolvida com HTML e CSS para estrutura e estilização, e JavaScript para simular a lógica de back-end, validando credenciais e armazenando dados localmente.',
      image: '/img/public/proj-login.png',
      tags: ['HTML', 'CSS', 'Javascript', 'MySQL'],
      category: 'web', 
      github: 'https://github.com/GustavoSousaa/Projeto-Login',
    },
    {
      id: 2,
      title: 'Cadastro-Corretores',
      description: 'Sistema de cadastro de corretores desenvolvido com PHP e MySQL para armazenamento de dados, utilizando JavaScript para validações em tempo real e uma interface responsiva com HTML e CSS.',
      image: '/img/proj-corretores.png',
      tags: ['HTML','PHP','CSS','JavaScript', 'MySQL'],
      category: 'web',
      github: 'https://github.com/GustavoSousaa/Cadastro-Corretores',
      demo: '#',
    },
    {
      id: 3,
      title: 'Jogo De Dados',
      description: 'Jogo de dados interativo desenvolvido com HTML, CSS e JavaScript, onde dois jogadores lançam dados virtualmente e o sistema determina o vencedor com base no maior valor.',
      image: '/img/proj-jogodedados.png',
      tags: ['HTML', 'CSS', 'Javascript'],
      category: 'web', 
      github: 'https://github.com/GustavoSousaa/Projeto-Jogo-Dados',
      demo: '#',
    },
    {
      id: 4,
      title: 'Projeto Pokedex',
      description: 'Aplicação Pokédex desenvolvida com React e TypeScript, apresentando um design responsivo e moderno, que permite visualizar informações detalhadas de diversos pokémons consumindo dados de uma API.',
      image: '/img/proj-pokemon.png',
      tags: ['React.js', 'UI/UX', 'Typescript'],
      category: 'design',
      github: 'https://github.com/GustavoSousaa/Projeto-Pokedex',
      demo: '#',
    },
    {
      id: 5,
      title: 'Projeto Calculadora',
      description: 'Calculadora simples desenvolvida em Python, capaz de realizar operações básicas como adição, subtração, multiplicação e divisão, com interface interativa no terminal.',
      image: '/img/proj-calculadora.png',
      tags: ['Python', 'API Integration'],
      category: 'web',
      github: 'https://github.com/GustavoSousaa/AppCalculadora',
      demo: '#',
    },

    {
      id: 6,
      title: 'Projeto Pagina de Eventos',
      description: 'Aplicação para criação de eventos desenvolvida com React, permitindo ao usuário cadastrar novos eventos com título, data, local e descrição, tudo em uma interface prática e responsiva.',
      image: '/img/proj-eventos.png',
      tags: ['React', 'API Integration', 'Data/hora'],
      category: 'web',
      github: 'https://github.com/GustavoSousaa/--Projeto-React-Eventos',
      demo: '#',
    },
    
  ]
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  // Filter options
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web Apps', value: 'web' },
    { name: 'Design', value: 'design' },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  }

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Meus Projetos</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-secondary-700 dark:text-secondary-300">
          Aqui está uns exemplos dos meus trabalhos recentes em desenvolvimento web, 
          design de UI/UX. Cada projeto traz desafios e oportunidades de criar soluções únicas.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter.value
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700'
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="bg-white dark:bg-secondary-800 rounded-lg overflow-hidden shadow-lg border border-secondary-200 dark:border-secondary-700 transition-transform hover:translate-y-[-8px]"
              variants={itemVariants}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-secondary-100 dark:bg-secondary-700 text-secondary-800 dark:text-secondary-300"
                    >
                      <FiTag className="mr-1 w-3 h-3" /> {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400"
                  >
                    <FiGithub className="mr-2" /> Source
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show message if no projects match the filter */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xl text-secondary-600 dark:text-secondary-400">
              No projects found for this category. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects