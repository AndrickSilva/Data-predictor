"use client"
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [inputValue, setInputValue] = useState("")
  const {push} = useRouter();
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    push(`/prediction/${inputValue}`)
    setInputValue("")
  }
  return (
    <main className="flex justify-center items-center flex-col min-h-screen bg-slate-700">
      <div className="flex flex-col bg-slate-800 p-8 rounded-md">
        <h1 className='text-orange-500 mb-4 font-bold text-xl'>Enter Your name</h1>
        <form className='flex flex-col items-start' onSubmit={handleSubmit}>
          <input className='h-10 rounded-md px-4 mb-4' type="text" value={inputValue} placeholder='Enter your name..' onChange={(e) => setInputValue(e.target.value)} />
          <button className='bg-orange-500 text-slate-200 p-2 rounded-md' type='submit'>Submit</button>
        </form>
      </div>
    </main>
  )
}
