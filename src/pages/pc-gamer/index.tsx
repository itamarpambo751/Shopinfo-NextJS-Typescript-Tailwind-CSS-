import { Banner, Categories, Hr, Section, Settings } from '@/components/_ui';
import React from 'react';
import { categories } from '../api/data';

export default ():React.JSX.Element => {
  return (
    <div>
      <Banner.Gradient.Root>
				<Banner.Image url="./assets/img/choosepc-gmer.webp"/>
				<div className='absolute top-0 left-0'>
					<Banner.Gradient.Container section='Home > Computadores Gamer'>
						<Banner.Gradient.Content
							title='PC Gamer'
							subtitle='A Nova era de PC Gamer chegou! Teste as suas Habilidades e jogue com um Neologic Gamer.'
							paraghraph='No mercado dos games há mais de 20 anos, a Shopinfo busca o melhor em termos de hardware e tecnologia para computadores. Com compromisso e'
						/>
					</Banner.Gradient.Container>
				</div>
      </Banner.Gradient.Root>
      <Section.Root>
        <div className='mt-[-70px]'>
          <Section.Content>
            <Settings />
            <div className='flex justify-start items-center gap-5 mt-10'>
              <h1 className='text-[24px]'>Principais Categorias</h1>
              <Hr className='w-[65%]'/>
            </div>
            <div className='mt-5'/>
            <Categories categories={categories}/>
          </Section.Content>
        </div>
      </Section.Root>

      <section className='h-[1000px]'></section>
    </div>
  )
}