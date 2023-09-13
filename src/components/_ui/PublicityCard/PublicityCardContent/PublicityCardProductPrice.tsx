import React from 'react';

interface PublicityCardProductPriceProps {
  price: string
  color?: Boolean
  resize?: Boolean
  oldPrice?: string
	extra?: Boolean
}

const PublicityCardProductPrice: React.FC<PublicityCardProductPriceProps> = ({
  oldPrice, price, resize, color, extra
}: PublicityCardProductPriceProps) => {

  return (
    <div className={`flex flex-col ${extra ? '-space-y-4':'-space-y-1'}`}>
      {oldPrice &&<s><small className={` ${extra && 'text-[0.8rem] font-light'}`}>DE: R$ { oldPrice }</small></s>}
        <label className={``}>
            <span className={`${resize ? 'text-[1.2rem]': extra ? 'text-[2.7rem]':'text-[1.8rem]'} ${color ? ' text-[var(--green-color)]':'text-[var(--red-text-color)]'} font-bold`}>
                R$ { price }
            </span>
            {!extra && <small className='text-[.77rem] text-white'> no pix</small>}
        </label>
				{!extra && (
					<small className={`block text-white text-[.77rem]`}>
						10x R$ 255,67 sem juros
					</small>
				) }
				{extra && (
					<small className='text-[1.1rem] text-gray-500 font-light'> No pix</small>
				) }
    </div>
  )
}

export default PublicityCardProductPrice;