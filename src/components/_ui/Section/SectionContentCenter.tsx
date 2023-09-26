import React, { ReactNode } from 'react';

// import { Container } from './styles';
interface SectionContentCenterProps {
    children: ReactNode
}

const SectionContentCenter: React.FC<SectionContentCenterProps> = ({
    children
}: SectionContentCenterProps) => {
  return (
    <div className='w-[81%] m-auto '>
        { children }
    </div>
  );
}

export default SectionContentCenter;