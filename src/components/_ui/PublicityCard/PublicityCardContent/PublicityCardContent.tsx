import React, { ReactNode, useContext } from 'react';
import PublicityCardRootContext from '../PublicityCardContext';
import PublicityCardContentContext from './PublicityCardContentContext';

interface PublicityCardContentProps {
    children: ReactNode
}

const PublicityCardContentContainer: React.FC<PublicityCardContentProps> = ({
    children
}:PublicityCardContentProps) => {

  const { resize } = useContext(PublicityCardRootContext)

  return (
    <PublicityCardContentContext.Provider value={{ resize }}>
      <div className={`text-start w-full h-[100%] flex flex-col justify-between`}>
          { children }
      </div>
    </PublicityCardContentContext.Provider>
  )
}

export default PublicityCardContentContainer;