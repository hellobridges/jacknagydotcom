'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'Popular Mechanics', text: 'POPULAR MECHANICS' },
  { name: 'Yahoo Finance', text: 'YAHOO FINANCE' },
  { name: 'Digital Journal', text: 'DIGITAL JOURNAL' },
  { name: 'Associated Press', text: 'AP' },
  { name: 'Bloomberg', text: 'BLOOMBERG' },
]

export default function LogosSection() {
  return (
    <section className="py-16 md:py-20 pb-4 md:pb-8">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 hover:text-gray-200 transition-colors duration-200 border border-gray-700 rounded-md px-4 py-3 bg-gray-900/30 backdrop-blur-sm"
            >
              <span className="text-sm md:text-base font-bold tracking-wider">
                {logo.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 