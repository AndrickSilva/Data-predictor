"use client"
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [inputValue, setInputValue] = useState("")
  const [Loading, setLoading] = useState(false)
  const {push} = useRouter();
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true)
    push(`/prediction/${inputValue}`)
    setInputValue("")
  }
  return (
    <main className="flex items-center flex-col min-h-screen bg-slate-700">
      <h1 className='py-32 text-slate-200 text-5xl font-bold'>Predict You Data</h1>
      <div className="flex flex-col bg-slate-800 p-8 rounded-md shadow-lg">
        <h1 className='text-orange-500 mb-4 font-bold text-xl'>Enter Your name</h1>
        <form className='flex flex-col ' onSubmit={handleSubmit}>
          <input className='h-10 rounded-md px-4 mb-4' type="text" value={inputValue} placeholder='Enter your name..' onChange={(e) => setInputValue(e.target.value)} />
          <button className='bg-orange-500 text-slate-200 p-2 rounded-md' type='submit'>Submit</button>
        </form>
      </div>
        {Loading && <p className='text-slate-200'>Please wait..</p>}
    </main>
  )
}
