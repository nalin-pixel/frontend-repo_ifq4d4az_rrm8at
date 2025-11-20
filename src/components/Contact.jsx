import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact Us</h2>
            <p className="mt-3 text-slate-600">We’re here to help with product queries, quotes, and bulk orders.</p>
            <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <p className="text-slate-800 font-semibold">Prem Agencies</p>
              <p className="text-slate-700 mt-2">Seva Sadan Road, Upper Bazar, Ranchi – 834001, Jharkhand</p>
              <div className="mt-4 text-slate-700 space-y-1">
                <p>Phone: +91-651-2200317</p>
                <p>Mr. Harsh Khandelwal: 9934145108</p>
                <p>Mr. Naveen Khandelwal: +91 98353 20496</p>
                <p>Timings: Mon–Sat 10:00 AM – 8:00 PM | Sun 10:00 AM – 2:00 PM</p>
                <p>Email: add@yourbusiness.email</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-slate-900 text-white rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(600px_300px_at_10%_-10%,rgba(59,130,246,0.35),transparent),radial-gradient(600px_300px_at_90%_120%,rgba(14,165,233,0.25),transparent)]"/>
              <div className="relative">
                <h3 className="text-xl font-semibold">Quick Enquiry</h3>
                <p className="text-blue-100/80 mt-1">Call us for stock availability, pricing, or custom orders.</p>
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  <a href="tel:+916512200317" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 transition">+91-651-2200317</a>
                  <a href="tel:+919934145108" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 transition">Harsh: 9934145108</a>
                  <a href="tel:+919835320496" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 transition">Naveen: 98353 20496</a>
                  <a href="mailto:add@yourbusiness.email" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 transition">Email Us</a>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <iframe
                title="Prem Agencies Location"
                className="w-full h-64 rounded-2xl border"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Seva%20Sadan%20Road%2C%20Upper%20Bazar%2C%20Ranchi%20834001&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
