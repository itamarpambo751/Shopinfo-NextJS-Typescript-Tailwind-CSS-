import React, { ReactNode } from 'react';

// import { Container } from './styles';
interface PublicityLabelContainerProps {
  children: ReactNode
  expires?: Boolean
  free?: Boolean
}

const PublicityLabelContainer:
React.FC<PublicityLabelContainerProps> = ({ children, expires, free }: PublicityLabelContainerProps) => {
  return (
    <button className='block mb-2'>
      <label
				data-expires={expires}
				data-free={free}
        htmlFor="expires_time"
        className="w-auto flex justify-start items-center gap-2 px-2 py-1 rounded-[.4rem]
        bg-[var(--green-color)] data-[expires=true]:bg-[var(--red-text-color)]
        data-[free=true]:bg-[var(--orange-color)]"
      >
        { children }
      </label>
    </button>
  )
}

export default PublicityLabelContainer;