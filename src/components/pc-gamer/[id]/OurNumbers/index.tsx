import { Section } from "@/components/_ui"
import { Caret } from "@/components/_ui/Caret"
import { GoogleLogo } from "phosphor-react"

export const OurNumbers: React.FC = () => {
    return(
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
    )
}