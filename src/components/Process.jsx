import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Request & Schedule',
    desc: 'Individuals submit a request, upload ID, and pick an appointment time. Automatic confirmations are sent to all participants.',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4"/>
        <path d="M16 2v4"/>
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <path d="M3 10h18"/>
      </svg>
    )
  },
  {
    title: 'Live Video Session',
    desc: 'Join a secure video room. The notary verifies each participant and walks through the agreement.',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="14" rx="2"/>
        <path d="m22 7-4 3v4l4 3V7z"/>
      </svg>
    )
  },
  {
    title: 'eSignature & Audit Trail',
    desc: 'All parties sign digitally. We capture timestamps, IP, device, and a tamper-evident audit trail.',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
      </svg>
    )
  },
  {
    title: 'Notarial Certificate',
    desc: 'The notary seals and issues the certificate. You receive a final, verified document package.',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4-8-10V5l8-3 8 3v7c0 6-8 10-8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    )
  }
]

export default function Process() {
  return (
    <section id="process" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">The eNotary flow</h2>
          <p className="mt-2 text-blue-200/80">From request to certified completion in four simple steps.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition shadow-lg"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 p-3 ring-1 ring-cyan-500/30">
                {s.icon}
              </div>
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
