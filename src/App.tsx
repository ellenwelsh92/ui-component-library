import { useState } from 'react'
import { Button } from './components/Button'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Component playground</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Ready to build.</h1>
        <p className="mt-4 leading-7 text-slate-600">
          React, TypeScript, Tailwind CSS, and Vite are connected.
          Explore your components in Storybook and start making them your own.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={() => setCount((value) => value + 1)}>Clicked {count} times</Button>
          <Button variant="subtle" onClick={() => setCount(0)}>Reset</Button>
        </div>
        <p className="mt-8 text-sm text-slate-500">Run <code className="rounded bg-slate-100 px-2 py-1 text-slate-700">npm run storybook</code> to explore component stories.</p>
      </section>
    </main>
  )
}
