import React, { useContext } from 'react';
import PublicityCardContentContext from './PublicityCardContentContext';

interface PublicityCardProductNameProps {
    name: string
    subtring?: number
		noBold?: Boolean
		size?: number
}

const PublicityCardProductName: React.FC<PublicityCardProductNameProps> = ({
    name, subtring, noBold, size
}: PublicityCardProductNameProps) => {

  const { resize } = useContext(PublicityCardContentContext)

  return (
    <h1 className={`${!noBold && 'font-bold'} ${size ? 'text-['+size+'rem]':'text-[1rem]'} ${resize && 'mt-[-45px]'}`}>
        { name.substring(0, subtring ? subtring:54) }...
    </h1>
  )
}

export default PublicityCardProductName;