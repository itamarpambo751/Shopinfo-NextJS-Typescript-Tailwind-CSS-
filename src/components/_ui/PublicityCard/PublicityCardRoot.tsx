import React, { ReactNode } from 'react';
import PublicityCardRootContext from './PublicityCardContext';
import Link from 'next/link';

interface PublicityCardRootProps {
  id: string
  children: ReactNode
  resize?: Boolean
	transparent?: Boolean
	noHoverEffect?: Boolean
	className?: string
}
const PublicityCardRoot: React.FC<PublicityCardRootProps> = ({
  children, resize = false, id, transparent, noHoverEffect:effect, className
}: PublicityCardRootProps) => {
	const contextProvider = {
		resize
	}

  return (
    <PublicityCardRootContext.Provider value={contextProvider}>
      <Link href={"pc-gamer/"+id}>
        <div
					data-hover={!effect}
					data-transparent={!transparent}
					data-resize={resize}
					className={`grid data-[resize=false]:grid-cols-2 data-[hover=true]:effect-hover p-5 data-[transparent=true]:bg-[#1e1e1e81] rounded-md data-[resize=true]:grid-row-2 ${className}`}
				>
          {children}
        </div>
      </Link>
    </PublicityCardRootContext.Provider>
  )
}

export default PublicityCardRoot;