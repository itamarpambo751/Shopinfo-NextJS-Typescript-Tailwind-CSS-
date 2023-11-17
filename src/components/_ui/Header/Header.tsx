import React from 'react'
import { Heart, List, MagnifyingGlass, Truck } from 'phosphor-react'
import { Section } from '..'
import Link from 'next/link'
import { HeaderListLinkList } from './HeaderListLinkList'
import { UserLoggedHeader } from './UserLoggedHeader'
import Image from 'next/image'


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
        <div className="h-[100px] flex justify-between items-center gap-12 m-auto">
          <section className='flex gap-10'>
            <Link href='/'>
              <Image 
                src="/assets/img/logo1.png" 
                alt="logo" 
                className='pb-1'
                width={170}
                height={170}
              />
            </Link>
            <div className="flex-1 flex justify-center items-center gap-3">
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
                    className="w-[185px]"
                  />
                    <button className='p-[.4rem]'>
                      <i className='text-[#FFF] text-[1.5rem] font-extrabold'>
                        <MagnifyingGlass />
                      </i>
                    </button>
                </div>
              </div>
              <UserLoggedHeader />
            </div>
          </section>
        </div>
      </Section.Content>
    </header>
  )
}

export default Header