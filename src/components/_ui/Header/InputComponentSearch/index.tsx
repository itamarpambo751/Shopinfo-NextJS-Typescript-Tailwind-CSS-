import React from 'react';
import { MagnifyingGlass } from 'phosphor-react'
import { Shopinfo } from "@/components";
import Link from 'next/link'

const InputComponentHeader: React.FC = () => {

  const [inputValue, setInputValue] = React.useState('t6yu');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <>
    <input
    type="text"
    onChange={handleInputChange}
    placeholder="O que você procura..."
    className="w-[185px] max-md:w-[90%]"
  />
      <button className='p-[.4rem] max-md:w-[10%]'>
      <Link href={`generalSearch/${inputValue}`}>
          <i className='text-[black] text-[1.5rem] font-extrabold' >
       <MagnifyingGlass /> 
        </i></Link>
      </button>
  </>
  )
}

export default InputComponentHeader;