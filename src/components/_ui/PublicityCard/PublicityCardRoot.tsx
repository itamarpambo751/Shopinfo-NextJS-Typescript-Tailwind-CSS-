import React, { ReactNode } from 'react';
import PublicityCardRootContext from './PublicityCardContext';
import Link from 'next/link';

interface PublicityCardRootProps {
  id: string
  children: ReactNode
  resize?: Boolean
	transparent?: Boolean
	noHoverEffect?: Boolean
  bg?: string
}
const PublicityCardRoot: React.FC<PublicityCardRootProps> = ({
  children, resize, id, transparent, noHoverEffect
}: PublicityCardRootProps) => {
  return (
    <PublicityCardRootContext.Provider value={{ resize: resize ? true : false }}>
      <Link href={`pc-gamer/${id}`}>
        <div className={`

					${!noHoverEffect && 'efect-hover'} p-2
					${!transparent && 'bg-[#1e1e1e]'} rounded-md grid
					grid-${resize ? 'row':'cols'}-2 publicity-card`}
					>
          { children }
        </div>
      </Link>
    </PublicityCardRootContext.Provider>
  )
}

export default PublicityCardRoot;