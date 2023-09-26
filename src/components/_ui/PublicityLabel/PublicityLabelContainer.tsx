import React, { ReactNode } from 'react';

// import { Container } from './styles';
interface PublicityLabelContainerProps {
  children: ReactNode
  expires?: Boolean
  free?: Boolean
  normal?: Boolean
}

const PublicityLabelContainer:
React.FC<PublicityLabelContainerProps> = ({normal, children, expires, free }: PublicityLabelContainerProps) => {
  return (
    <button className='block mb-2'>
      <label
        htmlFor="expires_time"
        className={`text-[var(--background-color)] w-auto flex justify-start items-center gap-2 px-2 py-1 rounded-[.4rem]
        bg-[var(--first-color)] ${expires ? 'bg-[var(--red-text-color)]':''}
        ${free ? 'bg-[var(--orange-color)]':''}  ${normal ? 'bg-[var(--border-color)]':''}`}
      >
        { children }
      </label>
    </button>
  )
}

export default PublicityLabelContainer;