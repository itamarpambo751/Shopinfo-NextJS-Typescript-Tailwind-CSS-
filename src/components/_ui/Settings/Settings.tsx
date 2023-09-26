import React from 'react';

const Settings: React.FC = () => {
  return (
    <ul className='flex justify-between 
    max-md:w-full max-md:flex-wrap  max-md:justify-center '>
       
        <li className='w-1/5 max-md:w-[50%] max-md:mt-[7px] flex justify-center flex-col items-center gap-3'>
            <img src="./assets/icons/4a.png" className='w-[2rem]'/>
            <div className='flex justify-center flex-col items-center'>
                <strong className='font-extrabold text-[.9rem]'>
                  PC Montado
                </strong>
                <p>Para Jogar</p>
            </div>
        </li>

        <li className='w-1/5 max-md:w-[50%] max-md:mt-[7px] flex justify-center flex-col items-center gap-3'>
            <img src="./assets/icons/5a.png" className='w-[2rem]'/>
            <div className='flex justify-center flex-col items-center'>
                <p className='text-[14px]'>
                  <strong className='font-extrabold text-[.9rem]'>
                    12%
                  </strong> 
                  OFF
                </p>
                <p className='text-[14px]'>no PIX</p>
            </div>
        </li>
        <li className='w-1/5 max-md:w-[50%] max-md:mt-[7px] flex justify-center flex-col items-center gap-3'>
            <img src="./assets/icons/3a.png" className='w-[4rem]'/>
            <div className='flex justify-center flex-col items-center'>
                <p className='text-[14px]'>
                  <strong className='font-extrabold text-[.9rem]'>
                    10X
                  </strong> 
                  Sem juros
                </p>
                <p className='text-[14px]'>no cartão</p>
            </div>
        </li>
        <li className='w-1/5 flex max-md:w-[50%] max-md:mt-[7px] justify-center flex-col items-center gap-3'>
            <img src="./assets/icons/2a.png" className='w-[2rem]'/>
            <div className='flex justify-center flex-col items-center'>
                <span className='text-[14px]'>
                  Parcele sua compra
                </span>
                <p className='text-[14px]'>
                  com  
                  <strong className='font-extrabold text-[.9rem]'>
                    2 cartões
                  </strong>
                </p>
              </div>
            </li>
        <li className='w-1/5 max-md:w-[50%] max-md:mt-[7px] flex justify-center flex-col items-center gap-3'>
            <img src="./assets/icons/1a.png" className='w-[3rem]'/>
            <div className='flex justify-center flex-col items-center'>
                <strong className='text-[14px] font-extrabold'>
                  Frete Grátis
                </strong>
                <p className='text-[14px]'>Sul e Sudeste em PCs</p>
            </div>
        </li>
    </ul>
  )
}

export default Settings;