'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

export default function AIPlaybookCTA() {
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
    <section id="ai-playbook" className="section-spacing bg-gradient-to-br from-blue-900/20 to-secondary/20">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get Your Free AI Automation Playbook
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              The exact framework we use to implement AI systems that save 200+ hours monthly
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card max-w-2xl mx-auto"
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">What&apos;s Inside:</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>✓ 10-step AI implementation framework</li>
                    <li>✓ ROI calculator for automation projects</li>
                    <li>✓ Tool recommendations & comparisons</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">You&apos;ll Learn:</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>✓ How to identify automation opportunities</li>
                    <li>✓ Cost-benefit analysis templates</li>
                    <li>✓ Implementation timelines & roadmaps</li>
                  </ul>
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-200"
                  />
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => {}}
                  >
                    {isSubmitting ? 'Sending...' : 'Get Instant Access'}
                  </Button>
                  <p className="text-sm text-gray-500">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-8 text-center"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold mb-2">Check Your Email!</h3>
                  <p className="text-gray-400">
                    Your AI Automation Playbook is on its way to your inbox.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-gray-400">Companies Using Our Playbook</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">$2.5M</div>
              <div className="text-sm text-gray-400">Saved in Operational Costs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">200hrs</div>
              <div className="text-sm text-gray-400">Average Monthly Time Saved</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 