'use client'

import React, { useEffect, useState } from 'react'
import { Heart, List, MagnifyingGlass, Truck } from 'phosphor-react'
import { Section } from '..'
import Link from 'next/link'
import { HeaderListLinkList } from './HeaderListLinkList'
import { UserLoggedHeader } from './UserLoggedHeader'
import Image from 'next/image'
import { BsFacebook, BsLinkedin, BsList } from 'react-icons/bs'
import styles from './Header.module.css'


const links = [
  {
    'url':'/pc-gamer',
    'link':'PC Gamer'
  },
  {
    'url':'/home-office',
    'link':'Home Office'
  },
  {
    'url':'/workstation',
    'link':'Workstation'
  },
  {
    'url':'/periferics',
    'link':'Periferics'
  },
  {
    'url':'/hardware',
    'link':'Hardware'
  }
]

const Header:React.FC = () => {
  const [status, setStatus] = useState(false)

  function handleClick() {
    alert("Click!")
  }

  return (
    <header className="w-[100%] bg-[var(--surface)] sticky top-[-60px] z-[5000] shadow-lg border-b border-[var(--border-color)]">
      <div className="w-[100%] h-[50px] flex items-center justify-center bg-gradient-to-r from-[var(--red-color)] via-[var(--red-text-color)] to-[var(--orange-color)] overflow-hidden relative">
        <Image 
          src="/assets/img/header.webp" 
          className='object-cover'
          height={1000}
          width={1000}
          alt='logo'
        />
      </div>
      <Section.Content>
          <section className='h-[90px] flex justify-between items-center gap-10'>
            <Link href='/' className='hover:opacity-80 transition-opacity duration-200'>
              <Image 
                src="/assets/img/logo1.png" 
                alt="logo" 
                className='pb-1'
                width={160}
                height={160}
              />
            </Link>
            <div className="flex justify-center max-2xl:justify-between items-center gap-6 left-header flex-1">
              <div className="flex items-center gap-8 relative">
                <ul className="flex justify-center items-center gap-6 relative items-link-list">
                  {links.map((item, i) => (
                    <HeaderListLinkList link={item} key={i}/>
                  ))}                  
                </ul>
                <div className='flex justify-normal items-center gap-0 bg-[var(--light-bg)] rounded-lg border border-[var(--border-color)] hover:border-[var(--red-color)] transition-colors duration-200'>
                  <input
                    type="text"
                    placeholder="Buscar produtos..."
                    className="max-2xl:hidden w-[200px] bg-transparent px-4 py-2.5 text-[14px] outline-none"
                  />
                    <button className='p-2.5 hover:bg-[var(--red-color)] hover:text-white transition-colors duration-200 rounded-r-lg'>
                      <i className='text-[1.3rem] font-bold'>
                        <MagnifyingGlass />
                      </i>
                    </button>
                </div>
              </div>
              {status ? (
                <UserLoggedHeader />
              ):(
                <div className='ml-auto flex justify-end items-center gap-3 flex-1 max-2xl:flex-none'>
                  <button
                    onClick={handleClick}
                    className='z-[10000] flex justify-center gap-2 items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 pl-3 pr-5 rounded-lg hover:shadow-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium text-sm'>
                    <i className='text-[1.4rem]'>
                      <BsLinkedin />
                    </i>
                    LinkedIn
                  </button>
                  <button
                    onClick={handleClick}
                    className='z-[10000] flex justify-center items-center gap-2 bg-[var(--surface)] text-[var(--text-primary)] rounded-lg px-4 py-2.5 border-2 border-[var(--border-color)] hover:border-[var(--red-color)] hover:shadow-md transition-all duration-200 font-medium text-sm'>
                    <Image 
                      src='/assets/img/google-logo.png'
                      alt='google-logo'
                      height={18}
                      width={18}
                    />
                    Google
                  </button>
                </div>
              )}
            </div>
            <button className='hidden btn-menu-hidden text-2xl hover:text-[var(--red-color)] transition-colors'>
              <BsList />
            </button>
          </section>
      </Section.Content>
    </header>
  )
}

export default Header