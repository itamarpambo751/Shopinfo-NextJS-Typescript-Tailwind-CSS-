import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
        <div className='bg-[#202020] h-[250px] text-center pt-10'>
            <h1 className='text-[2.6rem] font-bold'>Contacte-me por Email</h1>
            <span className='text-[1.3rem] font-thin'>
                Site original <Link href="https://shopinfo.com.br" className='underline text-blue-500'>Shopinfo</Link>
            </span>

            <form className='flex justify-center gap-4 items-center w-[30%] m-auto mt-10 relative box-border'>
                <input type="text" placeholder='Digite seu email' className='flex-1'/>
                <button className='bg-[var(--red-text-color)] py-[.35rem] px-4 rounded-sm h-full font-bold uppercase flex items-center justify-center'>
                    Enviar
                </button>
            </form>
        </div>
    </footer>
  )
}

export default Footer;