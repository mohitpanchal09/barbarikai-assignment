"use client";
import React from "react";
import { heroImages } from "@/lib/images";
import Image from "next/image";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import TypewriterComponent from "typewriter-effect";

function HeroSection() {
  const [img1, img2, img3, img4, img5] = heroImages;

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ marginTop: "150px" }}
    >
      <div className="flex justify-center items-centergap-x-20">
        <div className="">
          <Image src={img1.img} height={100} width={100} />
          <Image src={img5.img} height={100} width={100} />
        </div>
        <div className="">
          <Image src={img3.img} height={400} width={400} />
        </div>
        <div>
          <Image src={img4.img} height={100} width={100} />
          <Image src={img2.img} height={100} width={100} />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-5">
        <div className="text-xl lg:text-4xl font-semibold text-left lg:text-center flex flex-col lg:flex-row lg:flex-wrap">
          <div className="flex items-center">
            <span>Create &nbsp;</span>
            <span
              style={{
                textDecorationLine: "underline",
                textDecorationStyle: "wavy",
              }}
            >
              <TypewriterComponent
                options={{
                  strings: ["Wealth"],
                  autoStart: true,
                  loop: true,
                }}
              />{" "}
            </span>
          </div>
          <span className="mt-2">10x Faster with AI</span>
        </div>
        <div className="text-l md:text-2xl lg:text-7xl font-light text-zinc-400 flex justify-center items-center">
          Leverage cutting-edge AI to fast-track your financial success. I’ll
          guide you every step of the way to build a prosperous future.
        </div>
        
      </div>
      <Button variant={"wealth"} className="py-2">
          Grow my wealth <MoveRight />
        </Button>
    </div>
  );
}

export default HeroSection;
