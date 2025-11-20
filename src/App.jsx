import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Products from './components/Products'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <About />
      <Products />
      <Services />
      <Contact />
      <footer className="bg-slate-900 text-blue-100/80">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Prem Agencies, Ranchi. All rights reserved.</p>
          <p className="text-sm">Trusted dealer of CERA, Nirali, Paras, Supreme and more.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
