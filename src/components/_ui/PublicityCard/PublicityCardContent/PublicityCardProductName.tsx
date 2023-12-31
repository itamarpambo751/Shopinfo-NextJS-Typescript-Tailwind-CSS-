import React, { useContext } from 'react';
import PublicityCardContentContext from './PublicityCardContentContext';

interface PublicityCardProductNameProps {
    name: string
    subtring?: number
		noBold?: Boolean
		size?: number
		className?: string
}

const PublicityCardProductName: React.FC<PublicityCardProductNameProps> = ({
    name, subtring, noBold, size, className
}: PublicityCardProductNameProps) => {

  const PublicityCardContextProps = useContext(PublicityCardContentContext)

  return (
    <h1
			data-resize={PublicityCardContextProps.resize}
			data-bold={!noBold}
			className={`data-[bold=true]:font-bold data-[resize=true]:mt-[-45px] ${size ? 'text-['+size+'rem]':'text-[1rem]'} ${className}`}>
        { name.substring(0, subtring ? subtring:54) }...
    </h1>
  )
}

export default PublicityCardProductName;