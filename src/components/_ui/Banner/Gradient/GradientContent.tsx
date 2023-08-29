import React from 'react';

interface GradientProps {
  title: string
  subtitle: string
  paraghraph: string
}
const GradientContent: React.FC<GradientProps> = ({
  title, subtitle, paraghraph
}: GradientProps) => {
  return (
    <>
      <h1 className='text-5xl font-bold mb-7'>{title}</h1>
      <p className='text-[20px] font-extralight w-[600px]'>
        {subtitle}
      </p>
      <p className='text-[17.6px] pt-14'>
        {paraghraph}
      </p>
    </>
  )
}

export default GradientContent;