import React from 'react';
import { Shopinfo } from "../../components";
import { Banner, Categories,Footer,Hr,InterTripleNavigation, PublicityCard, PublicityLabel, Section, Settings } from "../../components/_ui";
// import { ArrowRight } from "phosphor-react";
// import { BsFire } from "react-icons/bs";
import { categories } from "../api/data"

// import { Container } from './styles';

const Hardware =() => {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center'>
     <div className='w-[100%] flex items-center justify-center'>
     <Banner.Gradient.Root>
				<Banner.Image url="./assets/img/choose.webp"/>
				<div className='absolute top-0 left-0'>
					<Banner.Gradient.Container section='Home > Hardware'>
						<Banner.Gradient.Content
							title='Hardware'
							subtitle='A Nova era de PC Gamer chegou! Teste as suas Habilidades e jogue com um Neologic Gamer.'
							paraghraph='No mercado dos games há mais de 20 anos, a Shopinfo busca o melhor em termos de hardware e tecnologia para computadores. Com compromisso e'
							/>
					</Banner.Gradient.Container>
				</div>
      </Banner.Gradient.Root>
     </div>

   <div className='w-[80%] mt-[60px] flex items-center justify-between'>
        <Section.Content>
          <Settings />
        </Section.Content>
  </div>  
  <div className='w-[80%] flex flex-col items-center '>
    <div className='w-[100%] flex items-center justify-around'>
      <h1 className='text-[20px]'>Principais categorias</h1> <Hr className='w-[80%] bg-zinc-500' />
    </div>  

        <div className="w-[100%] mt-[10px] m-auto text-center flex flex-col gap-7">
          <Categories categories={categories}/>
       </div>

       <div className='w-[100%] flex justify-end items-center mt-[60px]'>
            <div className='w-[300px] p-2 h-[100px] border-[4px] border-zinc-500 flex flex-col justify-start items-center'>
              <p className='uppercase w-[100%]'>ordenar por:</p>
                <select className='w-[100%] border-none bg-transparent'>
                  <option>tudo</option>
                </select>
            </div>
       </div>
<main className='flex w-[100%]'>

<div className='w-[20%]'>
<div className='w-[100%] h-[150px] flex flex-col items-center p-2 bg-zinc-800'>
      <div className='w-[100%] h-[80%] flex justify-between'>
        <p>Marca</p>
        <p>{'>'}</p>
      </div>
      <div className='w-[100%] flex justify-between items-center'>
        <input className='w-[80%]' placeholder='Procure por nome ou descricao'/>
        <button>Se</button>
      </div>
</div>

      <div className='flex flex-col'>
          <div className='w-[100%] p-2  mt-[5px] flex items-center'>
            <div className='border-[2px] border-[red] bg-transparent w-[20px] h-[20px] flex items-center justify-center'>
            <input className='w-[100%] bg-[#111]' type='checkbox'/>
            </div>
            <p className='ml-[3px]'>AMD</p>
          </div>

          <div className='w-[100%] p-2  mt-[5px] flex items-center'>
            <div className='border-[2px] border-[red] bg-transparent w-[20px] h-[20px] flex items-center justify-center'>
            <input className='w-[100%] bg-[#111]' type='checkbox'/>
            </div>
            <p className='ml-[3px]'>AMD</p>
          </div>
          
          <div className='w-[100%] p-2  mt-[5px] flex items-center'>
            <div className='border-[2px] border-[red] bg-transparent w-[20px] h-[20px] flex items-center justify-center'>
            <input className='w-[100%] bg-[#111]' type='checkbox'/>
            </div>
            <p className='ml-[3px]'>AMD</p>
          </div>

      </div>
</div>

<div className='w-[80%] flex flex-col'>
<div className='w-[100%] p-2 grid grid-cols-4 gap-7'>
<PublicityCard.Root id="2" resize>
            <div className="flex justify-start items-center gap-2 mb-12">
              <PublicityLabel.Root>
                <PublicityLabel.Content bigText="-18%"/>
              </PublicityLabel.Root>
            </div>
            <PublicityCard.Image url="./assets/img/3.png"/>
            <PublicityCard.Content.Root>
             
              <br />
              <PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
            </PublicityCard.Content.Root>
            <Hr className='bg-[black] w-[95%]' />
            <div className="w-[100%] mt-8 text-center">
                <PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
            </div>
 </PublicityCard.Root>

 <PublicityCard.Root id="2" resize>
            <div className="flex justify-start items-center gap-2 mb-12">
              <PublicityLabel.Root>
                <PublicityLabel.Content bigText="-18%"/>
              </PublicityLabel.Root>
            </div>
            <PublicityCard.Image url="./assets/img/3.png"/>
            <PublicityCard.Content.Root>
             
              <br />
              <PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
              <PublicityCard.Content.Stars value={28} left/>
            </PublicityCard.Content.Root>
            <Hr className='bg-[black] w-[95%]' />
            <div className="w-[100%] mt-8 text-center">
                <PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
            </div>
 </PublicityCard.Root>

 <PublicityCard.Root id="2" resize>
            <div className="flex justify-start items-center gap-2 mb-12">
              <PublicityLabel.Root>
                <PublicityLabel.Content bigText="-18%"/>
              </PublicityLabel.Root>
            </div>
            <PublicityCard.Image url="./assets/img/3.png"/>
            <PublicityCard.Content.Root>
             
              <br />
              <PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
            </PublicityCard.Content.Root>
            <Hr className='bg-[black] w-[95%]' />
            <div className="w-[100%] mt-8 text-center">
                <PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
            </div>
 </PublicityCard.Root>

 <PublicityCard.Root id="2" resize>
            <div className="flex justify-start items-center gap-2 mb-12">
              <PublicityLabel.Root>
                <PublicityLabel.Content bigText="-18%"/>
              </PublicityLabel.Root>
            </div>
            <PublicityCard.Image url="./assets/img/3.png"/>
            <PublicityCard.Content.Root>
             
              <br />
              <PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
              <PublicityCard.Content.Stars value={28} left/>
            </PublicityCard.Content.Root>
            <Hr className='bg-[black] w-[95%]' />
            <div className="w-[100%] mt-8 text-center">
                <PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
            </div>
 </PublicityCard.Root>

 <PublicityCard.Root id="2" resize>
            <div className="flex justify-start items-center gap-2 mb-12">
              <PublicityLabel.Root>
                <PublicityLabel.Content bigText="-18%"/>
              </PublicityLabel.Root>
            </div>
            <PublicityCard.Image url="./assets/img/3.png"/>
            <PublicityCard.Content.Root>
             
              <br />
              <PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
              <PublicityCard.Content.Stars value={28} left/>
            </PublicityCard.Content.Root>
            <Hr className='bg-[black] w-[95%]' />
            <div className="w-[100%] mt-8 text-center">
                <PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
            </div>
 </PublicityCard.Root>

 <PublicityCard.Root id="2" resize>
            <div className="flex justify-start items-center gap-2 mb-12">
              <PublicityLabel.Root>
                <PublicityLabel.Content bigText="-18%"/>
              </PublicityLabel.Root>
            </div>
            <PublicityCard.Image url="./assets/img/3.png"/>
            <PublicityCard.Content.Root>
             
              <br />
              <PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
              <PublicityCard.Content.Stars value={28} left/>
            </PublicityCard.Content.Root>
            <Hr className='bg-[black] w-[95%]' />
            <div className="w-[100%] mt-8 text-center">
                <PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
            </div>
 </PublicityCard.Root>

 <PublicityCard.Root id="2" resize>
            <div className="flex justify-start items-center gap-2 mb-12">
              <PublicityLabel.Root>
                <PublicityLabel.Content bigText="-18%"/>
              </PublicityLabel.Root>
            </div>
            <PublicityCard.Image url="./assets/img/3.png"/>
            <PublicityCard.Content.Root>
             
              <br />
              <PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
              <PublicityCard.Content.Stars value={28} left/>
            </PublicityCard.Content.Root>
            <Hr className='bg-[black] w-[95%]' />
            <div className="w-[100%] mt-8 text-center">
                <PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
            </div>
 </PublicityCard.Root>

 <PublicityCard.Root id="2" resize>
            <div className="flex justify-start items-center gap-2 mb-12">
              <PublicityLabel.Root>
                <PublicityLabel.Content bigText="-18%"/>
              </PublicityLabel.Root>
            </div>
            <PublicityCard.Image url="./assets/img/3.png"/>
            <PublicityCard.Content.Root>
             
              <br />
              <PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
              <PublicityCard.Content.Stars value={28} left/>
            </PublicityCard.Content.Root>
            <Hr className='bg-[black] w-[95%]' />
            <div className="w-[100%] mt-8 text-center">
                <PublicityCard.Content.Product name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
            </div>
 </PublicityCard.Root>
 </div>
<div className='w-[100%] flex items-center justify-center mt-[20px]'>
        <PublicityLabel.Root expires>
                {/* <PublicityLabel.Icon icon={BsFire}/> */}
                <PublicityLabel.Content bigText="Carregar mais produtos" bold/>
       </PublicityLabel.Root>
</div>
</div>

</main>
  </div> 

    </div>
  )
}

export default Hardware;