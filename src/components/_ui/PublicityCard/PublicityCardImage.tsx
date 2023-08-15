import React, { useContext } from 'react';
import PublicityCardRootContext from './PublicityCardContext';

interface PublicityCardImageProps {
  url: string
}

const PublicityCardImage: React.FC<PublicityCardImageProps> = ({
  url
}: PublicityCardImageProps) => {

  const { resize } = useContext(PublicityCardRootContext)

  return (
    <div className={`w-[${resize ? '210px':'300px'}] h-[${resize ? '210px':'300px'}] flex justify-center items-center`}>
      <img src={url} className={`${!resize && 'scale-[1.3]'} object-cover`}/>
    </div>
  )
}

export default PublicityCardImage;