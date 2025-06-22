'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-20" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full opacity-20" />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full opacity-20" />
      <div className="absolute bottom-40 right-1/3 w-4 h-4 bg-white rounded-full opacity-20" />
      
      <div className="section-padding relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Profile section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-gray-800 relative group">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-2xl md:text-3xl font-bold transition-transform duration-300 group-hover:scale-110">
                    JN
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="text-3xl animate-bounce">👋</span>
              </motion.div>

              {/* Main Headlines */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
                >
                  AI automation systems
                </motion.h1>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8"
                >
                  for growing businesses.
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg md:text-xl text-gray-400 leading-relaxed"
              >
                Transform your operations with intelligent automation. 
                Get our proven AI playbook used by 100+ companies to scale efficiently.
              </motion.p>

              {/* Email + CTA Button Combo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="pt-2"
              >
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-1 px-4 py-3 bg-background/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 backdrop-blur-sm text-white placeholder-gray-400"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 backdrop-blur-sm border border-primary/30 hover:border-primary/50 shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Get Your Free AI Playbook
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-lg">✓</span>
                      </div>
                      <p className="text-white font-medium">
                        Check your email for your AI Playbook!
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-sm lg:max-w-md">
                {/* Glassmorphism frame */}
                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-gray-700/50 bg-gray-900/30 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900/40 to-gray-800/60 flex items-center justify-center">
                    {/* Placeholder content */}
                    <div className="text-center space-y-4 px-8">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">AI</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-600/50 rounded-full w-full"></div>
                        <div className="h-3 bg-gray-600/50 rounded-full w-3/4 mx-auto"></div>
                        <div className="h-3 bg-gray-600/50 rounded-full w-1/2 mx-auto"></div>
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        Automation Dashboard
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/10 rounded-full backdrop-blur-sm border border-purple-400/20 animate-pulse delay-700"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
} 