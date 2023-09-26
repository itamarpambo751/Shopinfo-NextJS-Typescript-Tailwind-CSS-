import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import { Shopinfo } from "@/components";
import { categories } from '@/pages/api/data';
import { Banner, Hr,Categories, IconButton, PublicityCard, PublicityLabel, Section } from '../../../components/_ui';
import { CaretLeft, CaretRight, Heart, Truck } from 'phosphor-react';
import { BsShare, BsCart4 } from 'react-icons/bs';
import {VscThumbsup,VscThumbsdown} from 'react-icons/vsc'
import { ComputerImageList, ComputerDescription } from '../../../components/pc-gamer';
import { imageUrls } from '../../api/data';
import { Card } from '@/cards';
import { product } from '@/pages/api/data';

interface UrlObjects {
	url: string,
	current?: Boolean
}

interface informations{
	id:number
    tipo:string
    name:string
	cod_post:string,
    referencia:string,
    marca:string,
    price:string,
    desconto:string,
    quantidade:number,
    img:string
}

export default function IdPcGamer(){
	const router = useRouter();
	const { id } = router.query;
	const idValor = typeof id === 'string' ? id : '';

	const [OficialProduct, setOficialProduct] = useState<any>({})
	
	const [productos, setProductos] = useState<product>(() => {
		return product;
	  });

	  useEffect(() => {
		const productEncontrado = product.find((i) => i.id === parseInt(idValor));
		if (productEncontrado) {
		  setOficialProduct(productEncontrado);
		}
	  }, []); 

	  useEffect(() => {
		console.log(OficialProduct);
	  }, [OficialProduct]); 


	const [currentImage, setCurrentImage] = useState<UrlObjects>(() => {
		return imageUrls[0]
	})

  return (
    <div>
      <Banner.Gradient.Root>
        <Banner.Gradient.Container section='Home > Computadores Gamer > Exclusivos neologic'>
<div className='flex w-full text-black'>

<div className='flex flex-col w-full'>
          <div className='flex flex-1 gap-16 w-[100%]'>
						<ComputerImageList urlList={imageUrls} dispatch={setCurrentImage}/>
						<div className='w-full flex flex-col'>
							<div className='flex items-center justify-start gap-6 w-[300px]'>
								<span className='text-[.8rem]'>
									<PublicityCard.Content.Stars value={234}/>
								</span>
								| <span className='uppercase text-green-500 text-sm'>{OficialProduct.marca}</span> |
								<span className='flex justify-start items-center gap-5'>
									<i className='text-[1.8rem]'>
									<BsShare />
									</i>
									<i className='text-[1.8rem]'>
									<Heart /> 
									</i>
								</span>
							</div>
							<div className='grid-reverse-cols  w-full h-full'>
								<div className='relative w-full h-full flex flex-col justify-center items-center'>
									<div className='w-full absolute top-2 left-0 flex justify-start items-center gap-3'>
										<PublicityLabel.Root>
											<PublicityLabel.Content bigText={OficialProduct.desconto} bold/>
										</PublicityLabel.Root>
										<PublicityLabel.Root free>
											<PublicityLabel.Icon icon={Truck}/>
											<PublicityLabel.Content bigText='' smallText='GRÁTIS'/>
										</PublicityLabel.Root>
									</div>
									<button className='cursor-pointer p-5 rounded-full transition duration-200 hover:bg-[#1e1e1e81] absolute top-[40%] left-0 text-[red] text-2xl'>
										<i className='cursor-pointer'>
											<CaretLeft/>
										</i>
									</button>
									<img src={OficialProduct.img} className='w-full object-cover scale-[2.3] mt-[-130px] z-[-1]'/>
									<button className='cursor-pointer p-5 rounded-full transition duration-200 hover:bg-[#1e1e1e81] absolute top-[40%] right-0 text-[red] text-2xl'>
										<i className='cursor-pointer'>
										 <CaretRight/>
										</i>
									</button>
									</div>
								</div>
						<div className=' h-[20%] flex gap-2 items-center justify-end'>
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
								<ComputerDescription key={OficialProduct.id} nome={OficialProduct.name} preco={OficialProduct.price} codigo={OficialProduct.cod_post}/>
								
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
			
	<div className='w-[100%] flex mt-[80px] items-center'>						
		<div className='w-[40%] flex justify-between'>
							<PublicityCard.Root
								id='14'
								noHoverEffect
								transparent>

					<div className='w-[100%] flex justify-end'>
						<PublicityCard.Image url={currentImage.url}/>
					</div>			
						<div className='w-[100%] flex items-center justify-center'>
									<PublicityCard.Content.Product
										name='Pc Gamer AMD Ryzen 5 5600G 16GB (Radeon Vega 7 Integrado) SSD 240GB, 500W 80 Plus, Neologic - NLI82731'
										noBold
										size={0.9}
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
										size={0.9}
										subtring={95}
									/>
								<div className='flex flex-col'>
									<p>por mais</p>
								<PublicityCard.Content.Price price='98,89'/>
								</div>	
								
									<IconButton children='Comprar junto' bold /> 
									
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
	
	<i className='cursor-pointer font-semibold text-red-500'>
		 <CaretLeft/> 
	</i>
	<div className='flex items center justify-around w-[80%]'>
	
	<div className='w-[200px] h-[120px] flex items center'>
	<div className='w-[40%] h-full p-2'>
	<img src='../assets/img/game(1).jpg' className='w-[100%] rounded h-full'/> 
	</div>
		
		<div className='w-[60%] flex flex-col p-2'>
			<h1 className='h-[80%] font-bold'>GTA V</h1>
			<p className='text-[12px]'>Full HD</p>
			<p className='text-[var(--first-color)] font-bold text-[12px]'>75FPS LOW</p>
		</div>
	</div>

	<div className='w-[200px] h-[120px] flex items center'>
		<img src='../assets/img/game(2).jpg' className='w-[40%] h-full'/> 
		<div className='w-[60%] flex flex-col px-1'>
			<h1 className='h-[80%] font-bold'>GTA V</h1>
			<p className='text-[12px]'>Full HD</p>
			<p className='text-[var(--first-color)] font-bold text-[12px]'>75FPS LOW</p>
		</div>
	</div>

	<div className='w-[200px] h-[120px] flex items center'>
		<img src='../assets/img/game(3).png' className='w-[40%] h-full'/> 
		<div className='w-[60%] flex flex-col px-1'>
			<h1 className='h-[80%] font-bold'>GTA V</h1>
			<p className='text-[12px]'>Full HD</p>
			<p className='text-[var(--first-color)] font-bold text-[12px]'>75FPS LOW</p>
		</div>
	</div>

	</div>
	
	<i className='cursor-pointer font-semibold text-red-500'>
		 <CaretRight/> 
	</i>

	</div>
		</div>
				</Section.Content>
			</Section.Root>

<Section.Root>
<Section.Content>

<div className='w-[100%] flex items-center justify-around'>
	<Hr className={'border-red-600 w-[120px]'} />
		<div className='flex flex-col items-center text-black justify-center'>
		<h1 className='uppercase text-[20px]'>produtos Recomendados</h1>
		<p className='uppercase text-[30px] text-bold' >Para voce</p>
		</div>
	<Hr className={'w-[120px] border-red-600'}/>
</div>

<div className='flex w-[100%] h-[600px] items-center justify-center gap-5'>

<Card.RecomendedCard />
<Card.RecomendedCard />
<Card.RecomendedCard />
<Card.RecomendedCard />
<Card.RecomendedCard />
			  

</div>
</Section.Content>
</Section.Root>

<Section.Root>
<Section.Content>

	<div className='flex items-center'>
<section className='flex flex-col w-[50%] '>
<div className='w-[100%] flex items-center justify-center text-black'>
	<p className='flex titems-center text-[24px] font-bold mb-[100px]'>Nossos Numeros</p>
</div>

<div className='flex items-center w-[80%] justify-around'>
	<div className='w-[85px] h-[120px]'>
		<div className='w-[100%] h-[70%] rounded-full border-[5px] border-[var(--first-color)] flex items-center justify-center'>
			25k
		</div>
		<div className='mt-[3px] text-[12px] w-full text-center w-full'>
			<p>+ de 15mil PCs montados anualmente</p>
		</div>
	</div>

<div className='w-[85px] h-[120px]'>
		<div className='w-[100%] h-[70%] rounded-full border-[5px] border-[var(--first-color)] flex items-center justify-center'>
			25k
		</div>
		<div className='mt-[3px] text-[12px] w-full text-center w-full'>
			<p>+ de 15mil PCs montados anualmente</p>
		</div>
	</div>

<div className='w-[85px] h-[120px]'>
		<div className='w-[100%] h-[70%] rounded-full border-[5px] border-[var(--first-color)] flex items-center justify-center'>
			25k
		</div>
		<div className='mt-[3px] text-[12px] w-full text-center w-full'>
			<p>+ de 15mil PCs montados anualmente</p>
		</div>
	</div>
</div>
</section>

<section className='flex flex-col  w-[50%]'>

<div className='w-[100%] flex items-center justify-center'>
	<p className='flex titems-center text-[24px] font-bold'>o que os clientes dizem sobre nos</p>
</div>

<div className='flex items-center w-[100%] mt-[40px]'>
<i className='w-[40px] h-[40px] flex items-center justify-center font-bold bg-[var(--first-color)] rounded-full'>{'<'}</i>
<div className='flex items-center w-[80%]'>
	<div className='w-[50%] flex items-center justify-center'>
		<div className='bg-[var(--first-color)] relative rounded-[20px] w-[190px] flex justify-center items-center h-[220px]'>
			<div className='flex absolute text-white  p-1 flex-col w-[200px] h-[90%]  bg-black'>
			<span className='w-full flex items-center'>
			<i>G</i>
				<p>DFPM</p>
			</span>
			<i className='text-[12px]'>
				gauhq uhauhwd qkwoidq iubqowd iquwhohdq iqhwoq iwhoqw iqhwoqw iqwopqw9uinqw98e iqhw90 iqw0qw jq0wr iqwo
			</i>
		</div>
		</div>
	</div>

	<div className='w-[50%]  flex items-center justify-center'>
		<div className='bg-[var(--first-color)] relative rounded-[20px] w-[190px] flex justify-center items-center h-[220px]'>
			<div className='text-white flex absolute  p-1 flex-col w-[200px] h-[90%]  bg-black'>
			<span className='w-full flex items-center'>
			<i>G</i>
				<p>DFPM</p>
			</span>
			<i className='text-[12px]'>
				gauhq uhauhwd qkwoidq iubqowd iquwhohdq iqhwoq iwhoqw iqhwoqw iqwopqw9uinqw98e iqhw90 iqw0qw jq0wr iqwo
			</i>
		</div>
		</div>
	</div>
</div>
<i  className='w-[40px] h-[40px] flex items-center justify-center font-bold bg-[--first-color] rounded-full'>{'>'}</i>
</div>
</section>
	</div>
</Section.Content>
</Section.Root>


<Section.Root>
	<Section.Content>
		<h1 className='text-[24px]'>Pergunte e vea opnioes de quem a comprou</h1>
	<div className='flex w-full h-[500px]'>
	<section className='flex flex-col w-[50%] p-2'>
	<div className='w-[100%] flex justify-between'>
		<div className='flex w-[50%] items-center justify-around'>
			<button className='border-b-[2px] border-red-600 w-[100px] text-red-600'>Geral</button>
			<button className=' w-[100px] text-red-600'>Avaliacoes</button>
			<button className=' w-[100px] text-red-600'>Perguntas</button>
		</div>
		<div className='flex items-center justify-around w-[50%]'>
		<PublicityCard.Content.Stars value={234}/>
			<p>avaliacoes</p>
			<p>trustovx</p>
		</div>
		</div>
		
		<div className='flex flex-col w-full mt-[50px]'>
			<div className='flex items-center'>
			<PublicityCard.Content.Stars />
			<div className='w-full flex'>
			<p className='text-[14px]'>234</p>
			<p className='text-[14px]'>trustovx</p>
			</div>
			
			</div>

			<div className='w-full flex items-center text-[11px] justify-between'>
				<section className='flex flex-col items-center w-[30%]'>
					<div className='w-full flex items-center '>
					<PublicityCard.Content.Stars />
					<progress value='100'
					className='text-white'
					></progress>
					<p>{'(200)'}</p></div>
					<div className='w-full flex items-center '>
					<PublicityCard.Content.Stars />
					<progress value='100'
					className='text-white'
					></progress>
					<p>{'(20)'}</p></div>
					<div className='w-full flex items-center '>
					<PublicityCard.Content.Stars />
					<progress value='100'
					className='text-white'
					></progress>
					<p>{'(4)'}</p></div>
					<div className='w-full flex items-center '>
					<PublicityCard.Content.Stars />
					<progress value='100'
					className='text-white'
					></progress>
					<p>{'(2)'}</p></div>
					<div className='w-full flex items-center '>
					<PublicityCard.Content.Stars />
					<progress value='100'
					className='text-white'
					></progress>
					<p>{'(8)'}</p></div>
					
				</section>

				<section className='w-[70%] flex items-center justify-center'>
					<div className='w-[80%] font-bold uppercase h-[90px] border-[2px] flex items-center justify-center'>
						<p>Nota</p>
						<p className='text-[var(--green-color)] text-[40px]'> 4.7 </p>
						<p>des</p>
					</div>
				</section>
			</div>

<div className='w-[95%] p-2 mt-[5px] rounded-[5px] border flex flex-col h-[200px]'>
			<div className='w-full text-[34px]'>
				''
			</div>

	<div className='h-[60%] w-full px-[40px] text-[12] flex items-center '>
<p>sajdias ahusiha uiahs8uf kshudif  sjnbduifsudhsudf shdof</p>
<p className='text-red-700 font-bold '>Leia+</p>
</div>

	<div className='w-full flex items-center justify-around'>
	<div className='flex font-bold w-[20%]'>
	<PublicityCard.Content.Stars />
	</div>
	<div className='w-[80%] flex items-center justify-end text-[34px]'>
		<p>''</p>
	</div>

	</div>

		</div>
		</div>
<p className='text-[11px]'>33 pessoas acharam esta avaliacao util</p>
<div className='flex justify-between w-[80%]'>
	<PublicityLabel.Root expires={true}>
    <PublicityLabel.Content  bigText="224 avaliacao"/>
    <VscThumbsup/>
      </PublicityLabel.Root>

<PublicityLabel.Root  normal={true}>
    <PublicityLabel.Content  bigText="10 avaliacao" />
	<VscThumbsdown/>
</PublicityLabel.Root>
</div>

<div className='flex items-center w-[80%] justify-center text-[12px]'>
	<p>{"(veja todas as avaliacoes)"}</p>
</div>
		</section>	
<section className='w-[50%] flex flex-col px-[15px]'>
	<input className='h-[130px]' placeholder='ficou com alguma duvida? pergunte aqui!'/>
<div className='w-full mt-[10px]'>
	<PublicityLabel.Root expires={true}>
    <PublicityLabel.Content widthTotal={true} bigText="ENVIAR PERGUNTA!"/>
     </PublicityLabel.Root>
</div>	
	<div>
		<section className='px-2 mt-[8px] flex border border-zinc-700 h-[80px] rounded items-center'>
			<p>Oi, qual wTAFSTD ? YASDYASD?</p>
		</section>

		<section className='px-2 mt-[8px] flex border border-zinc-700 h-[80px] rounded items-center'>
			<p>Oi, qual wTAFSTD ? YASDYASD?</p>
		</section>

		<section className='px-2 mt-[8px] flex border border-zinc-700 h-[80px] rounded items-center'>
			<p>Oi, qual wTAFSTD ? YASDYASD?</p>
		</section>

	</div>
<div className='flex items-center w-[100%] mt-[10px] justify-center text-[12px]'>
	<p>{"(veja todas as avaliacoes)"}</p>
</div>				
</section>

	</div>	
	<div className='flex justify-end w-[100%] text-[11px]'>
		<p>Avalicao reais, auditadas por</p>

		<p>trustovx</p>
	</div>	
	</Section.Content>
</Section.Root>

<div className='w-[100%] flex items-center justify-around'>
	<Hr className={'border-red-600 w-[120px]'} />
		<div className='flex flex-col items-center justify-center'>
		<h1 className='uppercase text-[20px]'>Aproveite e</h1>
		<p className='uppercase text-[30px] text-bold' >compre junto</p>
		</div>
	<Hr className={'w-[120px] border-red-600'}/>
</div>
<div className='w-full flex items-center justify-center'>

<main className='flex w-[80%] h-[600px] items-center justify-around gap-16'>

<Card.CommersCard img='./assets/img/3.png'/>
<Card.CommersCard img='./assets/img/3.png' />
<Card.CommersCard img='./assets/img/3.png' />
<Card.CommersCard img='./assets/img/3.png'/>
<Card.CommersCard img='./assets/img/3.png'/>

</main>
</div>

<Section.Root>
<div className='w-[100%] mt-[-70px]'>
  <Section.Content>
	<div className='items-center flex justify-center w-full'>
	<p className='text-[24px]'>De um Ugrade no seu PC Gamer com os acessorios Shopinfo</p>

	</div>
	<div className='mt-5'/>
	<Categories categories={categories}/>
  </Section.Content>
</div>
</Section.Root>

<Section.Root>
<Section.Content>
	<div className='w-full'>
	<Banner.Image url='./assets/img/bcg2.jpg' />
	</div>
</Section.Content>
</Section.Root>


<Section.Root>
	<div className='flex flex-col w-full items-center justify-center'>
			<section className='flex w-full items-center justify-center'>
				<img src='./assets/icons/footer-stamps-boletoflex.png'/>
			</section>
			<div className='flex mt-[30px] text-[22px] font-bold items-center justify-center w-[40%]'>
				<p>
					ijqowehoihef  jnheif oiiejf uhqiwd uioehf noih
					ijqowehoihef  jnheif oiiejf uhqiwd uioehf noih
					ijqowehoihef  jnheif oiiejf uhqiwd uioehf noih
					ijqowehoihef  jnheif oiiejf uhqiwd uioehf noih
					ijqowehoihef  jnheif oiiejf uhqiwd uioehf noih
					ijqowehoihef  jnheif oiiejf uhqiwd uioehf noih
					ijqowehoihef  jnheif oiiejf uhqiwd uioehf noih
					ijqowehoihef  jnheif oiiejf uhqiwd uioehf noih
					ijqowehoihef  jnheif oiiejf uhqiwd uioehf noih
					ijqowehoihef  jnheif oiiejf uhqiwd uioehf noih
					ijqowehoihef  jnheif oiiejf uhqiwd uioehf noih
				</p>
			</div>
	</div>
</Section.Root>
    </div>
  )
}