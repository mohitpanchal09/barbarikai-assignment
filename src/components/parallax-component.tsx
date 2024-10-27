"use client";
import Image from "next/image";
import React from "react";
import {
  Parallax,

  ParallaxProvider,
} from "react-scroll-parallax";

export default function CustomParallaxBanner() {
  const img =
    "https://framerusercontent.com/images/KE9jA4JQF7jNSFZXVLBT1o6buU.png?scale-down-to=1024";

  return (
    <ParallaxProvider>
      <Parallax
  opacity={[1, 0]}
    speed={-10}
  easing="easeInQuad"
>

  <Image src={img} alt="img" height={200} width={800} className="m-auto"/>
  
</Parallax>
<Parallax speed={50} style={{marginTop:'-300px'}}>
  <div >
<h1 className="text-xl lg:text-4xl font-semibold text-center ">
If I can do it, why can&apos;t you?

      </h1>
      <p className="text-center">
      Earning a secondary income isn&apos;t as hard as most people think. The challenge is, most people simply don&apos;t know the right approach
          </p>
          </div>
</Parallax>
    </ParallaxProvider>
  );
}
