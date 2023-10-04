import React from 'react';

import { Categories, Hr, IconButton, PublicityCard, PublicityLabel, Section } from '@/components/_ui';
import { BsCart4, BsEmojiDizzyFill, BsStar, BsStarFill } from 'react-icons/bs';
import { computerSettings, spreed_categories } from '@/pages/api/data';
import { RootingComputer } from '@/components/pc-gamer';
import { GoogleLogo, Star } from 'phosphor-react';
import { Caret } from '@/components/_ui/Caret';

export default function page() {
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
				<div className='mt-32'>
					<Section.Content>
						<h1 className='text-6xl font-bold'>Especificações</h1>
						<div className='flex gap-4 mt-8'>
							<div className='flex-1 flex flex-wrap gap-4'>
								{computerSettings.slice(0, 8).map((setting, i) => (
										<div key={i} className='border w-[221px] h-[180px] border-[var(--border-color-2)] rounded-md flex flex-col justify-center items-center py-10'>
											<img src="../assets/icons/4a.png" className='w-[50px] h-[50px] mb-3'/>
											<span className='uppercase text-[.75rem] text-[var(--border-color)]'>{setting.settingName}</span>
											<p className='text-[.9rem] mt-1'>
												{setting.settingDescription}
											</p>
										</div>
									))}
									<div className='relative border w-[221px] h-[180px] border-[var(--border-color-2)] rounded-md flex flex-col justify-center items-center py-10'>
										<img src="../assets/img/pcmontado.png" className='absolute w-full h-full object-cover'/>
									</div>
							</div>

							<div className='w-[42%] h-full'>
								<ul className='w-full text-center'>
									{computerSettings.map((setting, index) => (
										<li
											key={index}
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
				<br /><br /><br />
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
								<PublicityCard.Root className='p-4 w-[225px]' id="1" resize>
									<div>
										<PublicityLabel.Root>
											<PublicityLabel.Content bigText="-18%"/>
										</PublicityLabel.Root>
									</div>
									<div className='mt-[-30px]'>
										<PublicityCard.Image url="../assets/img/1(7).png"/>
									</div>
									<PublicityCard.Content.Root>
										<br />
										<PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" className='text-sm' subtring={28} noBold/>
										<PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
										<br />
										<div className='flex justify-center items-center'>
											<PublicityCard.Content.Stars value={28} left/>
										</div>
									</PublicityCard.Content.Root>
								</PublicityCard.Root>
								<PublicityCard.Root className='p-4 w-[225px]' id="2" resize>
									<div>
										<PublicityLabel.Root>
											<PublicityLabel.Content bigText="-18%"/>
										</PublicityLabel.Root>
									</div>
									<div className='mt-[-30px]'>
										<PublicityCard.Image url="../assets/img/3.png"/>
									</div>
									<PublicityCard.Content.Root>
										<br />
										<PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" className='text-sm' subtring={28} noBold/>
										<PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
										<br />
										<div className='flex justify-center items-center'>
											<PublicityCard.Content.Stars value={28} left/>
										</div>
									</PublicityCard.Content.Root>
								</PublicityCard.Root>
								<PublicityCard.Root className='p-4 w-[225px]' id="3" resize>
									<div>
										<PublicityLabel.Root>
											<PublicityLabel.Content bigText="-18%"/>
										</PublicityLabel.Root>
									</div>
									<div className='mt-[-30px]'>
										<PublicityCard.Image url="../assets/img/1(18).png"/>
									</div>
									<PublicityCard.Content.Root>
										<br />
										<PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" className='text-sm' subtring={28} noBold/>
										<PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
										<br />
										<div className='flex justify-center items-center'>
											<PublicityCard.Content.Stars value={28} left/>
										</div>
									</PublicityCard.Content.Root>
								</PublicityCard.Root>
								<PublicityCard.Root className='p-4 w-[225px]' id="4" resize>
									<div>
										<PublicityLabel.Root>
											<PublicityLabel.Content bigText="-18%"/>
										</PublicityLabel.Root>
									</div>
									<div className='mt-[-30px]'>
										<PublicityCard.Image url="../assets/img/1(19).png"/>
									</div>
									<PublicityCard.Content.Root>
										<br />
										<PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" className='text-sm' subtring={28} noBold/>
										<PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
										<br />
										<div className='flex justify-center items-center'>
											<PublicityCard.Content.Stars value={28} left/>
										</div>
									</PublicityCard.Content.Root>
								</PublicityCard.Root>
								<PublicityCard.Root className='p-4 w-[225px]' id="5" resize>
									<div>
										<PublicityLabel.Root>
											<PublicityLabel.Content bigText="-18%"/>
										</PublicityLabel.Root>
									</div>
									<div className='mt-[-30px]'>
										<PublicityCard.Image url="../assets/img/1(3).png"/>
									</div>
									<PublicityCard.Content.Root>
										<br />
										<PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" className='text-sm' subtring={28} noBold/>
										<PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
										<br />
										<div className='flex justify-center items-center'>
											<PublicityCard.Content.Stars value={28} left/>
										</div>
									</PublicityCard.Content.Root>
								</PublicityCard.Root>
							</div>
				</Section.Content>
				<Section.Content>
							<div className='flex'>
								<div className='w-1/2 mt-10'>
									<h1 className='text-3xl font-bold'>Nossos Números</h1>
									<div className='mt-28'>
										<ul className='flex justify-start items-center gap-10'>
											<li className='text-center flex flex-col justify-center items-center gap-3'>
												<div className='w-[90px] h-[90px] border-[6px] border-[var(--red-text-color)] rounded-full flex justify-center items-center'>
													<strong className='text-3xl font-extrabold'>15k</strong>
												</div>
												<p className='w-[150px] leading-4'>+ de 15Mil PCs montados anualmente</p>
											</li>
											<li className='text-center flex flex-col justify-center items-center gap-3'>
												<div className='w-[90px] h-[90px] border-[6px] border-[var(--red-text-color)] rounded-full flex justify-center items-center'>
													<strong className='text-3xl font-extrabold'>9,0</strong>
												</div>
												<p className='w-[150px] leading-4'>Nota RA 1000 Reclame Aqui</p>
											</li>
											<li className='text-center flex flex-col justify-center items-center gap-3'>
												<div className='w-[90px] h-[90px] border-[6px] border-[var(--red-text-color)] rounded-full flex justify-center items-center'>
													<strong className='text-3xl font-extrabold'>15k</strong>
												</div>
												<p className='w-[150px] leading-4'>+ de 15Mil PCs montados anualmente</p>
											</li>
										</ul>
									</div>
								</div>
								<div className='w-1/2 mt-10'>
									<h1 className='text-3xl font-bold'>O que os nossos clientes dizem sobre Nós</h1>
									<div className='mt-14'>
										<ul className='flex gap-8 relative'>
											<Caret.Left/>
											<li className='bg-[#393939] h-[300px] w-[300px] p-6 global-apply-after-before space-y-5'>
												<div className='flex justify-start items-center gap-2'>
													<i className='text-2xl'><GoogleLogo /></i>
													<span>DFMP</span>
												</div>
												<p className='text-[.87rem] italic'>
													Precisei usar a garantia e fui directamente direccionada p autorizada... Todo o serviço mesmo C peças vindo da sede foi em menos de 10 dias. O suporte por Email do funcionário Matheus foi excepcional. A empresa está de parabéns!
												</p>
											</li>
											<li className='bg-[#393939] h-[300px] w-[300px] p-6 global-apply-after-before space-y-5'>
												<div className='flex justify-start items-center gap-2'>
													<i className='text-2xl'><GoogleLogo /></i>
													<i>Patricia P.</i>
												</div>
												<p className='text-[.87rem] italic'>
													Precisei usar a garantia e fui directamente direccionada p autorizada... Todo o serviço mesmo C peças vindo da sede foi em menos de 10 dias. O suporte por Email do funcionário Matheus foi excepcional. A empresa está de parabéns!
												</p>
											</li>
											<Caret.Right/>
										</ul>
									</div>
								</div>
							</div>
				</Section.Content>
				<Section.Content>
					<div className='mt-36'>
						<h1 className='text-3xl font-bold'>Pergunte e veja opiniões de quem já comprou</h1>

						<div className='p-10'>
								<div className='flex justify-start items-start gap-10'>
									<ul className='grid gap-2 grid-cols-3'>
										<li className='text-[var(--red-text-color)] text-[15px] pb-[10px] text-center cursor-pointer link-border-red relative'>Geral</li>
										<li className='text-[var(--red-text-color)] text-[15px] pb-[10px] text-center cursor-pointer link-border-red relative'>Avaliações</li>
										<li className='text-[var(--red-text-color)] text-[15px] pb-[10px] text-center cursor-pointer link-border-red relative'>Pergutas</li>
									</ul>
									<div className='flex justify-start items-center gap-1'>
										<span className='flex justify-center items-start gap-1'>
											<i className='text-[1.2rem] text-[var(--star-color)]'>
												<BsStarFill />
											</i>
											<i className='text-[1.2rem] text-[var(--star-color)]'>
												<BsStarFill />
											</i>
											<i className='text-[1.2rem] text-[var(--star-color)]'>
												<BsStarFill />
											</i>
											<i className='text-[1.2rem] text-[var(--star-color)]'>
												<BsStarFill />
											</i>
											<i className='text-[1.2rem] text-[var(--star-color)]'>
												<BsStarFill />
											</i>
										</span>
										<span className='text-[13px]'>234 avaliações</span>
									</div>
								</div>
								<div className='mt-16 grid grid-cols-2 gap-10'>
										<div className='space-y-3 text-center'>
											<div className='h-26'>
												<div className='flex justify-start items-center gap-1 mb-2'>
													<span className='flex justify-center items-start gap-1'>
														<i className='text-[1.2rem] text-[var(--star-color)]'>
															<BsStarFill />
														</i>
														<i className='text-[1.2rem] text-[var(--star-color)]'>
															<BsStarFill />
														</i>
														<i className='text-[1.2rem] text-[var(--star-color)]'>
															<BsStarFill />
														</i>
														<i className='text-[1.2rem] text-[var(--star-color)]'>
															<BsStarFill />
														</i>
														<i className='text-[1.2rem] text-[var(--star-color)]'>
															<BsStarFill />
														</i>
													</span>
													<span className='text-[13px]'>(234)</span>
												</div>
												<div className='flex gap-3'>
													<div className='leading-4'>
														<div className='flex justify-start items-center gap-1'>
															<span className='flex justify-center items-start gap-1'>
																<i className='text-[.6rem] text-[var(--star-color)]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem] text-[var(--star-color)]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem] text-[var(--star-color)]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem] text-[var(--star-color)]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem] text-[var(--star-color)]'>
																	<BsStarFill />
																</i>
															</span>
															<div className='h-[.4rem] w-20 bg-slate-300'/>
															<span className='text-[13px] text-slate-300'>(200)</span>
														</div>
														<div className='flex justify-start items-center gap-1'>
															<span className='flex justify-center items-start gap-1'>
																<i className='text-[.6rem] text-[var(--star-color)]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem] text-[var(--star-color)]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem] text-[var(--star-color)]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem] text-[var(--star-color)]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem]'>
																	<BsStarFill />
																</i>
															</span>
															<div className='h-[.4rem] w-20 bg-slate-300'/>
															<span className='text-[13px] text-slate-300'>(20)</span>
														</div>
														<div className='flex justify-start items-center gap-1'>
															<span className='flex justify-center items-start gap-1'>
																<i className='text-[.6rem] text-[var(--star-color)]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem] text-[var(--star-color)]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem] text-[var(--star-color)]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem]'>
																	<BsStarFill />
																</i>
															</span>
															<div className='h-[.4rem] w-20 bg-slate-300'/>
															<span className='text-[13px] text-slate-300'>(4)</span>
														</div>
														<div className='flex justify-start items-center gap-1'>
															<span className='flex justify-center items-start gap-1'>
																<i className='text-[.6rem] text-[var(--star-color)]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem] text-[var(--star-color)]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem]'>
																	<BsStarFill />
																</i>
															</span>
															<div className='h-[.4rem] w-20 bg-slate-300'/>
															<span className='text-[13px] text-slate-300'>(2)</span>
														</div>
														<div className='flex justify-start items-center gap-1'>
															<span className='flex justify-center items-start gap-1'>
																<i className='text-[.6rem] text-[var(--star-color)]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem]'>
																	<BsStarFill />
																</i>
																<i className='text-[.6rem]'>
																	<BsStarFill />
																</i>
															</span>
															<div className='h-[.4rem] w-20 bg-slate-300'/>
															<span className='text-[13px] text-slate-300'>(8)</span>
														</div>
													</div>
													<div className='flex-1 border border-[var(--border-color)] flex justify-center items-center'>
														<strong className='text-[1.1rem] font-bold uppercase'>Nota <span className='text-3xl text-[var(--whatsap-color)]'>4.7</span> de 5</strong>
													</div>
												</div>
											</div>
											<div className='relative h-40 border border-[var(--border-color)] rounded-lg p-3 flex justify-center items-center'>
												<span className='absolute top-0 left-2 text-5xl font-extrabold'>&quot;</span>
												<p className='text-left mt-10 px-4 font-extralight text-[15px] text-[silver]'>
													Superou as expectivas, processador bruto, para jogos que exigem muito do processador, vega7 superou... <button className='uppercase font-bold text-[var(--red-text-color)] mb-5'>Leia+</button>

													<span className='flex justify-start items-center gap-[.1rem]'>
														<i className='text-[.8rem] text-[var(--star-color)]'><BsStarFill/></i>
														<i className='text-[.8rem] text-[var(--star-color)]'><BsStarFill/></i>
														<i className='text-[.8rem] text-[var(--star-color)]'><BsStarFill/></i>
														<i className='text-[.8rem] text-[var(--star-color)]'><BsStarFill/></i>
														<i className='text-[.8rem] text-[var(--star-color)]'><BsStarFill/></i>
													</span>
												</p>
												<span className='absolute -bottom-4 right-2 text-5xl font-extrabold'>&quot;</span>
											</div>
											<p className='text-left text-[15px] mt-[-5px]'>
												33 pessoas acharam esta avaliação útil
											</p>
											<div className='grid grid-cols-2 gap-2'>
												<button className='rounded-sm uppercase text-[.8rem] font-extralight p-[.5rem] bg-[var(--red-text-color)]'>
													224 Avaliações
												</button>
												<button className='rounded-sm uppercase text-[.8rem] font-extralight p-[.5rem] bg-[var(--border-color)]'>
													10 Avaliações
												</button>
											</div>
											<br />
											<button className='cursor-pointer hover:text-[var(--red-text-color)]'>(veja todas as Avaliações)</button>
										</div>
										<div className='space-y-3'>
											<form className='w-full flex flex-col gap-1'>
												<textarea
													rows={2}
													placeholder='Ficou alguma dúvida sobre o produto? Pergunte aqui...'
													className='bg-transparent border p-4 rounded-md border-[var(--border-color)] placeholder:text-[var(--border-color)] outline-none text-[15px]'
												/>
												<button className='rounded-md uppercase text-[.8rem] font-extralight p-3 bg-[var(--red-text-color)]'>
													Enviar pergunta!
												</button>
											</form>
											<div className='w-full flex flex-col gap-1 text-center'>
												<div className='text-start border h-20 p-4 rounded-[.2rem] border-[var(--border-color)] text-[13px] flex justify-start items-center'>
													<p>
														Oi, qual Watercooler coloca? de quantos milimetros? <button className='uppercase font-bold text-[var(--red-text-color)]'>Leia+</button>
													</p>
												</div>
												<div className='text-start border h-20 p-4 rounded-[.2rem] border-[var(--border-color)] text-[13px] flex justify-start items-center'>
													<p>
														Como posso da um valor de entrada e parcela o resto?? <button className='uppercase font-bold text-[var(--red-text-color)]'>Leia+</button>
													</p>
												</div>
												<div className='text-start border h-20 p-4 rounded-[.2rem] border-[var(--border-color)] text-[13px] flex justify-start items-center'>
													<p>A perguta não é sobre o produto, mas, quero saber como faço para avaliá-lo? Não aparece a opção par
														a mim no site. <button className='uppercase font-bold text-[var(--red-text-color)]'>Leia+</button>
													</p>
												</div>
												<button className='mt-3 cursor-pointer hover:text-[var(--red-text-color)]'>(veja todas as perguntas)</button>
											</div>
										</div>
								</div>
						</div>
					</div>
					<div className='h-[200px]'/>
				</Section.Content>
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
								<PublicityCard.Root className='p-2 w-[225px]' id="1" resize>
									<div>
										<PublicityLabel.Root>
											<PublicityLabel.Content bigText="-18%"/>
										</PublicityLabel.Root>
									</div>
									<div className='mt-[-30px]'>
										<PublicityCard.Image url="../assets/img/1(7).png"/>
									</div>
									<PublicityCard.Content.Root>
										<br />
										<PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
										<br />
										<div className='flex justify-center items-center'>
											<PublicityCard.Content.Stars value={28} left/>
										</div>
										<PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" className='text-sm' subtring={28} noBold/>

										<button className='rounded-sm uppercase text-[.8rem] font-extralight p-[.5rem] bg-[var(--red-text-color)]'>
													224 Avaliações
												</button>
										</PublicityCard.Content.Root>
								</PublicityCard.Root>
								<PublicityCard.Root className='p-2 w-[225px]' id="2" resize>
									<div>
										<PublicityLabel.Root>
											<PublicityLabel.Content bigText="-18%"/>
										</PublicityLabel.Root>
									</div>
									<div className='mt-[-30px]'>
										<PublicityCard.Image url="../assets/img/3.png"/>
									</div>
									<PublicityCard.Content.Root>
										<br />
										<PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
										<br />
										<div className='flex justify-center items-center'>
											<PublicityCard.Content.Stars value={28} left/>
										</div>
										<PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" className='text-sm' subtring={28} noBold/>

										<button className='rounded-sm uppercase text-[.8rem] font-extralight p-[.5rem] bg-[var(--red-text-color)]'>
													224 Avaliações
												</button>

									</PublicityCard.Content.Root>
								</PublicityCard.Root>
								<PublicityCard.Root className='p-2 w-[225px]' id="3" resize>
									<div>
										<PublicityLabel.Root>
											<PublicityLabel.Content bigText="-18%"/>
										</PublicityLabel.Root>
									</div>
									<div className='mt-[-30px]'>
										<PublicityCard.Image url="../assets/img/1(18).png"/>
									</div>
									<PublicityCard.Content.Root>
										<br />
										<PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
										<br />
										<div className='flex justify-center items-center'>
											<PublicityCard.Content.Stars value={28} left/>
										</div>
										<PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" className='text-sm' subtring={28} noBold/>

										<button className='rounded-sm uppercase text-[.8rem] font-extralight p-[.5rem] bg-[var(--red-text-color)]'>
													224 Avaliações
												</button>

									</PublicityCard.Content.Root>
								</PublicityCard.Root>
								<PublicityCard.Root className='p-2 w-[225px]' id="4" resize>
									<div>
										<PublicityLabel.Root>
											<PublicityLabel.Content bigText="-18%"/>
										</PublicityLabel.Root>
									</div>
									<div className='mt-[-30px]'>
										<PublicityCard.Image url="../assets/img/1(19).png"/>
									</div>
									<PublicityCard.Content.Root>
										<br />
										<PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
										<br />
										<div className='flex justify-center items-center'>
											<PublicityCard.Content.Stars value={28} left/>
										</div>
										<PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" className='text-sm' subtring={28} noBold/>

										<button className='rounded-sm uppercase text-[.8rem] font-extralight p-[.5rem] bg-[var(--red-text-color)]'>
													224 Avaliações
												</button>

									</PublicityCard.Content.Root>
								</PublicityCard.Root>
								<PublicityCard.Root className='p-2 w-[225px]' id="5" resize>
									<div>
										<PublicityLabel.Root>
											<PublicityLabel.Content bigText="-18%"/>
										</PublicityLabel.Root>
									</div>
									<div className='mt-[-30px]'>
										<PublicityCard.Image url="../assets/img/1(3).png"/>
									</div>
									<PublicityCard.Content.Root>
										<br />
										<PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
										<br />
										<div className='flex justify-center items-center'>
											<PublicityCard.Content.Stars value={28} left/>
										</div>
										<PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" className='text-sm' subtring={28} noBold/>

										<button className='rounded-sm uppercase text-[.8rem] font-extralight p-[.5rem] bg-[var(--red-text-color)]'>
													224 Avaliações
												</button>

									</PublicityCard.Content.Root>
								</PublicityCard.Root>
							</div>
				</Section.Content>
				<Section.Content>
					<div className='mt-36 mb-36'>
						<h1 className='m-auto text-center text-3xl font-bold mb-10 w-1/2'>
							Dê um upgrate no seu PC Gamer com os acessórios ShopInfo
						</h1>
						<Categories categories={spreed_categories} />
					</div>
				</Section.Content>
				<div>
					<img src="../assets/img/exclusivo-neologic-banner-topo.webp"/>
				</div>
				<div>
					<h2>Busque a vitória</h2>

					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi similique, alias adipisci ex tempora ipsum debitis aut sunt doloremque obcaecati saepe at animi accusantium commodi id laudantium beatae dolore modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquid laborum porro ea alias odio, cum, veritatis natus eum esse iusto consectetur voluptatibus quaerat quia molestias adipisci sequi facilis velit.
					</p>
				</div>
				<div>
					<img src="../assets/img/esport-box-maquinas.png"/>
				</div>
			</Section.Root>
    </div>
  )
}