import React, { ReactNode } from 'react';

// import { Container } from './styles';

interface GradientRootProps {
    children: ReactNode
}

const GradientRoot: React.FC<GradientRootProps> = ({
    children
}: GradientRootProps) => {
  return (
    <div className='w-full relative text-[var(--background-color)]'>
        { children }
    </div>
  )
}

export default GradientRoot;