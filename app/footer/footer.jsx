import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="bg-[#5b0d09] dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="#" className="grid grid-cols-2 items-center">
            <Image 
        src="/jeejalmain.png"
        alt="Description of Image"
        width={250}         
        height={100}     
      />

<Image 
        src="/JEEJAL STUDIO music seasons (1).png"
        alt="Description of Image"
        width={250}         
        height={100}         
      />

<Image 
        src="/JEEJALSTUDIOislamic.png"
        alt="Description of Image"
        width={250}         
        height={100}         
      />

<Image 
        src="/JEEJAL STUDIO movies and shows.png"
        alt="Description of Image"
        width={250}         
        height={100}         
      />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Resources</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="https://www.youtube.com/@jeejalstudio" className="hover:underline">Jeejal Studio</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Music</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="https://www.instagram.com/jeejal_studio?igsh=bnJoZHo3c2M1YXE2" className="hover:underline ">Instagram</a>
              </li>
              <li>
                <a href="https://x.com/jeejalstudio768?t=3NdKF_VLqmBncr6ZCVZBqw&s=09" className="hover:underline">Twitter</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Jeejal Studio™</a>. All Rights Reserved.
        </span>











        <div className="flex mt-4 sm:justify-center sm:mt-0">
          <a href="https://www.facebook.com/jeejalstudio786?mibextid=zLoPMf" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="https://www.instagram.com/jeejal_studio?igsh=bnJoZHo3c2M1YXE2" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M256 30.9c67.4 0 75.5.3 102.1 1.5 24.6 1 37.7 5.1 46.5 8.5a68.7 68.7 0 0 1 26.2 17.6 68.7 68.7 0 0 1 17.6 26.2c3.4 8.8 7.5 21.9 8.5 46.5 1.2 26.6 1.5 34.7 1.5 102.1s-.3 75.5-1.5 102.1c-1 24.6-5.1 37.7-8.5 46.5a68.7 68.7 0 0 1-17.6 26.2 68.7 68.7 0 0 1-26.2 17.6c-8.8 3.4-21.9 7.5-46.5 8.5-26.6 1.2-34.7 1.5-102.1 1.5s-75.5-.3-102.1-1.5c-24.6-1-37.7-5.1-46.5-8.5a68.7 68.7 0 0 1-26.2-17.6 68.7 68.7 0 0 1-17.6-26.2c-3.4-8.8-7.5-21.9-8.5-46.5-1.2-26.6-1.5-34.7-1.5-102.1s.3-75.5 1.5-102.1c1-24.6 5.1-37.7 8.5-46.5a68.7 68.7 0 0 1 17.6-26.2 68.7 68.7 0 0 1 26.2-17.6c8.8-3.4 21.9-7.5 46.5-8.5 26.6-1.2 34.7-1.5 102.1-1.5m0-28.9c-67.7 0-76.1.3-102.7 1.5-26.3 1.1-47.5 6.2-64.5 13.5a123 123 0 0 0-45.3 30.8A123 123 0 0 0 38 137.6C30.7 154.6 25.6 175.8 24.5 202.1 23.3 228.7 23 237.1 23 304.9s.3 76.1 1.5 102.7c1.1 26.3 6.2 47.5 13.5 64.5a123 123 0 0 0 30.8 45.3A123 123 0 0 0 137.6 474c16.9 7.3 38.1 12.4 64.5 13.5 26.6 1.2 35 1.5 102.7 1.5s76.1-.3 102.7-1.5c26.3-1.1 47.5-6.2 64.5-13.5a123 123 0 0 0 45.3-30.8 123 123 0 0 0 30.8-45.3c7.3-16.9 12.4-38.1 13.5-64.5 1.2-26.6 1.5-35 1.5-102.7s-.3-76.1-1.5-102.7c-1.1-26.3-6.2-47.5-13.5-64.5a123 123 0 0 0-30.8-45.3 123 123 0 0 0-45.3-30.8c-16.9-7.3-38.1-12.4-64.5-13.5-26.6-1.2-35-1.5-102.7-1.5z"/>
    <path fill="currentColor" d="M256 134.6c-74.2 0-134.6 60.4-134.6 134.6S181.8 403.8 256 403.8 390.6 343.4 390.6 269.2 330.2 134.6 256 134.6zm0 230c-53 0-96.4-43.4-96.4-96.4s43.4-96.4 96.4-96.4 96.4 43.4 96.4 96.4-43.4 96.4-96.4 96.4z"/>
    <circle cx="365.4" cy="146.6" r="29.9" fill="currentColor"/>
</svg>
  <span className="sr-only">Instagram</span>
          </a>
          
          
          
          <a href="https://x.com/jeejalstudio768?t=3NdKF_VLqmBncr6ZCVZBqw&s=09" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
          <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
</svg>

            <span className="sr-only">Twitter</span>
          </a>
        
        
        
        
          <a href="https://share.like-video.com/e/g/asSNhsIsAH5/-PK" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" className="fill-current text-gray-500">
    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
</svg>
 <span className="sr-only">Likee</span>
  </a>
        

  <a href="https://www.google.com/maps/place/JEEJAL+ENTERPRISE/@26.2443597,68.3961014,15z/data=!4m2!3m1!1s0x0:0x7f20b7f14d07bffa?sa=X&ved=2ahUKEwjy2vqLmMaDAxXW-gIHHb6uAUsQ_BJ6BAgyEAA" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" className="fill-current text-gray-500">
    <path d="M256 0C161.333 0 85.333 75.307 85.333 169.28c0 33.28 8.96 65.28 25.6 93.44 44.48 80 116.8 134.08 144.64 156.16 9.173 8.747 22.187 8.747 31.36 0 27.947-22.826 100.373-76.907 144.853-156.16 16.64-28.16 25.6-60.16 25.6-93.44C426.667 75.307 350.667 0 256 0zm0 240.64c-40.107 0-72.533-32.853-72.533-71.36 0-38.507 32.427-71.36 72.533-71.36s72.533 32.853 72.533 71.36c0 38.507-32.427 71.36-72.533 71.36z"/>
</svg>

 <span className="sr-only">Location</span>
  </a>

          <a href="mailto:Jeejalstudio786@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" className='fill-current text-gray-500'>
    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" fill="text-gray-500"/>
</svg>

            <span className="sr-only">email</span>
          </a>
        


        
          <a href="https://www.tiktok.com/@jeejal_studio?_t=8iXLkw3VW2U&_r=1
" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
    <svg xmlns="http://www.w3.org/2000/svg" className='text-gray-500' height="16" width="14" viewBox="0 0 448 512" fill="currentColor">
        <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
    </svg>
    <span className="sr-only">Tiktok</span>
</a>



<a href="https://youtube.com/@jeejalstudio?si=mY-Hw96hufDZP_5y" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
  <svg xmlns="http://www.w3.org/2000/svg" className='text-gray-500' height="16" width="14" viewBox="0 0 448 512" fill="currentColor">
    <path d="M176 320V192L300 256 176 320zM416 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm-16 384H48V64h352v352z"/>
</svg>
    <span className="sr-only">Youtube</span>
</a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer



