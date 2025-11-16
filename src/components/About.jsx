export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About</h2>
        </div>
        <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed">
          <p>
            Adley blends product design, strategy, and narrative to bring clarity to complex problems.
            From early research to polished interfaces, the goal is simple: make products people love using.
          </p>
          <p>
            Previously partnered with early‑stage startups and established teams to ship experiences across web and mobile.
            Beyond the pixels: systems thinking, accessibility, and strong collaboration.
          </p>
          <div className="flex gap-3 pt-2">
            <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-sm">Product Design</span>
            <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-sm">UX Strategy</span>
            <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-sm">Prototyping</span>
            <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-sm">Design Systems</span>
          </div>
        </div>
      </div>
    </section>
  )
}
