import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-12 text-center shadow-2xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_45%)]" />
          <h3 className="relative text-2xl sm:text-3xl font-bold text-white">Ready to modernize your notarizations?</h3>
          <p className="relative mt-2 text-blue-200/85 max-w-2xl mx-auto">Launch faster with our secure, compliant eNotary platform. Designed for remote signings, airtight verification, and a seamless experience.</p>
          <div className="relative mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#roles" className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-5 py-3 text-white font-medium shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition">Get Started</a>
            <a href="#process" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90 backdrop-blur hover:bg-white/10 transition">See the flow</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
