'use client'

import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use'

const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact']

const Navbar = () => {

  const [lastScrollY, setLastScrollY] = useState(0);
  const [ isNavVisible, setIsNavVisible ] = useState(true);

  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if(currentScrollY === 0) {
        setIsNavVisible(true);
        navContainerRef.current.classList.remove('floating-nav');
      } else if(currentScrollY > lastScrollY) {
          setIsNavVisible(false);
          navContainerRef.current.classList.add('floating-nav');
      } else if(currentScrollY < lastScrollY) {
          setIsNavVisible(true);
          navContainerRef.current.classList.add('floating-nav');
      }
  
      setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY])
  useEffect(() => {

  }, [currentScrollY])

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2, 
    })
  }, [isNavVisible])
   
  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
        <nav className='flex size-full items-center justify-center p-4'>
          <div className='flex h-full items-center'>
            <div className='hidden md:block'>
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
