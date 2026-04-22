import { CaretLeft } from 'phosphor-react';
import React from 'react';

// import { Container } from './styles';

const Left: React.FC = () => {
	return (
		<button className='cursor-pointer p-5 rounded-full transition duration-200 hover:bg-gray-100 absolute top-[40%] left-0 text-[var(--red-color)] text-2xl'>
			<i className='cursor-pointer'>
				<CaretLeft/>
			</i>
		</button>
	)
}

export default Left;