import React from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub className="w-5 h-5" />, href: 'https://github.com/GustavoSousaa' },
    { name: 'LinkedIn', icon: <FiLinkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/gustavoteixeiraa/' },
    { name: 'Email', icon: <FiMail className="w-5 h-5" />, href: 'gustavosousa4@outlook.com.br' },
  ]

  return (
    <footer className="bg-secondary-50 dark:bg-secondary-900 py-12 mt-16">
      <div className="container">
        <div className="flex flex-col items-center">
          <motion.div 
            className="flex space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-primary-500 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          <motion.div
            className="text-center text-secondary-600 dark:text-secondary-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="mb-2">&copy; {currentYear} My Portfolio. All rights reserved.</p>
            <p className="mb-0">Designed and built with care.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer