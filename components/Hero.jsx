import React from 'react'
import Nav from './Nav'
import { SparklesText } from './magicui/sparkles-text'

const Hero = () => {
  return (
    <>
      <div className="min-h-screen w-[97%] mx-auto relative">
        {/* Radial Gradient Background from Top */}
        <div
          className="absolute inset-0 z-0 rounded-lg"
          style={{
            background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #7c3aed 100%)",
          }}
        />
        
        <Nav/>
        
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 max-w-4xl">
           <SparklesText className="text-7xl font-bold">Master</SparklesText> Upwork & Copywriting
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
            Transform your freelancing career with our comprehensive courses. Learn proven strategies for Upwork success and master the art of persuasive copywriting.
          </p>
          
          
        </div>
      </div>
    </>
  )
}

export default Hero