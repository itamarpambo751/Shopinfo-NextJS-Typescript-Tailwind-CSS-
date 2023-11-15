import { Heart, Truck } from "phosphor-react"
import { BsCart2 } from "react-icons/bs"
import { CiUser } from "react-icons/ci"

export const UserLoggedHeader: React.FC = () => {
    return(
        <ul className="flex gap-2  pl-3 border-l-2 border-[var(--border-color)]">
            <li className='flex justify-center items-end gap-1'>
                <i className='text-[1.6rem] text-[var(--red-color)]'>
                    <Truck/>
                </i>
                <span className='text-[.9rem]'>
                    Rastreio
                </span>
            </li>
            <li className='flex justify-center items-end gap-1'>
                <i className='text-[1.6rem] text-[var(--red-color)]'>
                    <CiUser/>
                </i>
                <span className='text-[.9rem]'>
                    Minha conta
                </span>
            </li>
            <li className='flex justify-center items-end gap-1'>
                <i className='text-[1.6rem] text-[var(--red-color)]'>
                    <BsCart2/>
                </i>
                <span className='text-[.9rem]'>
                    Carrinho
                </span>
            </li>
			<li className='flex justify-center items-end'>
				<i className='text-[1.5rem] text-[var(--red-color)]'>
                    <Heart/>
                  </i>
			</li>
        </ul>
    )
}