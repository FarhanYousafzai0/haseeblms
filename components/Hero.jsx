import React from 'react'
import Nav from './Nav'


const Hero = () => {
  return (
    <>
   <div className="min-h-screen w-[97%]  mx-auto relative">
  {/* Radial Gradient Background from Top */}
  <div
    className="absolute inset-0 z-0 rounded-lg"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #7c3aed 100%)",
    }}
  />

  <Nav/>
</div>
   </>
  )
}

export default Hero