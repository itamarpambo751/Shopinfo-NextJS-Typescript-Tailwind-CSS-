import React, { ElementType, MouseEventHandler } from 'react';

// import { Container } from './styles';
interface PublicityLabelIconProps {
    icon: ElementType
    handleClick?: Function
    id?: string
}

const PublicityLabelIcon: React.FC<PublicityLabelIconProps> = ({ 
    icon: Icon, handleClick, id
 }: PublicityLabelIconProps) => {

  return (
    <i onClick={handleClick ? () => handleClick(id):function () {}} className="text-2xl text-white">
        <Icon/>
    </i>
  )
}

export default PublicityLabelIcon;