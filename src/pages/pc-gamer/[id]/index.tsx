import React, { useState } from 'react';

import { Banner, IconButton, PublicityCard, PublicityLabel, Section } from '@/components/_ui';
import { CaretLeft, CaretRight, Heart, Truck } from 'phosphor-react';
import { BsShare, BsCart4 } from 'react-icons/bs';
import { ComputerImageList, ComputerDescription } from '@/components/pc-gamer';
import { imageUrls } from '@/pages/api/data';

interface UrlObjects {
	url: string,
	current?: Boolean
}

export default () => {

	const [currentImage, setCurrentImage] = useState<UrlObjects>(() => {
		return imageUrls[0]
	})

  return (
    <div>
      <Banner.Gradient.Root>
        <Banner.Gradient.Container section='Home > Computadores Gamer > Exclusivos neologic'>
          <div className='flex flex-1 gap-16 w-full'>
						<ComputerImageList urlList={imageUrls} dispatch={setCurrentImage}/>
						<div className='w-full'>
							<div className='flex items-center justify-start gap-6 w-[300px]'>
								<span className='text-[.8rem]'>
									<PublicityCard.Content.Stars value={234}/>
								</span>
								| <span className='uppercase text-green-500 text-sm'>Neologic</span> |
								<span className='flex justify-start items-center gap-5'>
									<i className='text-[1.8rem]'><BsShare /></i>
									<i className='text-[1.8rem]'><Heart /></i>
								</span>
							</div>
							<div className='grid-reverse-cols w-full h-full'>
								<div className='relative w-full h-full flex flex-col justify-center items-center'>
									<div className='absolute top-2 left-0 flex justify-start items-center gap-3'>
										<PublicityLabel.Root>
											<PublicityLabel.Content bigText='-27%' bold/>
										</PublicityLabel.Root>
										<PublicityLabel.Root free>
											<PublicityLabel.Icon icon={Truck}/>
											<PublicityLabel.Content bigText='' smallText='GRÁTIS'/>
										</PublicityLabel.Root>
									</div>
									<button className='cursor-pointer p-5 rounded-full transition duration-200 hover:bg-[#1e1e1e81] absolute top-[40%] left-0 text-[red] text-2xl'>
										<i className='cursor-pointer'><CaretLeft/></i>
									</button>
									<img src={currentImage.url} className='object-cover scale-[2.3] mt-[-130px] z-[-1]'/>
									<button className='cursor-pointer p-5 rounded-full transition duration-200 hover:bg-[#1e1e1e81] absolute top-[40%] right-0 text-[red] text-2xl'>
										<i className='cursor-pointer'><CaretRight/></i>
									</button>
								</div>
								<ComputerDescription />
							</div>
						</div>
					</div>
        </Banner.Gradient.Container>
      </Banner.Gradient.Root>
			<br /><br /><br />
			<Section.Root>
				<Section.Content>
					<div className='h-[1000px] flex flex-col items-center'>
						<h1 className='text-4xl font-extrabold'>Compre Junto</h1>
						<div className='w-3/5'>
							<PublicityCard.Root
								id='14'
								noHoverEffect
								transparent
							>
								<PublicityCard.Image url='../assets/img/1 (1).png'/>
								<PublicityCard.Content.Root>
									<PublicityCard.Content.Product
										name='Kit Gamer Evolut 4x1 Eg-54 Teclado Abnt2 Led Rainbow + Mouse Usb 1600dpi + Headset Conexão P2 +...'
										noBold
										size={1.2}
										subtring={95}
									/>
									<PublicityCard.Content.Price price='98,89'/>
									<IconButton icon={BsCart4} bold>
										Comprar junto
									</IconButton>
								</PublicityCard.Content.Root>
							</PublicityCard.Root>
						</div>
					</div>
				</Section.Content>
			</Section.Root>
    </div>
  )
}