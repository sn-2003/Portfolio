'use client'

import React from "react"

import { useState } from "react"

import { Mail, Linkedin, Github, Phone } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nikhil24112003@gmail.com',
      href: 'mailto:nikhil24112003@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-7999121826',
      href: 'tel:+917999121826',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'S. Nikhil',
      href: 'https://linkedin.com/in/s-nikhil03',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/snikhil',
      href: 'https://github.com',
    },
  ]

  return (
    <section id="contact" className="relative py-20 px-6 min-h-screen flex items-center" ref={ref}>
      <div className={`max-w-4xl mx-auto w-full ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let's work together to build something amazing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Feel free to reach out through any of these channels. I'm always open to discussing new projects,
              creative ideas, or opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contacts.map((contact) => {
              const Icon = contact.icon
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-muted-foreground mb-1">{contact.label}</div>
                    <div className="text-foreground group-hover:text-primary transition-colors font-medium">{contact.value}</div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6">Follow my work</p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/snikhil' },
                { icon: Linkedin, href: 'https://linkedin.com/in/s-nikhil03' },
                { icon: Mail, href: 'mailto:nikhil24112003@gmail.com' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
