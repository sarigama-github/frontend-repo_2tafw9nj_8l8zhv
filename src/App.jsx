import React from 'react'
import Hero from './components/Hero'
import Process from './components/Process'
import Roles from './components/Roles'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center text-xl">✦</div>
            <span className="font-semibold tracking-tight">HoloNotary</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#roles" className="hover:text-white">Roles</a>
          </nav>
          <a href="#roles" className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15">Sign in</a>
        </div>
      </header>

      <main>
        <Hero />
        <Process />
        <Roles />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} HoloNotary. All rights reserved.
      </footer>
    </div>
  )
}

export default App
