import React from 'react'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'

export default function Call() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5 lg:gap-y-5 py-10 lg:py-20 " style={{marginTop:'200px'}}>
      <h1 className="text-xl lg:text-4xl font-semibold text-left lg:text-center">
      Still Feeling Unsure? Let's Clear It Up!
      </h1>
      <p>
      Book a 1:1 consultation, and I'll help clear up any doubts and get you moving forward with confidence.
          </p>
          <Button variant={'wealth'}>Book 1:1 call <MoveRight /></Button>
      </div>
  )
}
