import { Banner, PublicityCard, PublicityLabel } from '@/components/_ui';
import React, { useState } from 'react';
import { BsShare } from 'react-icons/bs';
import { Heart, Truck } from 'phosphor-react';
import { Caret } from '@/components/_ui/Caret';
import { imageUrls } from '@/pages/api/data';
import ComputerImageList from './ComputerImageList';
import ComputerDescription from './ComputerDescription';
import { IconButtonAddOnFavorites } from '@/components/_ui/ButtonAddOnFavorites';

interface ImagesType {
	url: string
	current?: Boolean
}

const RootingComputer: React.FC = () => {
	const [currentImage, setCurrentImage] = useState<ImagesType>(() => imageUrls[0])
	return (
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

								<button className='text-[1.8rem]'>
									<IconButtonAddOnFavorites id='1'/>
								</button>
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
								<Caret.Left/>
								<img src={currentImage.url} className='object-cover scale-[2.3] mt-[-130px] z-[-1]'/>
								<Caret.Right />
							</div>
							<ComputerDescription />
						</div>
					</div>
				</div>
			</Banner.Gradient.Container>
		</Banner.Gradient.Root>
	)
}

export default RootingComputer;