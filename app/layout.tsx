import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Jack Nagy - AI Automation Consultant',
  description: 'AI automation systems for growing businesses. Expert in lead generation, project management, and sales automation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-inter-tight antialiased">
        <Navigation />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
} 