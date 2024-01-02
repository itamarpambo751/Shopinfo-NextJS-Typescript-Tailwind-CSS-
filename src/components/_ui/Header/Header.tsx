'use client'

import React, { useEffect, useState } from 'react'
import { Heart, List, MagnifyingGlass, Truck } from 'phosphor-react'
import { Section } from '..'
import Link from 'next/link'
import { HeaderListLinkList } from './HeaderListLinkList'
import { UserLoggedHeader } from './UserLoggedHeader'
import Image from 'next/image'
import { BsFacebook, BsLinkedin, BsList } from 'react-icons/bs'


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
    <header className="w-[100%] bg-black sticky top-[-60px] z-[5000] header-box-shadow">
      <div className="w-[100%] h-[60px] flex items-center justify-center bg-[#FE093C]">
        <Image 
          src="/assets/img/header.webp" 
          className='object-cover'
          height={1000}
          width={1000}
          alt='logo'
        />
      </div>
      <Section.Content>
          <section className='h-[100px] flex justify-between items-center gap-10'>
            <Link href='/'>
              <Image 
                src="/assets/img/logo1.png" 
                alt="logo" 
                className='pb-1'
                width={170}
                height={170}
              />
            </Link>
            <div className="flex justify-center max-2xl:justify-between items-center gap-3 left-header">
              <div className="flex items-center gap-6 relative">
                <ul className="flex justify-center items-end pt-1 gap-3 relative items-link-list">
                  {links.map((item, i) => (
                    <HeaderListLinkList link={item} key={i}/>
                  ))}                  
                </ul>
                <div className='flex justify-normal items-center gap-2'>
                  <input
                    type="text"
                    placeholder="O que você procura..."
                    className="max-2xl:hidden w-[185px]"
                  />
                    <button className='p-[.4rem]'>
                      <i className='text-[#FFF] text-[1.5rem] font-extrabold'>
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
                    className='z-[10000] flex justify-center gap-2 items-center bg-slate-800/50 py-2 pl-2 pr-4 rounded-md'>
                    <i className='text-[1.5rem]'>
                      <BsLinkedin />
                    </i>
                    Linkedin
                  </button>
                  <button
                    onClick={handleClick}
                    className='z-[10000] flex justify-center items-center bg-slate-800/50 text-white rounded-md pr-2'>
                    <Image 
                      src='/assets/img/google-logo.png'
                      alt='google-logo'
                      height={40}
                      width={40}
                    />
                    Entre com Google
                  </button>
                </div>
              )}
            </div>
            <button className='hidden btn-menu-hidden'>
              <BsList />
            </button>
          </section>
      </Section.Content>
    </header>
  )
}

export default Header