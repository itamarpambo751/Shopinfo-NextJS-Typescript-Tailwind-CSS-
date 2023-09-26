import React, { useContext } from 'react';
import { BsStarFill } from 'react-icons/bs';
import PublicityCardContentContext from './PublicityCardContentContext';

// import { Container } from './styles';
interface PublicityCardStarsProps {
    value?: number
    left?: Boolean
}

const PublicityCardStars: React.FC<PublicityCardStarsProps> = ({
    value, left
}: PublicityCardStarsProps) => {

  const { resize } = useContext(PublicityCardContentContext)
    
  return (
    <div className={`bg-[var(--background-color)] flex justify-${resize ? (left ? `start scale-[.8] ml-[-25px]`:`center scale-[.8]`):'start'}  items-center gap-[.5rem] w-full`}>
        {resize && <hr className='border-t border-[1px]-white' />}
        <label className="flex justify-start  items-center gap-[.2rem]">
            <i className='text-[var(--star-color)]'>
               <BsStarFill/>
            </i>
            <i className='text-[var(--star-color)]'>
             <BsStarFill/>
            </i>
            <i className='text-[var(--star-color)]'>
                <BsStarFill/>
            </i>
            <i className='text-[var(--star-color)]'>
               <BsStarFill/>
            </i>
            <i className='text-[var(--star-color)]'>
                <BsStarFill/>
            </i>
        </label>
        <small className='text-[#ffc038]'>{value?`(${value})`:""}</small>
    </div>
  )
}

export default PublicityCardStars;