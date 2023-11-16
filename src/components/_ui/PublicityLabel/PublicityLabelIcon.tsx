import React, { ElementType, MouseEventHandler } from 'react';

// import { Container } from './styles';
interface PublicityLabelIconProps {
    icon: ElementType
    handleClick?: Function
}

const PublicityLabelIcon: React.FC<PublicityLabelIconProps> = ({ 
    icon: Icon, handleClick
 }: PublicityLabelIconProps) => {

  return (
    <i onClick={handleClick ? () => handleClick():function () {}} className="text-2xl text-white">
        <Icon/>
    </i>
  )
}

export default PublicityLabelIcon;