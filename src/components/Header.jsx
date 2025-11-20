import React from 'react'

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(1000px_600px_at_80%_-10%,rgba(59,130,246,0.6),transparent),radial-gradient(800px_500px_at_10%_120%,rgba(14,165,233,0.4),transparent)]" />
      <div className="relative">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center font-bold">PA</div>
            <span className="text-lg font-semibold tracking-wide">Prem Agencies</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-blue-100/90">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#products" className="hover:text-white transition">Products</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </nav>
        <section className="max-w-7xl mx-auto px-6 pt-10 pb-16 sm:pt-16 sm:pb-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Prem Agencies – Ranchi
              </h1>
              <p className="mt-4 text-blue-100/90 text-lg">
                Trusted sanitaryware and plumbing solution provider on Seva Sadan Road, Upper Bazar, Ranchi.
              </p>
              <ul className="mt-6 text-blue-100/80 space-y-2 text-sm">
                <li>• Retail and wholesale supply under one roof</li>
                <li>• High-quality bathroom fittings, kitchen solutions, and water supply products</li>
                <li>• Durable, stylish, and cost‑effective solutions</li>
              </ul>
              <div className="mt-8 flex gap-3">
                <a href="#products" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition shadow-lg shadow-blue-500/20">
                  Explore Products
                </a>
                <a href="#contact" className="px-5 py-3 rounded-lg border border-blue-300/30 hover:border-blue-200/60">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="md:justify-self-end">
              <div className="relative">
                <div className="absolute -inset-6 rounded-2xl bg-blue-500/10 blur-2xl" />
                <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 max-w-md">
                  <h3 className="text-xl font-semibold">Timings</h3>
                  <p className="mt-2 text-blue-100/80 text-sm">Mon – Sat: 10:00 AM – 8:00 PM</p>
                  <p className="text-blue-100/80 text-sm">Sun: 10:00 AM – 2:00 PM</p>
                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <h3 className="mt-4 text-xl font-semibold">Location</h3>
                  <p className="mt-2 text-blue-100/80 text-sm">Seva Sadan Road, Upper Bazar, Ranchi – 834001, Jharkhand</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header
