import React, { ReactNode } from 'react';

// import { Container } from './styles';
interface SectionContentCenterProps {
    children: ReactNode
}

const SectionContentCenter: React.FC<SectionContentCenterProps> = ({
    children
}: SectionContentCenterProps) => {
  return (
    <div className='max-md:w-[95%] w-[81%]  m-auto'>
        { children }
    </div>
  );
}

export default SectionContentCenter;