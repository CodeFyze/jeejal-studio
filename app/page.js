import Image from 'next/image'
import Hero from './header/Hero'
import Cards from './cards/page'
import Map from './map/Map'

export default function Home() {
  return (
   <div>
   <Hero/>
   <Cards/>
  <Map/>
   
   </div>
  )
}
