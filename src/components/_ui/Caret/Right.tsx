import { CaretRight } from 'phosphor-react';
import React from 'react';

// import { Container } from './styles';

const Right: React.FC = () => {
	return (
		<button className='cursor-pointer p-5 rounded-full transition duration-200 hover:bg-[#1e1e1e81] absolute top-[40%] right-0 text-[red] text-2xl'>
			<i className='cursor-pointer'><CaretRight/></i>
		</button>
	)
}

export default Right;