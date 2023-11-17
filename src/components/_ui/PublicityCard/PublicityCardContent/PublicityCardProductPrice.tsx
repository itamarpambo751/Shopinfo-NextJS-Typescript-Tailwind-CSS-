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
    <div
			data-extra={extra} className="flex flex-col -space-y-1 data-[extra=true]:space-y-[-3px] ">
      {oldPrice && <small data-extra={extra} className="text-gray-500 data-[extra=true]:text-[1.1rem] font-light">DE: R$ {oldPrice}</small>}
        <label>
            <span data-resize={resize} data-extra={extra} data-color={color} className="text-[1.8rem] text-[var(--red-text-color)] data-[resize=true]:text-[1.2rem] data-[resize=undefined]:data-[extra=true]:text-[2.7rem] data-[color=true]:text-[var(--whatsap-color)] font-bold">
                R$ { price }
            </span>
            {!extra && <small className='text-[.77rem]'> no pix</small>}
        </label>
				{!extra && (
					<small className={`block text-[.77rem]`}>
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