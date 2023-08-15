import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='h-[750px]'>
        <div className='bg-[#202020] h-[250px] text-center pt-10'>
            <h1 className='text-[2.6rem] font-bold'>Assine a Newsletter Shopinfo</h1>
            <span className='text-[1.3rem] font-thin'>Tenha acesso às promoções e novidades antes de todo mundo.</span>

            <form className='flex justify-center gap-4 items-center w-[60%] m-auto mt-10 relative'>
                <div className='flex-1 flex gap-5'>
                    <input type="text" placeholder='Digite seu nome' className='w-[50%]'/>
                    <input type="text" placeholder='Digite seu email' className='w-[50%]'/>
                </div>
                <button className='w-[12%] h-[100%] px-3 bg-[var(--red-text-color)] mt-2'>
                    <span className='font-bold uppercase flex items-center justify-center gap-2'>Assinar</span>
                </button>
            </form>
        </div>
    </footer>
  )
}

export default Footer;