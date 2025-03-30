import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div>
        <div className="relative text-white overflow-hidden">
    <Image 
        src="/contactbanner.svg"
        alt="Description of Image"
        width={1600}      
        height={0}         
      />
  </div>
    </div>
  )
}

export default Hero