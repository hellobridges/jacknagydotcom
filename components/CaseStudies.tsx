'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: '$15K/MO TO $180K/MO WITH AI LEAD GENERATION',
    description: 'Implemented automated cold email systems with AI personalization for a B2B SaaS company.',
  },
  {
    id: 2,
    title: '85% REDUCTION IN MANUAL DATA ENTRY',
    description: 'Built intelligent document processing system for a financial services firm.',
  },
  {
    id: 3,
    title: '3X SALES PIPELINE VELOCITY WITH AUTOMATION',
    description: 'Designed AI-powered CRM workflows for a consulting agency.',
  },
  {
    id: 4,
    title: '200+ HOURS SAVED MONTHLY ON PROJECT MANAGEMENT',
    description: 'Created automated project tracking and reporting systems.',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="pt-4 md:pt-8 pb-16 md:pb-24 lg:pb-32">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
              JACK & HIS TEAM HAVE helped generate millions for businesses LIKE YOURS WITH AUTOMATION AND AI.
            </h2>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-lg font-semibold text-gray-400 uppercase tracking-wider">
              THINGS WE&apos;VE DONE
            </h3>
          </motion.div>

          <div className="space-y-0">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="border-t border-gray-800 py-8 group cursor-pointer hover:bg-gray-900/20 transition-colors duration-200 -mx-4 px-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-6">
                      <span className="text-4xl font-bold text-gray-600">
                        {study.id}
                      </span>
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                          {study.title}
                        </h4>
                        <p className="text-gray-400">
                          {study.description}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-gray-600 group-hover:text-primary transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 