import Link from 'next/link'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              S. Nikhil
            </h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer | AI Engineer | Startup Founder
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'Projects', href: '#projects' },
                { label: 'Experience', href: '#experience' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-3">
              {[
                {
                  icon: Github,
                  href: 'https://github.com',
                  label: 'GitHub',
                },
                {
                  icon: Linkedin,
                  href: 'https://linkedin.com/in/s-nikhil03',
                  label: 'LinkedIn',
                },
                {
                  icon: Mail,
                  href: 'mailto:nikhil24112003@gmail.com',
                  label: 'Email',
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary rounded-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  title={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {currentYear} S. Nikhil. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <a href="#top" className="hover:text-foreground transition-colors flex items-center gap-2">
              Back to top <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
