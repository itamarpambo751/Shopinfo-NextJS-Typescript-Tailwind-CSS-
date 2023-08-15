import React from 'react';

// import { Container } from './styles';
interface BannerSectionProps {
    url: string
}

const Section: React.FC<BannerSectionProps> = ({ url }: BannerSectionProps) => {
  return (
    <div className="w-[100%] h-[100px] bg-[var(--red-color)] absolute">
        <img src={url} className="object-cover m-auto"/>
    </div>
  )
}

export default Section;