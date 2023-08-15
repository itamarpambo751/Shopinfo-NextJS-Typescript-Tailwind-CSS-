import { IconButton, PublicityCard } from '@/components/_ui';
import React from 'react';
import { BsBag, BsCart4 } from 'react-icons/bs';
import { CEPForm } from '..';

const ComputerDescription: React.FC = () => {
	return (
		<div className='pt-2'>
			<div className='flex justify-start items-center gap-3'>
				<button className='block mb-2'>
					<label
						htmlFor="expires_time"
						className="text-[.7rem] font-bold uppercase bg-violet-600 w-auto flex justify-start items-center gap-2 px-2 py-[.4rem] rounded-[.3rem]"
					>
						Despacho 24h
					</label>
				</button>
				<button className='block mb-2'>
					<label
						htmlFor="expires_time"
						className="text-[.7rem] font-bold uppercase bg-[#1ecebd] text-black w-auto flex justify-start items-center gap-2 px-2 py-[.4rem] rounded-[.3rem]"
					>
						Pc Montado
					</label>
				</button>
				<button className='block mb-2'>
					<label
						htmlFor="expires_time"
						className="text-[.7rem] font-bold uppercase bg-yellow-500 text-black w-auto flex justify-start items-center gap-2 px-2 py-[.4rem] rounded-[.3rem]"
					>
						12% no pix agosto
					</label>
				</button>
			</div>
			<h1 className='mt-2 mb-3 text-[1.7rem] leading-9'>Pc Gamer AMD Ryzen 5 5600G 16GB (Radeon Vega 7 Integrado) SSD 240GB, 500W 80 Plus, Neologic - NLI82731</h1>
			<span className='uppercase text-[var(--border-color)]'>
				cód. 082731
			</span>

			<div className='mt-5 mb-3 flex justify-between items-center gap-14'>
				<PublicityCard.Content.Price oldPrice='3.062,08' price='2.249,90' extra/>
				<IconButton icon={BsCart4} uppercase bold>
					Comprar
				</IconButton>
			</div>

			<span className='text-green-400 text-sm'>Economize R$ 306,80</span>
			<ul className='mt-5 space-y-2'>
				<li className='w-[27%] leading-5 flex justify-start items-center gap-3 text-[var(--border-color)]'>
					<i className='text-2xl'>
						<BsBag/>
					</i>
					<span className='text-sm'>parcele sua compra no boleto</span>
				</li>
				<li className='w-[27%] leading-5 flex justify-start items-center gap-3 text-[var(--border-color)]'>
					<i className='text-2xl'>
						<BsBag/>
					</i>
					<span className='text-sm'>á vista no cartão por <span className='text-green-400'>R$ 2.428,80</span></span>
				</li>
				<li className='w-[30%] leading-5 flex justify-start items-center gap-3 text-[var(--border-color)]'>
					<i className='text-2xl'>
						<BsBag/>
					</i>
					<span className='text-sm'>parcelado no cartão em 10X de R$ 255,67</span>
				</li>
			</ul>
			<CEPForm />
		</div>
	)
}

export default ComputerDescription;