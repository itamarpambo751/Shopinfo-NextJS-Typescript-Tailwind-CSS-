import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
        <div className='bg-gradient-to-r from-[var(--surface-muted)] to-[var(--background-color)] h-[250px] text-center pt-10 border-t border-[var(--border-color)]'>
            <h1 className='text-[2.6rem] font-bold text-[var(--text-primary)]'>Contacte-me por Email</h1>
            <span className='text-[1.3rem] font-thin text-[var(--text-secondary)]'>
                Site original <Link href="https://shopinfo.com.br" className='underline text-[var(--red-color)] hover:text-[var(--orange-color)]'>Shopinfo</Link>
            </span>

            <form className='flex justify-center gap-4 items-center w-[30%] m-auto mt-10 relative box-border'>
                <input type="text" placeholder='Digite seu email' className='flex-1'/>
                <button className='bg-[var(--red-color)] hover:bg-[var(--red-text-color)] py-[.35rem] px-4 rounded-sm h-full font-bold uppercase flex items-center justify-center text-white transition-colors duration-200'>
                    Enviar
                </button>
            </form>
        </div>
    </footer>
  )
}

export default Footer;