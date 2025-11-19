import React from 'react'
import { motion } from 'framer-motion'

const roles = [
  {
    name: 'Individual',
    accent: 'from-cyan-500 to-blue-500',
    points: [
      'Create a request and upload your ID',
      'Pick a time that works for you',
      'Join a secure video session',
      'Sign digitally and receive your certificate'
    ],
  },
  {
    name: 'Notary',
    accent: 'from-violet-500 to-fuchsia-500',
    points: [
      'Verify participants and documents',
      'Host/record the live session',
      'Guide eSignatures and notarization',
      'Issue the final notarial certificate'
    ],
  }
]

export default function Roles() {
  return (
    <section id="roles" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Two roles. Clear responsibilities.</h2>
          <p className="mt-2 text-blue-200/80">Designed to make online notarization simple and compliant for everyone.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((r, idx) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur group"
            >
              <div className={`absolute inset-x-0 -top-24 h-48 bg-gradient-to-r ${r.accent} opacity-30 blur-3xl pointer-events-none`} />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-white text-2xl font-semibold">{r.name}</h3>
                <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center text-white/90">
                  {idx === 0 ? '👤' : '🛡️'}
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {r.points.map(p => (
                  <li key={p} className="flex items-start gap-2 text-blue-200/80">
                    <span className="mt-1.5 size-1.5 rounded-full bg-white/50" />
                    <span className="text-sm">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition">
                  {idx === 0 ? 'Start a request' : 'Open dashboard'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
