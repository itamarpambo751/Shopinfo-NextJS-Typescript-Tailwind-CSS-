import Image from 'next/image';
import React from 'react';
interface BannerProps {
  url: string
}

const MainImage: React.FC<BannerProps> = ({ url }: BannerProps) => {
  return (
    <section className="w-[100%] h-[458px] section-banner-image">
        <Image 
          src={url} className='w-[100%] h-[100%] object-cover banner-image'
          alt='banner'
          width={1920}
          height={1080}
        />
    </section>
  )
}

export default MainImage;