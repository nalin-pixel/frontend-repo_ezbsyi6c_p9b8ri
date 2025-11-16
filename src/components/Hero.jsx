import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Adley Kinsman
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-gray-600"
            >
              Product designer and storyteller crafting polished, human-first digital experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#projects" className="px-5 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">See Work</a>
              <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white border border-gray-300 hover:border-gray-400 text-gray-800 transition">Get in Touch</a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="h-72 md:h-[28rem] bg-white/70 backdrop-blur rounded-2xl shadow-xl border border-white overflow-hidden flex items-center justify-center"
          >
            <div className="w-full h-full bg-gradient-to-tr from-indigo-100 via-white to-pink-100" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
