"use client"
import Call from "@/components/call";
import FinancialJourney from "@/components/financial-journey";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hero-section"
import ParallaxBanner from "@/components/parallax-component";



export default function Home() {
  return (
    <div className="h-[fit-content] w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[#1a1a1a] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] dark:bg-[size:24px_24px] flex flex-col justify-center items-center padding">
      <div className="w-[90vw] lg:w-[75vw]">
    
    <HeroSection/>
    <FinancialJourney />
    <ParallaxBanner/>
    <Call/>
    
    </div>
    <Footer/>
    </div>
  );
}
