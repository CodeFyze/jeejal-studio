import React from 'react'
import Image from 'next/image'
import Cards from '../serviceCards/Cards'
import Para from '../serviceCards/para'

function page() {
  return (

    <div>
      <div className="relative text-white overflow-hidden w-full">
        
        <Image
          src="/services.png"
          alt="Description of Image"
          width={1600}
          height={0}
          className='bg-cover'
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
          <Cards />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 md:p-20">
          <div className="grid gap-4">
            <div className=''>
              <img className="h-auto max-w-full rounded-lg " src="/virec.jpg" alt="vi" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/A.jpg" alt="a" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/jew.jpg" alt="jew" />
            </div>

            <div>
              <img className="h-auto max-w-full rounded-lg" src="/444.webp" alt="44" />
            </div>

          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/111.jpg" alt="11" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/01.jpg" alt="ww" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/09.jpg" alt="33" />
            </div>

            <div>
              <img className="h-auto max-w-full rounded-lg" src="/disney.jpg" alt="33" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/08.jpg" alt="66" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/12.jpeg" alt="image" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/222.jpg" alt="image" />
            </div>

            <div>
              <img className="h-auto max-w-full rounded-lg" src="/B.jpg" alt="image" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/02.jpg" alt="image" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/mic.jpg" alt="image" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/333.jpg" alt="image" />

            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/HEADFON.jpg" alt="image" />

            </div>
          </div>
        </div>

        <Para />
      </div>
    </div>
  )
}

export default page