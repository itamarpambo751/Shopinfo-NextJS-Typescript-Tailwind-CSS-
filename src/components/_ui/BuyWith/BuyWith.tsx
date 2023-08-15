import React from 'react';
import { WhatsappLogo, Question } from 'phosphor-react'

interface BuyWithProps {
    whatsap?:Boolean
    facebook?:Boolean
    help?:Boolean
}

const BuyWith: React.FC<BuyWithProps> = ({ whatsap, facebook, help }: BuyWithProps) => {
  return (
    <ul className='z-[888] fixed right-20 h-[200px] bottom-16 flex flex-col items-center gap-4'>
        <li className='absolute top-0 w-[60px] p-[.6rem] h-[60px] rounded-full flex 
            justify-center items-center bg-[var(--whatsap-color)] cursor-pointer
        '>
            <i className='text-white text-[2.5rem]'>
                <WhatsappLogo/>
            </i>
        </li>
        <li className='absolute top-[5rem] w-[60px] p-[.6rem] h-[60px] rounded-full flex 
            justify-center items-center bg-[#FFF] cursor-pointer
        '>
            <i className='text-black text-[2.5rem]'>
                <Question/>
            </i>
        </li>
    </ul>
  )
}

export default BuyWith;