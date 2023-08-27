import React, { useContext } from 'react';
import { BsStarFill } from 'react-icons/bs';
import PublicityCardContentContext from './PublicityCardContentContext';

// import { Container } from './styles';
interface PublicityCardStarsProps {
    value: number
    left?: Boolean
}

const PublicityCardStars: React.FC<PublicityCardStarsProps> = ({
    value, left
}: PublicityCardStarsProps) => {

  const PublicityCardContextProps = useContext(PublicityCardContentContext)

  return (
    <div data-resize={PublicityCardContextProps.resize} data-left={!left} className="flex data-[resize=true]:data-[left=true]:justify-center data-[resize=true]:data-[left=true]:scale-[.8] items-center gap-[.5rem] w-full">

        {PublicityCardContextProps.resize && <hr className='border-t border-[1px]-white' />}

        <label className="flex justify-start items-center gap-[.2rem]">
            <i className="text-[var(--star-color)]">
                <BsStarFill/>
            </i>
            <i className="text-[var(--star-color)]">
                <BsStarFill/>
            </i>
            <i className="text-[var(--star-color)]">
                <BsStarFill/>
            </i>
            <i className="text-[var(--star-color)]">
                <BsStarFill/>
            </i>
            <i className="text-[var(--star-color)]">
                <BsStarFill/>
            </i>
        </label>
        <small className="text-[#ffc038]">{value}</small>
    </div>
  )
}

export default PublicityCardStars;