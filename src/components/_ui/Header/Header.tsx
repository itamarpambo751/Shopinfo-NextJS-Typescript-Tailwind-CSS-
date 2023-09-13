import React from 'react'
// import { List, MagnifyingGlass, Truck } from 'phosphor-react'
import { BsCart2 } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'
import { Section } from '..'
import Link from 'next/link'

const Header:React.FC = () => {
  return (
    <header className="w-[100%] sticky top-[-60px] z-[999]">
      <div className="w-[100%] h-[60px] flex items-center justify-center bg-[#FE093C]">
        <img src="./assets/img/header.webp" className='object-cover'/>
      </div>
        <div className="h-[100px] bg-[black]  flex w-[100%] justify-between items-center gap-12 m-auto">
          <section className='flex gap-10'>
            <Link href='/'>
              <img src="./assets/img/logo1.png" alt="logo" className='pb-1'/>
            </Link>
            <div className="flex-1 flex justify-center items-center gap-5">
              <div className="flex items-center gap-6 relative">
                <ul className="flex justify-center items-end pt-1 gap-3 relative">
                  <li className="header-list-link">
                    <Link href="/pc-gamer">PC Gamer</Link>
                  </li>
                  <li className="header-list-link">
                    <Link href="/home-office">Home Office</Link>
                  </li>
                  <li className="header-list-link">
                    <Link href="/workstation">Workstation</Link>
                  </li>
                  <li className="header-list-link">
                    <Link href="/periferics">Periferics</Link>
                  </li>
                  <li className="header-list-link">
                    <Link href="/hardware">Hardware</Link>
                  </li>
                </ul>
                <div className='flex justify-normal items-center gap-3'>
                  <input 
                    type="text" 
                    placeholder="O que você procura..." 
                    className="w-[185px]"
                  />
                    <button className='p-[.4rem]'>
                      <i className='text-[#FFF] text-[1.5rem] font-extrabold'>
                        {/* <MagnifyingGlass /> */}
                      </i>
                    </button>
                </div>
              </div>
              <ul className="flex gap-2  pl-4 border-l-2 border-[var(--border-color)]">
                <li className='flex justify-center items-end gap-2'>
                  <i className='text-[1.6rem] text-[var(--red-color)]'>
                    {/* <Truck/> */}
                  </i>
                  <span className='text-[.9rem]'>
                    Rastreio
                  </span>
                </li>
                <li className='flex justify-center items-end gap-2'>
                  <i className='text-[1.6rem] text-[var(--red-color)]'>
                    <CiUser/>
                  </i>
                  <span className='text-[.9rem]'>
                    Minha conta
                  </span>
                </li>
                <li className='flex justify-center items-end gap-2'>
                  <i className='text-[1.6rem] text-[var(--red-color)]'>
                    <BsCart2/>
                  </i>
                  <span className='text-[.9rem]'>
                    Carrinho
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section className='hidden justify-between items-center w-[100%]'>
            <button>
              <i className='text-white text-[2rem]'>
                {/* <List/> */}
              </i>
            </button>
            <img src="./assets/img/logo1.png" alt="" />
            <div className='flex justify-center items-center gap-5'>
              <button>
                <i className='text-[#FFF] text-[1.6rem] font-extrabold'>
                  {/* <MagnifyingGlass /> */}
                </i>
              </button>
              <button>
                <i className='text-[var(--red-color)] text-[2rem] font-extrabold'>
                  <BsCart2/>
                </i>
              </button>
            </div>
          </section>
        </div>
    </header>
  )
}

export default Header