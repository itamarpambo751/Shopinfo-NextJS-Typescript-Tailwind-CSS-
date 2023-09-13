import React, { useState } from 'react';

import { Banner, Hr, IconButton, PublicityCard, PublicityLabel, Section } from '../../../components/_ui';
// import { CaretLeft, CaretRight, Heart, Truck } from 'phosphor-react';
// import { BsShare, BsCart4 } from 'react-icons/bs';
import { ComputerImageList, ComputerDescription } from '../../../components/pc-gamer';
import { imageUrls } from '../../api/data';

interface UrlObjects {
	url: string,
	current?: Boolean
}

export default function IdPcGamer(){

	const [currentImage, setCurrentImage] = useState<UrlObjects>(() => {
		return imageUrls[0]
	})

  return (
    <div>
      <Banner.Gradient.Root>
        <Banner.Gradient.Container section='Home > Computadores Gamer > Exclusivos neologic'>
<div className='flex w-full'>

<div className='flex flex-col w-full'>

          <div className='flex flex-1 gap-16 w-[100%] w-[80%]'>
						<ComputerImageList urlList={imageUrls} dispatch={setCurrentImage}/>
						<div className='w-full flex flex-col'>
							<div className='flex items-center justify-start gap-6 w-[300px]'>
								<span className='text-[.8rem]'>
									<PublicityCard.Content.Stars value={234}/>
								</span>
								| <span className='uppercase text-green-500 text-sm'>Neologic</span> |
								<span className='flex justify-start items-center gap-5'>
									<i className='text-[1.8rem]'>
									{'<'}	{/* <BsShare /> */}
									</i>
									<i className='text-[1.8rem]'>
									{'>'}	{/* <Heart /> */}
									</i>
								</span>
							</div>
							<div className='grid-reverse-cols  w-full h-full'>
								<div className='relative w-full h-full flex flex-col justify-center items-center'>
									<div className='absolute top-2 left-0 flex justify-start items-center gap-3'>
										<PublicityLabel.Root>
											<PublicityLabel.Content bigText='-27%' bold/>
										</PublicityLabel.Root>
										<PublicityLabel.Root free>
											{/* <PublicityLabel.Icon icon={Truck}/> */}
											<PublicityLabel.Content bigText='' smallText='GRÁTIS'/>
										</PublicityLabel.Root>
									</div>
									<button className='cursor-pointer p-5 rounded-full transition duration-200 hover:bg-[#1e1e1e81] absolute top-[40%] left-0 text-[red] text-2xl'>
										<i className='cursor-pointer'>
											{'<'}{/* <CaretLeft/> */}
										</i>
									</button>
									<img src={currentImage.url} className='object-cover scale-[2.3] mt-[-130px] z-[-1]'/>
									<button className='cursor-pointer p-5 rounded-full transition duration-200 hover:bg-[#1e1e1e81] absolute top-[40%] right-0 text-[red] text-2xl'>
										<i className='cursor-pointer'>
										{'>'}{/* <CaretRight/> */}
											</i>
									</button>
									</div>
								</div>
						<div className='h-[20%] flex gap-2 items-center justify-end'>
							<section className='flex flex-col items-center w-[100px] border-[1px] border-red-200'>
								<div className='h-[70px] flex items-center  justify-center'>
									<img className='w-[30px]' src='../assets/icons/memoria.png'/>
								</div>
								<div className='flex flex-col text-[12px] items-center'>
									<p className='text-zinc-600'>placa de video</p>
									<p>Radeon Vega 7</p>
									<p>Integrado</p>
								</div>
							</section>

							<section className='flex flex-col items-center w-[100px] border-[1px] border-red-200'>
								<div className='h-[70px] flex items-center  justify-center'>
									<img className='w-[30px]' src='../assets/icons/memoria.png'/>
								</div>
								<div className='flex flex-col text-[12px] items-center'>
									<p className='text-zinc-600'>placa de video</p>
									<p>Radeon Vega 7</p>
									<p>Integrado</p>
								</div>
							</section>

							<section className='flex flex-col items-center w-[100px] border-[1px] border-red-200'>
								<div className='h-[70px] flex items-center  justify-center'>
									<img className='w-[30px]' src='../assets/icons/memoria.png'/>
								</div>
								<div className='flex flex-col text-[12px] items-center'>
									<p className='text-zinc-600'>placa de video</p>
									<p>Radeon Vega 7</p>
									<p>Integrado</p>
								</div>
							</section>

							<section className='flex flex-col items-center w-[100px] border-[1px] border-red-200'>
								<div className='h-[70px] flex items-center  justify-center'>
									<img className='w-[30px]' src='../assets/icons/memoria.png'/>
								</div>
								<div className='flex flex-col text-[12px] items-center'>
									<p className='text-zinc-600'>placa de video</p>
									<p>Radeon Vega 7</p>
									<p>Integrado</p>
								</div>
							</section>
						</div>
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
					<div className='h-[400px] flex flex-col items-center'>
						<h1 className='text-4xl font-extrabold'>Compre Junto</h1>
			
	<div className='w-[100%] flex items-center'>						
		<div className='w-[40%] flex'>
							<PublicityCard.Root
								id='14'
								noHoverEffect
								transparent
							>
						<PublicityCard.Image url={currentImage.url}/>
					
						<div className='w-[100%] flex items-center justify-center'>
									<PublicityCard.Content.Product
										name='Pc Gamer AMD Ryzen 5 5600G 16GB bla bla bla bla bla '
										noBold
										size={1.2}
										subtring={95}
									/>
						</div>
							</PublicityCard.Root>
		</div>
		<div className='w-[10%] flex items-center justify-center'>
			<h1 className='text-bold text-[24px] '>+</h1>
		</div>
						<div className='w-[50%] flex'>
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
								<div className='flex flex-col'>
									<p>por mais</p>
								<PublicityCard.Content.Price price='98,89'/>
								</div>	
								
									<IconButton icon={'oo'} bold> 
										Comprar junto
									</IconButton> 
								</PublicityCard.Content.Root>
							</PublicityCard.Root>
							</div>

		</div>

							</div>
				</Section.Content>
			</Section.Root>
<Section.Root>




<Section.Content>
	<div className='h-[500px] flex flex-col items-center'>
		<h1 className='text-4xl font-extrabold'>Desempenho Aproximado</h1>
	<div className='w-[80%] mt-[70px] flex items-center justify-around '>
	
	<i className='cursor-pointer text-red-500'>
		{'<'}{/* <CaretLeft/> */}
	</i>
	<div className='flex items center justify-around w-[80%]'>
	
	<div className='w-[200px] h-[120px] flex items center'>
	<div className='w-[40%] h-full p-2'>
	<img src='../assets/img/game(1).jpg' className='w-[100%] rounded h-full'/> 
	</div>
		
		<div className='w-[60%] flex flex-col p-2'>
			<h1 className='h-[80%]'>GTA V</h1>
			<p className='text-[12px]'>Full HD</p>
			<p className='text-[var(--green-color)] text-[12px]'>75FPS LOW</p>
		</div>
	</div>

	<div className='w-[200px] h-[120px] flex items center'>
		<img src='../assets/img/game(2).jpg' className='w-[40%] h-full'/> 
		<div className='w-[60%] flex flex-col px-1'>
			<h1 className='h-[80%]'>GTA V</h1>
			<p className='text-[12px]'>Full HD</p>
			<p className='text-[var(--green-color)] text-[12px]'>75FPS LOW</p>
		</div>
	</div>

	<div className='w-[200px] h-[120px] flex items center'>
		<img src='../assets/img/game(3).png' className='w-[40%] h-full'/> 
		<div className='w-[60%] flex flex-col px-1'>
			<h1 className='h-[80%]'>GTA V</h1>
			<p className='text-[12px]'>Full HD</p>
			<p className='text-[var(--green-color)] text-[12px]'>75FPS LOW</p>
		</div>
	</div>

	</div>
	
	<i className='cursor-pointer text-red-500'>
		{'>'}{/* <CaretLeft/> */}
	</i>

	</div>
		</div>
				</Section.Content>
			</Section.Root>

<Section.Root>
<Section.Content>
<div className='w-[100%] flex items-center justify-around'>
	<Hr className={'border-red-600 w-[120px]'} />
		<div className='flex flex-col items-center justify-center'>
		<h1 className='uppercase text-[20px]'>produtos Recomendados</h1>
		<p className='uppercase text-[30px] text-bold' >Para voce</p>
		</div>
	<Hr className={'w-[120px] border-red-600'}/>
</div>
<div className='flex w-[100%] h-[600px] items-center justify-center gap-5'>

<PublicityCard.Root id="1" resize>
            <div className="flex justify-start items-center gap-2 mb-12">              
              <PublicityLabel.Root>
                <PublicityLabel.Content bigText="-18%"/>
              </PublicityLabel.Root>
            </div>

            <PublicityCard.Image url="../assets/img/1(7).png"/>
            <PublicityCard.Content.Root>
              <div className="w-[100%]">
                <PublicityCard.Content.Product 
				 name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
              </div>
              <br />
             <PublicityCard.Content.Price  price="1.239,90" oldPrice="2.014,20" color/>
             <div className='w-[100%] flex items-center justify-around'>
				<Hr className={'border-black w-[80px]'}/>
				<PublicityCard.Content.Stars value={28} left/>
				<Hr className={'border-black w-[80px]'}/>
			 </div>
			  

			  <h1 className='text-[#00a74c]'>Radeon Vega 7 Integrado</h1>
			  <div className='flex'>
				<div className='flex'>
					<img src='../assets/icons/processor.png' />
					<p className='ml-[3px]'>'Ryzen 5 5600G'</p>
				</div>
				<div className='flex'>
					<img src='../assets/icons/processor.png' />
					<p className='ml-[3px]'>'Ryzen 5 5600G'</p>
				</div>
				<div className='flex'>
					<img src='../assets/icons/processor.png' />
					<p className='ml-[3px]'>'Ryzen 5 5600G'</p>
				</div>
			  </div>
                      
            </PublicityCard.Content.Root>
  </PublicityCard.Root>

  <PublicityCard.Root id="1" resize>
            <div className="flex justify-start items-center gap-2 mb-12">              
              <PublicityLabel.Root>
                <PublicityLabel.Content bigText="-18%"/>
              </PublicityLabel.Root>
            </div>

            <PublicityCard.Image url="../assets/img/1(7).png"/>
            <PublicityCard.Content.Root>
              <div className="w-[100%]">
                <PublicityCard.Content.Product 
				 name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
              </div>
              <br />
             <PublicityCard.Content.Price  price="1.239,90" oldPrice="2.014,20" color/>
             <div className='w-[100%] flex items-center justify-around'>
				<Hr className={'border-black w-[80px]'}/>
				<PublicityCard.Content.Stars value={28} left/>
				<Hr className={'border-black w-[80px]'}/>
			 </div>
			  

			  <h1 className='text-[#00a74c]'>Radeon Vega 7 Integrado</h1>
			  <div className='flex'>
				<div className='flex'>
					<img src='../assets/icons/processor.png' />
					<p className='ml-[3px]'>'Ryzen 5 5600G'</p>
				</div>
				<div className='flex'>
					<img src='../assets/icons/processor.png' />
					<p className='ml-[3px]'>'Ryzen 5 5600G'</p>
				</div>
				<div className='flex'>
					<img src='../assets/icons/processor.png' />
					<p className='ml-[3px]'>'Ryzen 5 5600G'</p>
				</div>
			  </div>
                      
            </PublicityCard.Content.Root>
  </PublicityCard.Root>
	  
  <PublicityCard.Root id="1" resize>
            <div className="flex justify-start items-center gap-2 mb-12">              
              <PublicityLabel.Root>
                <PublicityLabel.Content bigText="-18%"/>
              </PublicityLabel.Root>
            </div>

            <PublicityCard.Image url="../assets/img/1(7).png"/>
            <PublicityCard.Content.Root>
              <div className="w-[100%]">
                <PublicityCard.Content.Product 
				 name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
              </div>
              <br />
             <PublicityCard.Content.Price  price="1.239,90" oldPrice="2.014,20" color/>
             <div className='w-[100%] flex items-center justify-around'>
				<Hr className={'border-black w-[80px]'}/>
				<PublicityCard.Content.Stars value={28} left/>
				<Hr className={'border-black w-[80px]'}/>
			 </div>
			  

			  <h1 className='text-[#00a74c]'>Radeon Vega 7 Integrado</h1>
			  <div className='flex'>
				<div className='flex'>
					<img src='../assets/icons/processor.png' />
					<p className='ml-[3px]'>'Ryzen 5 5600G'</p>
				</div>
				<div className='flex'>
					<img src='../assets/icons/processor.png' />
					<p className='ml-[3px]'>'Ryzen 5 5600G'</p>
				</div>
				<div className='flex'>
					<img src='../assets/icons/processor.png' />
					<p className='ml-[3px]'>'Ryzen 5 5600G'</p>
				</div>
			  </div>
                      
            </PublicityCard.Content.Root>
  </PublicityCard.Root>

  <PublicityCard.Root id="1" resize>
            <div className="flex justify-start items-center gap-2 mb-12">              
              <PublicityLabel.Root>
                <PublicityLabel.Content bigText="-18%"/>
              </PublicityLabel.Root>
            </div>

            <PublicityCard.Image url="../assets/img/1(7).png"/>
            <PublicityCard.Content.Root>
              <div className="w-[100%]">
                <PublicityCard.Content.Product 
				 name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
              </div>
              <br />
             <PublicityCard.Content.Price  price="1.239,90" oldPrice="2.014,20" color/>
             <div className='w-[100%] flex items-center justify-around'>
				<Hr className={'border-black w-[80px]'}/>
				<PublicityCard.Content.Stars value={28} left/>
				<Hr className={'border-black w-[80px]'}/>
			 </div>
			  

			  <h1 className='text-[#00a74c]'>Radeon Vega 7 Integrado</h1>
			  <div className='flex'>
				<div className='flex'>
					<img src='../assets/icons/processor.png' />
					<p className='ml-[3px]'>'Ryzen 5 5600G'</p>
				</div>
				<div className='flex'>
					<img src='../assets/icons/processor.png' />
					<p className='ml-[3px]'>'Ryzen 5 5600G'</p>
				</div>
				<div className='flex'>
					<img src='../assets/icons/processor.png' />
					<p className='ml-[3px]'>'Ryzen 5 5600G'</p>
				</div>
			  </div>
                      
            </PublicityCard.Content.Root>
  </PublicityCard.Root>

  <PublicityCard.Root id="1" resize>
            <div className="flex justify-start items-center gap-2 mb-12">              
              <PublicityLabel.Root>
                <PublicityLabel.Content bigText="-18%"/>
              </PublicityLabel.Root>
            </div>

            <PublicityCard.Image url="../assets/img/1(7).png"/>
            <PublicityCard.Content.Root>
              <div className="w-[100%]">
                <PublicityCard.Content.Product 
				 name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
              </div>
              <br />
             <PublicityCard.Content.Price  price="1.239,90" oldPrice="2.014,20" color/>
             <div className='w-[100%] flex items-center justify-around'>
				<Hr className={'border-black w-[80px]'}/>
				<PublicityCard.Content.Stars value={28} left/>
				<Hr className={'border-black w-[80px]'}/>
			 </div>
			  

			  <h1 className='text-[#00a74c]'>Radeon Vega 7 Integrado</h1>
			  <div className='flex'>
				<div className='flex'>
					<img src='../assets/icons/processor.png' />
					<p className='ml-[3px]'>'Ryzen 5 5600G'</p>
				</div>
				<div className='flex'>
					<img src='../assets/icons/processor.png' />
					<p className='ml-[3px]'>'Ryzen 5 5600G'</p>
				</div>
				<div className='flex'>
					<img src='../assets/icons/processor.png' />
					<p className='ml-[3px]'>'Ryzen 5 5600G'</p>
				</div>
			  </div>
                      
            </PublicityCard.Content.Root>
  </PublicityCard.Root>

</div>
</Section.Content>
</Section.Root>

<Section.Root>
<Section.Content>
	<div className='flex items-center'>

<section className='flex items-center w-[50%] justify-around'>
	<div className='w-[85px] h-[120px]'>
		<div className='w-[100%] h-[70%] rounded-full border-[5px] border-red-600 flex items-center justify-center'>
			25k
		</div>
		<div className='mt-[3px] text-[12px] w-full text-center w-full'>
			<p>+ de 15mil PCs montados anualmente</p>
		</div>
	</div>

<div className='w-[85px] h-[120px]'>
		<div className='w-[100%] h-[70%] rounded-full border-[5px] border-red-600 flex items-center justify-center'>
			25k
		</div>
		<div className='mt-[3px] text-[12px] w-full text-center w-full'>
			<p>+ de 15mil PCs montados anualmente</p>
		</div>
	</div>

<div className='w-[85px] h-[120px]'>
		<div className='w-[100%] h-[70%] rounded-full border-[5px] border-red-600 flex items-center justify-center'>
			25k
		</div>
		<div className='mt-[3px] text-[12px] w-full text-center w-full'>
			<p>+ de 15mil PCs montados anualmente</p>
		</div>
	</div>
</section>
<section className='flex items-center w-[50%]'>

<i className='w-[40px] h-[40px] flex items-center justify-center font-bold bg-red-600 rounded-full'>{'<'}</i>
<div className='flex items-center w-[80%]'>
	<div className='w-[50%] flex items-center justify-center'>
		<div className='bg-red-600 rounded-[20px] w-[150px] flex items-center h-[220px]'>
			<div className='flex w-full p-1 flex-col w-[200px] bg-zinc-600'>
			<span className='w-full flex items-center'>
			<i>G</i>
				<p>DFPM</p>
			</span>
			<p>
				gauhq uhauhwd qkwoidq iubqowd iquwhohdq iqhwoq iwhoqw iqhwoqw iqwopqw9uinqw98e iqhw90 iqw0qw jq0wr iqwo
			</p>
		</div>
		</div>
	</div>

	<div className='w-[50%]  flex items-center justify-center'>
		<div className='bg-red-600 rounded-[20px] w-[150px] flex items-center h-[220px]'>
			<div className='flex w-full p-1 flex-col w-[200px] bg-zinc-600'>
			<span className='w-full flex items-center'>
			<i>G</i>
				<p>DFPM</p>
			</span>
			<p>
				gauhq uhauhwd qkwoidq iubqowd iquwhohdq iqhwoq iwhoqw iqhwoqw iqwopqw9uinqw98e iqhw90 iqw0qw jq0wr iqwo
			</p>
		</div>
		</div>
	</div>
</div>
<i  className='w-[40px] h-[40px] flex items-center justify-center font-bold bg-red-600 rounded-full'>{'>'}</i>
</section>
	</div>
</Section.Content>
</Section.Root>


<Section.Root>
	<Section.Content>
		<h1>Pergunte e vea opnioes de quem a comprou</h1>
	<div className='flex flex-col w-full h-[500px]'>
	<section className='flex flex-col w-[50%] p-2'>
	<div className='w-[100%] flex justify-between'>
		<div className='flex w-[50%] items-center justify-around'>
			<button className='border-b-[2px] border-red-600 w-[100px] text-red-600'>Geral</button>
			<button className=' w-[100px] text-red-600'>Avaliacoes</button>
			<button className=' w-[100px] text-red-600'>Perguntas</button>
		</div>
		<div className='flex items-center justify-around w-[50%]'>
			<p>*</p><p>*</p><p>*</p><p>*</p><p>*</p>
			<p>234 avaliacoes</p>
			<p>trustovx</p>
		</div>
		</div>
		
		<div className='flex flex-col w-full mt-[50px]'>
			<div className='flex items-center text-[30px]'>
			<p>*</p><p>*</p><p>*</p><p>*</p><p>*</p>
			<p className='text-[14px]'>234</p>
			<p className='text-[14px]'>trustovx</p>
			</div>

			<div className='w-full flex items-center justify-between'>
				<section className='flex flex-col w-[30%]'>
					<div className='w-full flex '>
					<p>*</p><p>*</p><p>*</p><p>*</p><p>*</p>
					<progress value='100'
					className='bg-white'
					></progress>
					<p>{'(200)'}</p>
					</div>
				</section>
				<section className='w-[70%] flex items-center justify-center'>
					<div className='w-[80%] h-[100px] border-[2px] flex items-center justify-center'>
						<p>Nota</p>
						<p className='text-[var(--green-color)] text-[40px]'> 4.7 </p>
						<p>des</p>
					</div>
				</section>
			</div>

<div className='w-[95%] p-2 mt-[5px] rounded-[10px] border flex flex-col h-[200px]'>
			<div className='w-full text-[34px]'>
				''
			</div>
	<div className='h-[70%] w-full'>
		Sukasioqw kqwiioqw oiqiwq iquwhoiqw iuhwohqw iquhwoiq uhwiuq iquhwqwe
	</div>
	<div className='w-[100%] flex items-center justify-between'>
	<div className='flex font-bold text-[22px]'>
	<p>*</p><p>*</p><p>*</p><p>*</p><p>*</p>
	</div>
	<div className='w-full text-[34px]'>
		<p>''</p>
	</div>
	</div>
		</div>
		</div>
<p>33 pessoas acharam esta avaliacao util</p>
<div>
	<button>224 avaliacao</button>
	<button>10 avaliacao</button>
</div>
<div>
	<p>veja todas as avaliacoes</p>
</div>
		</section>	

	</div>		
	</Section.Content>
</Section.Root>

    </div>
  )
}