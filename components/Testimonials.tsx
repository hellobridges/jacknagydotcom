'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'SARAH CHEN',
    title: 'CEO, TechFlow Solutions',
    content: '"Jack & his team transformed our lead generation process. We&apos;re now booking 5x more qualified meetings with zero manual effort."',
  },
  {
    id: 2,
    name: 'MICHAEL RODRIGUEZ',
    title: 'COO, DataDrive Analytics',
    content: '"The AI systems Jack built cut our operational costs by 40%. Best investment we&apos;ve made in scaling our business."',
  },
  {
    id: 3,
    name: 'EMILY THOMPSON',
    title: 'Founder, Growth Dynamics',
    content: '"Working with Jack was a game-changer. Our sales team now focuses on closing deals while AI handles all the busy work."',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-spacing bg-secondary/20">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                REVIEWS
              </h2>
            </motion.div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentIndex].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="card"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xl">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wider">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonials[currentIndex].title}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg md:text-xl font-medium leading-relaxed">
                    {testimonials[currentIndex].content}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`text-sm font-medium px-2 py-1 transition-colors duration-200 ${
                        index === currentIndex ? 'text-white' : 'text-gray-500'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 