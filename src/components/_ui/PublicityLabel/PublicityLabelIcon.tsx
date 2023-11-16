import React, { ElementType, MouseEventHandler } from 'react';

// import { Container } from './styles';
interface PublicityLabelIconProps {
  icon: ElementType
}

const PublicityLabelIcon: React.FC<PublicityLabelIconProps> = ({ 
    icon: Icon
 }: PublicityLabelIconProps) => {

  return (
    <i className="text-2xl text-white">
        <Icon/>
    </i>
  )
}

export default PublicityLabelIcon;