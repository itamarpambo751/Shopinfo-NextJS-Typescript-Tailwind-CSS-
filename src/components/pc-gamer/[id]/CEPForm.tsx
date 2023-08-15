import { Truck } from 'phosphor-react'
import React from 'react'

function CEPForm() {
	return (
		<form className='mt-5 space-y-3'>
			<div>
				<span className='flex justify-start items-center gap-3'>
					<i className='text-2xl text-[var(--red-text-color)]'>
						<Truck />
					</i>
					Calcular Frete e Prazo de Entrega
				</span>
			</div>
			<div className='flex justify-start items-center gap-2'>
				<input type="text" placeholder='Digite seu CEP' className='w-[45%]'/>
				<button className='bg-[var(--red-text-color)] py-2 p-3 rounded-md'>Ok</button>
			</div>
		</form>
	)
}

export default CEPForm