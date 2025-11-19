import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden flex items-center justify-center" id="home">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      {/* Decorative aurora gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.30),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-16 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25),transparent_60%)] blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200 backdrop-blur">
              <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
              Secure eNotary SaaS
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Notarize from anywhere, securely and legally
            </h1>
            <p className="mt-4 text-blue-200/90 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Two roles, one smooth flow. Individuals request and sign. Notaries verify, witness by video, and issue certificates — all in one place.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <a href="#process" className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-white font-medium shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400">
                See how it works
                <svg className="size-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="#roles" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90 backdrop-blur transition hover:bg-white/10">
                I’m a Notary
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3D Spline Scene */}
        <motion.div
          className="relative h-[420px] sm:h-[520px] w-full"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden">
            <Spline
              scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
