import React from 'react';

import { Categories, Hr, Section } from '@/components/_ui';
import { BsCart4, BsStarFill } from 'react-icons/bs';
import { spreed_categories } from '@/pages/api/data';
import * as This from '@/components/pc-gamer';
import { GoogleLogo, Star } from 'phosphor-react';
import { Caret } from '@/components/_ui/Caret';
import { PublicityCardV3 } from '@/components/_ui/PublicityCard/v3';
import { PublicityCardV2 } from '@/components/_ui/PublicityCard/v2';
import Image from 'next/image';

export default function page() {
  return (
    <>
		<This.RootingComputer />
		<div className='mt-[120px]'/>
		<Section.Root>
			<This.BuyTogether />
			<This.Specifications />	
		</Section.Root>
		<Section.Root>
			<Section.Content>
				<div className='flex mb-14'>
					<div className='w-1/2'>
						<h1 className='text-3xl font-extrabold'>Review</h1>
						<div className='mt-7 w-[480px] h-[240px] border'>
							{/* <img src="../assets/img/review.jpg" alt=""/> */}
						</div>
					</div>
					<div className='w-1/2'>
						<Hr className='w-full'/>
						<div className='flex mt-14'>
							<div className='w-1/2 flex flex-col gap-2'>
								<span className='p'>Recomendações</span>
								<p className='p'>Informação Indisponivel</p>
							</div>
							<div className='w-1/2 flex flex-col gap-2'>
								<span className='p'>Imagem fabricante</span>
								<p className='p'>
									Meramente ilustrativa. A marca das paças pode variar de acordo com o estoque momentáneo em nossa fábrica, garantimos sempre manter o nível de qualidade dos produtos a atender o mínimo estipulado no computador, nunca um modelo inferior
								</p>
							</div>
						</div>
					</div>
				</div>
			</Section.Content>
			<div className='mt-[120px]'/>
			<Section.Content>
				<div className='flex justify-center items-center gap-36'>
					<Hr className='w-1/12 border-[var(--red-color)]'/>
					<div className='text-center flex flex-col items-center leading-7'>
						<span className='uppercase text-[1.1rem]'>Produtos recomendados</span>
						<strong className='uppercase text-[2rem] font-bold'>Para você</strong>
					</div>
					<Hr className='w-1/12 border-[var(--red-color)]'/>
				</div>
				<div className="flex justify-between items-center m-auto mt-10 mb-20">
					{[1, 2, 3, 4, 5].map(() => (
						<PublicityCardV2 />
					))}
				</div>
			</Section.Content>
			<This.OurNumbers />
			<This.Avaliations />
			<Section.Content>
				<div className='flex justify-center items-center gap-36'>
					<Hr className='w-1/12 border-[var(--red-color)]'/>
					<div className='text-center flex flex-col items-center leading-7'>
						<span className='uppercase text-[1.1rem]'>Aproveite e</span>
						<strong className='uppercase text-[2rem] font-bold'>Compre junto</strong>
					</div>
					<Hr className='w-1/12 border-[var(--red-color)]'/>
				</div>
			</Section.Content>
			<div className="flex gap-5 items-center m-auto mt-10 mb-20 w-[80%] box-border">
				{[1, 2, 3, 4, 5 ].map(() => (
					<PublicityCardV3 />
				))}
			</div>
			<Section.Content>
				<div className='mt-36 mb-36'>
					<h1 className='m-auto text-center text-3xl font-bold mb-10 w-1/2'>
						Dê um upgrate no seu PC Gamer com os acessórios ShopInfo
					</h1>
					<Categories categories={spreed_categories} />
				</div>
			</Section.Content>
			<img src="../assets/img/exclusivo-neologic-banner-topo.webp"/>
			<div className='text-center flex flex-col justify-start items-center mt-10'>
				<h2 className='text-3xl font-bold mb-5'>Busque a vitória</h2>
				<p className='w-1/2 font-bold text-xl'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi similique, alias adipisci ex tempora ipsum debitis aut sunt doloremque obcaecati saepe at animi accusantium commodi id laudantium beatae dolore modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquid laborum porro ea alias odio, cum, veritatis natus eum esse iusto consectetur voluptatibus quaerat quia molestias adipisci sequi facilis velit.
				</p>
				<img src="../assets/img/esport-box-maquinas.png"/>
				<div className='flex justify-center mb-24 items-start gap-16 mt-[-70px]'>
					<figure className='flex flex-col gap-4 justify-center items-center'>
						<Image src="/assets/img/footer1.png" alt="image" height={150} width={150}/>
						<figcaption className='w-[160px]'>
							<h1 className='uppercase text-[1.3rem] text-center font-bold'>Pronto pra</h1>
							<h2 className='uppercase text-[1.3rem] text-[var(--red-text-color)] text-center font-bold'>Jogar</h2>

							<p className='text-start'>
								O Pc Gamer Neologic Start é #GameReady, ja vem montado e pronto pra jogar.
							</p>
						</figcaption>
					</figure>
					<figure className='flex flex-col gap-4 justify-center items-center'>
						<Image src="/assets/img/footer2.png" alt="image" height={150} width={150}/>
						<figcaption className='w-[160px]'>
							<h1 className='uppercase text-[1.3rem] text-center font-bold'>O Melhor de</h1>
							<h2 className='uppercase text-[1.3rem] text-[var(--red-text-color)] text-center font-bold'>tudo</h2>

							<p className='text-start'>
								Oferecemos o melhor Hardware do mercado. Todos os produtos são de alta qualidade e última geração.
							</p>
						</figcaption>
					</figure>
					<figure className='flex flex-col gap-4 justify-center items-center'>
						<Image src="/assets/img/footer3.png" alt="image" height={150} width={150}/>
						<figcaption className='w-[160px]'>
							<h1 className='uppercase text-[1.3rem] text-center font-bold'>Garantia de</h1>
							<h2 className='uppercase text-[1.3rem] text-[var(--red-text-color)] text-center font-bold'>1 ano</h2>

							<p className='text-start'>
								Todos os computadores Neologic possuem  garantia de 12 meses e todo o suporte necessário.
							</p>
						</figcaption>
					</figure>
				</div>
			</div>
		</Section.Root>
    </>
  )
}