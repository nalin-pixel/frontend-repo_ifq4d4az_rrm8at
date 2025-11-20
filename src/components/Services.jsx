import React from 'react'

const Services = () => {
  const services = [
    'Wide range of sanitaryware & plumbing products',
    'Wholesale and retail supply for builders and individuals',
    'Reliable after-sales support',
    'Custom orders for special fittings and mirrors',
    'Delivery support in Ranchi'
  ]
  return (
    <section id="services" className="py-16 bg-slate-900 text-white relative">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(700px_300px_at_10%_-10%,rgba(59,130,246,0.35),transparent),radial-gradient(700px_300px_at_90%_120%,rgba(14,165,233,0.25),transparent)]"/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">Services</h2>
          <p className="mt-3 text-blue-100/80">Committed to quality with customer‑first service.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="h-10 w-10 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center font-semibold text-blue-200 mb-4">{idx+1}</div>
              <p className="text-blue-50/90">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
