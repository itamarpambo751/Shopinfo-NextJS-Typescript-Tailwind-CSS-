import Image from 'next/image';
import React from 'react';

// import { Container } from './styles';
interface BannerSectionProps {
    url: string
}

const Section: React.FC<BannerSectionProps> = ({ url }: BannerSectionProps) => {
  return (
    <div className="w-[100%] h-[100px] bg-[var(--red-color)] absolute">
        <Image 
          src={url} className="object-cover m-auto"
          alt=''
          width={1920}
          height={1000}
        />
    </div>
  )
}

export default Section;