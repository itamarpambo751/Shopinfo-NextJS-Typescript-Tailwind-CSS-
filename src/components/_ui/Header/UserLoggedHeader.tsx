import { Heart, Truck } from "phosphor-react"
import { BsCart2 } from "react-icons/bs"
import { CiUser } from "react-icons/ci"

export const UserLoggedHeader: React.FC = () => {
    return(
        <ul className="flex gap-6 pl-6 border-l-2 border-[var(--border-color)]">
            <li className='flex justify-center items-center gap-2 hover:text-[var(--red-color)] transition-colors duration-200 cursor-pointer group'>
                <i className='text-[1.5rem] text-[var(--red-color)] group-hover:scale-110 transition-transform duration-200'>
                    <Truck/>
                </i>
                <span className='text-[.85rem] font-medium text-[var(--text-primary)]'>
                    Rastreio
                </span>
            </li>
            <li className='flex justify-center items-center gap-2 hover:text-[var(--red-color)] transition-colors duration-200 cursor-pointer group'>
                <i className='text-[1.5rem] text-[var(--red-color)] group-hover:scale-110 transition-transform duration-200'>
                    <CiUser/>
                </i>
                <span className='text-[.85rem] font-medium text-[var(--text-primary)]'>
                    Minha conta
                </span>
            </li>
            <li className='flex justify-center items-center gap-2 hover:text-[var(--red-color)] transition-colors duration-200 cursor-pointer group relative'>
                <i className='text-[1.5rem] text-[var(--red-color)] group-hover:scale-110 transition-transform duration-200'>
                    <BsCart2/>
                    <span className='absolute -top-2 -right-2 bg-[var(--red-color)] text-white text-[0.65rem] rounded-full w-5 h-5 flex items-center justify-center font-bold'>0</span>
                </i>
                <span className='text-[.85rem] font-medium text-[var(--text-primary)]'>
                    Carrinho
                </span>
            </li>
			<li className='flex justify-center items-center cursor-pointer group'>
				<i className='text-[1.5rem] text-[var(--red-color)] group-hover:scale-110 group-hover:fill-current transition-all duration-200'>
                    <Heart/>
                </i>
			</li>
        </ul>
    )
}