import React, { useId } from 'react';

import { IconButton, PublicityCard, Section } from '@/components/_ui';
import { BsCart4 } from 'react-icons/bs';
import { computerSettings } from '@/pages/api/data';
import { RootingComputer } from '@/components/pc-gamer';

export default ():React.JSX.Element => {
  return (
    <div>
			<RootingComputer />
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

						<div className='flex gap-4 mt-8'>
							<div className='flex-1 flex flex-wrap gap-4'>
									{computerSettings.slice(0, 9).map((setting) => (
										<div key={useId()} className='border w-[221px] h-[180px] border-[var(--border-color-2)] rounded-md flex flex-col justify-center items-center py-10'>
											<img src="../assets/icons/4a.png" className='w-[50px] h-[50px] mb-3'/>
											<span className='uppercase text-[.75rem] text-[var(--border-color)]'>{setting.settingName}</span>
											<p className='text-[.9rem] mt-1'>
												{setting.settingDescription}
											</p>
										</div>
									))}
							</div>

							<div className='w-[42%] h-full'>
								<ul className='w-full text-center'>
									{computerSettings.map((setting, index) => (
										<li
											key={useId()}
											data-mod={index % 2 === 1}
											className='px-5 py-[.5rem] w-full data-[mod=true]:bg-[#1a1a1a]'
											style={{display: 'grid', gridTemplateColumns: '35% auto'}}
										>
											<span className='text-[var(--border-color)] text-left'>{setting.settingName}</span>
											<span className='text-left'>{setting.settingDescription}</span>
										</li>
									))}
									<br />
									<span className='text-[var(--red-color)] text-[1.2rem] underline cursor-pointer hover:text-[var(--red-text-color)]'>Quero saber mais</span>
								</ul>
							</div>
						</div>
					</Section.Content>
				</div>
			</Section.Root>
    </div>
  )
}