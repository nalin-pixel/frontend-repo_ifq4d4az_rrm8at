import React from 'react'

const Section = ({ title, items }) => (
  <div className="bg-white/60 backdrop-blur border border-slate-200 rounded-2xl p-6">
    <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
    <ul className="mt-3 text-slate-700 leading-relaxed">
      {items.map((it, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  </div>
)

const Products = () => {
  return (
    <section id="products" className="relative py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_300px_at_20%_-10%,rgba(59,130,246,0.12),transparent),radial-gradient(600px_250px_at_90%_120%,rgba(2,132,199,0.08),transparent)]"/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Products & Brands</h2>
          <p className="mt-3 text-slate-600">Top brands with reliable quality and competitive pricing.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Section title="Sanitary Ware" items={[
            'CERA','EUROQO','Aquacera','Midas','Imported Sanitary Wares'
          ]} />

          <Section title="CP Fittings" items={[
            'XEN','CERA'
          ]} />

          <Section title="Kitchen Sinks" items={[
            'NIRALI','Sairex','Customized Mirrors (As per demand)'
          ]} />

          <Section title="CP Accessories" items={[
            'Premco','Xen'
          ]} />

          <Section title="Pipes & Fittings – PVC" items={[
            'PVC Pipe & Fittings','Paras','Supreme'
          ]} />

          <Section title="Pipes & Fittings – GI & M.S." items={[
            'Bansal','Jindal','Tata'
          ]} />

          <Section title="Gunmetal Fittings" items={[
            'Alto','Afsi','NVR'
          ]} />

          <Section title="Water / Panel / Storage Tanks" items={[
            'Sintex','Supreme','Stron','Sovisy'
          ]} />

          <Section title="Fancy Accessories" items={[
            'Vanities','Mirrors','Hand Dryer','Soap Dispensers','Tissue Paper Dispensers','Grab Bars'
          ]} />

          <Section title="Bathtubs" items={[
            'CERA','Wovengold'
          ]} />

          <Section title="Construction" items={[
            'FRP Covers (Dhudhi)'
          ]} />

          <Section title="Wooden Flooring" items={[
            'Unique Flooring'
          ]} />
        </div>
      </div>
    </section>
  )
}

export default Products
