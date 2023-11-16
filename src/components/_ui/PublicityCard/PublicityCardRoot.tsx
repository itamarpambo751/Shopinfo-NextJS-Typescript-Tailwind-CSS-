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
  useLinkJustOnCardBody?: Boolean
}
const PublicityCardRoot: React.FC<PublicityCardRootProps> = ({
  children, resize = false, id, transparent, noHoverEffect:effect, className, useLinkJustOnCardBody
}: PublicityCardRootProps) => {
	const contextProvider = {
		resize
	}

  return (
    <PublicityCardRootContext.Provider value={contextProvider}>
      {!useLinkJustOnCardBody ? (
        <Link href={"pc-gamer/"+id}>
          <div
            data-hover={!effect}
            data-transparent={!transparent}
            data-resize={resize}
            className={`data-[transparent=true]:bg-[#1e1e1e81] grid data-[resize=false]:grid-cols-2 data-[hover=true]:effect-hover rounded-md data-[resize=true]:grid-row-2 ${className} flex flex-col justify-center items-end pb-card-before`}
          >
            {children}
          </div>
        </Link>
      ):(
        <div
            data-hover={!effect}
            data-transparent={!transparent}
            data-resize={resize}
            className={`data-[transparent=true]:bg-[#1e1e1e81] grid data-[resize=false]:grid-cols-2 data-[hover=true]:effect-hover rounded-md data-[resize=true]:grid-row-2 ${className} flex flex-col justify-center items-end pb-card-before`}
          >
            {children}
          </div>
      )}
    </PublicityCardRootContext.Provider>
  )
}

export default PublicityCardRoot;

//