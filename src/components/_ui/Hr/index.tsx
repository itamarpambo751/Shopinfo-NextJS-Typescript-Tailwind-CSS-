import React from 'react';

// import { Container } from './styles';
interface HrProps {
    className: string
}
const Hr: React.FC<HrProps> = ({
    className
}) => {
  return (<hr className={`border-1 border-[var(--border-color)] ${className}`}/>)
}

export default Hr;