import React from 'react'
import Nav from './Nav'
import { SparklesText } from './magicui/sparkles-text'
import { AnimatedShinyText } from './magicui/animated-shiny-text'
import { ShimmerButton } from './magicui/shimmer-button'

const Hero = () => {
  return (
    <>
      <div className="md:min-h-screen w-[97%] mx-auto relative">
        {/* Radial Gradient Background from Top */}
        <div
          className="absolute inset-0 z-0 rounded-lg "
          style={{
            background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #7c3aed 100%)",
          }}
        />
        
        <Nav/>
        
        {/* Hero Content */}
        <div className="relative z-10 mt-10 md:mt-0 flex flex-col items-center md:justify-center min-h-[calc(100vh-80px)] px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 max-w-4xl">
           <SparklesText className="text-5xl md:text-6xl lg:text-7xl font-bold">Master</SparklesText> Upwork & Copywriting
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl ">
            Transform your freelancing career with our comprehensive courses. Learn proven strategies for Upwork success and master the art of persuasive copywriting.
          </p>
          
          <div><ShimmerButton className="rounded-full py-3">              Start Learning Today
          </ShimmerButton></div>          
        </div>
      </div>
    </>
  )
}

export default Hero