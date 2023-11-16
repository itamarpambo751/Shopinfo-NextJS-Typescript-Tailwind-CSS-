import { IconButton, PublicityCard, Section } from "@/components/_ui"
import { BsCart4 } from "react-icons/bs"

export const BuyTogether: React.FC = () => {
    return(
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
							<PublicityCard.Image url='/assets/img/1(9).png'/>
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
							<PublicityCard.Image url='/assets/img/1 (1).png'/>
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
    )
}