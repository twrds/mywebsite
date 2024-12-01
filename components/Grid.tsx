'use client'

import React, { useRef, useState } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

const BentoTilt = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle]= useState();

  const itemRef = useRef();

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    if(!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform)
  }

  const handleMouseLeave = () => {
    setTransformStyle('');
  }

  return (
    <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle }}>
      {children}
    </div>
  )
}

const BentoCard = ({ src, title, description }) => {
  return (
    <div className='relative size-full'>
      <video 
        src={src}
        loop
        muted
        autoPlay
        className='absolute left-0 top-0 size-full object-cover object-center'
      />
      <div className='relative z-10 flex size-full flex-col p-5 text-white-100'>
        <h1 className='bento-title'>{title}</h1>
        {description && (
          <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>
        )}
      </div>
    </div>
  )
}

const Grid = () => {
  return (
    <section id='skills' className='bg-black pb-52'>
      <div className='container mx-auto px-3 md:px-8'>
        <div className='py-32'>
          <h2 className='text-lg md:text-6xl sm:text-6xl text-white font-bold text-right'>
            Skills & Interests
          </h2>
        </div>

      <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
        <BentoCard 
          src='videos/hero-1.mov'
          title={<>Marketing</>}
          description=''
        />
      </BentoTilt>

      <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
        <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
          <BentoCard 
            src='videos/hero-4.mov'
            title={<>Webdesign</>}
            description='GSAP | Next.js | Tailwind | THREE'
          />
        </BentoTilt>

        <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
          <BentoCard 
            src='videos/hero-2.mov'
            title={<>Supply Chain</>}
            description=' '
          />
        </BentoTilt>

        <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
          <BentoCard 
            src='videos/hero-3.mov'
            title={<>Strategy Dev.</>}
            description=' '
          />
        </BentoTilt>

        <a href='mailto:jonternst@gmail.com'>
          <BentoTilt className='bento-tilt_2'>
            <div className='flex size-full flex-col justify-between bg-purple-3 p-5'>
              <h1 className='bento-title max-w-64'>
                Interested in working together?
              </h1>
              <EnvelopeIcon className='m-5 scale-[0.5] self-end'/>
            </div>
          </BentoTilt>
        </a>

        <BentoTilt className='bento-tilt_2'>
          <video 
            src='videos/ef-3.mp4'
            loop
            muted
            autoPlay
            className='size-full object-cover object-center'
          />

        </BentoTilt>
      </div>
      </div>
    </section>
  )
}

export default Grid