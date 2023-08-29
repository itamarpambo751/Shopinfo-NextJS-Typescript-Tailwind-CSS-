import React from 'react';
interface BannerProps {
  url: string
}

const MainImage: React.FC<BannerProps> = ({ url }: BannerProps) => {
  return (
    <section className="w-[100%] h-[458px]">
        <img src={url} className='w-[100%] h-[100%] object-cover'/>
    </section>
  )
}

export default MainImage;