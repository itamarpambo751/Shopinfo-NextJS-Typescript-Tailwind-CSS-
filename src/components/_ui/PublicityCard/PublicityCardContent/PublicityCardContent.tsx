import React, { ReactNode, useContext } from 'react';
import PublicityCardRootContext from '../PublicityCardContext';
import PublicityCardContentContext from './PublicityCardContentContext';

interface PublicityCardContentProps {
    children: ReactNode
}

const PublicityCardContentContainer: React.FC<PublicityCardContentProps> = ({
    children
}:PublicityCardContentProps) => {

  const PublicityCardContextProps = useContext(PublicityCardRootContext)

  return (
    <PublicityCardContentContext.Provider value={PublicityCardContextProps}>
      <div className="text-start w-full h-[100%] flex flex-col justify-between box-border">
          {children}
      </div>
    </PublicityCardContentContext.Provider>
  )
}

export default PublicityCardContentContainer;