import React from 'react'
import { BsSearch } from "react-icons/bs";

interface CardFiltroProps{
label: string
options: React.ReactNode
}

export const CardFiltro:React.FC<CardFiltroProps> =
({label,options}:CardFiltroProps)=>{
return(
<>
<div className='w-[100%] mt-[10px]'> 
<div className='w-[100%] h-[150px] flex flex-col items-center p-2 bg-zinc-800'>
     <div className='w-[100%] h-[80%] flex justify-between'>
       <p className='uppercase'>{label}</p>
       <p>{'>'}</p>
     </div>
     <div className='w-[100%] flex justify-between items-center'>
       <input className='w-[80%]' placeholder='Procure por nome ou descricao'/>
       <button><BsSearch/></button>
     </div>
</div>

     <div className='flex flex-col'>  
        {options}
     </div>
         
</div>
</>
)
}