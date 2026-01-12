import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-6">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="h-20 hover:scale-110 transition"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            alt="React logo"
            className="h-20 hover:scale-110 transition"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-6">
        Vite + React
      </h1>

      <div className="bg-slate-800 rounded-xl p-6 text-center shadow-lg mb-6">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg mb-4 transition"
        >
          count is {count}
        </button>

        <p className="text-slate-300">
          Edit <code className="bg-slate-700 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-slate-400 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App