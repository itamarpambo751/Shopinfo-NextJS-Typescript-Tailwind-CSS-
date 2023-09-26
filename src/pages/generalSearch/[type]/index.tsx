import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import { Banner, Hr,Categories, IconButton, PublicityCard, PublicityLabel, Section, Header } from '@/components/_ui';
import { Card } from '@/cards';
import { product } from '@/pages/api/data';
import { marca } from '@/pages/api/data';


export default function SearchProductAll(){
	const router = useRouter();
	const { type } = router.query;
	const typeItems = typeof type === 'string' ? type : '';
    let divisao:string[]
    const [Types, setTypes] = useState<any>([])
    const [products, setProducts] = useState<product>(()=>{
      return product
   })


useEffect(() => {

   setTypes(products.filter((i)=>i.name.toLowerCase().startsWith(type.toString().toLocaleLowerCase() || i.name.toLowerCase().startsWith(type.toString().toLocaleLowerCase()
   ))))
   
  },[products]); 

  console.log(Types)

  return (
<>
    <Header />
{
  Types[0]===undefined?
<div></div>
    //router.back()

  :
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
}


    <main className='flex justify-between w-[100%] mt-[10px]'>


<div className='w-[18%]'>
{
  Types[0]===undefined?
  <div className='w-full flex items-center justify-center text-[30px] font-bold'>
   


  </div>:
  <Card.CardFiltro label='marcas'
    
    options={
      marca.map((i)=>
      (<Card.CheckListCard key={i.id} item={i.toString()} />))
    }
    
    />
 }
 
 

</div>


<div className='w-[80%] flex flex-col'>
<div className='w-[100%] p-2 grid grid-cols-4 gap-4 max-md:flex max-md:flex-wrap max-md:gap-[4px]'>
{
  Types[0]===undefined?
  <div className='w-full flex items-center justify-center text-[30px] font-bold'>
   

  </div>:
    Types.map((i)=>
    (<Card.NormalCard key={i.id} imglLink={i.img} id={i.id.toString()} name={i.name} price={i.price} desconto={i.desconto}  />))
}
      
</div>
{
  Types[0]===undefined?
  <div className='w-full flex items-center justify-center text-[30px] font-bold'>

  </div>:<div className='w-[100%] flex items-center justify-center mt-[20px] h-[300px]'>
       <PublicityLabel.Root expires={true}>
               <PublicityLabel.Content extrabold={true} bigText="Carregar mais produtos" bold/>
      </PublicityLabel.Root>
</div>
}

</div>

</main>
</>
  )
}