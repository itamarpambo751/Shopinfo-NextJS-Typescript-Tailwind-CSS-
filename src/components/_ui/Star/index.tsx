import { BsStarFill } from "react-icons/bs"

export const Star: React.FC = () => {
    return(
        <i className='text-[.8rem] text-[var(--star-color)]'>
            <BsStarFill/>
        </i>
    )
}