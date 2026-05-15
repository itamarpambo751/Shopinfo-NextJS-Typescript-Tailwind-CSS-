import React from 'react';
import {
  FaGamepad,
  FaMoneyBillWave,
  FaCreditCard,
  FaWallet,
  FaShippingFast
} from 'react-icons/fa';

const Settings: React.FC = () => {
  return (
    <ul className='flex justify-between max-md:block max-md:text-left'>
      
      <li className='max-[880px]:w-1/5 flex justify-center max-md:justify-start max-md:px-10 flex-col max-md:flex-row items-center gap-3 max-md:w-[300px] max-md:h-[90px]'>
        <FaGamepad className='text-3xl ' />
        
        <div className='flex justify-center max-md:justify-start flex-col items-center max-md:items-start'>
          <strong className='font-extrabold text-[.9rem]'>
            PC Montado
          </strong>
          <p>Para Jogar</p>
        </div>
      </li>

      <li className='max-[880px]:w-1/5 flex justify-center max-md:justify-start max-md:px-10 flex-col max-md:flex-row items-center gap-3 max-md:w-[300px] max-md:h-[90px]'>
        <FaMoneyBillWave className='text-3xl ' />
        
        <div className='flex justify-center max-md:justify-start flex-col items-center max-md:items-start'>
          <p className='text-[14px]'>
            <strong className='font-extrabold text-[.9rem]'>
              12%
            </strong>{' '}
            OFF
          </p>
          <p className='text-[14px]'>no PIX</p>
        </div>
      </li>

      <li className='max-[880px]:w-1/5 flex justify-center max-md:justify-start max-md:px-10 flex-col max-md:flex-row items-center gap-3 max-md:w-[300px] max-md:h-[90px]'>
        <FaCreditCard className='text-4xl ' />
        
        <div className='flex justify-center max-md:justify-start flex-col items-center max-md:items-start'>
          <p className='text-[14px]'>
            <strong className='font-extrabold text-[.9rem]'>
              10X
            </strong>{' '}
            Sem juros
          </p>
          <p className='text-[14px]'>no cartão</p>
        </div>
      </li>

      <li className='max-[880px]:w-1/5 flex justify-center max-md:justify-start max-md:px-10 flex-col max-md:flex-row items-center gap-3 max-md:w-[300px] max-md:h-[90px]'>
        <FaWallet className='text-3xl ' />
        
        <div className='flex justify-center max-md:justify-start flex-col items-center max-md:items-start'>
          <span className='text-[14px]'>
            Parcele sua compra
          </span>

          <p className='text-[14px]'>
            com{' '}
            <strong className='font-extrabold text-[.9rem]'>
              2 cartões
            </strong>
          </p>
        </div>
      </li>

      <li className='max-[880px]:w-1/5 flex justify-center max-md:justify-start max-md:px-10 flex-col max-md:flex-row items-center gap-3 max-md:w-[300px] max-md:h-[90px]'>
        <FaShippingFast className='text-4xl ' />
        
        <div className='flex justify-center max-md:justify-start flex-col items-center max-md:items-start'>
          <strong className='text-[14px] font-extrabold'>
            Frete Grátis
          </strong>
          <p className='text-[14px]'>
            Sul e Sudeste em PCs
          </p>
        </div>
      </li>

    </ul>
  );
};

export default Settings;