'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Lead Generation',
    items: [
      'AI Cold Email Systems',
      'Application Systems',
      'Content Systems',
    ],
  },
  {
    title: 'Project Management',
    items: [
      'AI Automated Fulfillment',
      'AI Onboarding Systems',
      'PM Systems',
    ],
  },
  {
    title: 'Hiring Systems',
    items: [
      'Intake Systems',
      'AI Scoring Systems',
      'Trial Systems',
    ],
  },
  {
    title: 'Sales Administration',
    items: [
      'Customized CRMs',
      'AI Asset Generators',
      'AI Nurture Systems',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-spacing">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              WHAT YOU GET
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:border-gray-700 transition-all duration-200"
              >
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 