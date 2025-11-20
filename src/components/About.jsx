import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About Us</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Prem Agencies is one of the most trusted sanitaryware and plumbing solution providers in Ranchi, Jharkhand. We have been serving customers for years with high‑quality bathroom fittings, kitchen solutions, and water supply products.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We specialize in both retail and wholesale supply, ensuring that homeowners, builders, and contractors find everything they need under one roof. Our mission is to provide durable, stylish, and cost‑effective sanitary solutions for every customer.
          </p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li>• Retail and wholesale supply</li>
            <li>• Bathroom, kitchen, and water supply products</li>
            <li>• Located on Seva Sadan Road, Upper Bazar</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-blue-500/10 blur-2xl rounded-3xl"/>
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            <img src="https://images.unsplash.com/photo-1580023786285-0d8ab0091671?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYW5pdGFyeXdhcmUlMjBzaG93cm9vbXxlbnwwfDB8fHwxNzYzNjMxNDAyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Sanitaryware showroom" className="w-full h-80 object-cover"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
