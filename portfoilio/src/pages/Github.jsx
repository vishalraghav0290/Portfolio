import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GITHUB_USER = 'vishalraghav0290'

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { 
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } catch {
    return iso
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { y: -4, transition: { duration: 0.2 } }
}

function RepoCard({ repo, onLoadCommit, isDark }) {
  const baseClasses = `p-4 rounded-lg border transition-all duration-200 ${
    isDark 
      ? 'bg-slate-800 border-slate-700 hover:border-slate-600' 
      : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'
  }`

  const textClass = isDark ? 'text-white' : 'text-gray-900'
  const mutedText = isDark ? 'text-slate-400' : 'text-gray-600'
  const buttonClass = isDark 
    ? 'bg-blue-600 hover:bg-blue-700 text-white'
    : 'bg-blue-50 hover:bg-blue-100 text-blue-700'

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={baseClasses}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noreferrer" 
            className={`text-lg font-medium hover:underline ${textClass}`}
          >
            {repo.name}
          </a>
          <p className={`text-sm mt-1 ${mutedText}`}>
            {repo.description || 'No description'}
          </p>
        </div>
        <div className={`text-right ${mutedText} text-xs`}>
          <div>{repo.language || '—'}</div>
          <div className="mt-1">★ {repo.stargazers_count}</div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <div className={mutedText}>
          Updated {formatDate(repo.updated_at)}
        </div>
        <button
          onClick={() => onLoadCommit(repo)}
          className={`px-3 py-1 rounded-md ${buttonClass}`}
        >
          Latest commit
        </button>
      </div>

      {repo._latestCommit && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mt-3 p-3 rounded-md text-sm ${
            isDark ? 'bg-slate-900' : 'bg-gray-50'
          }`}
        >
          <div className={textClass}>{repo._latestCommit.message}</div>
          <div className={`text-xs mt-1 ${mutedText}`}>
            {repo._latestCommit.author} • {formatDate(repo._latestCommit.date)}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function Github({ onNavigate }) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [isDark, setIsDark] = useState(true)
  const [sort, setSort] = useState('updated')

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)

    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=${sort}`)
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub API: ${r.status}`)
        return r.json()
      })
      .then((data) => {
        if (!mounted) return
        setRepos(data.filter(r => !r.fork)) // Filter out forked repos
      })
      .catch((err) => {
        if (!mounted) return
        setError(err.message)
      })
      .finally(() => mounted && setLoading(false))

    return () => { mounted = false }
  }, [sort])

  const filtered = useMemo(() => {
    return repos.filter((r) => 
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      (r.description || '').toLowerCase().includes(query.toLowerCase())
    )
  }, [repos, query])

  async function loadLatestCommit(repo) {
    if (repo._latestCommit) return
    try {
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_USER}/${repo.name}/commits?per_page=1`
      )
      if (!res.ok) throw new Error(`Commits API ${res.status}`)
      const [latest] = await res.json()
      
      if (!latest) return
      
      const commitInfo = {
        message: latest.commit.message,
        author: latest.commit.author?.name || latest.author?.login || 'Unknown',
        date: latest.commit.author?.date || latest.commit.committer?.date,
      }

      setRepos(prev => 
        prev.map(p => p.id === repo.id ? { ...p, _latestCommit: commitInfo } : p)
      )
    } catch (err) {
      console.error(err)
      setError('Failed to load commit. Rate limit may be exceeded.')
    }
  }

  return (
    <div className={
      isDark 
        ? 'min-h-screen bg-slate-900 text-white'
        : 'min-h-screen bg-gray-50 text-gray-900'
    }>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('home')}
              className={`p-2 rounded-full ${
                isDark 
                  ? 'hover:bg-slate-800 text-slate-400 hover:text-white'
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
              aria-label="Back to home"
            >
              ←
            </button>
            <h1 className="text-xl font-semibold">
              GitHub Projects
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(d => !d)}
              className={`p-2 rounded-full ${
                isDark
                  ? 'hover:bg-slate-800 text-slate-400 hover:text-white'
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            
            <select 
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className={`text-sm p-2 rounded-md ${
                isDark
                  ? 'bg-slate-800 text-white border-slate-700'
                  : 'bg-white text-gray-900 border-gray-200'
              }`}
            >
              <option value="updated">Recently updated</option>
              <option value="created">Newest</option>
              <option value="pushed">Recently pushed</option>
            </select>
          </div>
        </header>

        <div className="mb-6">
          <input
            type="search"
            placeholder="Search repositories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`w-full p-3 rounded-lg ${
              isDark
                ? 'bg-slate-800 text-white placeholder:text-slate-400 border-slate-700'
                : 'bg-white text-gray-900 placeholder:text-gray-400 border-gray-200'
            }`}
          />
        </div>

        {loading && (
          <div className={isDark ? 'text-slate-400' : 'text-gray-600'}>
            Loading repositories...
          </div>
        )}
        
        {error && (
          <div className="text-red-500 bg-red-50 p-4 rounded-lg">
            {error}
          </div>
        )}

        <AnimatePresence>
          <motion.div 
            layout
            className="grid gap-4 sm:grid-cols-2"
          >
            {filtered.map((repo) => (
              <RepoCard 
                key={repo.id}
                repo={repo}
                onLoadCommit={loadLatestCommit}
                isDark={isDark}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {!loading && filtered.length === 0 && (
          <div className={`mt-8 text-center ${
            isDark ? 'text-slate-400' : 'text-gray-600'
          }`}>
            No repositories match your search.
          </div>
        )}
      </div>
    </div>
  )
}
