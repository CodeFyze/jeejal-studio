import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
    <Image 
        src="/herobanner1.svg"
        alt="Description of Image"
        width={1600}      
        height={0}         
      />
  </div>
  )
}

export default Hero