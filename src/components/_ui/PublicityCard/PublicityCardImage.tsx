import React, { useContext } from 'react';
import PublicityCardRootContext from './PublicityCardContext';

interface PublicityCardImageProps {
  url: string
}

const PublicityCardImage: React.FC<PublicityCardImageProps> = ({
  url
}: PublicityCardImageProps) => {

  const PublicityCardContextProps = useContext(PublicityCardRootContext)

  return (
    <div
			data-resize={PublicityCardContextProps.resize}
			className="data-[resize=false]:w-[300px] data-[resize=false]:h-[300px] data-[resize=true]:w-[210px] data-[resize=true]:h-[210px] flex justify-center items-center"
		>
      <img
				src={url}
				data-resize={PublicityCardContextProps.resize}
				className="data-[resize=false]:scale-[1.7] object-cover data-[resize=false]:ml-[-70px]"
			/>
    </div>
  )
}

export default PublicityCardImage;