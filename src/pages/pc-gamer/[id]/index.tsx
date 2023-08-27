import React, { useState } from 'react';

import { Banner, IconButton, PublicityCard, PublicityLabel, Section } from '@/components/_ui';
import { CaretLeft, CaretRight, Heart, Truck } from 'phosphor-react';
import { BsShare, BsCart4 } from 'react-icons/bs';
import { ComputerImageList, ComputerDescription } from '@/components/pc-gamer';
import { imageUrls } from '@/pages/api/data';
import { Caret } from '@/components/_ui/Caret';

interface IImages {
	url: string,
	current?: Boolean
}


export default ():React.JSX.Element => {

	const [currentImage, setCurrentImage] = useState<IImages>(() => imageUrls[0])

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
			<br /><br /><br />
			<Section.Root>
				<Section.Content>
					<div className='flex flex-col items-center'>
						<h1 className='text-[3rem] font-extrabold'>Compre Junto</h1>
						<div className='flex items-center justify-between mt-5'>
							<div className='flex-1'>
								<PublicityCard.Root
									id='14'
									noHoverEffect
									transparent
								>
									<PublicityCard.Image url='../assets/img/1(9).png'/>
									<PublicityCard.Content.Root>
										<div className='w-full h-full flex items-center justify-normal'>
											<PublicityCard.Content.Product
												name='Kit Gamer Evolut 4x1 Eg-54 Teclado Abnt2 Led Rainbow + Mouse Usb 1600dpi + Headset Conexão P2 +...'
												noBold
												size={1.2}
												subtring={100}
											/>
										</div>
									</PublicityCard.Content.Root>
								</PublicityCard.Root>
							</div>

							<strong className='text-4xl font-extrabold'>+</strong>

							<div className='flex-1'>
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
										<br />
										<IconButton icon={BsCart4} bold>
											Comprar junto
										</IconButton>
									</PublicityCard.Content.Root>
								</PublicityCard.Root>
							</div>
						</div>
					</div>

					<div className='flex flex-col justify-center items-center mt-24'>
						<h1 className='text-2xl font-bold'>DESEMPENHO APROXIMADO</h1>

						<ul className='flex gap-28 justify-between items-center mt-8 relative'>

							{/* <Caret.Left /> */}

							<li className='flex w-48 h-20'>
								<img src="../assets/img/game(3).png"/>
								<div className='px-2 flex flex-col justify-between'>
									<strong>GTA V</strong>

									<p className='flex flex-col'>
										<span className='text-[.9rem] font-semibold text-[--whatsap-color]'>FULL HD:</span>
										<span className='text-[.9rem] font-semibold'>75 FPS LOW</span>
									</p>
								</div>
							</li>
							<li className='flex w-48 h-20'>
								<img src="../assets/img/game(1).jpg"/>
								<div className='px-2 flex flex-col justify-between'>
									<strong>CS:GO</strong>

									<p className='flex flex-col'>
										<span className='text-[.9rem] font-semibold text-[--whatsap-color]'>FULL HD:</span>
										<span className='text-[.9rem] font-semibold'>95 FPS LOW</span>
									</p>
								</div>
							</li>
							<li className='flex w-48 h-20'>
								<img src="../assets/img/game(8).png"/>
								<div className='px-2 flex flex-col justify-between'>
									<strong>VALORANT</strong>

									<p className='flex flex-col'>
										<span className='text-[.9rem] font-semibold text-[--whatsap-color]'>FULL HD:</span>
										<span className='text-[.9rem] font-semibold'>150 FPS LOW</span>
									</p>
								</div>
							</li>

							{/* <Caret.Right /> */}
						</ul>
					</div>
				</Section.Content>
				<div className='mt-32 h-[1000px]'>
					<Section.Content>
						<h1 className='text-6xl font-bold'>Especificações</h1>

						<div className='flex gap-7 mt-8'>
							<div className='flex-1 h-full space-y-4'>
								<div className='flex gap-4'>
									<div className='border border-[var(--border-color-2)] rounded-md flex-1 flex flex-col justify-center items-center py-10'>
										<img src="../assets/icons/4a.png" className='w-[50px] h-[50px] mb-3'/>
										<span className='uppercase text-[.75rem] text-[var(--border-color)]'>Processador</span>
										<p className='text-[.9rem] mt-1'>
											Ryzen 5 5600G
										</p>
									</div>
									<div className='border border-[var(--border-color-2)] rounded-md flex-1 flex flex-col justify-center items-center py-10'>
										<img src="../assets/icons/5a.png" className='w-[50px] h-[50px] mb-3'/>
										<span className='uppercase text-[.75rem] text-[var(--border-color)]'>Fonte</span>
										<p className='text-[.9rem] mt-1'>
											500W 80 Plus
										</p>
									</div>
									<div className='border border-[var(--border-color-2)] rounded-md flex-1 flex flex-col justify-center items-center py-10'>
										<img src="../assets/icons/2a.png" className='w-[50px] h-[50px] mb-3'/>
										<span className='uppercase text-[.75rem] text-[var(--border-color)]'>Placa Mãe</span>
										<p className='text-[.9rem] mt-1'>
											A520M
										</p>
									</div>
								</div>
								<div className='flex gap-4'>
									<div className='border border-[var(--border-color-2)] rounded-md flex-1 flex flex-col justify-center items-center py-10'>
										<img src="../assets/icons/1a.png" className='w-[50px] h-[50px] mb-3'/>
										<span className='uppercase text-[.75rem] text-[var(--border-color)]'>Processador</span>
										<p className='text-[.9rem] mt-1'>
											Ryzen 5 5600G
										</p>
									</div>
									<div className='border border-[var(--border-color-2)] rounded-md flex-1 flex flex-col justify-center items-center py-10'>
										<img src="../assets/icons/4a.png" className='w-[50px] h-[50px] mb-3'/>
										<span className='uppercase text-[.75rem] text-[var(--border-color)]'>Fonte</span>
										<p className='text-[.9rem] mt-1'>
											500W 80 Plus
										</p>
									</div>
									<div className='border border-[var(--border-color-2)] rounded-md flex-1 flex flex-col justify-center items-center py-10'>
										<img src="../assets/icons/2a.png" className='w-[50px] h-[50px] mb-3'/>
										<span className='uppercase text-[.75rem] text-[var(--border-color)]'>Placa Mãe</span>
										<p className='text-[.9rem] mt-1'>
											A520M
										</p>
									</div>
								</div>
								<div className='flex gap-4'>
									<div className='border border-[var(--border-color-2)] rounded-md flex-1 flex flex-col justify-center items-center py-10'>
										<img src="../assets/icons/4a.png" className='w-[50px] h-[50px] mb-3'/>
										<span className='uppercase text-[.75rem] text-[var(--border-color)]'>Processador</span>
										<p className='text-[.9rem] mt-1'>
											Ryzen 5 5600G
										</p>
									</div>
									<div className='border border-[var(--border-color-2)] rounded-md flex-1 flex flex-col justify-center items-center py-10'>
										<img src="../assets/icons/5a.png" className='w-[50px] h-[50px] mb-3'/>
										<span className='uppercase text-[.75rem] text-[var(--border-color)]'>Fonte</span>
										<p className='text-[.9rem] mt-1'>
											500W 80 Plus
										</p>
									</div>
									<div className='border border-[var(--border-color-2)] rounded-md flex-1 flex flex-col justify-center items-center py-10'>
										<img src="../assets/icons/2a.png" className='w-[50px] h-[50px] mb-3'/>
										<span className='uppercase text-[.75rem] text-[var(--border-color)]'>Placa Mãe</span>
										<p className='text-[.9rem] mt-1'>
											A520M
										</p>
									</div>
								</div>
							</div>
							<div className='w-[42%] h-full'>

							</div>
						</div>
					</Section.Content>
				</div>
			</Section.Root>
    </div>
  )
}