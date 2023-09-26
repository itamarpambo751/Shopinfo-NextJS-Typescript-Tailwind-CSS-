import React,{useState, useEffect} from 'react';
import { Shopinfo } from "../../components";
import { Banner, Categories,Footer,Header,Hr,InterTripleNavigation, PublicityCard, PublicityLabel, Section, Settings } from "../../components/_ui";
import { ArrowRight } from "phosphor-react";
import { BsFire,BsSearch } from "react-icons/bs";
import { categories } from "../api/data"
import { Card } from '@/cards';
import {marca} from '@/pages/api/data'
import {product} from "@/pages/api/data"
// import { Container } from './styles';

function any(){

  const [Types, setTypes] = useState<any>([])
  const [products, setProducts] = useState<product>(()=>{
    return product
 })

useEffect(() => {

 setTypes(products.filter((i)=>i.tipo==='acessorio'))
 
},[products]); 

}

const page: React.FC = () => {
  return (
    <> 
    <Header />
    <div className='w-[100%] flex flex-col justify-center items-center'>
   
    <div className='w-[100%] flex items-center justify-center'>
      <Banner.Gradient.Root>
          <Banner.Image url="./assets/img/choosepc-gmer.webp"/>
          <div className='absolute top-0 left-0'>
            <Banner.Gradient.Container section='Home > Workstation'>
              <Banner.Gradient.Content
                title='workstation'
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
 <div className='w-[80%] flex flex-col mt-[30px] items-center '>
   <div className='w-[100%] flex items-center justify-around'>
     <h1 className='text-[20px]'>Principais categorias</h1> 
     <Hr className='w-[80%] border-[var(--shadow-color)]' />
   </div>  

       <div className="w-[100%] mt-[10px] h-[80px] m-auto text-center flex flex-col gap-7">
         <Categories categories={categories}/>
      </div>
<div className='flex items center  justify-between w-[100%]'>
  <div className='flex font-bold text-[13px] items-end'>
    <p>Filtro</p>
  </div>
   <div className='w-[100%] flex justify-end items-center mt-[60px]'>
           <div className='w-[250px] bg-[var(--shadow-color)] p-2 h-[80px] border-[1px] border-[var(--shadow-color)] flex flex-col justify-start items-center'>
             <p className='uppercase text-[14px] font-semibold w-[100%]'>ordenar por:</p>
               <select className='w-[100%] text-[#3e3e3e] border-none bg-transparent'>
                 <option>selecione</option>
               </select>
           </div>
      </div>
</div>
     
<main className='flex justify-between w-[100%] mt-[10px]'>


<div className='w-[18%]'>
 
<Card.CardFiltro label='marcas'
    
    options={
      marca.map((i)=>
      (<Card.CheckListCard  item={i.toString()} />))
    }
    
    />
 
 

</div>


<div className='w-[80%] flex flex-col'>
<div className='w-[100%] p-2 grid grid-cols-4 gap-4'>
{
    product.map((i)=>
    (<Card.NormalCard key={i.id} imglLink={i.img} id={i.id.toString()} name={i.name} price={i.price} desconto={i.desconto}  />))
}
    
    
    
</div>
<div className='w-[100%] flex items-center justify-center mt-[20px] h-[300px]'>
       <PublicityLabel.Root expires={true}>
               <PublicityLabel.Icon icon={BsFire}/>
               <PublicityLabel.Content bigText="Carregar mais produtos" bold/>
      </PublicityLabel.Root>
</div>
</div>

</main>
 </div> 

   </div>
   </>)
}

export default page;