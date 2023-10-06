import React from 'react';

interface PublicityCardProductPriceProps {
  price: string
  color?: Boolean
  resize?: Boolean
  oldPrice?: string
	extra?: Boolean
  text10x_in_price?: Boolean
}

const PublicityCardProductPrice: React.FC<PublicityCardProductPriceProps> = ({
  oldPrice, price, resize, color, extra, text10x_in_price
}: PublicityCardProductPriceProps) => {

  return (
    <div className={`flex flex-col ${extra ? '-space-y-4':'-space-y-1'}`}>
      {oldPrice &&<s className='text-[var(--text-color-lite)]'><small className={`text-[var(--text-color-lite)] ${extra && 'text-[0.8rem] font-light'}`}>DE: R$ { oldPrice }</small></s>}
        <label className={``}>
            <span className={`${resize ? 'text-[1.2rem]': extra ? 'text-[2.7rem]':'text-[1.8rem]'} ${color ? ' text-[var(--first-color)]':'text-[var(--red-text-color)]'} font-bold`}>
               {text10x_in_price ? "10X Kz "+price:"Kz "+price}
                
            </span>
            {!extra && !text10x_in_price && <small className='text-[.77rem] text-white'> no pix</small>}
        </label>
				{!extra && (
					<small className={`text-[var(--text-color-lite)] block text-[.77rem]`}>
               {text10x_in_price ? "ou por Kz 255,67 no Pix":"10x Kz 255,67 sem juros"}            
					</small>
				) }
				{extra && (
					<small className='text-[1.1rem] text-gray-500 font-light'> No pix</small>
				) }
    </div>
  )
}

export default PublicityCardProductPrice;