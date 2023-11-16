import { Section } from "@/components/_ui"
import { computerSettings } from "@/pages/api/data"

export const Specifications: React.FC = () => {
    return(
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
									<span className='text-[var(--border-color)] text-left'>
										{setting.settingName}
									</span>
									<span className='text-left'>
										{setting.settingDescription}
									</span>
								</li>
							))}
							<br />
							<span className='text-[var(--red-color)] text-[1.2rem] underline cursor-pointer hover:text-[var(--red-text-color)]'>Quero saber mais</span>
						</ul>
					</div>
				</div>
			</Section.Content>
		</div>
    )
}