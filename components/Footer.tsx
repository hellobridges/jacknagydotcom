import Link from 'next/link'

export default function Footer() {
  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#services', label: 'Services' },
    { href: '#ai-playbook', label: 'AI Playbook' },
  ]

  const socialLinks = [
    { href: 'https://linkedin.com/in/jacknagy', label: 'LinkedIn' },
    { href: 'https://twitter.com/jacknagy', label: 'Twitter' },
  ]

  return (
    <footer className="section-spacing border-t border-gray-800">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">JACK NAGY</h3>
              <p className="text-gray-400">
                AI automation systems for growing businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Navigation</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Connect</h4>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Jack Nagy. All rights reserved. 
              Built with AI-powered automation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 