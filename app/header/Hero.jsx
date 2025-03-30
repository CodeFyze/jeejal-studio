"use client"
import React, { useState } from 'react';
import Image from 'next/image';

function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden w-full">
      <div className="w-full h-auto aspect-w-16 aspect-h-9">
        <Image 
          src="/herobanner1.svg"
          alt="Description of Image"
          layout="responsive"
          width={1600}
          height={900}
          quality={100}
          priority
          onLoadingComplete={() => setImageLoaded(true)}
          className={`object-cover w-full h-full transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
}

export default Hero;