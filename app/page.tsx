

import DontMiss from "@/components/Don't";
import Essential from "@/components/Important";
import Featured from "@/components/Features";
import GearUp from "@/components/Gears";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import  HomeProducts  from "@/components/HomeProducts"
// import ProductCards from "./product/page";


export default function Home() {
  return (
  <main>
 
    <Hero/>
    <HomeProducts/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
    {/* <ProductCards/> */}
    <Navigation/>
  </main>
  )
}
