import { useEffect, useState } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/projects`)
        if (res.ok) {
          const data = await res.json()
          setProjects(data)
        }
      } catch (e) {
        // fail silently to keep UI working even if backend is not connected
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Selected Work</h2>
          <p className="text-gray-600 mt-1">A few projects that reflect craft and clarity.</p>
        </div>
      </div>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <div className="sm:col-span-2 lg:col-span-3 text-gray-500">
              No projects yet. Add some via the API to see them here.
            </div>
          ) : (
            projects.map((p, i) => (
              <article key={i} className="group rounded-xl border bg-white shadow-sm hover:shadow-md transition overflow-hidden">
                {p.image && (
                  <div className="h-40 bg-gray-100">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-gray-700">{p.title}</h3>
                  <p className="text-gray-600 mt-1 text-sm">{p.description}</p>
                  {p.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{t}</span>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex gap-3">
                    {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">Live</a>}
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm text-gray-600 hover:underline">Code</a>}
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      )}
    </section>
  )
}
