'use client'

import { motion } from 'framer-motion'
import Button from './Button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-20" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full opacity-20" />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full opacity-20" />
      <div className="absolute bottom-40 right-1/3 w-4 h-4 bg-white rounded-full opacity-20" />
      
      <div className="section-padding relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button href="#ai-playbook" variant="secondary" showArrow={false}>
            Get Free AI Playbook
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative inline-block mb-12"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto border-2 border-gray-800 relative group">
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-5xl font-bold transition-transform duration-300 group-hover:scale-110">
              JN
            </div>
            {/* Add a subtle overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="absolute bottom-0 right-0 text-4xl animate-bounce">👋</span>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4"
          >
            AI automation systems
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-12"
          >
            for growing businesses.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Transform your operations with intelligent automation. 
            Get our proven AI playbook used by 100+ companies to scale efficiently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button href="#ai-playbook" variant="primary" className="text-lg px-8 py-4">
              Get Your Free AI Playbook
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 