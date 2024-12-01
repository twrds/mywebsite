'use client'

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './ui/AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: '#clip',
          start: 'center center',
          end: '+=800 center',
          scrub: 0.5,
          pin: true,
          pinSpacing: true, 
        }
    })

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,

    })
  }) 

  return (
    <div id='about' className='min-h-screen w-screen'>
      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
        <h2 className='font-sans text-center text-sm uppercase md:text-[16px] text-white'>
          Hello!
        </h2>  
        <AnimatedTitle 
          title = "I'm Jonathan" 
          containerClass='mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem] text-white font-bold'  
        />
        <p className='mt-5 w-full max-w-96 text-center text-2xl md:max-w-[34rem] font-bold text-white'>
        A business graduate highly interested in supply chain management, management consulting and everything tech. Currently I'm <span className='text-purple-3'>job searching</span> and working on a AI web app to learn more about artifical intelligence and frontend development.
        </p>
      </div>

      <div className='h-dvh w-screen' id='clip'>
        <div className='mask-clip-path about-image'>
          <img 
            src='/photos/Rewind.jpg'
            alt='Background'
            className='absolute left-0 top-0 size-full object-cover'
          />
        </div>

      </div>
    </div>
  )
}

export default About