import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f7f9]">
      <Navbar /> 
    </main>
  )
}
