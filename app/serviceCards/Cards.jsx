import React from 'react'
import Image from 'next/image'

function Cards() {
  return (
    <div className='flex flex-wrap mb-5 p-20 items-center justify-evenly gap-y-5'>
        <div>
        <div className='bg-white border-2 hover:transation-all duration-300 delay-75 hover:translate-y-6  border-[#32768B] hover:bg-red-500 rounded-md w-64 h-44 flex items-center justify-center'>
        <Image src="/icon.png" className='m-12' width={1} height={1} layout='responsive' />
    </div>
   <div>
   <h1 className='text-center mt-7 text-xl font-semibold'>Post Production</h1>
   </div>
        </div>





        <div>
        <div className='bg-white border-2 hover:transation-all duration-300 delay-75 hover:translate-y-6 border-[#32768B] hover:bg-red-500 rounded-md w-64 h-44 flex items-center justify-center'>
        <Image src="/001.png" className='m-5' width={1} height={1} layout='responsive' />
    </div> 
    <div>
   <h1 className='text-center mt-7 text-xl font-semibold'>Film Production</h1>
   </div>
        </div>
    



<div>
<div className='bg-white border-2 hover:transation-all duration-300 delay-75 hover:translate-y-6 border-[#32768B] hover:bg-red-500 rounded-md w-64 h-44 flex items-center justify-center'>
        <Image src="/01mic.png" className='p-10' width={1} height={1} layout='responsive' />
    </div>  
    <div>
   <h1 className='text-center mt-7 text-xl font-semibold'>Music Production</h1>
   </div>
</div>


<div>
<div className='bg-white border-2 hover:transation-all duration-300 delay-75 hover:translate-y-6 border-[#32768B] hover:bg-red-500 rounded-md w-64 h-44 flex items-center justify-center'>
        <Image src="/comm.png" className='m-5' width={1} height={1} layout='responsive' />
    </div>
    <div>
   <h1 className='text-center mt-7 text-xl font-semibold'>Video Recording</h1>
   </div>
</div>
</div>
  )
}

export default Cards