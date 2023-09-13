import React, { ReactNode } from 'react';

// import { Container } from './styles';
interface SectionContainerProps {
    children: ReactNode
}

const SectionContainer: React.FC<SectionContainerProps> = ({
    children
}: SectionContainerProps) => {
  return (
    <section className='mt-[5rem] relative'>
        { children }
    </section>
  )
}

export default SectionContainer;