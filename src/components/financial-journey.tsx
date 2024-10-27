"use client";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function FinancialJourney() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-10 lg:gap-y-20 py-10 lg:py-20">
      <h1 className="text-xl lg:text-4xl font-semibold text-left lg:text-center">
        How AI Can Fuel Your Financial Journey
      </h1>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-col gap-y-5">
          <h4 className="text-xl lg:text-3xl font-semibold text-left lg:text-left">AI + Social Media = 🔥</h4>
          <p>
            Nearly everyone uses social media, but only a few know how to truly
            profit from it.
          </p>
       
          <p>
            By leveraging AI tools, you can automate most of the process,
            turning social media into a passive income machine.
          </p>
          <Button variant="wealth">
            Grow my Social Media <MoveRight />
          </Button>
        </div>
        <div>
          <div className="flex justify-center gap-x-2 flex-wrap lg:flex-nowrap items-center  gap-y-5">
            <Image
              src={`https://framerusercontent.com/images/j0cDKCMCgJ5xcEMNnxCCZjZ1GRM.png?scale-down-to=512`}
              alt="img"
              height={200}
              width={200}
            />
            <div className="border border-black py-2 px-6 rounded-2xl h-[fit-content]">
              <h4 className="text-xl lg:text-3xl font-semibold text-left lg:text-left">120k +</h4>
              <p>Followers gained on X in last One Year</p>
            </div>
          </div>
          <div className="flex justify-center gap-x-2 flex-wrap lg:flex-nowrap items-center gap-y-5 pt-5 lg:pt-0">
            <div>
              <h4 className="text-xl lg:text-3xl font-semibold text-left lg:text-left">AI Tools</h4>
              <p>Utilized them for Maximum Efficiency and Automation</p>
            </div>
            <Image
              src={`https://framerusercontent.com/images/MiB4H4WhbQwy9G4NPajk38nPsWU.png?scale-down-to=512`}
              alt="img"
              height={200}
              width={200}
            />
          </div>
          <div className="flex justify-center gap-x-2  flex-wrap  lg:flex-nowrap items-start gap-y-5 pt-5 lg:pt-0">
          <div>
              <h4 className="text-xl lg:text-3xl font-semibold text-left lg:text-left">50k+</h4>
              <p>Followers gained on LinkedIn in last Year</p>
            </div>
            <div>
              <h4 className="text-xl lg:text-3xl font-semibold text-left lg:text-left">15M+</h4>
              <p>Consistently Generated Monthly Social Impressions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
