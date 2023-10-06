import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card } from '@/cards';
import {  PublicityLabel, Header } from '../../../components/_ui';
import { LateralMenuComplit } from '@/cards/LateralMenuComplit';
import { useProductsContext } from '@/context/ProdutsContext/ProductContext';
import { Products } from "@/Types/GloballTypes";
 
const Page:React.FC=()=>{
     const router = useRouter(); 
     const AllProducts =useProductsContext()
     const { type } = router.query;
     const typeItems = typeof type === 'string' ? type : '';
       const [Types, setTypes] = useState<Products[]|undefined>()
       const [searC,setSearC]=useState<string>(typeItems)
       const [products, setProducts] = useState<Products[]|undefined>(AllProducts?.products)
       const [filterProduct, setFilterProduct] = useState<string>('');
       const valeuSearchFilter = (value: string) => {
        setFilterProduct(value)
      };
      useEffect(() => {
     if(filterProduct!=="")setTypes(products?.filter((i)=>i.marca.toLowerCase().startsWith(filterProduct.toLocaleLowerCase())))
      },[filterProduct]); 

useEffect(() => {
   setTypes(products?.filter((i)=>i.tipo.toLocaleLowerCase()===typeItems.toLocaleLowerCase()||i.category.toLocaleLowerCase()===typeItems.toLocaleLowerCase()))
  },[products]); 

  return (
<>
    <Header />
{
  Types?.[0]===undefined?
  <div className='w-full p-10 flex items-center justify-center text-[30px] font-bold'>
   
    <p>Ops!...Items Nao Encontrados!</p>

  </div>:
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
  Types?.[0]===undefined?
  <div className='w-full flex items-center justify-center text-[30px] font-bold'>
   


  </div>:
  <LateralMenuComplit searchPC={false} onInputvalue={valeuSearchFilter} />
 }
 
 

</div>


<div className='w-[80%] flex flex-col'>
<div className='w-[100%] p-2 grid grid-cols-4 gap-4 max-md:flex max-md:flex-wrap max-md:gap-[4px]'>
{
  Types?.[0]===undefined?
  <div className='w-full flex items-center justify-center text-[30px] font-bold'>
   

  </div>:
    Types?.map((i)=>
    (<Card.NormalCard key={i.id} imglLink={i.img} id={i.id.toString()} name={i.name} price={i.price} desconto={i.desconto}  />))
}
      
</div>
{
  Types?.[0]===undefined?
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