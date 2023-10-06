import { Shopinfo } from "@/components";
import { Banner, Categories, Header, InterTripleNavigation, PublicityCard, PublicityLabel, Section, Settings } from "@/components/_ui";
import { ArrowRight } from "phosphor-react";
import { BsFire } from "react-icons/bs";
import { categories } from "@/pages/api/data"
import React, { useEffect,useState } from "react"
import { Card } from '@/cards';
import {product} from '@/pages/api/data'
import {marca} from '@/pages/api/data'
import FormAdd from "@/components/Adm/FormAdd";

export const metadata = {
  title: 'amd'
}
export default function amd(){
 
    const [filterProduct, setFilterProduct] = useState('');
    const [Types, setTypes] = useState<any>([])
    const [products, setProducts] = useState<product>(()=>{
      return product
   })


  useEffect(() => {
    if(filterProduct=="")
   setTypes(products)
  },[]); 
  


  return (<>
  <FormAdd />
  <header className="bg-zinc-800 sticky z-[999] text-white flex justify-between h-[20%] items-center px-[2rem] ">
    <div className="flex items-center justify-between">
        <img src="./assets/img/1(7).png" className="w-[50px]" />
        <div>
            <p>Druzil poul</p>
            <p className="text-[8px]">administradr</p>
        </div>
    </div>

    <main className="w-[40%] flex items-center justify-end">
        <button className="bg-[var(--first-color)] rounded p-2">Adicionar</button>
    </main>
 </header>

<section className="flex p-2 items-center justify-between sticky">
    <div className="w-[20%]">
        <p>menu</p>
    </div>
    <div className="w-[40%] flex justify-around items-center ">
        <button className="bg-[var(--first-color)] rounded p-2">todos</button>
        <button className="bg-[var(--first-color)] rounded p-2">pc gamers</button>
        <button className="bg-[var(--first-color)] rounded p-2">processadores</button> 
        <button className="bg-[var(--first-color)] rounded p-2">coolers</button>
    </div>
</section>
 <main className='px-3 flex justify-center w-[100%] mt-[10px] w-screen h-[80%] overflow-scroll'>

<div className='w-[90%] flex flex-col'>
<div className='w-[100%] p-2 grid grid-cols-4 gap-4'>
{
    Types.map((i)=>
    (<Card.SuperCard key={i.id} imgLink={i.img} id={i.id.toString()} name={i.name} price={i.price} desconto={i.desconto}  />))
}
    
    
</div>
</div>
</main>






  
  </>)
}