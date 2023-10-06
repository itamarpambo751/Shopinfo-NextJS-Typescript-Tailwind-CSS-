import React from 'react'
import { BsSearch } from "react-icons/bs";

interface CardFiltroProps{
label: string
options: React.ReactNode
onInputvalue: (value: string) => void;
}

export const CardFiltro:React.FC<CardFiltroProps> =
({label,options,onInputvalue}:CardFiltroProps)=>{

const [inputValue, setInputValue] = React.useState('');
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const newValue = event.target.value;
  setInputValue(newValue);
  onInputvalue(newValue);
};


return(
<>
<div className='w-[100%] h-[300px] mt-[10px] border-r-[1px] border-r-[rgb(0,0,0,0.1)]'> 
<div className='w-[100%] h-[40%] flex flex-col items-center p-2 bg-[rgb(0,0,0,0.1)]'>
     <div className='w-[100%] h-[80%] flex justify-between'>
       <p className='uppercase font-semibold'>{label}</p>
       <p className='uppercase font-semibold'>{'>'}</p>
     </div>
     <div className='w-[100%] flex justify-between items-center'>
       <input className='w-[80%]'
        onChange={handleInputChange}
       placeholder='Procure por nome ou descricao'/>
       <button><BsSearch/></button>
     </div>
</div>

     <div className='flex flex-col overflow-y-scroll h-[60%]'>  
        {options}
     </div>
         
</div>
</>
)
}

