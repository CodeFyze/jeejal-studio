import React from 'react'
import Image from 'next/image'
import Cards from '../serviceCards/Cards'
import Para from '../serviceCards/para'

function page() {
  return (

    <div>
    <div className="relative text-white overflow-hidden">
    <Image 
        src="/herobannerservices.svg"
        alt="Description of Image"
        width={1600}      
        height={0}         
      />
  </div>

    <div>
        <div className='text-center md:m-5'>
  <h1 className='md:text-5xl text-xl m-5 font-bold text-red-400'>Our Services</h1>
  <p className='md:px-64 mt-2 px-4 font-semibold'>

  Jeejal Studio specializes in producing music, movies, and Islamic content, including nohas and naats, 3D Commercials
video editing and motion graphics With a passion for quality, they craft soulful melodies and cinematic experiences that resonate deeply with audiences worldwide

 </p>
</div>

<div>
    <Cards/>
</div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 md:p-20">
    <div className="grid gap-4">
      <div className=''>
        <img className="h-auto max-w-full rounded-lg " src="/virec.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="/02.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="/03.jpg" alt="" />
      </div>

      <div>
        <img className="h-auto max-w-full rounded-lg" src="/444.webp" alt="" />
      </div>

    </div>
    <div className="grid gap-4">
      <div>
        <img className="h-auto max-w-full rounded-lg" src="/111.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="/01.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="/09.jpg" alt="" />
      </div>

      <div>
        <img className="h-auto max-w-full rounded-lg" src="/disney.jpg" alt="" />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img className="h-auto max-w-full rounded-lg" src="/08.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="/12.jpeg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="/222.jpg" alt="" />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img className="h-auto max-w-full rounded-lg" src="/02.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="/mic.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="/333.jpg" alt="" />
      </div>
    </div>
  </div>

  <Para/>
  </div>
  </div>
  )
}

export default page