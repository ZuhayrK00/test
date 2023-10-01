"use client";
import Image from 'next/image'
import Navbar from './components/Nav/Navbar'
import Carousel from './components/Carousel/Carousel'
import Hero from './components/Hero/Hero'
import Browse from './components/DiscoverMore/Browse';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f7f9]">
      <Navbar /> 
      <Hero />
      <Carousel />
      <Browse />
    </main>
  )
}
