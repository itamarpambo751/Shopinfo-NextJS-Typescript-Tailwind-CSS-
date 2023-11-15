import { Section } from "@/components/_ui"
import { GridStars } from "@/components/_ui/GridStars"
import { Star } from "@/components/_ui/Star"
import { BsHandThumbsDown, BsHandThumbsUp, BsStarFill } from "react-icons/bs"

export const Avaliations: React.FC = () => {
    return(
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
                                        {[1, 2, 3, 4, 5].map((s, i) => <Star key={i}/>)}
									</span>
								    <span className='text-[13px]'>(234)</span>
								</div>
								<div className='flex gap-3'>
									<div className='leading-4'>
										<GridStars fill={5} quant={200}/>
                                        <GridStars fill={4} quant={20}/>
                                        <GridStars fill={3} quant={4}/>
                                        <GridStars fill={2} quant={2}/>
                                        <GridStars fill={1} quant={8}/>
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
                                        {[1, 2, 3, 4, 5].map((s, i) => <Star key={i}/>)}
                                    </span>
							    </p>
								<span className='absolute -bottom-4 right-2 text-5xl font-extrabold'>&quot;</span>
							</div>
							<p className='text-left text-[15px] mt-[-5px]'>
								33 pessoas acharam esta avaliação útil
							</p>
							<div className='grid grid-cols-2 gap-2'>
								<button className='flex gap-2 justify-center items-center rounded-sm uppercase text-[.8rem] font-extralight p-[.5rem] bg-[var(--red-text-color)]'>
                                    <span>
									    224 Avaliações
                                    </span>

                                    <i className="text-xl">
                                        <BsHandThumbsUp />
                                    </i>
								</button>
								<button className='flex gap-2 justify-center items-center rounded-sm uppercase text-[.8rem] font-extralight p-[.5rem] bg-[var(--border-color)]'>
                                    <span>
									    10 Avaliações
                                    </span>

                                    <i className="text-xl">
                                        <BsHandThumbsDown />
                                    </i>
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
								<button className='mt-3 cursor-pointer hover:text-[var(--red-text-color)]'>
                                    (veja todas as perguntas)
                                </button>
							</div>
						</div>
				    </div>
				</div>
			</div>
			<div className='h-[200px]'/>
		</Section.Content>
    )
}